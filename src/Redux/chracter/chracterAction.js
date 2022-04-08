const selectCharacter = (chracter) => {
  return {
    type: "SELECT_CHRACTER",
    payload: chracter,
  };
};
const increaseCharacter = (chracter) => {
  return {
    type: "INCREASE",
    payload: chracter,
  };
};
const decreaseCharacter = (chracter) => {
  return {
    type: "DECREASE",
    payload: chracter,
  };
};

export { selectCharacter,increaseCharacter,decreaseCharacter };
