import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Checkbox is unchecked by default", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i });
    const button = screen.getByRole("button", { name: /confirm order/i });

    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
});
test("Checking the checkbox enables button, Unchecking checkbox again disables button", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i });
    const button = screen.getByRole("button", { name: /confirm order/i });

    fireEvent.click(checkbox);

    expect(button).toBeEnabled();

    fireEvent.click(checkbox);

    expect(button).toBeDisabled();
});