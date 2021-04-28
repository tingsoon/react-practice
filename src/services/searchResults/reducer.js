import { searchResultsConstants } from "./constants";

const initialState = {
  totalProperties: null,
  list: [],
  query: null,
  isLoading: false,
  offset: 0,
  limit: 4,
};
// add reducer function to update state from api call
export function searchResults(state = initialState, action) {
  switch (action.type) {
    case searchResultsConstants.IS_LOADING:
        return {
          ...state,
          isLoading: true,
        };
    case searchResultsConstants.UPDATE_CONTENT:
      return {
        ...state,
        totalProperties: action.content.totalProperties,
        list: action.content.list,
        isLoading: false,
      };
    default:
      return state;
  }
}
