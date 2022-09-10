import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import axios from "axios";
import ScoopOption from "./ScoopOption";

function Options({ optionType }) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        async function fetchOptions() {
            try {
                const response = await axios.get(`http://localhost:3030/${optionType}`);
                setItems(response);
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
        fetchOptions();
    }, [optionType]);

    // replace with topping option once available
    const ItemComponent = optionType === "scoops" ? ScoopOption : null;

    const optionItems = items.map(item => (
        <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
    ));
  return (
    <Row>
        {optionItems}
    </Row>
  )
}

export default Options;