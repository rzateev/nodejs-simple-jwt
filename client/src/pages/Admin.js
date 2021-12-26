import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateTicker from "../components/modals/CreateTicker";

const Admin = () => {
	const [tickerVisible, setTickerVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
			<Button variant={"outline-dark"}
                    className="mt-2"
                    onClick={()=> setTickerVisible(true)}>
                Добавить ticker
            </Button>
            <CreateTicker show={tickerVisible} onHide={()=>setTickerVisible(false)}/>
        </Container>
    );
};

export default Admin;