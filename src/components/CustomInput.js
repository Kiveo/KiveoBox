import React, { useState, useEffect } from "react";

const CustomInput = props => {
  const { parentValue, handleValue } = props;
  const { valStorage, setValStorage } = useState("");

  // useEffect(() => {
  //   setValStorage(parentValue);
  // }, []);

  return (
    <div>
      <h1>Input</h1>
      <input
        type="text"
        defaultValue={parentValue}
        placeholder="input a value..."
        onChange={handleValue}
      />
    </div>
  );
};

export default CustomInput;
