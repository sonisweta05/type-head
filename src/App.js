import Search from "./component/Search";
import ListBox from "./component/List/ListBox";
import RaceCondition from "./component/RaceCondition/RaceCondition";
import "./styles.css";
export default function App() {
  const transformFn = (data, maxItem) => data.slice(0, maxItem);
  const key = "";
  const dataPromise = async (query) =>
    await fetch(
      `https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=faded`
    );

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Shubham Soni Type Head</h1>
      <div className="wrapper">
        <Search
          id="search"
          placeholder="Search..."
          label="Enter person name"
          autoComplete={true}
          styleCSS={{
            label: "label",
            input: "input",
          }}
          debounceTime={400}
          renderItem={(items, activeIndex) => (
            <ListBox items={items} activeIndex={activeIndex} />
          )}
          noItemFound={() => <div>No Item Found</div>}
          errorMessage={() => <div>Error</div>}
          transformFn={transformFn}
          dataPromise={dataPromise}
        />
        <RaceCondition />
      </div>
    </div>
  );
}
