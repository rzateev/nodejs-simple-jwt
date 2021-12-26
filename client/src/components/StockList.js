import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Table} from "react-bootstrap";

const StockList = observer(() => {
    const {stock} = useContext(Context)
    console.log('StockList')
    console.log(stock.stocks)
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
            {stock.stocks.map(stockItem =>
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
        // <Row className="flex-row">
        //     {stock.stocks.map(stockItem =>
        //         <StockItem key={stockItem.id} stock={stockItem}/>
        //     )}
        // </Row>
    );
});

export default StockList;