import { ADD_HOME_SECTIONS} from "../actions";

const initialState = {
    sections: [],
  };

  export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_HOME_SECTIONS:
        return {
          ...state,
          sections: action.payload.sections,
        };
      default:
        return {
          ...state,
        };
    }
  }
  