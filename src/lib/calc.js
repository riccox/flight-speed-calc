import { create, all, evaluate } from "mathjs";

const getWa = (wd, mh) => {
  let rt = evaluate(`${parseFloat(wd)} - ${parseFloat(mh)}`);

  // 风角范围 0~±180°
  if (rt > 180) {
    return evaluate(`${parseFloat(rt)} - 360`);
  } else if (rt < -180) {
    return evaluate(`${parseFloat(rt)} + 360`);
  } else {
    return rt;
  }
};

const getGs = (tas, ws, wa) => {
  return evaluate(
    `${parseFloat(tas)} + ${parseFloat(ws)} * sin(90 deg - ${parseFloat(
      wa
    )} deg)`
  );
};
const getDaMax = (tas, ws) => {
  if (tas == 0) {
    return 0;
  } else {
    return evaluate(`60 / ${parseFloat(tas)} * ${parseFloat(ws)}`);
  }
};
const getDa = (tas, ws, wa) => {
  if (tas == 0) {
    return 0;
  } else {
    return evaluate(`${getDaMax(tas, ws)} * sin(${parseFloat(wa)} deg)`);
  }
};

const angle2radian = (a) => {
  return (a * Math.PI) / 180;
};

const radian2angle = (r) => {
  return (180 * r) / Math.PI;
};

export default { getDa, getGs, getDaMax,getWa };
