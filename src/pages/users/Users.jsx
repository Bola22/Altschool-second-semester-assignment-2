import { React, useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import Loading from "../../compunents/loader/Loader";
import Pagination from "../../compunents/Pagination/Pagination";
function User() {
  const { data, loading } = useFetch("https://randomuser.me/api/?results=10");
  console.log(data);

  const users = data;








  // const [currentPage, setCurrentPage] = useState(1);
  // const [dataPerPage] = useState(12);

  // // Get current Data
  // const indexOfLastData = currentPage * dataPerPage;
  // const indexOfFirstData = indexOfLastData - dataPerPage;
  // const currentData = users.slice(indexOfFirstData, indexOfLastData);

  // // change page
  // const paginate = (number) => {
  //   setCurrentPage(number);
  // };

  // // To go to the previous page
  // const prevPage = () => {
  //   if (currentPage <= 1) {
  //     return currentPage;
  //   }
  //   setCurrentPage((currentPage) => currentPage - 1);
  // };

  // // To move to the next page
  // const nextPage = () => {
  //   const pagelength = users.length / dataPerPage;
  //   if (currentPage < pagelength) {
  //     setCurrentPage((currentPage) => currentPage + 1);
  //   }
  // };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="usersProfile">
        <h1 className="title">List of Users</h1>
        <Link to={-1} className="btn" style={{ marginBottom: "50px" }}>
          Back
        </Link>
        {data.map((item, index) => {
          return (
            <div key={index} className="profile">
              <img src={item.picture.medium} className="profileImg" alt="" />
              <div className="userInfo">
                <div className="userName">
                  <h3 className="name">
                    {item.name.last} {item.name.first}
                  </h3>
                </div>
                <div className="userdata">
                  <p className="email">{item.email}</p>
                  <Link className="btn" to={`/user/${item.id.value}`}>
                    view Profile
                  </Link>
                  
                </div>
              </div>

              
            </div>
          );
        })}

        {/* <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
      <button onClick={handleLoadMore} className="loadmore">
        Load More
      </button> */}
      </div>
    </div>
  );
}

export default User;
