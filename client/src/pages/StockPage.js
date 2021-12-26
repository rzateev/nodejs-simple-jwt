import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOneStock} from "../http/stockAPI";

const StockPage = () => {
    const [stock,setStock] = useState({info:[]})
    const {id} = useParams()

    useEffect(()=> {
            fetchOneStock(id).then(data => setStock(data))
    },[])
    return (
        <Container className={'mt-3'}>
            <Row>
            <Col md={4}>
                <Row className="d-flex flex-column align-items-center">
                    <h2>{stock.ticker}</h2>
                        <div>{stock.datetime}</div>
                        <div>{stock.open}</div>
                        <div>{stock.high}</div>
                        <div>{stock.low}</div>
                        <div>{stock.close}</div>
                        <div>{stock.volume}</div>
                </Row>
            </Col>
            </Row>
        </Container>
    );
};

export default StockPage;