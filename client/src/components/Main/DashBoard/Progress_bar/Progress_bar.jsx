import React from 'react'
  
const Progress_bar = ({progress}) => {
     
      
      const Childdiv = {
        width: `${progress}%`,
      };
      
      const progresstext = {
        padding: 5,
        color: 'black',
        fontWeight: 400
      };
        
    return (
    <div className='parentdiv_class'>
      <div className='child_div'style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    )
}
  
export default Progress_bar;
