import { searchResultsConstants } from "./constants";

const initialState = {
  totalProperties: null,
  list: [],
  query: null,
  isLoading: false,
  offset: 0,
  limit: 4,
  type: "",
  min: "",
  max: "",
  hasMore: true,
};
// add reducer function to update state from api call
export function searchResults(state = initialState, action) {
  switch (action.type) {
    case searchResultsConstants.IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    // case searchResultsConstants.UPDATE_CONTENT:
    //   return {
    //     ...state,
    //     totalProperties: action.content.totalProperties,
    //     list: action.content.list,
    //     isLoading: false,
    //   };
    case searchResultsConstants.UPDATE_OFFSET:
      return {
        ...state,
        offset: state.offset + action.value,
      };
    case searchResultsConstants.UPDATE_FILTER:
      return {
        ...state,
        type: action.filterBedroom,
        min: action.min,
        max: action.max,
      };
    case searchResultsConstants.UPDATE_LOADING_CONTENT:
      const newList = [...state.list, ...action.content.list];
      return {
        ...state,
        totalProperties: action.content.totalProperties,
        list: newList,
        isLoading: false,
      };
    // case searchResultsConstants.RESET_OFFSET:
    //   return {
    //     ...state,
    //     offset: 0,
    //   };
    case searchResultsConstants.INITIAL_LOAD_FILTER_CONTENT:
      return {
        ...state,
        totalProperties: action.content.totalProperties,
        list: action.content.list,
        isLoading: false,
      };
    case searchResultsConstants.UPDATE_HAS_MORE:
      return {
        ...state,
        hasMore: false,
      };
    case searchResultsConstants.RESET_VALUES:
      return {
        ...state,
        offset: 0,
        limit: 4,
        hasMore: true,
      };
    default:
      return state;
  }
}
