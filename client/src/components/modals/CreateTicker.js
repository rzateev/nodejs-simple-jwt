import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createTicker} from "../../http/stockAPI";

const CreateTicker = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addTicker = () => {
        console.log(value)
        createTicker({name: value}).then(data => setValue(''))
        onHide()
    }

    return (
        <Modal
            size="lg"
            centered
            onHide={onHide}
            show={show}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый ticker
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value = {value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название ticker-a"}
                    />

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addTicker}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTicker;