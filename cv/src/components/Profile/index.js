import React from 'react'
import './style.css'
// eslint-disable-next-line
export default function Profile() {
    return (
        <div className="Prof">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="img" />
            <br/>
            <h2>Najla Hamdan</h2>
            <h4>fresh graduated 2021</h4>
              
            <p> 📍 Al Qassim Buridah</p>
                ✉️ <a href="jonbloomer@gmail.com">  aznagla380@gmail.com  </a>
                <br/> 
                <br/>
               
         <p>   
         <a href="https://twitter.com/NajlaHamdan_">
        <img src="https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png" alt="img" className="icons"/>
        </a>
        <a href="https://github.com/NajlaHamdan">
        <img src="https://icons-for-free.com/iconfiles/png/512/color+github+icon-1320168272982426740.png" alt="img" className="icons"/>
         </a> 
          </p>
          <br/>
          <p>This site was created using react js</p>
        </div>
    )
}
