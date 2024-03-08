import React, { useState } from "react";
import usePromiseSearch from "./hook/useFetchPromise";

const Search = ({
  id,
  name,
  label,
  autoComplete,
  styleCSS,
  debounceTime,
  renderItem,
  noItemFound,
  errorMessage,
  transformFn,
  dataPromise,
  placeholder,
}) => {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isAutoComplete, setIsAutoComplete] = useState(autoComplete);
  const [data, setData, error] = usePromiseSearch(
    query,
    transformFn,
    dataPromise,
    isAutoComplete,
    debounceTime
  );
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleKeyUp = (e) => {
    if (!data || !data.length) return;
    if (e.key === "ArrowUp") {
      if (activeIndex === -1 || activeIndex === 0) {
        setActiveIndex(data.length - 1);
      } else {
        setActiveIndex(activeIndex - 1);
      }
      setIsAutoComplete(true);
    } else if (e.key === "ArrowDown") {
      if (activeIndex === -1 || activeIndex === data.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
      setIsAutoComplete(true);
    } else if (e.key === "Enter") {
      if (activeIndex === -1) return;
      setQuery(data[activeIndex].label);
      setActiveIndex(-1);
      setData(null);
      setIsAutoComplete(false);
    }
  };
  return (
    <>
      <label className={styleCSS.label} htmlFor={name}>
        {label}
      </label>
      <br />
      <input
        name={name}
        id={id}
        className={styleCSS.input}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete="off"
        onKeyUp={handleKeyUp}
        value={query}
      />
      {data && data.length > 0 && renderItem(data, activeIndex)}
      {query && data && data.length === 0 && noItemFound()}
      {error && errorMessage()}
    </>
  );
};

export default Search;
