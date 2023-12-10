import React, { useState } from "react";

const Home = (props) => {
  const { updateName } = props;
  const [name, setName] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    updateName(name);
  };

  return (
    <>
      <header>WELCOME</header>
      <input type="text" onChange={(event) => handleChangeName(event)} />
      <button onClick={() => handleClick()}>OK</button>
    </>
  );
};
export default Home;
