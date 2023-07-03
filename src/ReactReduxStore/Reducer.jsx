// Initial state of the data
const initialState = {
  api1Data: [], // Data from API 1
  api2Data: [], // Data from API 2
  api3Data: [], // Data from API 3
  api4Data: [], // Data from API 4
  api5Data: [], // Data from API 5
  api6Data: [], // Data from API 6
  api7Data: [], // Data from API 7
  api8Data: [], // Data from API 8
  error: null,  // Error message
};

// Data reducer function
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_API1_DATA_SUCCESS':
      return {
        ...state,
        api1Data: action.payload, // Update API 1 data
        error: null, // Clear error message
      };
    case 'FETCH_API1_DATA_FAILURE':
      return {
        ...state,
        api1Data: [], // Clear API 1 data
        error: action.payload, // Update error message
      };
    case 'FETCH_API2_DATA_SUCCESS':
      return {
        ...state,
        api2Data: action.payload, // Update API 2 data
        error: null, // Clear error message
      };
    case 'FETCH_API2_DATA_FAILURE':
      return {
        ...state,
        api2Data: [], // Clear API 2 data
        error: action.payload, // Update error message
      };
    case 'FETCH_API3_DATA_SUCCESS':
      return {
        ...state,
        api3Data: action.payload, // Update API 3 data
        error: null, // Clear error message
      };
    case 'FETCH_API3_DATA_FAILURE':
      return {
        ...state,
        api3Data: [], // Clear API 3 data
        error: action.payload, // Update error message
      };
    case 'FETCH_API4_DATA_SUCCESS':
      return {
        ...state,
        api4Data: action.payload, // Update API 4 data
        error: null, // Clear error message
      };
    case 'FETCH_API4_DATA_FAILURE':
      return {
        ...state,
        api4Data: [], // Clear API 4 data
        error: action.payload, // Update error message
      };
    case 'FETCH_API5_DATA_SUCCESS':
      return {
        ...state,
        api5Data: action.payload, // Update API 5 data
        error: null, // Clear error message
      };
    case 'FETCH_API5_DATA_FAILURE':
      return {
        ...state,
        api5Data: [], // Clear API 5 data
        error: action.payload, // Update error message
      };
    case 'FETCH_API6_DATA_SUCCESS':
      return {
        ...state,
        api6Data: action.payload, // Update API 6 data
        error: null, // Clear error message
      };
    case 'FETCH_API6_DATA_FAILURE':
      return {
        ...state,
        api6Data: [], // Clear API 6 data
        error: action.payload, // Update error message
      };
    case 'FETCH_API7_DATA_SUCCESS':
      return {
        ...state,
        api7Data: action.payload, // Update API 7 data
        error: null, // Clear error message
      };
    case 'FETCH_API7_DATA_FAILURE':
      return {
        ...state,
        api7Data: [], // Clear API 7 data
        error: action.payload, // Update error message
      };
    case 'FETCH_API8_DATA_SUCCESS':
      return {
        ...state,
        api8Data: action.payload, // Update API 8 data
        error: null, // Clear error message
      };
    case 'FETCH_API8_DATA_FAILURE':
      return {
        ...state,
        api8Data: [], // Clear API 8 data
        error: action.payload, // Update error message
      };
    default:
      return state; // Return current state if action type is not recognized
  }
};

export default dataReducer;















// const initialState = {
//   api1Data: [],
//   api2Data: [],
//   api3Data: [],
//   api4Data: [],
//   api5Data: [],
//   api6Data: [],
//   api7Data: [],
//   api8Data: [],
//     error: null
// };

// const dataReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'FETCH_API1_DATA_SUCCESS':
//       return {
//         ...state,
//         api1Data: action.payload,
//         error: null,
//       };
//     case 'FETCH_API1_DATA_FAILURE':
//       return {
//         ...state,
//         api1Data: [],
//         error: action.payload,
//       };
//     case 'FETCH_API2_DATA_SUCCESS':
//       return {
//         ...state,
//         api2Data: action.payload,
//         error: null,
//       };
//     case 'FETCH_API2_DATA_FAILURE':
//       return {
//         ...state,
//         api2Data: [],
//         error: action.payload,
//       };
//     case 'FETCH_API3_DATA_SUCCESS':
//       return {
//         ...state,
//         api3Data: action.payload,
//         error: null,
//       };
//     case 'FETCH_API3_DATA_FAILURE':
//       return {
//         ...state,
//         api3Data: [],
//         error: action.payload,
//       };
//     case 'FETCH_API4_DATA_SUCCESS':
//       return {
//         ...state,
//         api4Data: action.payload,
//         error: null,
//       };
//     case 'FETCH_API4_DATA_FAILURE':
//       return {
//         ...state,
//         api4Data: [],
//         error: action.payload,
//       };
//     case 'FETCH_API5_DATA_SUCCESS':
//       return {
//         ...state,
//         api5Data: action.payload,
//         error: null,
//       };
//     case 'FETCH_API5_DATA_FAILURE':
//       return {
//         ...state,
//         api5Data: [],
//         error: action.payload,
//       };
//     case 'FETCH_API6_DATA_SUCCESS':
//       return {
//         ...state,
//         api6Data: action.payload,
//         error: null,
//       };
//     case 'FETCH_API6_DATA_FAILURE':
//       return {
//         ...state,
//         api6Data: [],
//         error: action.payload,
//       };
//     case 'FETCH_API7_DATA_SUCCESS':
//       return {
//         ...state,
//         api7Data: action.payload,
//         error: null,
//       };
//     case 'FETCH_API7_DATA_FAILURE':
//       return {
//         ...state,
//         api7Data: [],
//         error: action.payload,
//       };
//       case 'FETCH_API8_DATA_SUCCESS':
//       return {
//         ...state,
//         api8Data: action.payload,
//         error: null,
//       };
//     case 'FETCH_API8_DATA_FAILURE':
//       return {
//         ...state,
//         api8Data: [],
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default dataReducer;
