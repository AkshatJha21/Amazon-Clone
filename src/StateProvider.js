import React, { createContext, useContext, useReducer} from "react";

// Data Layer Preparation
export const StateContext = createContext();

// Wrap app and provide data layer
export const StateProvider = ({ reducer, initialState, children}) => (
       <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
       </StateContext.Provider>
);

// Pull info from data layer
export const useStateValue = () => useContext(StateContext);