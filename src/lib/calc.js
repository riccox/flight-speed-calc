import { create, all, evaluate } from "mathjs";

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

export default { getDa, getGs, getDaMax };
