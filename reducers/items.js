export function itemHasErrored(state = false, action){
    switch (action.type){
        case 'ITEM_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}


export function itemIsLoading(state = false, action){
    switch (action.type){
        case 'ITEM_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}


export function items(state = [], action){
    switch (action.type){
        case 'ITEM_FETCH_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}


