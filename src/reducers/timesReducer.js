import { fetchAPI } from "../api";

export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_DATE":
      return fetchAPI(new Date(action.payload));
    default:
      return state;
  }
}
