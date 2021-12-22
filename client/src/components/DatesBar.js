import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const DatesBar = observer(() => {
    const {stock} = useContext(Context)
    console.log("DatesBar")
    console.log(stock.selectedDateOfTrade.id)
    return (
        <ListGroup>
            {stock.datesOfTrade.map(dateItem =>
                <ListGroup.Item
                    style={{cursor: 'pointer', width: "auto"}}
                    active={dateItem.id === stock.selectedDateOfTrade.id }
                    onClick={() => stock.setSelectedDateOfTrade(dateItem)}
                    key={dateItem.id}
                >
                    {dateItem.date}
                </ListGroup.Item>

            )}
        </ListGroup>
    );
});

export default DatesBar;