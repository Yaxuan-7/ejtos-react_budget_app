import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    // const { budget } = useContext(AppContext);
    const { currency, budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    const handleIncrease = () => {
        dispatch({ type: 'SET_BUDGET', payload: budget + 10 });
    };
    
    const handleDecrease = () => {
        dispatch({ type: 'SET_BUDGET', payload: budget - 10 });
    };
//     return (
// <div className='alert alert-secondary'>
// <span>Budget: £{budget}</span>
// <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
// </div>
//     );
// };
    return (
        <div className='alert alert-secondary'>
            <button onClick={handleDecrease}>-</button>
            <span>Budget: {currency}{budget}</span>
            <button onClick={handleIncrease}>+</button>
        </div>
    );
};
export default Budget;