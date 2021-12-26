import React, {useContext} from 'react';
import {Context} from "../index";
import {Nav, Navbar} from "react-bootstrap"
import {Button, Container} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, APP_ROUTE} from "../Utils/consts";
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {login, registration} from "../http/userAPI";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    console.log("NavBar")

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)

    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:"white"}} to={APP_ROUTE}>Stocks history of my love tickers</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <Button
                            variant={'outline-light'}
                            onClick={()=>history.push(ADMIN_ROUTE)}
                        >Админ панель</Button>
                        <Button
                            variant={'outline-light'}
                            onClick={()=>logOut()}
                            className='ml-4'
                        >Выйти</Button>
                    </Nav>
                    :
                    <Nav className={"ml-auto"} style={{color: "white"}}>
                        {/*<Button variant={'outline-light'} onClick={()=>user.setIsAuth(true)}>Авторизация</Button>*/}
                        <Button variant={'outline-light'} onClick={()=>history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;