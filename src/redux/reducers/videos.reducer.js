import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  // RELATED_VIDEO_FAIL,
  // RELATED_VIDEO_REQUEST,
  // RELATED_VIDEO_SUCCESS,
  // SELECTED_VIDEO_FAIL,
  // SELECTED_VIDEO_REQUEST,
  // SELECTED_VIDEO_SUCCESS,
} from "../actionType";

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
  activeCategory: "All",
};

export const homeVideosReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:
          state.activeCategory === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };

    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

// const initialSelectedVideoState = {
//   loading: true,
//   video: null,
// };

//   export const selectedVideoReducer = (state = initialSelectedVideoState, action) => {
//     const { payload, type } = action;

//     switch (type) {
//       case SELECTED_VIDEO_REQUEST:
//         return {
//           ...state,
//           loading: true,
//         };

//       case SELECTED_VIDEO_SUCCESS:
//         return {
//           ...state,
//           video: payload,
//           loading: false,
//         };

//       case SELECTED_VIDEO_FAIL:
//         return {
//           ...state,
//           video: null,
//           loading: false,
//           error: payload,
//         };

//       default:
//         return state;
//     }
//   };

//   const initialRelatedVideoState = {
//     loading: true,
//     videos: [],
//   };

//   export const relatedVideoReducer = (state = initialRelatedVideoState, action) => {
//     const { payload, type } = action;

//     switch (type) {
//       case RELATED_VIDEO_REQUEST:
//         return {
//           ...state,
//           loading: true,
//         };

//       case RELATED_VIDEO_SUCCESS:
//         return {
//           ...state,
//           videos: payload,
//           loading: false,
//         };

//       case RELATED_VIDEO_FAIL:
//         return {
//           ...state,
//           loading: false,
//           error: payload,
//         };

//       default:
//         return state;
//     }
//   };
