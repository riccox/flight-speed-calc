import React, { useState, useEffect } from "react";
import calc from "../../lib/calc";
import Result from "../result";
import ResultScreen from "./resultScreen";
import { Input, InputGroup, InputNumber, Whisper, Tooltip } from "rsuite";
import { useCounter } from "ahooks";
const tooltip = (text) => {
  return <Tooltip>{text}</Tooltip>;
};

const input = (defaultValue, tag, text, postfix, onChange) => {
  return (
    <InputGroup className="my-3">
      <InputGroup.Addon>{tag}</InputGroup.Addon>
      <Whisper placement="right" trigger="hover" speaker={tooltip(text)}>
        <InputNumber
          min={-10000}
          max={10000}
          defaultValue={defaultValue}
          onChange={onChange}
          postfix={postfix}
        />
      </Whisper>
    </InputGroup>
  );
};

export default function Calculater() {
  const [tas, setTas] = useState(0);
  const [ws, setWs] = useState(0);
  const [mh, setMh] = useState(0);
  const [wd, setWd] = useState(0);

  const [gs, setGs] = useState(0);
  const [da, setDa] = useState(0);
  const [daMax, setDaMax] = useState(0);

  useEffect(() => {
    setGs(calc.getGs(tas, ws, calc.getWa(wd, mh)));
    setDa(calc.getDa(tas, ws, calc.getWa(wd, mh)));
  }, [tas, ws, wd, mh]);
  useEffect(() => {
    setDaMax(calc.getDaMax(tas, ws));
  }, [tas, ws]);

  return (
    <div className="flex-col justify-around items-center py-5">
      <ResultScreen
        res={[
          {
            label: "地速(kts)",
            val: gs,
          },
          {
            label: "偏流(°)",
            val: da,
          },
          {
            label: "最大偏流(°)",
            val: daMax,
          },
        ]}
      ></ResultScreen>
      <div className="flex-col justify-between items-center">
        {input(0, "TAS", "输入真空速", "Kts", (v) => setTas(v))}
        {input(0, "WS", "输入风速", "Kts", (v) => setWs(v))}
        {input(0, "MH", "输入当前磁航向", "°", (v) => setMh(v))}
        {input(0, "WD", "输入当前航行风向", "°", (v) => setWd(v))}
      </div>
    </div>
  );
}
