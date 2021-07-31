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
        Powered By <a href="http://lrvinye.cn" target="_blank">Lrvinye</a>
      </div>
      <Divider vertical />
      <div>
        来自 <a href="http://www.cauc.edu.cn" target="_blank">中国民航大学 CAUC</a> 校友
      </div>
    </div>
  );
}
