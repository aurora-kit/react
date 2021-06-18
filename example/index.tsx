import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Input } from "../.";

const App = () => {
  const [value, setValue] = React.useState("");
  return (
    <div style={{ width: 400 }}>
      <Input
        label="hola"
        placeholder="jlkjkl"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        hasValue={value.trim() !== ""}
        onClear={() => setValue("")}
        isClearable
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
