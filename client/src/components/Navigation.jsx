import React from 'react';

function Navigation({ onNext, onPrev, currentPage, totalPages }) {
  return (
    <div className="flex justify-between gap-[80vw] mt-4 mb-5">
      <button
        className={`btn btn-secondary bg-green-400 hover:bg-green-500 border-0 ${currentPage === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={onPrev}
        disabled={currentPage === 0}
        aria-label="Previous page"
      >
        Previous
      </button>
      <button
        className={`btn btn-secondary bg-sky-400 hover:bg-sky-500 border-0 ${currentPage === totalPages - 1 ? 'cursor-not-allowed opacity-50' : ''}`}
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
