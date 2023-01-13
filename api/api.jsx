const URI = "https://rickandmortyapi.com/api/";

export const getCharacters = async () => {
  const res = await fetch(`${URI}/character`);
  return await res.json();
};
