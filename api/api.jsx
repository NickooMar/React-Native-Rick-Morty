const URI = "https://rickandmortyapi.com/api";

export const getData = async (page) => {
  const res = await fetch(`${URI}/character/?page=${page}`);
  return await res.json();
};

export const getPages = async () => {
  const res = await fetch(`${URI}/character/`);
  return await res.json();
};

export const getCharacter = async (id) => {
  const res = await fetch(`${URI}/character/${id}`);
  return await res.json();
};
