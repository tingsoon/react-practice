import request from "../../utils/request";
import { Config } from "../../config";

const baseUrl = Config.AUTH_API_URL;

export function getAll() {
  return request(baseUrl, {
    method: "GET",
    url: "/test",
  });
}

const SearchService = {
  getAll,
};

export default SearchService;
