import React, { useState, useEffect } from 'react';
import database from '../firebase';

 const CrudComponent = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = database.ref('items'); // Access 'ref' from 'database'
      dbRef.on('value', (snapshot) => {
        const items = snapshot.val();
        if (items) {
          console.log(items)
          setData(Object.entries(items));
        } else {
          setData([]);
        }
      });
    };

    fetchData();

    return () => database.ref('items').off('value'); // Access 'ref' from 'database'
  }, []);

  // Rest of the component...
}
export default CrudComponent;