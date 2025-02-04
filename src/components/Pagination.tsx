// Pagination.tsx
import React from "react";
import Button from "./Button";
import "./Pagination.css";

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}): JSX.Element => {
  return (
    <div className="pagination">
      <Button
        text="Previous"
        addcss="pagination-button"
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage === 1}
      />

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <Button
        text="Next"
        addcss="pagination-button"
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;
