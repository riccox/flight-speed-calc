import React from "react";
import { Divider } from "rsuite";
export default function Footer({ clickDisc }) {
  return (
    <div className="flex items-center p-3 text-gray-400 cursor-default">
      <div className="cursor-pointer" onClick={clickDisc}>
        {" "}
        免责声明
      </div>{" "}
      <Divider vertical />
      <div>
        Powered By <a href="http://lrvinye.cn">Lrvinye</a>
      </div>
    </div>
  );
}
