import { ADD_GENRES } from "../actions";

const initialState = {
  genres: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_GENRES:
      return {
        ...state,
        genres: action.payload.genres,
      };
    default:
      return {
        ...state,
      };
  }
}
