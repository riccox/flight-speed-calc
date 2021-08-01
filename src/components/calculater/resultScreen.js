import React from "react";
import { fix } from "mathjs";

export default function ResultScreen({ res }) {
  return (
    <div>
      <div
        className="rounded-lg max-w-full	"
        style={{ backgroundColor: "#6D7456" }}
      >
        {res.map((ele) => {
          return (
            <div className="truncate font-semibold text-xl text-gray-900 flex-col justify-between items-baseline px-5 py-2">
              <div>{ele.label}</div>
              <div
                className="text-2xl tracking-widest"
                style={{ fontFamily: "Open-24-Display-ST-LED" }}
              >
                {fix(ele.val, 4)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
