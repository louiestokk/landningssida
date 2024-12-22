import React from 'react'

const Divider = ({text}) => {
  return (
    <div style={{height:'200px',width:'100%',background:'#406893',color:'white',margin:'20px 0',display:'flex',justifyContent:'center',alignItems:'center',overflow:'hidden'}}>
        <h3 style={{fontSize:'1.7rem',lineHeight:'40px',maxWidth:'95%'}} >{text}</h3>
    </div>
  )
}

export default Divider