import React from 'react';
import SkillsItem from '../SkillsItem';
import "./style.css";
// eslint-disable-next-line
export default function SKILLS() {
    const skils = ['HTML' , 'CSS' , 'JavaScript' , 'React' , 'github' ]
    return (
        <div>
            <h1 className="about">
            <img src="data:image/png;base64,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"
            alt="img" className="pict" />
            Skills
            </h1>
            <ul>
               { skils.map((item , i) => (
                 <SkillsItem skill = {item} key = {i} />
               ))}
            </ul>
        </div>
    )
}
