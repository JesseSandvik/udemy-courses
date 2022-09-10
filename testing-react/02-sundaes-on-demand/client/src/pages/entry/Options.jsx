import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";

function Options({ optionType }) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
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
        <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
    ));

    if (error) {
        return <AlertBanner />
    }
  return (
    <Row>
        {optionItems}
    </Row>
  )
}

export default Options;