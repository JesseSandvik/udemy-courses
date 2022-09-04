import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton.textContent.toLowerCase()).toBe("change to red");
});
// the above test does this already, not necessary
// test("button has correct initial text", () => {});
test("initial conditions", () => {
  render(<App />);
  // check that button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: /change to blue/i,
  });

  expect(colorButton).toBeEnabled();

  // check that checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});
test("button disabled after checkbox is checked", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);

  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);

  expect(colorButton).toBeEnabled();
});
