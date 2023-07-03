import axios from 'axios';

// Action creator function to fetch supported currencies data from Coingecko API
export const fetchDataOfSimpleCoin = () => {
  return async (dispatch) => {
    try {
      // Send a GET request to the Coingecko API to get supported currencies data
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies');

      // Dispatch a success action with the fetched data
      dispatch({
        type: 'FETCH_API7_DATA_SUCCESS',
        payload: response.data
      });
    } catch (error) {
      // Dispatch a failure action if there is an error
      dispatch({
        type: 'FETCH_API7_DATA_FAILURE',
        payload: error.message
      });
    }
  };
};



// import axios from 'axios';

// export const fetchDataOfSimpleCoin = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies');
//       dispatch({
//         type: 'FETCH_API7_DATA_SUCCESS',
//         payload: response.data
//       });
//     } catch (error) {
//       dispatch({
//         type: 'FETCH_API7_DATA_FAILURE',
//         payload: error.message
//       });
//     }
//   };
// };

// // ActionApiOne.jsx 


