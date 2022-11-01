import React from 'react'
import { Link } from "react-router-dom";
import Button from "../button/button"
import "./Pagination.css";


function Pagination({ data, totalUsers, usersPerPage, paginated, }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <div style={{ display: "flex", gap: "5px" }}>
      {pageNumber.map((number) => (
        <Button key={number} onClick={() => paginated(number)}>
          {number}
        </Button>
      ))}
    </div>

    </div>
  )
}

export default Pagination
