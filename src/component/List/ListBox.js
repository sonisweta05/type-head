import React, { useEffect, useRef } from "react";
import "./index.css";

const ListBox = ({ items, activeIndex }) => {
  const ref = useRef([]);

  useEffect(() => {
    if (activeIndex >= 0) {
      ref.current[activeIndex].scrollIntoView({
        behavior: "auto",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  return (
    <ul className="listContainer">
      {items.map((item, index) => {
        return (
          <li
            ref={(ele) => ref.current.push(ele)}
            key={item.label}
            className={`listItem ${index === activeIndex ? "activeItem" : ""}`}
          >
            {" "}
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};

export default ListBox;
