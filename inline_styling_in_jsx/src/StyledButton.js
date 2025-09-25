import { useState } from 'react';

function StyledButton() {

  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };

  let isDisabled = false;

  const disable = () => {
    isDisabled = true;
  }

  const h11 = {
    textAlign: 'center'
  };

  const h1 = {
    backgroundColor: 'wheat',
    padding: '14px',
    margin: 'auto',
    maxWidth: '22vw',
    borderRadius: '12px',
    marginTop: '13px',
    color: 'blue'
  }

  const btn = {
    cursor: 'pointer',
    backgroundColor: isHover ? 'lightblue' : 'rgb(0, 191, 255)',
    color: isHover ? 'red' : 'green',
    
    border:'solid',
    
    margin:'auto',
    fontSize:'40px',
    borderRadius:'14px 40px',
    padding:'20px'
  };


  return (
    <div style={{display: 'flex', flexFlow:'column', gap:'30px'}}>
      <h1 style={Object.assign({}, h1, h11)}>Press button to experience beautiful styling</h1>
      <button className='btn' onClick={() => disable()} disabled={isDisabled} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={btn}>Press ME</button>
    </div>
  );
}

export default StyledButton;
