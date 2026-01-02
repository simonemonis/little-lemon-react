import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders static text in BookingForm", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={jest.fn()}
    />
  );

  expect(screen.getByText("Choose date")).toBeInTheDocument();
  expect(screen.getByText("Choose time")).toBeInTheDocument();
  expect(screen.getByText("Number of guests")).toBeInTheDocument();
  expect(screen.getByText("Occasion")).toBeInTheDocument();
});
