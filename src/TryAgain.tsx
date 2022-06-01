import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./App.css";
const TryAgain = () => {
  const [users, setUser] = useState([]);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    addStudent();
  }, []);

  //use to Show Student  details /List
  const addStudent = async () => {
    const addStudent = fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp);
      });
    });
  };

  const handlePageClick = (e: any) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };
  return (
    <>
      <h1>again trying paggination with Table </h1>
      <div className="App">
        <table className="table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Parent Email</th>
              <th>Student Standard</th>
              <th>Student Roll Number</th>
              <th>Student Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {users.map((item, i) => (
            <tbody>
              <tr key={i}>
                <td data-label="Student Name">{item.postId}</td>
                <td data-label="Student Email">{item.id}</td>
                <td data-label="Student Standard">{item.name}</td>
                <td data-label="Student Roll No ">{item.email}</td>
                <td data-label="Student Email ">{item.body}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};
export default TryAgain;
