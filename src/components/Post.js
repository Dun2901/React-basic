import axios from "axios";
import React, { useEffect, useState } from "react";

const Post = () => {
  const [dataUser, setDataUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // componentDidMount
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/users");
        let data = res && res.data ? res.data : [];
        setDataUser(data);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
