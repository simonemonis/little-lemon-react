// api.js

export function fetchAPI(date) {
  // Mock available times
  const times = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];

  return times;
}

export function submitAPI(formData) {
  // Always returns true for now
  return true;
}
