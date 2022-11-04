import React from 'react';
import {connect} from 'react-redux';
import {increase,decrease} from './Action';

export const Inc = ({count,increase,decrease}) => {
  return (
    <div>
      Conut from Inc JS component : {count} <br/><br/>
      <button onClick={()=>increase()}>Increment</button>&nbsp;&nbsp;
      <button onClick={()=>decrease()}>Decrease</button>      
    </div>
  )
}
export default Inc;