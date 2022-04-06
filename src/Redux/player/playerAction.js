const addPlayer = (name, id) => {
  return {
    type: "Add-player",
    payload: name,
    id: id,
  };
};

const removePlayer = (name) => {
  return {
    type: "Remove-Player",
    payload: name,
  };
};
export { addPlayer, removePlayer };
