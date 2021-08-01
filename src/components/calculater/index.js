import React, { useState, useEffect } from "react";
import calc from "../../lib/calc";
import ResultScreen from "./resultScreen";
import {
  InputGroup,
  InputNumber,
  Whisper,
  Tooltip,
  Radio,
  RadioGroup,
} from "rsuite";

import { evaluate, hasNumericValue } from "mathjs";

import { useToggle } from "ahooks";
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

  const [wdType, setWdType] = useToggle("nav", "met");
  const [wdVal, setWdVal] = useState(0);
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

  useEffect(() => {
    setWd(wdType == "nav" ? wdVal : evaluate(`${wdVal} + 180`));
  }, [wdType, wdVal]);
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
        {input(0, "TAS", "输入真空速", "Kts", (v) =>
          setTas(hasNumericValue(v) ? v : 0)
        )}
        {input(0, "WS", "输入风速", "Kts", (v) =>
          setWs(hasNumericValue(v) ? v : 0)
        )}
        {input(0, "MH", "输入当前磁航向", "°", (v) =>
          setMh(hasNumericValue(v) ? v : 0)
        )}

        <InputGroup className="my-3">
          <InputGroup.Addon>
            <RadioGroup
              style={{ borderStyle: "none" }}
              name="radioList"
              inline
              appearance="picker"
              value={wdType}
              onChange={(val) => setWdType.toggle(val)}
            >
              <span
                style={{
                  padding: "8px 2px 8px 10px",
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
              >
                WD{" "}
              </span>
              <Radio value="nav">航行风</Radio>
              <Radio value="met">气象风</Radio>
            </RadioGroup>
          </InputGroup.Addon>
          <Whisper
            placement="right"
            trigger="hover"
            speaker={tooltip(
              `输入当前${wdType == "nav" ? "航行" : "气象"}风向`
            )}
          >
            <InputNumber
              min={-10000}
              max={10000}
              defaultValue={0}
              onChange={(v) => setWdVal(hasNumericValue(v) ? v : 0)}
              postfix="°"
            />
          </Whisper>
        </InputGroup>
      </div>
    </div>
  );
}
