import React from 'react';


function BoxColor(props) {
    const { r, g, b } = props;  
    return(
    <div style={{ height: 70, backgroundColor: `rgb(${r}, ${g}, ${b})`}}></div>
        )
         };
        
export default BoxColor;