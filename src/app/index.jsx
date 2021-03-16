import React, { useState } from "react";
import Dropdown from "./dropdown/Dropdown";
import countries from "./../data/countries.json";
import animals from "./../data//animals.json";

export default function App() {
  const [value, setValue] = useState(null);
  return (
    <div style={{ width: "200px" }}>
      <Dropdown
        options={animals}
        prompt="Select animals"
        onChange={(value) => setValue(value)}
        value={value}
        id="id"
        label="name"
      />
    </div>
  );
}
