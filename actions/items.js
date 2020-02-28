import { useDispatch } from "react-redux";
import Axios from "axios";

const dispatch = useDispatch()

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items: items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true))

        Axios.get(url).then(response => {
            dispatch(itemsHasErrored(false))
            // return response

            dispatch(itemsFetchDataSuccess(response.data))
            dispatch(itemsIsLoading(false))
        }).catch(() => dispatch(itemsHasErrored(true)))
    };
}
