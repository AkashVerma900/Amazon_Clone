const initialProducts = [];

export const getProductsReducers = (state = { products: initialProducts }, action) => {
    switch (action.type) {
        case "SUCCESS_GET_PRODUCTS":
            return { ...state, products: Array.isArray(action.payload) ? action.payload : [], error: undefined };
        case "FAIL_GET_PRODUCTS":
            return { ...state, error: action.payload, products: state.products || [] };
        default:
            return state;
    }
};