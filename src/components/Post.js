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
              const {
                id,
                name,
                username,
                address: { city },
                email,
                phone,
              } = item;

              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{city}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
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
