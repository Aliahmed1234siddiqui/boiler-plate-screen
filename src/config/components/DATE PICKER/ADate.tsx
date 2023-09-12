import { typeOptions } from '@testing-library/user-event/dist/type/typeImplementation'
import { type } from 'os'
import React from 'react'
type dateType = {
    change : any,
    
}
export default function ADate(props:dateType) {
  return (
    <div>
      <input type="date" onChange={(e)=>{props.change(e)}} name="" id="" />
    </div>
  )
}
