import React, { useState } from 'react';

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (content) => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch (error) {
      setIsCopied(false);
    }
  };

  return { isCopied, copyToClipboard };
};
