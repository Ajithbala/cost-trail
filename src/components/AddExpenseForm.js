import React, { useState, useEffect, useRef } from 'react';
import { Button, Modal, Form,Dropdown } from 'react-bootstrap';
import { forwardRef, useImperativeHandle } from 'react';
import { createData,updateExpenseData } from '../service/firebaseService';

const AddEpenseFormComponent = forwardRef((props, ref) => {
    const [show, setShow] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const [formData, setFormData] = useState({ name: "", type: "Choose any Option ", date: "", amount: 0, id:'' });
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useImperativeHandle(ref, () => ({
        handleShow,setFormData,setIsAdd
      }));
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
       // id:props.dataCount
      });
    };

    const handleDropdownChange = (type) => {
        setFormData({
          ...formData,
          type,
        });
      };
  
    const handleSubmit = async() => {
      // Handle form submission here, e.g., send data to server
      debugger;
      if(isAdd){
      console.log(formData);
      //addExpenseData(formData);
      console.log(props.dataCount);
      //setFormData({...formData,id:props.dataCount })
      await createData('expenses', formData, props.dataCount);
     // await createData('expenses', formData);
      handleClose(); // Close the modal after submission
      } else {
        console.log(formData);
        await updateExpenseData('expenses',formData.id,formData);
        handleClose(); // Close the modal after submission
      }

    };
  
    return (
      <>
  <div >
        <Modal ref={ref} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formExpenseName">
                <Form.Label>Expense Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Expense name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formDropdown">
              <Form.Label>Expense Type</Form.Label>
              <Dropdown className='w-3'  onSelect={handleDropdownChange}>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  {formData.type || "Choose any Option "}
                </Dropdown.Toggle>
                <Dropdown.Menu  style={{height:"200px", overflow:"scroll"}}>
                  <Dropdown.Item  eventKey="Choose any Option">Choose any Option </Dropdown.Item>
                  <Dropdown.Item eventKey="fuel">fuel</Dropdown.Item>
                  <Dropdown.Item eventKey="Grocery">Grocery</Dropdown.Item>
                  <Dropdown.Item eventKey="Baby care products">Baby care products</Dropdown.Item>
                  <Dropdown.Item eventKey="diet foods">diet foods</Dropdown.Item>
                  <Dropdown.Item eventKey="home appliances">home appliances</Dropdown.Item>
                  <Dropdown.Item eventKey="vehicle Maintence">vehicle Maintence</Dropdown.Item>
                  <Dropdown.Item eventKey="food">food</Dropdown.Item>
                  <Dropdown.Item eventKey="cloths">cloths</Dropdown.Item>
                  <Dropdown.Item eventKey="Medical">Medical</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>

              <Form.Group controlId="formExpenseDate">
                <Form.Label>Expense Type</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter Expense Date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formExpenseDate">
                <Form.Label>Expense Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Expense Amount"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
      </>
    );
  });
export default AddEpenseFormComponent;