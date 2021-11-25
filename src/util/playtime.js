const zp = (n) => (n < 10 ? '0' + n : n);

const getPlayTime = (s) => {
  if (Math.floor(s / 60) >= 60) {
    return (
      zp(Math.floor(s / 60 / 60)) +
      ':' +
      zp(Math.floor((s / 60) % 60)) +
      ':' +
      zp(s % 60)
    );
  } else {
    return zp(Math.floor(s / 60)) + ':' + zp(s % 60);
  }
};

export default getPlayTime;
