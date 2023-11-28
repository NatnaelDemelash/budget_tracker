import { createContext, useReducer } from "react";

const initialState = {
  budget: 4500,
  expenses: [
    { id: 11, name: "Groceries", cost: 250 },
    { id: 12, name: "Entertaiment", cost: 500 },
    { id: 13, name: "Car Services", cost: 930 },
  ],
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
