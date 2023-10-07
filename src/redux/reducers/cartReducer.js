import { ADD_FAVORITES, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_FROM_FAVORITES } from "../actions/cartActions"


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
                itemCount: state.itemCount + 1, // Збільшити лічильник на 1
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter((item) => item.name !== action.payload),
                itemCount: state.itemCount - 1, // Зменшити лічильник на 1
            };
        // інші випадки...
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
                itemCount: state.itemCount + 1, // Збільшити лічильник на 1
            };
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                items: state.items.filter((item) => item.name !== action.payload),
                itemCount: state.itemCount - 1, // Зменшити лічильник на 1
            };
        // інші випадки...
        default:
            return state;
    }
};