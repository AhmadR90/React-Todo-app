import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [value, setValue] = useState("");
  const [input, setInput] = useState(["default todo","Second todo"]);
  const inputHandler = (e) => {
    const val = e.target.value;
    // console.log(val);
    setValue(val);
  };
  const clickHandler = () => {
    setInput([...input, value]);
  };
  return (
    <>
      <div className="bg-slate-600 p-4  text-4xl text-rose-50 ">
        <h1>Todo List</h1>
      </div>
      <div className=" mt-4 flex justify-center gap-4">
        <input
          className=""
          onChange={inputHandler}
          placeholder="Enter your todo"
        />
        <button
          className="border h-8 w-16 bg-black text-white "
          onClick={clickHandler}
        >
          Add
        </button>
      </div>
      {input.map((item, index, arr) => {
        return (
          <Card
            key={index}
            val={item}
            delete={() => {
              const updateItem = [
                ...input.slice(0, index),
                ...input.slice(index + 1),
              ];
              setInput(updateItem);
            }}
          />
        );
      })}
    </>
  );
}

export default App;
