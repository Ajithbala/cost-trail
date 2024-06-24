import React, { useContext } from 'react';
import ReactExport from "react-export-excel";
import DataContext from "../context/dataContext";

function ExcelExportComponent() {

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
const {expenseData} = useContext(DataContext);
return (
            <ExcelFile>
                <ExcelSheet data={expenseData} name="Expenses">
                    <ExcelColumn label="Name" value="name"/>
                    <ExcelColumn label="type" value="type"/>
                    <ExcelColumn label="date" value="date"/>
                    <ExcelColumn label="price" value="price"/>
                </ExcelSheet>
            </ExcelFile>
        );
    }

export default ExcelExportComponent;