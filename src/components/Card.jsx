import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="bg-white mt-4 h-12 w-3/4 ml-20">
        <ul className="m-x-3 flex justify-between">
          <p className="mt-3 text-black text-xl uppercase">{props.val}</p>
          <button
            className="bg-red-600 rounded-2xl w-20 text-white mt-4 mr-2 hover:bg-green-600"
            onClick={() => {
              props.delete();
            }}
          >
            Delete
          </button>
        </ul>
      </div>
    </>
  );
};

export default Card;
