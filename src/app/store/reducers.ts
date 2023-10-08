import { SET_DEMANDS, ADD_DEMAND, UPDATE_DEMAND, DELETE_DEMAND } from './types';

interface Action {
    type:string; 
    payload:any;
}

const initialState = {
  demands: [],
};

const demandReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_DEMANDS:
      return {
        ...state,
        demands: action.payload,
      };
    case ADD_DEMAND:
      return {
        ...state,
        demands: [...state.demands, action.payload],
      };
    case UPDATE_DEMAND:
     
      return state;
    case DELETE_DEMAND:

      return state;
    default:
      return state;
  }
};

export default demandReducer;
