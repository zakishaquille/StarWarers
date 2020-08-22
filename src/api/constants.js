const BASE_URL = 'https://swapi.dev/api';
const BASE_URL_IMG = 'https://picsum.photos/seed/picsum';
const BASE_URL_IMG_PROF = 'https://picsum.photos';

const FILMS = {
  LIST: `${BASE_URL}/films/`,
  DETAIL: id => `${BASE_URL}/films/${id}/`,
};

const PEOPLE = {
  LIST: `${BASE_URL}/people/`,
};

export {
  BASE_URL_IMG,
  BASE_URL_IMG_PROF,
  FILMS,
  PEOPLE,
};
