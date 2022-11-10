import CONFIG from './config';

const API_ENDPOINT = {
  GET_LIST_RESTAURANT: `${CONFIG.BASE_URL}list`,
  REVIEW_RESTAURANT: `${CONFIG.BASE_URL}review`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
