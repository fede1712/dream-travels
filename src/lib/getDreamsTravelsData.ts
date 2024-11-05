export const getDreamsTravelsData = async () => {
  const res = await fetch("https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels");

  const data = await res.json();
  return data;
};
