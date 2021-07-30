import React from "react";

import { PanelGroup, Panel } from "rsuite";

export default function Introduce() {
  return (
    <div>
      <PanelGroup accordion defaultActiveKey={1} bordered>
        <Panel header="通过 真空速、风速风角 计算当前地速" eventKey={1}>
          GS = TAS + WS × Sin(90° - WA)
        </Panel>
        <Panel header="通过 真空速、风速 估算当前最大偏流(MAX)" eventKey={2}>
          DAmax ≈ 60/TAS × WS
        </Panel>
        <Panel header="通过 真空速、风速风角 估算当前偏流" eventKey={3}>
          DA = DAmax × Sin(WA)
        </Panel>
      </PanelGroup>
    </div>
  );
}
