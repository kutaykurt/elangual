import React from "react";
import "./pagination.scss";

export default function Pagination({ page, total, onPrev, onNext }) {
  return (
    <div className="pagination">
      <button onClick={onPrev} disabled={page <= 1}>
        Previous
      </button>
      <span>
        Page {page} of {total}
      </span>
      <button onClick={onNext} disabled={page >= total}>
        Next
      </button>
    </div>
  );
}
