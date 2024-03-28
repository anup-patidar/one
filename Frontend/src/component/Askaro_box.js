import { Avatar } from '@material-ui/core'
import React from 'react'
import './css/askarobox.css'

function askarobox() {
  return (
    <div className='askarobox'>
       <div className='askarobox-profile'>
         <Avatar />
       </div>

       <div className='askarobox-question'>
        <h5>What is your question</h5>
        </div>
    </div>
  )
}

export default askarobox
