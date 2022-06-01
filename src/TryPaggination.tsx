import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./App.css";

function TryPaggination() {
  const [offset, setOffset] = useState(0);
  const [users, setUser] = useState([]);
  const [perPage] = useState(3);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    const res = await axios.get(`http://localhost:8085/addStudent`);
    const data = res.data;
    const slice = data.slice(offset, offset + perPage);
    setUser(slice);
    setPageCount(Math.ceil(data.length / perPage));
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  return (
    <div className="App">
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
                <td data-label="Student Name">{item.studentName}</td>
                <td data-label="Student Email">{item.studentEmail}</td>
                <td data-label="Student Standard">{item.studentStandard}</td>
                <td data-label="Student Roll No ">{item.studentRollNo}</td>
                <td data-label="Student Email ">{item.studentEmail}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
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
  );
}

export default TryPaggination;
