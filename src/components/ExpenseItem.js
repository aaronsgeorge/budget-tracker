import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { doc, deleteDoc } from 'firebase/firestore'; 
import { auth, db } from "../firebase";

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	// const handleDeleteExpense = async () => {
	// 	// dispatch({
	// 	// 	type: 'DELETE_EXPENSE',
	// 	// 	payload: props.name,
	// 	// });
	// 	const docRef = doc(db, 'budget', 'expense'); // Assuming props.id is the document ID
    //     await deleteDoc(docRef);
	// };

	return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span class='badge badge-primary badge-pill mr-3'><h5 style={{color: "blue"}}>₹{props.cost}</h5></span>
				{/* <<TiDelete size='1.5em' onClick={handleDeleteExpense} />> */}
				{/* <button onClick={handleDeleteExpense}>Delete</button> */}
			</div>
		</li>
	);
};

export default ExpenseItem;
