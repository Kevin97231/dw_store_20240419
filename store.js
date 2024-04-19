// Exemple avec Redux-Persist:

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import myCartReducer from "./src/features/cartSlice"
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers ( {
    myCart: myCartReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)

// EXEMPLE SANS REDUX-PERSIST:
// const store = configureStore( {
//     reducer: {
//         myCart: myCartReducer
//     }
// } );

// export default store;