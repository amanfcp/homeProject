import { combineReducers } from "redux";
import { items, itemHasErrored, itemIsLoading } from './items'
export default combineReducers({
    items,
    itemHasErrored,
    itemIsLoading,
});