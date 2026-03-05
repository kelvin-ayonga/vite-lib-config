import { useCopyToClipboard } from 'vite-lib-config';

export function App() {
  const { isCopied, handleCopy } = useCopyToClipboard();

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>useCopyToClipboard Demo</h1>
      <p>Is Copied: {isCopied.toString()}</p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button type='button' onClick={() => handleCopy('Hello, world!')}>
          Copy Text
        </button>
      </div>
    </main>
  );
}
