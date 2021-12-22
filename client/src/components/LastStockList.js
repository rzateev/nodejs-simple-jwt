import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Table} from "react-bootstrap";

const LastStockList = observer(() => {
    const {stock} = useContext(Context)

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Ticker</th>
                <th>Date</th>
                <th>Open</th>
                <th>High</th>
                <th>Low</th>
                <th>Close</th>
                <th>Volume</th>
            </tr>
            </thead>
            {stock.lastStocks.map(stockItem =>
            <tbody key={stockItem._id}>
                    <tr >
                        <td >{stockItem.id}</td>
                        <td>{stockItem.ticker}</td>
                        <td>{stockItem.datetime}</td>
                        <td>{stockItem.open}</td>
                        <td>{stockItem.high}</td>
                        <td>{stockItem.low}</td>
                        <td>{stockItem.close}</td>
                        <td>{stockItem.volume}</td>
                    </tr>
            </tbody>
            )}

        </Table>
    );
});

export default LastStockList;