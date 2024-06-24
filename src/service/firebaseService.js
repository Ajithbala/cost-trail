// import { firestore } from '../firebase';
import database from '../firebase';
export const getExpenseData = async () => {
    const dbRef = database.ref('expenses'); // Access 'ref' from 'database'
    dbRef.on('value', (snapshot) => {
      const items = snapshot.val();
      if (items) {
        //console.log(items)
        return items;
      } else {
       return [
    ]
      }
    });
}


export const createData = (path, data, key) => {
  return database.ref(`${path}`).push(data);
};

// export const readData = (path) => {
//   return database.ref(path).once('value');
// };

export const updateExpenseData = (path,key, newValue) => {
    database.ref(`${path}/${key}`).set(newValue);
}

export const deleteExpenseData = (path,key) => {
database.ref(`${path}/${key}`).remove();
};