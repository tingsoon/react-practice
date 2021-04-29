import request from "../../utils/request";
import { Config } from "../../config";

const baseUrl = Config.AUTH_API_URL;

// export function getAll() {
//   return request(baseUrl, {
//     method: "GET",
//     url: "/test",
//   });
// }

// export function getAllFiltered(type, min, max) {
//   return request(baseUrl, {
//     method: "GET",
//     url: "/test",
//     params: {
//       type: type,
//       min: min,
//       max: max,
//     }
//   });
// }

export function getOffset(type, min, max, limit, offset) {
  return request(baseUrl, {
    method: "GET",
    url: "/test",
    params: {
      type: type,
      min: min,
      max: max,
      limit: limit,
      offset: offset
    }
  });
}

const SearchService = {
  // getAll,
  // getAllFiltered,
  getOffset,
};

export default SearchService;
