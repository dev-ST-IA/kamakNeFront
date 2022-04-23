import { combineReducers } from "redux";
import authSlice from "./authSlice";
import { bookStoreApi } from "../services/bookStoreApi";
import searchBarSlice from "./searchBarSlice";
import toasterSlice from "./toasterSlice";
import modelSlice from "./modelSlice";
import themeModeSlice from "./themeModeSlice";
import drawerSlice from "./drawerSlice";

export const reducer = combineReducers({
  auth: authSlice,
  searchBar: searchBarSlice,
  toaster: toasterSlice,
  model: modelSlice,
  themeMode: themeModeSlice,
  drawer: drawerSlice,
  [bookStoreApi.reducerPath]: bookStoreApi.reducer,
});
