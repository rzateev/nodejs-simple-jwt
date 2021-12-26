import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TickerBar from "../components/TickerBar";
import DatesBar from "../components/DatesBar";
import StockList from "../components/StockList";
import LastStockList from "../components/LastStockList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchTickers, fetchStocks, fetchLastStocks} from "../http/stockAPI"
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {stock} = useContext(Context)
    //console.log('Shop')
    useEffect(() => {
        fetchTickers().then(data=> stock.setTickers(data))
        fetchStocks(null, null, 0, 10).then(data=> {
            //console.log(data)
            stock.setStocks(data.rows)
            stock.setTotalCount(data.count)
        })
        fetchLastStocks().then(data=> {
            stock.setLastStocks(data)
        })
    }, [])

    useEffect(() => {
        fetchStocks(stock.selectedTicker.name, stock.selectedDateOfTrade.id, stock.page, 10).then(data=> {
            //console.log(data)
            stock.setStocks(data.rows)
            stock.setTotalCount(data.count)
        })

    },[stock.page, stock.selectedTicker, stock.selectedDateOfTrade,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <DatesBar/>
                </Col>
                <Col md={9}>
                    <LastStockList/>
                    <TickerBar/>
                    <StockList/>
                    <Pages/>
                </Col>

            </Row>
        </Container>
    );
});

export default Shop;