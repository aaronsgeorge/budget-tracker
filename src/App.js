import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import { auth, db } from "./firebase";
import { collection, getDocs,doc } from "firebase/firestore";

function App() {
    const [data,setData]=useState([]);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserName(user.displayName);
            } else {
                setUserName("");
            }
        });
    }, []);

	const getData = async () => {
		try {
			const querySnapshot = await getDocs(collection(db, 'budget'));
			const jsonData = querySnapshot.docs.map(doc => doc.data());
			// console.log(jsonData);
			setData(jsonData);
		} catch (error) {
			console.log(error);
		}
		
	};
	

    const handlePress = async() => {
        console.log("working");
        await getData();

    };

    return (
        <AppProvider>
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/" element={<Home name={userName} />} />
                    </Routes>
                </Router>

                <h1 className='mt-3'>My Budget Planner</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                </div>
                <h3 className='mt-3'>Expenses</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList  jsonData={data} /> 
                    </div>
                </div>
                <h3 className='mt-3'>Add Expense</h3>
                <button onClick={handlePress}>Hi</button>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AddExpenseForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
}

export default App;
