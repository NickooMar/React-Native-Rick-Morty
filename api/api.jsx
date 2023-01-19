const URI = "https://rickandmortyapi.com/api";

export const getCharacters = async (page) => {
  const res = await fetch(`${URI}/character/?page=${page}`);
  return await res.json();
};

export const getCharacter = async (id) => {
  const res = await fetch(`${URI}/character/${id}`);
  return await res.json();
};

export const getLocations = async (page) => {
  const res = await fetch(`${URI}/location/?page=${page}`);
  return await res.json();
}

export const getEpisodes = async (page) => {
  const res = await fetch(`${URI}/episode/?page=${page}`);
  return await res.json();
}