import { ADD_FAVORITES, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_FROM_FAVORITES, ADD_MULTIPLE_TO_CART, ADD_MULTIPLE_TO_FAVORITES, INITIALIZE_CART, INITIALIZE_FAVORITES } from "../actions/cartActions"


const initialState = {
    cart: {
        items: [],
        itemCount: 0, 
    },
    favorites: {
        items: [],
        itemCount: 0,
    },
};


// Редуктор для кошика
export const cartReducer = (state = initialState.cart, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload],
                itemCount: state.itemCount + 1,
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter((item) => item.itemNo !== action.payload),
                itemCount: state.itemCount - 1,
            };
        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                items: [...state.items, ...action.payload],
                itemCount: state.itemCount + action.payload.length,
            };
        case INITIALIZE_CART:
            return {
                ...state,
                items: action.payload,
                itemCount: action.payload.length
            };
                        
        default:
            return state;
    }
};

// Редуктор для списку обраних товарів
export const favoritesReducer = (state = initialState.favorites, action) => {
    switch (action.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                items: [...state.items, action.payload],
                itemCount: state.itemCount + 1,
            };
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                items: state.items.filter((item) => item.itemNo !== action.payload),
                itemCount: state.itemCount - 1,
            };
        case ADD_MULTIPLE_TO_FAVORITES:
            return {
                ...state,
                items: [...state.items, ...action.payload],
                itemCount: state.itemCount + action.payload.length,
            };
        case INITIALIZE_FAVORITES:
            return {
                ...state,
                items: action.payload,
                itemCount: action.payload.length
            };    
        
        default:
            return state;
    }
};