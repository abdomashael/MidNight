import { ADD_THUMBNAILS, CURRENT_THUMBNAIL, ADD_TRENDS } from "../actions";

const initialState = {
  currentThumbnailIdx: 0,
  allThumbnails: [],
  trends:[]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_THUMBNAILS:
      return {
        ...state,
        allThumbnails: action.payload.thumbnails,
      };

    case CURRENT_THUMBNAIL:
      return {
        ...state,
        currentThumbnailIdx: action.payload.thumbnailIdx,
      };
      case ADD_TRENDS:
        return{
          ...state,
          trends:action.payload.trends
        }
    default:
      return {
        ...state,
      };
  }
}
