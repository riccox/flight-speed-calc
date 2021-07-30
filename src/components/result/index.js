import React from "react";
import { Tag } from "rsuite";
function isInteger(n) {
  return parseInt(n) == parseFloat(n);
}

export default function Result({ res, text }) {
  const getCount = () => {
    if (isInteger(res)) {
      return <div className="text-4xl font-bold mb-5">{res}</div>;
    } else {
      return (
        <div className="mb-5">
            {/* <Tag color="violet">四舍五入</Tag> */}
          <p className="text-4xl font-bold ">{parseFloat(res).toFixed(2)}</p>
          
        </div>
      );
    }
  };
  return (
    <div className="border-2 border-gray-300 w-40 h-40 py-10 px-5 flex-col justify-around items-center text-center">
      {getCount()}
      <div className="text-lg font-light ">{text}</div>
    </div>
  );
}
