"use client";

import { useEffect, useRef } from "react";

export default function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog ref={dialogRef} className="modal ">
      <div className="modal-box border">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        </form>

        <h3 className="font-bold text-lg">{title}</h3>
        <div className="py-4">{children}</div>
      </div>
    </dialog>
  );
}