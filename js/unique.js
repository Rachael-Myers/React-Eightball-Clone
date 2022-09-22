const createUniqueID = () => {
  // Naive
  //   return Math.floor(Math.random() * 10000000);

  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    ""
  );
};
