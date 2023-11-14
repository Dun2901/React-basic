import React from "react";
import useFetch from "../Hooks/useFetch";

const Post = () => {
  const {
    data: dataUser,
    isLoading,
    isError,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      <h3>User Information</h3>
      <table id="customers">
        {console.log(">>> check data user: ", dataUser)}
        <thead>
          <tr>
            <th>UserId</th>
            <th>Name</th>
            <th>Username</th>
            <th>City</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {isError === false &&
            isLoading === false &&
            dataUser &&
            dataUser.length > 0 &&
            dataUser.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.address.city}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              );
            })}

          {isLoading === true && (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}

          {isError === true && (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                Something wrong...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Post;
