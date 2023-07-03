import axios from 'axios';

// Action creator function to fetch data from Coingecko API
export const fetchApi3Data = ({ name, currency, day }) => {
  return async (dispatch) => {
    try {
      // Send a GET request to the Coingecko API with the specified parameters
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=${currency}&days=${day}`);

      // Dispatch a success action with the fetched data
      dispatch({
        type: 'FETCH_API3_DATA_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      // Dispatch a failure action if there is an error
      dispatch({
        type: 'FETCH_API3_DATA_FAILURE',
        payload: error.message,
      });
    }
  };
};





// import axios from 'axios';

// export const fetchApi3Data = ({name,currency,day}) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=${currency}&days=${day}`);
//       dispatch({
//         type: 'FETCH_API3_DATA_SUCCESS',
//         payload: response.data,
//       });
//     } catch (error) {
//       dispatch({
//         type: 'FETCH_API3_DATA_FAILURE',
//         payload: error.message,
//       });
//     }
//   };
// };
// // ActionApiThree 