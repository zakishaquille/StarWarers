const BASE_URL = 'https://swapi.dev/api';
const BASE_URL_IMG = 'https://picsum.photos/id/101';

const FILMS = {
  LIST: `${BASE_URL}/films/`,
};

const PEOPLE = {
  LIST: `${BASE_URL}/people/`,
  DETAIL: id => `${BASE_URL}/people/${id}/`,
};

export {
  BASE_URL_IMG,
  FILMS,
  PEOPLE,
};
