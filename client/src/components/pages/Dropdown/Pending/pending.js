import React from 'react';
import Requests from '../requests';
import Sidebar from '../../../layout/Sidebar/Sidebar'
import './pending.css'
const Pending = () => {

    return (
        <div>
            <div className='sid'> 
                  <Sidebar />
            </div>
            
             
            <div className='req'>
                <Requests />
            </div>
           

        </div>
    )
}

export default Pending ;