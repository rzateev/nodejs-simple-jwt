import React from 'react';
import {Col} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {STOCK_ROUTE} from "../Utils/consts";

const StockItem = ({stock}) => {
    const history = useHistory()
    console.log('StockItem')
    return (
        <Col md={9} className={'mt-3'} onClick={()=>history.push(STOCK_ROUTE + '/' + stock.id)}>
                <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
					<div>{stock.datetime}</div>
					<div>{stock.high}</div>
					<div>{stock.low}</div>
					<div>{stock.close}</div>
					<div>{stock.volume}</div>
                </div>
                <div>
                    {stock.ticker}
                </div>
            {/*</Card>*/}
        </Col>
    );
};

export default StockItem;