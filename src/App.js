import React from 'react';
import CrudComponent from './components/CrudComponent';
import AddEpenseFormComponent from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChartComponent from './components/ChartComponenet';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ExcelExportComponent from './components/ExcelExport';
function App() {

  
  return (
    <BrowserRouter>
    <div className="App">

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Cost Trail</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/chart">Charts</Nav.Link>
            <Nav.Link href="/filter">Filter</Nav.Link>
            <Nav.Link href="/export">Export</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


      <Routes>
        <Route path="/" element={<ExpenseList />} />
        <Route path="/chart" element={<ChartComponent />} />
        <Route path="/Export" element={<ExcelExportComponent/>} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
