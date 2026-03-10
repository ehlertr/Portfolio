import { useState, useEffect, useCallback } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';
const TOKEN_KEY = 'portfolio_recruiter_token';
const EXPIRY_KEY = 'portfolio_recruiter_expiry';

export function useRecruiterAuth() {
  const [token, setToken]             = useState(null);
  const [privateProjects, setPrivate] = useState([]);
  const [publicProjects, setPublic]   = useState([]);
  const [status, setStatus]           = useState('idle');
  const [errorMsg, setErrorMsg]       = useState('');

  // ── Auto-login from ?code= URL param ─────────────────
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      // Clean the URL so the code isn't visible after auth
      window.history.replaceState({}, '', window.location.pathname);
      login(code);
    }
  }, []);

  // ── Restore session from sessionStorage on mount ──────
  useEffect(() => {
    const stored = sessionStorage.getItem(TOKEN_KEY);
    const expiry = sessionStorage.getItem(EXPIRY_KEY);
    if (stored && expiry && Date.now() < Number(expiry)) {
      setToken(stored);
    }
  }, []);

  // ── Fetch public projects on mount ────────────────────
  useEffect(() => {
    fetch(`${API_BASE}/api/projects/public`)
      .then(r => r.json())
      .then(setPublic)
      .catch(() => setPublic([]));
  }, []);

  // ── Fetch private projects whenever token changes ─────
  useEffect(() => {
    if (!token) return;
    fetch(`${API_BASE}/api/projects/private`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(r => {
        if (!r.ok) throw new Error('Token rejected');
        return r.json();
      })
      .then(data => {
        setPrivate(data);
        setStatus('success');
      })
      .catch(() => {
        logout();
        setStatus('error');
        setErrorMsg('Session expired. Please enter the passphrase again.');
      });
  }, [token]);

  // ── Login ─────────────────────────────────────────────
  const login = useCallback(async (passphrase) => {
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch(`${API_BASE}/api/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passphrase }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus('error');
        setErrorMsg('Incorrect passphrase.');
        return false;
      }
      const expiry = Date.now() + data.expiresIn * 1000;
      sessionStorage.setItem(TOKEN_KEY, data.token);
      sessionStorage.setItem(EXPIRY_KEY, String(expiry));
      setToken(data.token);
      return true;
    } catch {
      setStatus('error');
      setErrorMsg('Could not reach the server. Try again shortly.');
      return false;
    }
  }, []);

  // ── Logout ────────────────────────────────────────────
  const logout = useCallback(() => {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(EXPIRY_KEY);
    setToken(null);
    setPrivate([]);
    setStatus('idle');
  }, []);

  return {
    isAuthenticated: !!token,
    publicProjects,
    privateProjects,
    status,
    errorMsg,
    login,
    logout,
  };
}