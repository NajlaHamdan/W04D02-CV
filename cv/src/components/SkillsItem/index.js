import React from 'react';
import "./style.css";
// eslint-disable-next-line
const SkillsItem = (props) => {
    return (
        <div>
            <li style={{ listStyleType: "none" }}>
             <p>{props.skill}</p>
             </li>
        </div>
    )
}

export default SkillsItem;