export interface UseCopyToClipboardResult {
  isCopied: boolean;
  error: Error | null;
  handleCopy: (text: string) => Promise<void>;
  setIsCopied: (isCopied: boolean) => void;
}
