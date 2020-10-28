import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import SearchPage from "./paginas/SearchPage";

const Navigatie = () => {
    return <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Small Webshop</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Laptops</Nav.Link>
                <Nav.Link href="#features">Smartphones</Nav.Link>
                <Nav.Link href="#pricing">Keukens</Nav.Link>
                <Nav.Link href="#pricing">Wasmachines</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
            </Nav>
        </Navbar>
    </div>
}



ReactDOM.render(

    <div>
        <Navigatie/>
        <SearchPage/>
    </div>,
    document.getElementById('root')
);

