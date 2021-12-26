import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const TickerBar = observer(() => {
    const {stock} = useContext(Context)
    console.log('TickerBar')
    console.log(stock)
    console.log(stock.tickers)
    return (
        <Row className="d-flex">
            {stock.tickers.map(ticker =>
                <Card
                    style={{cursor: 'pointer', width:"inherit"}}
                    key={ticker._id}
                    className="p-1"
                    onClick={() => stock.setSelectedTicker(ticker)}
                    border={ticker._id === stock.selectedTicker._id ? 'danger' : 'light'}
                >
                    {ticker.name}
                </Card>
            )}
        </Row>
    );
});

export default TickerBar;