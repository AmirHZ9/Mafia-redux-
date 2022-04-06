const selectCharacter = (chracter) => {
  return {
    type: "SELECT_CHRACTER",
    payload: chracter,
  };
};

export { selectCharacter };
