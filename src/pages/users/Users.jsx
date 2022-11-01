import { React, useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { Link, Route, Routes, useNavigate  } from "react-router-dom";
import Loading from "../../compunents/loader/Loader";
import Pagination from "../../compunents/Pagination/Pagination";
import Button from "../../compunents/button/button"


function User() {
  const { data, loading, error } = useFetch();

  // const users = data;



  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  // const [ Pages ] = useState (Math.round(data.length/usersPerPage))
  const indexOfLastUser = currentPage * usersPerPage; 
  const indexOfFirstUser = indexOfLastUser - usersPerPage; 
  // const currentUser = data.slice(indexOfFirstUser, indexOfLastUser); 

  const paginated = (data) => {
    setCurrentPage(data);
  };
  const nextPage = () => {
    // if (currentPage === currentUser) return null;
    return setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };




  // const [currentPage, setCurrentPage] = useState(1);
  // const [dataPerPage] = useState(12);

  // // to redirect page
  // const redirectPage = useNavigate();

  

  // // Get current Data
  // const indexOfLastData = currentPage * dataPerPage;
  // const indexOfFirstData = indexOfLastData - dataPerPage;
  // // const currentData = users.slice(indexOfFirstData, indexOfLastData);

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

  if (!loading && error) {
    return (
      <h1>Error</h1>
    );
  }
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
        {data .map((item, index) => {
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
                  <Link className="btn" to={`/user/${item.login.uuid}`}>
                    view Profile
                  </Link>
                  
                </div>
              </div>

              
            </div>
          );
        })}


              {/* <div style={{ display: "flex", gap: "1rem" }}>
                {" "}
                <Button onClick={() => nextPage()}>Prev</Button>
                <Pagination
                  usersPerPage={usersPerPage}
                  pageNumber={paginated}
                  paginated={paginated}
                  data={currentUser}
                  totalUsers={data.length}
                />
                <Button onClick={() => prevPage()}>Next</Button>
              </div> */}
          


        
      </div>
    </div>
  );
}

export default User;
