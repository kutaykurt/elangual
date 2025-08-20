import React, { useState, useId } from "react";

/**
 * Explain
 * - Desktop: Inhalt inline sichtbar (.exp-inline)
 * - Mobile: Lead + „Açıklamayı oku“ als Trigger, öffnet Modal
 *
 * Props:
 *  - title: string (Pflicht)
 *  - lead?: string (kurzer Satz vor dem Trigger)
 *  - triggerLabel?: string (Default: "Açıklamayı oku")
 */
export default function Explain({
  title,
  lead,
  triggerLabel = "Açıklamayı oku",
  children,
}) {
  const [open, setOpen] = useState(false);
  const dialogId = useId();

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal();
    }
  };

  return (
    <>
      {/* Inline-Version (wird auf Mobile via CSS ausgeblendet) */}
      <div className="exp-inline">
        <div className="exp-head">
          <div className="exp-title">{title}</div>
        </div>
        <div className="exp-body">{children}</div>
      </div>

      {/* Mobile Trigger + optional Lead */}
      {lead && <div className="exp-lead">{lead}</div>}
      <span
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-controls={dialogId}
        aria-expanded={open ? "true" : "false"}
        className="exp-trigger"
        onClick={openModal}
        onKeyDown={onKey}
      >
        <strong>{triggerLabel}</strong>
      </span>

      {/* Modal (nur auf Mobile sichtbar, via CSS gesteuert) */}
      <div
        id={dialogId}
        className={`exp-modal ${open ? "show" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="exp-dialog">
          <div className="exp-head">
            <div className="exp-title">{title}</div>
            <button
              className="exp-close"
              onClick={closeModal}
              aria-label="Kapat"
            >
              ×
            </button>
          </div>
          <div className="exp-body">{children}</div>
        </div>
      </div>
    </>
  );
}
