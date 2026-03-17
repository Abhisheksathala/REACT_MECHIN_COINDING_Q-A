import React from 'react';

const Pagenation = ({ currentpage, totalpages = 10, onpagechnage }) => {
  function genratepagenumber() {
    const pages = [];
    for (let i = 1; i <= totalpages; i++) {
      pages.push(i);
    }
    return pages;
  }

  return (
    <div className="h-[20vh] w-screen bg-red-600 p-10 ">
      <div className="flex gap-3">
        <button
          disabled={currentpage === 1}
          onClick={() => {
            onpagechnage(currentpage - 1);
          }}
        >
          prev
        </button>
        {genratepagenumber().map((pageNo) => {
          return (
            <>
              <button
                key={pageNo}
                onClick={() => {
                  onpagechnage(pageNo);
                }}
              >
                {pageNo}
              </button>
            </>
          );
        })}
        <button
          onClick={() => {
            onpagechnage(currentpage + 1);
          }}
          disabled={currentpage === totalpages}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagenation;
