import React, { useEffect, useState } from "react";
const RaceCondition = () => {
  const [val, setvalue] = useState("");
  const [temp, setTemp] = useState("");

  const getValue = (value) => {
    return new Promise((resolve) => {
      const v = Math.floor(Math.random() * 10000);
      console.log(v);
      setTimeout(() => {
        resolve(value);
      }, v);
    });
  };
  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  useEffect(() => {
    let flag = true;
    getValue(val).then((v) => {
      console.log(flag, flag);
      if (flag) {
        setTemp(v);
      }
    });

    return () => {
      console.log("unmounting");
      flag = false;
    };
  }, [val]);
  //   console.log("rerender");

  return (
    <div>
      <input value={val} type="text" onChange={handleChange} />
      <span>{temp}</span>
    </div>
  );
};

export default RaceCondition;
