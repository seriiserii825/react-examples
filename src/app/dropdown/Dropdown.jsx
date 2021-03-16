import { getByDisplayValue } from "@testing-library/dom";
import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

export default function Dropdown({
  options,
  prompt,
  value,
  onChange,
  id,
  label,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);

  function close(e) {
    setOpen(e && e.target === ref.current);
  }

  function filter(options) {
    return options.filter(
      (option) =>
        option[label].toLowerCase().indexOf(query.toLocaleLowerCase()) > -1
    );
  }

  function displayValue() {
    if (query.length > 0) return query;
    if (value) return value[label];
    return "";
  }

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <div className="dropdown">
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-value">
          <input
            type="text"
            ref={ref}
            placeholder={value ? value[label] : prompt}
            value={displayValue()}
            onChange={(e) => {
              setQuery(e.target.value);
              onChange(null);
            }}
          />
        </div>
        <div className={`arrow ${open ? "open" : ""}`}></div>
      </div>
      <div className={`options ${open ? "open" : ""}`}>
        {filter(options).map((option) => (
          <div
            key={option[id]}
            className={`option ${option === value ? "selected" : ""}`}
            onClick={() => {
              onChange(option);
              setOpen(false);
            }}
          >
            {option[label]}
          </div>
        ))}
      </div>
    </div>
  );
}
