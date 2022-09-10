import { render, screen } from "@testing-library/react";
import Options from "../Options";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";

test("displays image for each scoop from the server", async () => {
    render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

    // find the images
    // regex $ here checks if this string occurs at the end of the string
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });

    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map(element => element.alt);
    // arrays and objects have to use the 'toEqual' matcher
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
test("displays image for each topping from the server", async () => {
    render(<Options optionType="toppings" />);

    const toppingImages = await screen.findAllByRole("img", { name: /topping$/i });

    expect(toppingImages).toHaveLength(3);

    const altText = toppingImages.map(topping => topping.alt);

    expect(altText).toEqual(["Hot fudge topping", "Peanut butter cups topping", "Gummi bears topping"]);
});