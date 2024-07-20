import { useEffect } from "react";

export function useEscape(closeModal, handleModalClose) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleModalClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeModal]);
}
