import request from "../../utils/request";
import { Config } from "../../config";

const baseUrl = Config.AUTH_API_URL;

export function getAll() {
  return request(baseUrl, {
    method: "GET",
    url: "/test",
  });
}

export function getAllFiltered(type, min, max) {
  return request(baseUrl, {
    method: "GET",
    url: "/test",
    params: {
      type: type,
      min: min,
      max: max,
    }
  });
}

const SearchService = {
  getAll,
  getAllFiltered,
};

export default SearchService;
