
import axios from 'axios';

// Action creator function to fetch data from Coingecko API
export const fetchData = () => {
  return async (dispatch) => {
    try {
      // Send a GET request to the Coingecko API
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');

      // Dispatch a success action with the fetched data
      dispatch({
        type: 'FETCH_API1_DATA_SUCCESS',
        payload: response.data
      });
    } catch (error) {
      // Dispatch a failure action if there is an error
      dispatch({
        type: 'FETCH_API1_DATA_FAILURE',
        payload: error.message
      });
    }
  };
};


// import axios from 'axios';

// export const fetchData = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
//       dispatch({
//         type: 'FETCH_API1_DATA_SUCCESS',
//         payload: response.data
//       });
//     } catch (error) {
//       dispatch({
//         type: 'FETCH_API1_DATA_FAILURE',
//         payload: error.message
//       });
//     }
//   };
// };

// // ActionApiOne.jsx 


