import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("displays image for each scoop from the server", async () => {
    render(<Options optionType="scoops" />);

    // find the images
    // regex $ here checks if this string occurs at the end of the string
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });

    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map(element => element.alt);
    // arrays and objects have to use the 'toEqual' matcher
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});