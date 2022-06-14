import { SET_LANGUAGE } from "../actions/index";
  
  const initialState = {
    language: "en",
  }
  
  export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_LANGUAGE: {
            return {
              language: payload
            }
        } 
      default:
        return state;
    }
  
  
  }
  