// const APIRoot = 'http://localhost:3001/api/v1';
const APIRoot = 'https://newsmashed-api.herokuapp.com/api/v1';

export default {
  GET_NEW_MASH: APIRoot + '/mashes/new',
  SAVE_MASH: APIRoot + '/mashes',
  // GET_SAVED_MASH: APIRoot + '/mashes/:id',
  GET_SAVED_MASHES: APIRoot + '/mashes',
  GET_NEW_MIX: APIRoot + '/mixes/new',
};
