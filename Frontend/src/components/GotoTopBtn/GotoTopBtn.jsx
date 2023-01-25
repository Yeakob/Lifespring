import React, { useEffect, useState } from 'react'
import './gotoTop.css'
import {BsArrowUp} from 'react-icons/bs'

const GotoTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false)
    const gotoTop=()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    const listenToScroll = () =>{
        let height = 350;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > height) {
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', listenToScroll);
    },[]);
    return (
        <div className='gotoTopBtn'>
            {isVisible && (
            <div className='topBtn' onClick={gotoTop}>
                <BsArrowUp/>
            </div>
            )}
        </div>
    )
}

export default GotoTopBtn