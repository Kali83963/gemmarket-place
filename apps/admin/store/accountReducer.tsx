// action - state management
import { InitialLoginContextProps } from "@/types";
import { LOGIN, LOGOUT, REGISTER } from "./actions";

// ==============================|| ACCOUNT REDUCER ||============================== //

const initialState: InitialLoginContextProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null,
};

interface AccountReducerActionProps {
  type: string;
  payload?: InitialLoginContextProps;
}

const accountReducer = (
  state = initialState,
  action: AccountReducerActionProps
) => {
  switch (action.type) {
    case REGISTER: {
      const { user } = action.payload!;
      return {
        ...state,
        user,
      };
    }
    case LOGIN: {
      const { user } = action.payload!;
      console.log("State", user);
      return {
        ...state,
        isLoggedIn: true,
        isInitialized: true,
        user,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isInitialized: true,
        isLoggedIn: false,
        user: null,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default accountReducer;
