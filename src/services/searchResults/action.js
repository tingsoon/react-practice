import { searchResultsConstants } from "./constants";

// import { getAll as getAllService } from "./service";
// import { getAllFiltered as getAllFilteredService } from "./service";
import { getOffset as getOffsetService } from "./service";

// export function searchContent() {
//   return (dispatch) => {
//     dispatch(isLoading());

//     getAllService().then((response) => {
//       const data = response;
//       console.log("data", data);
//       dispatch(updateContent(data));
//     });
//   };
// }

export function searchFilteredContent(type, min, max, limit, offset) {
  return (dispatch) => {
    dispatch(isLoading());
    dispatch(clearErrorMessage());
    dispatch(resetValues());

    getOffsetService(type, min, max, limit, offset)
      .then((response) => {
        const data = response;
        const offsetValue = data.list.length;
        // console.log("data", data);
        // console.log("offsetValue", offsetValue);
        dispatch(initialFilterLoadingContent(data));
        dispatch(updateOffset(offsetValue));
        if (offsetValue <= 3) {
          dispatch(updateHasMore());
        }
      })
      .catch((response) => {
        // console.log(response);
        dispatch(showErrorMessage(response));
      });
  };
}

export function searchOffsetContent(type, min, max, limit, offset) {
  return (dispatch) => {
    dispatch(isLoading());
    dispatch(clearErrorMessage());

    getOffsetService(type, min, max, limit, offset)
      .then((response) => {
        const data = response;
        const offsetValue = data.list.length;
        // console.log("data", data);
        // console.log("offsetValue", offsetValue);
        dispatch(updateLoadingContent(data));
        dispatch(updateOffset(offsetValue));
        if (offsetValue <= 3) {
          dispatch(updateHasMore());
        }
      })
      .catch((response) => {
        // console.log(response);
        dispatch(showErrorMessage(response));
      });
  };
}

// function updateContent(data) {
//   return { type: searchResultsConstants.UPDATE_CONTENT, content: data };
// }

function isLoading() {
  return { type: searchResultsConstants.IS_LOADING };
}

function updateOffset(value) {
  return { type: searchResultsConstants.UPDATE_OFFSET, value: value };
}

export function updateFilter(filterBedroom, min, max) {
  return {
    type: searchResultsConstants.UPDATE_FILTER,
    filterBedroom: filterBedroom,
    min: min,
    max: max,
  };
}

function updateLoadingContent(loadingData) {
  return {
    type: searchResultsConstants.UPDATE_LOADING_CONTENT,
    content: loadingData,
  };
}

// export function resetOffset() {
//   return { type: searchResultsConstants.RESET_OFFSET };
// }

function initialFilterLoadingContent(loadingData) {
  return {
    type: searchResultsConstants.INITIAL_LOAD_FILTER_CONTENT,
    content: loadingData,
  };
}

function updateHasMore() {
  return { type: searchResultsConstants.UPDATE_HAS_MORE };
}

export function resetValues() {
  return { type: searchResultsConstants.RESET_VALUES };
}

function showErrorMessage(errorMessage) {
  return {
    type: searchResultsConstants.SHOW_ERROR_MESSAGE,
    errorMessage: errorMessage,
  };
}

function clearErrorMessage() {
  return { type: searchResultsConstants.CLEAR_ERROR_MESSAGE };
}
