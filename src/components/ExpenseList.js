import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';


const ExpenseList = (prop ) => {
	const { expenses } = useContext(AppContext);
	const {jsonData}=prop;
	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchTerm = event.target.value.toLowerCase();
		const searchResults = expenses.filter((expense) =>
		  Object.keys(expense).some((key) =>
			expense[key].toString().toLowerCase().includes(searchTerm)
		  )
		);
		setfilteredExpenses(searchResults);
	  };

	return (
		<>
			<input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<ul class='list-group mt-3 mb-3'>
			{jsonData.map((item, index) => (
        <div key={index}>
          {Object.entries(item).map(([key, value]) => (
           
					<ExpenseItem
						id={key}
						name={key}
						cost={value}
					/>
				))}
				</div>
				))}
			</ul>
		</>
	);
};

export default ExpenseList;
