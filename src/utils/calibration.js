let calibration = {
  beta: 0,
  gamma: -70,
};

export function setCalibration(beta, gamma) {
  calibration = { beta, gamma };
}

export function getCalibration() {
  return calibration;
}