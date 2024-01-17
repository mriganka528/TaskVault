import React from 'react'
import img from '../../assets/notask3.gif'
import Styles from './Notask.module.css'
function Notask() {
    return (
        <div className={Styles.Notask}>
            <h1>No task to do, have a great day</h1>
           <img src={img} alt="Loading" />
        </div>
    )
}

export default Notask
