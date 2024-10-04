import React from 'react';

function Navigation({ onNext, onPrev, currentPage, totalPages }) {
  return (
    <div className="flex justify-between gap-16 mt-4">
      <button
        className={`btn btn-primary ${currentPage === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={onPrev}
        disabled={currentPage === 0}
        aria-label="Previous page"
      >
        Previous
      </button>
      <button
        className={`btn btn-secondary ${currentPage === totalPages - 1 ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
}

export default Navigation;
