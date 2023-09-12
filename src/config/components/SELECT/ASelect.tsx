import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react'
import'./ASelect.module.css'

type typeSelet={
label:string ,
option:any[],
}

export default function ASelect(props:typeSelet) {
const{label , option   } = props;



  return (
    <div>
     
      <select onChange={(e)=>alert(e.target.value)}>
        <option>{label}</option>
        {
           Array.isArray(option)&& option.map((x ,i)=>{
               
                return(
<>
<option key={i} value={x}>{x}</option>

</>
                )
})
        }

      </select>
    </div>
  )
}


