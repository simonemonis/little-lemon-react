import { initializeTimes, updateTimes } from "../reducers/timesReducer";
import { fetchAPI } from "../api";

jest.mock("../api", () => ({
  fetchAPI: jest.fn(),
}));

test("initializeTimes returns available times", () => {
  fetchAPI.mockReturnValue(["17:00", "18:00"]);

  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns same state for unknown action", () => {
  const state = ["17:00"];
  const action = { type: "UNKNOWN" };

  const result = updateTimes(state, action);
  expect(result).toEqual(state);
});

test("updateTimes updates times when date changes", () => {
  fetchAPI.mockReturnValue(["19:00", "20:00"]);

  const action = {
    type: "UPDATE_DATE",
    payload: "2025-01-01",
  };

  const result = updateTimes([], action);
  expect(result).toEqual(["19:00", "20:00"]);
});
