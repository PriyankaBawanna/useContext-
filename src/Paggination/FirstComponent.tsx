import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../App.css";
const FirstComponent = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    addStudent();
  }, []);
  const addStudent = async () => {
    const addStudent = fetch("http://localhost:8085/addStudent").then(
      (result) => {
        result.json().then((resp) => {
          // console.warn(resp)
          setUser(resp);
        });
      }
    );
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Parent Email</th>
            <th>Student Standard</th>
            <th>Student Roll Number</th>
            <th>Student Email</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td data-label="Student Name">Priyanka</td>
            <td data-label="Student Email">bawannaPriyanka@gmail.com</td>
            <td data-label="Student Standard">12</td>
            <td data-label="Student Roll No ">1671</td>
            <td data-label="Student Email ">PriyankaBawanna@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default FirstComponent;
