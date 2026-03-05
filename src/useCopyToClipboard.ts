import { useState } from 'react';
import { UseCopyToClipboardResult } from './types';

const useCopyToClipboard = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const copyTextToClipboard = async (text: string) => {
    return await navigator?.clipboard?.writeText(text);
  };

  const handleCopy = (text: string) => {
    return copyTextToClipboard(text)
      .then(() => {
        setIsCopied(true);
        alert('Text copied to clipboard!');
        // Show success toast notification
      })
      .catch((err) => {
        setError(err);
        setIsCopied(false);
        // Show error toast notification
        alert('Failed to copy text to clipboard. Please try again.');
        console.error(err);
      });
  };

  return {
    isCopied,
    error,
    handleCopy,
    setIsCopied,
  } as UseCopyToClipboardResult;
};

export { useCopyToClipboard };
