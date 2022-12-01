 import { createStore } from "redux";
 import { reducer } from "./reducers/accountReducer";



 const store=createStore(
    reducer
);

export default store;
