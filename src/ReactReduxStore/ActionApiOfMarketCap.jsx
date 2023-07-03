import axios from 'axios';

// Action creator function to fetch market data for coins from Coingecko API
export const fetchApiData4 = () => {
  return async (dispatch) => {
    try {
      // Send a GET request to the Coingecko API to get market data for coins
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=13&page=1&sparkline=false');

      // Dispatch a success action with the fetched data
      dispatch({
        type: 'FETCH_API4_DATA_SUCCESS',
        payload: response.data
      });
    } catch (error) {
      // Dispatch a failure action if there is an error
      dispatch({
        type: 'FETCH_API4_DATA_FAILURE',
        payload: error.message
      });
    }
  };
};








// import axios from 'axios';

// export const fetchApiData4 = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=13&page=1&sparkline=false');
//       dispatch({
//         type: 'FETCH_API4_DATA_SUCCESS',
//         payload: response.data
//       });
//     } catch (error) {
//       dispatch({
//         type: 'FETCH_API4_DATA_FAILURE',
//         payload: error.message
//       });
//     }
//   };
// };

// //   ActionApiFour.jsx