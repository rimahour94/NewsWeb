import React,{useEffect} from 'react'
import axios from "axios"


function Apii() {

    const options = {
      method: 'GET',
      url: 'https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php',
      params: {completedlimit: '5', inprogresslimit: '5', upcomingLimit: '5'},
      headers: {
        'x-rapidapi-key': 'f83c12101emsh9b304fd2fa0c1f9p13dc72jsn21d88b3d63e0',
        'x-rapidapi-host': 'dev132-cricket-live-scores-v1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    return (
        <div>
           <h1>Cricket
               </h1> 
        </div>
    )
}

export default Apii





