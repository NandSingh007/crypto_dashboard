import axios from 'axios';

// Action creator function to fetch exchange rate data from Coingecko API
export const fetchApiExchangeData = () => {
  return async (dispatch) => {
    try {
      // Send a GET request to the Coingecko API to get exchange rate data
      const response = await axios.get('https://api.coingecko.com/api/v3/exchange_rates');

      // Dispatch a success action with the fetched data
      dispatch({
        type: 'FETCH_API8_DATA_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      // Dispatch a failure action if there is an error
      dispatch({
        type: 'FETCH_API8_DATA_FAILURE',
        payload: error.message,
      });
    }
  };
};





// import axios from 'axios';

// export const fetchApiExchangeData = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(' https://api.coingecko.com/api/v3/exchange_rates');
//       dispatch({
//         type: 'FETCH_API8_DATA_SUCCESS',
//         payload: response.data,
//       });
//     } catch (error) {
//       dispatch({
//         type: 'FETCH_API8_DATA_FAILURE',
//         payload: error.message,
//       });
//     }
//   };
// };

// // ActionApiTwo 