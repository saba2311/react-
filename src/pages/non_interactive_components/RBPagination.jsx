import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

function RBPagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5;

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="component-page">
      <h1 className="component-title">Pagination</h1>

      <div className="pagination-section">
        <Pagination>
          {/* First */}

          <Pagination.First
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
          />

          {/* Previous */}

          <Pagination.Prev
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          />

          {/* Page Numbers */}

          {[1, 2, 3, 4, 5].map((page) => (
            <Pagination.Item
              key={page}
              active={currentPage === page}
              onClick={() => goToPage(page)}
            >
              {page}
            </Pagination.Item>
          ))}

          {/* Next */}

          <Pagination.Next
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          />

          {/* Last */}

          <Pagination.Last
            onClick={() => goToPage(totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>

        <p className="current-page-text">Current Page: {currentPage}</p>
      </div>
    </div>
  );
}

export default RBPagination;