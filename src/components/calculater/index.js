import React, { useState, useEffect } from "react";
import calc from "../../lib/calc";
import Result from "../result";
import { Input, InputGroup, InputNumber, Whisper, Tooltip } from "rsuite";
import { useCounter } from "ahooks";
const tooltip = (text) => {
  return <Tooltip>{text}</Tooltip>;
};

const input = (defaultValue, tag, text, postfix, onChange) => {
  return (
    <InputGroup className="my-5">
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
  const [wa, setWa] = useState(0);

  const [gs, setGs] = useState(0);
  const [da, setDa] = useState(0);
  const [daMax, setDaMax] = useState(0);

  useEffect(() => {
    setGs(calc.getGs(tas, ws, wa));
  }, [tas, ws, wa]);
  useEffect(() => {
    setDaMax(calc.getDaMax(tas, ws));
  }, [tas, ws]);
  useEffect(() => {
    setDa(calc.getDa(tas, ws, wa));
  }, [tas, ws, wa]);

  return (
    <div className="flex justify-around items-center p-10">
      <div className="flex-col justify-between items-center">
        {input(0, "TAS", "输入真空速", "Kts", (v) => setTas(v))}
        {input(0, "WS", "输入风速", "Kts", (v) => setWs(v))}
        {input(0, "WA", "输入风角", "°", (v) => setWa(v))}
      </div>
      <div className="flex ">
        <Result res={gs} text="地速(kts)"></Result>
        <Result res={da} text="偏流(°)"></Result>
        <Result res={daMax} text="最大偏流(°)"></Result>
      </div>
    </div>
  );
}
