// actions

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';


//reducer

const initialState = {
  fetching: false,
  cat: null,
  error: null,
};

export function reducer (state= initialState, action) {
  switch(action.type) {
    case 'REQUEST':
      return {
        ...state,
        fetching: true,
        error: null,
      }
      case 'SUCCESS': 
      return {
        ...state,
        fetching: false,
        cat: action.cat,
        error: null,
        }
      case 'FAILURE':
        return {
          ...state,
          fetching: false,
          cat: null,
          error: action.error,
        }
      default:
        return state;
  }
}

