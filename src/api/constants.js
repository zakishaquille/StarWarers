const BASE_URL = 'https://swapi.dev/api';
const BASE_URL_IMG = 'https://picsum.photos/seed/picsum';
const BASE_URL_IMG_PROF = 'https://picsum.photos';

const FILMS = {
  LIST: `${BASE_URL}/films/`,
};

const PEOPLE = {
  LIST: `${BASE_URL}/people/`,
  DETAIL: id => `${BASE_URL}/people/${id}/`,
};

export {
  BASE_URL_IMG,
  BASE_URL_IMG_PROF,
  FILMS,
  PEOPLE,
};
