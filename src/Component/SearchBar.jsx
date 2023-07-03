import { useState, useEffect, useCallback } from 'react';
import { fetchApiData6 } from '../ReactReduxStore/ActionApiSearch';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/Searchbar.css";

const SearchBar = ({ onChildDataThree }) => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  // Fetch coin list data
  useEffect(() => {
    dispatch(fetchApiData6());
  }, [dispatch]);

  // Get coin list and error from Redux store
  const coinList = useSelector((state) => state.api6Data);
  const error = useSelector((state) => state.error);

  // const handleClick = (coinId) => {
  //   console.log(coinId);
  //   setSearchValue("");
  //   // Dispatch action here if needed
  // };
  const handleClick = useCallback((coinId) => {
    // console.log(coinId);
    onChildDataThree(coinId)
    setSearchValue("");
    // Dispatch action here if needed
  }, [onChildDataThree]);
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="conta">
      <input
        className="input"
        value={searchValue}
        placeholder="Search Crypto Currencies"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className={`search-output-conta ${searchValue ? "active" : ""}`}>
        {coinList &&
          coinList
            .filter((coin) => coin.name.includes(searchValue))
            .map((coin) => (
              <p
                className="search-output"
                onClick={() => handleClick(coin.id)}
                key={coin.id}
              >
                {coin.name}
              </p>
            ))}
      </div>
    </div>
  );
};

export default SearchBar;
