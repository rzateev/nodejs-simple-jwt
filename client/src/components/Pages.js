import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination, Col} from "react-bootstrap";

const Pages = observer(() => {
    const {stock} = useContext(Context)
    const pageCount = Math.ceil(stock.totalCount / stock.limit)
    const pages = []

    console.log('Pages')
    for (let i = 0; i < pageCount-1; i++) {
        pages.push(i + 1)
    }

    return (
        <Col md={9} style={{width: 500}} >
        <Pagination className="mt-5">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={stock.page === page}
                    onClick = {() => stock.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
        </Col>
    );
});

export default Pages;