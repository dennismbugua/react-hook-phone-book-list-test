import { ADD_BOOK } from "./enum";

let initialState = {
  data: [
    {
      first_name: "David",
      last_name: "Minkevych",
      phone_number: "0501000000"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
};
