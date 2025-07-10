import React from 'react';
import { useState } from 'react';
import './css/ButtonGroup.css';

export default function ButtonGroup({buttons}) {
  return (
    <div className='row mb-4'>
    {
        buttons.map((buttonsLabel, i) => (
            <div key={i} className={i==0 ? 'col-3' : 'col'}>
                <button className={i===0 ? 'w-100 btn-especial active' : 'w-100 btn-especial'}>{buttonsLabel}</button>
            </div>
        ))
    }
    </div>
  )
}
