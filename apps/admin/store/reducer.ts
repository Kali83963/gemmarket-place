// third-party
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/user";

const reducer = combineReducers({
  user: userReducer,
});
export default reducer;
// {
//   snackbar: snackbarReducer,
//   cart: persistReducer(
//     {
//       key: "cart",
//       storage,
//       keyPrefix: "berry-",
//     },
//     cartReducer
//   ),
//   kanban: kanbanReducer,
//   customer: customerReducer,
//   contact: contactReducer,
//   product: productReducer,
//   chat: chatReducer,
//   calendar: calendarReducer,
//   mail: mailReducer,
//
// }
