import React from 'react'

const Center = ({children, className}) => (
    <div className={`d-flex flex-row justify-content-center ${className}`}>{children}</div>
)

export default Center
