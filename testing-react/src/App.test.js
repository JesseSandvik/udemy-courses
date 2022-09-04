import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelCaseWithSpaces } from "./App";

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
  const disableColorButtonCheckbox = screen.getByRole("checkbox", {
    name: /disable button/i,
  });
  expect(disableColorButtonCheckbox).not.toBeChecked();
});
test("Checkbox disables button on first click and enables on second click", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  const disableColorButtonCheckbox = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  fireEvent.click(disableColorButtonCheckbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(disableColorButtonCheckbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);
  fireEvent.click(disableColorButtonCheckbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(disableColorButtonCheckbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});
test("Disabled button has gray background and reverts to red", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  const disableColorButtonCheckbox = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  fireEvent.click(disableColorButtonCheckbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(disableColorButtonCheckbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});
test("Clicked disabled button has gray background and reverts to blue", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  const disableColorButtonCheckbox = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  fireEvent.click(colorButton);
  fireEvent.click(disableColorButtonCheckbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(disableColorButtonCheckbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelCaseWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("works for multiple capital letters", () => {
    expect(replaceCamelCaseWithSpaces("MediumVioletRed")).toBe(
      "Medium Violet Red"
    );
  });
});
