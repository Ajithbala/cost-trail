import { useState, useRef, useEffect, useContext } from "react";
import AddEpenseFormComponent from "./AddExpenseForm";
import {deleteExpenseData} from "../service/firebaseService";
import database from '../firebase';
import DataContext from "../context/dataContext";
function ExpenseList() {
    const {expenseData} = useContext(DataContext);
    //const [expenseData, setExpenseData] = useState([]);
    const childRef = useRef(null);

    const [selectedData, setSelectedData] = useState({});

    //  useEffect(() => {
    //     const usersRef = database.ref('expenses');
    //     usersRef.on('value', (snapshot) => {
    //       const data = snapshot.val();
    //       console.log('Snapshot data:', data);
    //       if (data) {
    //         const usersArray = Object.entries(data).map(([id, userData]) => ({ id, ...userData }));
    //         setExpenseData(usersArray);
    //       } else {
    //         setExpenseData([]);
    //       }
    //     });
        
    //   }, []);


    const addExpense = (data)=>{
        if(data.name && childRef.current){
            childRef.current.setFormData(data);
            childRef.current.setIsAdd(false);
            childRef.current && childRef.current.handleShow();
        } else{
            childRef.current.setFormData({});
            childRef.current.setIsAdd(true);
            childRef.current && childRef.current.handleShow();
        }
        
    }

    const removeExpenseData = (data)=>{
        deleteExpenseData('expenses',data.id);
    }

    const calculateTotalExpense = () => {
        let sum = 0;
        expenseData && expenseData.length && expenseData.map((data) => {
            sum = sum + parseFloat(data.price);
        })
        return sum;
    }

    const generateExpenseList = (expenseData) => {
        return expenseData && expenseData.length && expenseData.map((data) => {
            return (<div>
                <div class="col-12">
                    <div class="alert alert-primary" role="alert">
                        <div class="d-flex justify-content-between">
                            <div>
                                {data.name}
                            </div>
                            <div>
                                {data.type}
                            </div>
                            <div>
                                {data.date}
                            </div>
                            <div>
                                {data.price}
                            </div>
                            <div>
                                <button  type="button" class="btn btn-danger p-1" onClick={(e)=>{
                                    removeExpenseData(data);
                                }}>
                                    <i class="bi bi-trash"></i>
                                </button>
                                <span className="p-2">
                                    <button type="button" onClick={(e)=>{
                                                addExpense(data);
                                    }} class="btn btn-primary p-1">
                                        <i class="bi bi-pencil-fill"></i>
                                    </button>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        })
    }
    return (<div className="container">
        <AddEpenseFormComponent ref={childRef} editData={selectedData || {} } dataCount={expenseData ? expenseData.length : 0 } ></AddEpenseFormComponent>
        <div className="card">
            <div className="card-body">
             <div>   
            <button type="button" onClick={addExpense} className="btn btn-success p-1 float-start">
                                      Add Expense
                                      <i class="bi bi-plus-circle p-1"></i>
                                    </button>
                                    </div>
                                    <div className="float-end badge bg-info text-dark p-2 me-3">Total: {calculateTotalExpense()}</div>
            </div>
            </div>
        <div className="card">
            <div className="card-body">
                <div class="row gx-1 gy-1">
                    <div class="col-12">
                        <div class="alert alert-danger" role="alert">
                            <div class="d-flex justify-content-between">
                                <div>
                                    Expense Name

                                </div>
                                <div>
                                    Expense Type
                                </div>
                                <div>
                                    Expense Date
                                </div>
                                <div>
                                    Expense Amount
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {generateExpenseList(expenseData)}
                </div>
            </div>
        </div>
    </div>
    );
}

export default ExpenseList;