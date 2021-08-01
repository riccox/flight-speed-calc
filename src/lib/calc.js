import {
  create,
  all,
  evaluate,
  compare,
  equal,
  larger,
  largerEq,
  smaller,
  smallerEq,
} from "mathjs";

const getWa = (wd, mh) => {
  let rt = evaluate(`${wd} - ${mh}`);

  // 风角范围 0~±180°
  while (larger(rt, 180) || smaller(rt, -180)) {
    if (larger(rt, 180)) {
      rt = evaluate(`${rt} - 360`);
    } else if (smaller(rt, -180)) {
      rt = evaluate(`${rt} + 360`);
    }
  }
  return rt;
};

const getGs = (tas, ws, wa) => {
  return evaluate(`${tas} + ${ws} * sin(90 deg - ${wa} deg)`);
};
const getDaMax = (tas, ws) => {
  if (equal(tas, 0)) {
    return 0;
  } else {
    return evaluate(`60 / ${tas} * ${ws}`);
  }
};
const getDa = (tas, ws, wa) => {
  if (equal(tas, 0)) {
    return 0;
  } else {
    return evaluate(`${getDaMax(tas, ws)} * sin(${wa} deg)`);
  }
};

export default { getDa, getGs, getDaMax, getWa };
