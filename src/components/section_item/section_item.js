import React from "react";

import styles from "./section_item.module.css";
const SectionItem = (props)=>{

    const onMouseLeaveHandler =()=> {
        props.hoverChange(false)
    }


    const onMouseEnterHandler =()=> {
        props.hoverChange(true)
    }

    return(
        <div className={styles.mainDiv1} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
        </div>
    )
}

export default SectionItem