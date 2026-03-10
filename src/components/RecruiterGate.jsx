import { useState } from 'react';

export function RecruiterGate({ onUnlock, status, errorMsg }) {
  const [passphrase, setPassphrase] = useState('');
  const isLoading = status === 'loading';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passphrase.trim()) return;
    await onUnlock(passphrase);
  };

  return (
    <div className="recruiter-gate">
      <p>Not everything makes the public feed. If you know, you know; or just ask.</p>
      <form onSubmit={handleSubmit} className="gate-form">
        <input
          type="password"
          placeholder="••••••••"
          value={passphrase}
          onChange={e => setPassphrase(e.target.value)}
          disabled={isLoading}
          autoComplete="off"
          className="gate-input"
        />
        <button
          type="submit"
          disabled={isLoading || !passphrase.trim()}
          className="gate-button"
        >
          {isLoading ? '...' : '→'}
        </button>
      </form>
      {errorMsg && (
        <p className="gate-error" role="alert">not quite</p>
      )}
    </div>
  );
}