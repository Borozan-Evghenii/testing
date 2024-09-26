import React from "react";
import { Counter } from "../../redux/counter/Counter";

export const Index = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => setOpen((prev) => !prev), 100);
    return () => clearTimeout(setTimeout(() => setOpen((prev) => !prev), 100));
  }, []);
  return (
    <div data-testid="home-page">
      <h1>title</h1>
      <input
        type="text"
        placeholder="placeholder"
        data-testid="input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button data-testid="button" onClick={() => setOpen((prev) => !prev)}>
        Click me
      </button>
      {open && (
        <div
          data-testid="hiddenBlock"
          className="hidden"
          style={{ color: "red" }}
        >
          data
        </div>
      )}
      <Counter />
    </div>
  );
};
