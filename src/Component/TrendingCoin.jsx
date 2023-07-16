
// Import necessary dependencies from React and other libraries
import React from 'react';
import millify from "millify";
import '../styles/TrendingCoin.css';
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

// Define the TrendingCoin component
const TrendingCoin = ({ coin }) => {
    // Check if the price change is negative
    const Down = coin.price_change_percentage_24h < 0;

    // Render the TrendingCoin component
    return (
        <>
            <div className="main_div_of_trending_coin">
                <div className="trending_coin">
                    <div className="coins">
                        <div className="left_side_of_coin">
                            <div className="img_of_coin">
                                <img src={coin.image} alt="" width="30px" />
                                <div className='coin_name'>{coin.name}</div>
                            </div>
                            <div className='market_cap'>
                                <p className='market_cap'>Mkt.Cap ${millify(coin.market_cap)}</p>
                            </div>
                        </div>
                        <div className="right_side_of_coin">
                            <div className='percentage_cap'>
                                <span>
                                    {/* Render the appropriate icon based on the price change */}
                                    {Down ? (
                                        <ArrowDropDownOutlinedIcon color="error" style={{ fontSize: '28px' }}  />
                                    ) : (
                                        <ArrowDropUpOutlinedIcon color="success" style={{ fontSize: '30px' }} />

                                    )}
                                </span> {coin.price_change_percentage_24h.toFixed(4)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Export the TrendingCoin component as the default export
export default TrendingCoin;










// import React from 'react'
// import millify from "millify";
// import '../styles/TrendingCoin.css'
// import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
// import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
// const TrendingCoin = ({ coin }) => {
//     const Down = coin.price_change_percentage_24h < 0;
//     return (
//         <>
//             <div className="main_div_of_trending_coin">
//                 <div className="trending_coin">
//                     <div className="coins">
//                         <div className="left_side_of_coin">
//                             <div className="img_of_coin"><img src={coin.image} alt="" width="30px" /><div className='coin_name'>{coin.name}</div></div>
//                             <div className='market_cap'>
//                                 <p className='market_cap'>Mkt.Cap ${millify(coin.market_cap)}</p>
//                             </div>
//                         </div>
//                         <div className="right_side_of_coin">
//                             <div className='percentage_cap'><span>
//                                 {Down ? (
//                                     <ArrowDropDownOutlinedIcon color="error" fontSize="small" />
//                                 ) : (
//                                     <ArrowDropUpOutlinedIcon color="success" fontSize="small" />
//                                 )}
//                             </span> {coin.price_change_percentage_24h.toFixed(4)}</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default TrendingCoin