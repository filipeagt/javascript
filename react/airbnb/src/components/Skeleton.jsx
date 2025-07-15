import React from 'react'

export default function Skeleton() {
  return (
    <div className='position-relative mt-4 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2'>
        <div className="card border-0">
            <div className="placeholder-glow">
                <p style={{width: '100%', height: '260px'}} className="placeholder rounded-4"></p>
            </div>
            <h5 className="d-flex justify-content-between placeholder-glow">
                <span className='placeholder col-7'></span>
                <span className='placeholder col-2 me-2'></span>
            </h5>
            <p className="placeholder-glow">
                <span className='placeholder col-5'></span>
                <span className='placeholder col-4'></span>
                <span className='placeholder col-4'></span>
                <span className='placeholder col-4'></span>                
            </p>
            <h5 className="placeholder-glow">
                <span className='placeholder col-5'></span>
            </h5>            
        </div>
    </div>
  )
}
