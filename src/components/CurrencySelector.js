import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (e) => {
        dispatch({ type: 'CHG_CURRENCY', payload: e.target.value });
    };

    return (
        <div className="currency-selector">
            <select onChange={changeCurrency}>
                <option value="$">Dollar ($)</option>
                <option value="£">Pound (£)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Ruppee (₹)</option>
            </select>
        </div>
    );
};

export default CurrencySelector;
