import React from "react";
import "./Sorting.css";
interface ISort {
  sortOption: string;
  setSortOption: (value: string) => void;
}

const Sort: React.FC<ISort> = ({ sortOption, setSortOption }) => {
  return (
    <div className="sorting-container">
      <label className="sort-by" htmlFor="sort">
        Sort by:
      </label>
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="category">Category</option>
      </select>
    </div>
  );
};

export default Sort;
