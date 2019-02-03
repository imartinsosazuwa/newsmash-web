// const APIRoot = 'http://localhost:3001';
const APIRoot = 'https://newsmashed-api.herokuapp.com/api/v1';

export default {
  NEW_MASH: APIRoot + '/mashes/data',
  MASHES: APIRoot + '/mashes',
  SAVED_MASHES: APIRoot + '/mashes/recent',
  NEW_MIX: APIRoot + '/mixes/data',
};
