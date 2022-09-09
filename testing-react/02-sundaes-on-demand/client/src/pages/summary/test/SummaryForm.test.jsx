import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

    userEvent.click(checkbox);

    expect(button).toBeEnabled();

    userEvent.click(checkbox);

    expect(button).toBeDisabled();
});
test("popover responds to hover", async () => {
    render(<SummaryForm />);
    // popover starts out hidden
    const nullPopover = screen.queryByText(/No ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();
    // popover appears when we mouse over the checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);

    userEvent.hover(termsAndConditions);

    const popover = screen.getByText(/No ice cream will actually be delivered/i);

    expect(popover).toBeInTheDocument();
    // popover disappears when we mouse out
    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() => screen.queryByText(/No ice cream will actually be delivered/i));
});