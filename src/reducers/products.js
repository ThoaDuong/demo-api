import * as types from './../constants/ActionType';

const initialState = [];
const products = (state = initialState, action) => {
    switch(action.type){
        case (types.FETCH_PRODUCT):
            state = action.products;
            return [...state];
        default: return [...state];
    }
}
export default products;