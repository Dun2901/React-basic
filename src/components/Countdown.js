import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count === 0) {
      return;
    }
    const timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return <div> {count} hook</div>;
};

export default Countdown;
