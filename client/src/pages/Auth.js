import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, APP_ROUTE} from "../Utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                const  data = await login(username, password)
            } else {
                const  data = await registration(username,password)
            }
            console.log(user)
            user.setUser(data)
            user.setIsAuth(true)
            history.push(APP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}>
            <Card style={{with: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
            <Form className="d-flex flex-column">
                <Form.Control
                    className="mt-3"
                    placeholder="Ввведите ваше имя..."
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Ввведите ваш пароль..."
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type='password'
                />
                <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    {isLogin ?
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                        </div>
                    }
                    <Button onClick={()=>click()}
                        className="align-self-end"
                        variant={"outline-success"}>
                        {isLogin ? "Войти": "Регистрация"
                        }
                    </Button>
                </Row>

            </Form>
            </Card>

        </Container>
    );
});

export default Auth;