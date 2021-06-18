import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Input, Radio } from "../.";

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

      <Radio name="hola" value="1" checked />
      <Radio name="hola" value="2" />
      <Radio name="aa" value="2" isCheckbox />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
