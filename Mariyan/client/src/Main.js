import React from "react";
//import {BrowserRouter as Router} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default class Main extends React.Component {

    render() {
        return (
            <>
                <div>
                    <h1>Welcome</h1> <br/>

                    <Navbar bg="secondary" variant="dark">
                        <Container>
                                <Nav className="me-auto" variant="pills" defaultActiveKey="#home">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/login">Users</Nav.Link>
                                <Nav.Link href="/viewInquiry">Inquire</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>

                </div>
            </>
        )
    }
}