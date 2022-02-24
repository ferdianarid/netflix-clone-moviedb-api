import React from 'react'

const Heading = ({ children }) => {
       return (
              <React.Fragment>
                     <h1 className="font-bold leading-[1.1] text-2xl md:text-5xl text-white">{children}</h1>
              </React.Fragment>
       )
}

export default Heading