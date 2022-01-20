import * as axios from "axios";

export default class BeersApi {
  constructor() {
    this.client = null;
    this.api_url = "https://beertasting.club/api/v5";

    this.init();
  }

  init = () => {
    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: {
        Accept: "application/json",
      },
    });
  };

  get = (path, params = {}) => {
    const response = this.client.get(path, { params: params });
    return response;
  };
}

export const BeersApiInstance = new BeersApi();

export function getBeers(params = {}) {
  return BeersApiInstance.get(
    `/beer?name=${params}&skip=0&limit=10&sortType=name&sortDirection=asc`
  ).then((response) => {
    return response.data.beers;
  });
}
