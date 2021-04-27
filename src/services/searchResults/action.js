import { searchResultsConstants } from './constants';

import {getAll as getAllService} from './service';

export function searchContent() {
    return (dispatch) => {
        dispatch(isLoading());

        getAllService().then(response => {
            const data = response;
            console.log(data);
            dispatch(updateContent(data))
        })
    }
}

function updateContent(data) {
    return {type: searchResultsConstants.UPDATE_CONTENT, content: data};
  }

function isLoading() {
    return {type: searchResultsConstants.IS_LOADING};
}

