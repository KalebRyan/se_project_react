import { useEffect } from "react";
// import { handleModalClose } from "../utils/utils";

export function useEscape(closeModal) {
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
