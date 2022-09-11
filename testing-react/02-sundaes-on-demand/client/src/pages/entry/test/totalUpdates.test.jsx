import { fireEvent, render, screen } from "../../../test-utils/test-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";

test("Update scoop subtotal when scoops change", async () => {
    render(<Options optionType="scoops" />);

    // make sure it starts at $0.00
const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false });

expect(scoopsSubtotal).toHaveTextContent("0.00");
    // update vanilla scoops to 1 and check subtotal
const vanillaInput = await screen.findByRole("spinbutton", { name: "Vanilla" });
userEvent.clear(vanillaInput);
userEvent.type(vanillaInput, "1");
expect(scoopsSubtotal).toHaveTextContent("2.00");
    // update chocolate scoops to 2 and check subtotal
const chocolateInput = await screen.findByRole("spinbutton", { name: "Chocolate" });
userEvent.clear(chocolateInput);
userEvent.type(chocolateInput, "2");
expect(scoopsSubtotal).toHaveTextContent("6.00");
});
test("Update topping subtotal when toppings change", async () => {
    render(<Options optionType="toppings" />);
    const toppingsSubtotal = screen.getByText("Toppings total: $", { exact: false });

    expect(toppingsSubtotal).toHaveTextContent("0.00");

    const hotFudgeCheckbox = await screen.findByRole("checkbox", { name: /hot fudge/i });

    fireEvent.click(hotFudgeCheckbox);

    expect(toppingsSubtotal).toHaveTextContent("1.50");

    const peanutButterCupCheckboxes = await screen.findByRole("checkbox", { name: /peanut butter cups/i });

    fireEvent.click(peanutButterCupCheckboxes);

    expect(toppingsSubtotal).toHaveTextContent("3.00");

    fireEvent.click(hotFudgeCheckbox);

    expect(toppingsSubtotal).toHaveTextContent("1.50");
});