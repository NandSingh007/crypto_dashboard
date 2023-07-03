import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useState, useEffect, useCallback } from 'react';
import { fetchData } from '../ReactReduxStore/ActionApiOfCoin';
import { useDispatch, useSelector } from 'react-redux';

function CurrencyDropdown({ onChildData2 }) {
  // State to store the selected currency
  const [currency, setCurrency] = useState('bitcoin');

  // Callback function to handle the currency selection
  const handleClick = useCallback((i) => {
    setCurrency(i);
    onChildData2(i);
  }, [onChildData2]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Selecting data from the Redux store
  const data1 = useSelector((state) => state.api1Data);
  const error = useSelector((state) => state.error);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Inline styles
  const buttonStyles = {
    backgroundColor: '#1c7471',
    border: '1px solid #eaeaea4b',
    padding: '8px 12px',
    color: 'white',
  };

  const dropdown = {
    width: '300px',
    height: '300px',
    overflow: 'auto',
    padding: '5px',
    fontSize: '15px',
  };

  return (
    <Dropdown>
      <Dropdown.Toggle style={buttonStyles} id="dropdown-basic">
        {currency}
      </Dropdown.Toggle>

      <Dropdown.Menu style={dropdown}>
        {data1.map((item, i) => (
          <Dropdown.Item key={i} onClick={() => handleClick(item.id)}>
            {item.id}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CurrencyDropdown;
