import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUSers] = useState([]);
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=10`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setUSers(data.results);
      });
  }, []);
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Gender</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users?.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  {user.name.title + " "}
                  {user.name.first + " "}
                  {user.name.last + " "}
                </td>
                <td>{user.gender}</td>
                <td>{user.location.city}</td>
                <td>{user.location.state}</td>
                <td>{user.location.country}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
