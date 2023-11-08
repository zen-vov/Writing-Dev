import React from "react";

function Pagination() {
  return (
    <div className="pagination">
      <p className="prev-btn">Previous</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <p className="next-btn">Next</p>
    </div>
  );
}

export default Pagination;
