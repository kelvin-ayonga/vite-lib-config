# px-react-copy-to-clipboard-hook

A small React hook for copying text to the clipboard with status and error handling.

## Install

```bash
npm install px-react-copy-to-clipboard-hook
```

```bash
yarn add px-react-copy-to-clipboard-hook
```

## Usage

```tsx
import { useCopyToClipboard } from "px-react-copy-to-clipboard-hook";

export function Example() {
  const { isCopied, error, handleCopy } = useCopyToClipboard();

  const onCopy = async () => {
    await handleCopy("Hello from the clipboard hook!");
  };

  return (
    <div>
      <button type="button" onClick={onCopy}>
        Copy text
      </button>
      {isCopied && <p>Copied!</p>}
      {error && <p>Failed to copy.</p>}
    </div>
  );
}
```

## API

### `useCopyToClipboard()`

Returns the following values:

- `isCopied`: `boolean` indicating whether the last copy succeeded.
- `error`: `Error | null` for the last copy failure.
- `handleCopy(text: string): Promise<void>` triggers the clipboard write.
- `setIsCopied(isCopied: boolean): void` allows manual reset of the copied state.

## Notes

- `navigator.clipboard` requires a secure context (HTTPS or localhost).
- This hook triggers alert messages on success and failure; remove or replace those in `src/useCopyToClipboard.ts` if you prefer custom UI.
