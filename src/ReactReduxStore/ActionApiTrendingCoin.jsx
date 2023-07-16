
import axios from 'axios';

// Action creator function to fetch market data for trending coins from Coingecko API
export const fetchApiData5 = ({currency}) => {
  return async (dispatch) => {
    try {
      // Send a GET request to the Coingecko API to fetch the market data for trending coins
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`);

      // Dispatch a success action with the fetched data
      dispatch({
        type: 'FETCH_API5_DATA_SUCCESS',
        payload: response.data
      });
    } catch (error) {
      // Dispatch a failure action if there is an error
      dispatch({
        type: 'FETCH_API5_DATA_FAILURE',
        payload: error.message
      });
    }
  };
};








// import axios from 'axios';
// export const fetchApiData5 = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en');
//       dispatch({
//         type: 'FETCH_API5_DATA_SUCCESS',
//         payload: response.data
//       });
//     } catch (error) {
//       dispatch({
//         type: 'FETCH_API5_DATA_FAILURE',
//         payload: error.message
//       });
//     }
//   };
// };

// // ActionApiOfTrending 
