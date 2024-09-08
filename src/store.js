// store.js
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import rootReducer from "./reducers"; 
import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const axiosInstance = {};


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
