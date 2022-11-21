import React, { useState } from "react";

function Forms() {
  const [textValue, setTextValue] = useState("");
  return (
    <div>
      <input
        type={"text"}
        value={textValue}
        onChange={(text) => setTextValue(text.target.value)}
      ></input>
    </div>
  );
}

export default Forms;
