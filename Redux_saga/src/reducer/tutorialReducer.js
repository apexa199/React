const initialState = {
    
  data: [],
  isLoading: false,
  error: {},
};

export default (state = initialState, { type, payload }) => {

  switch (type) {

    case "GET_TUTORIAL_REQUESTED":
      return { ...state, isLoading: true };

    case "GET_TUTORIAL_SUCCESS":
      return { ...state, isLoading: false, data : payload };

    case "GET_TUTORIAL_FAILED":
      return { ...state, isLoading: true ,error : payload};

    default:
      return state;
  }
};
