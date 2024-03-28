import React from 'react';
import AskaroNevbar from './AskaroNevbar';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import './css/askaro.css';

function Askaro() {
  return (
    <div className='Askaro'>  
        <AskaroNevbar />
        <div className='Askaro-contents'>
            <div className='Askaro-content'>
              <Sidebar />
              <Feed />
              <Widget />
            </div>

        </div>
    </div>
   
  )
}

export default Askaro
