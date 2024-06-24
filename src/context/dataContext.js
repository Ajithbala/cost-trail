import React, { createContext, useEffect, useState } from 'react';

import database from '../firebase';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [expenseData, setExpenseData] = useState([]);

  const fetchData = () => {
    const usersRef = database.ref('expenses');
    usersRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log('Snapshot data:', data);
      if (data) {
        const usersArray = Object.entries(data).map(([id, userData]) => ({ id, ...userData }));
        setExpenseData(usersArray);
      } else {
        setExpenseData([]);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ expenseData, fetchData,setExpenseData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;