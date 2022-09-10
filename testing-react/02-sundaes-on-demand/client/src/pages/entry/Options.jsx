import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";
import { pricePerItem } from "../../constants/index";
import { useOrderDetails } from "../../contexts/OrderDetails";

function Options({ optionType }) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    const [OrderDetails, updateItemCount] = useOrderDetails();

    useEffect(() => {
        async function fetchOptions() {
            try {
                const response = await axios.get(`http://localhost:3030/${optionType}`);
                setItems(response.data);
            } catch (error) {
                setError(true);
            }
        }
        fetchOptions();
    }, [optionType]);

    // replace with topping option once available
    const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;

    const optionItems = items.map(item => (
        <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} updateItemCount={(itemName, newItemCount) => updateItemCount(itemName, newItemCount, optionType)} />
    ));
    const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

    if (error) {
        return <AlertBanner />
    }
  return (
    <>
    <h2>{title}</h2>
    <p>{pricePerItem[optionType]} each</p>
    <p>{title} total: {OrderDetails.totals[optionType]}</p>
    <Row>
        {optionItems}
    </Row>
    </>
  )
}

export default Options;