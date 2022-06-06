import React from 'react'

const Grid = ({ rangeArray }) => {
    const cells = rangeArray.map(obj =>
        <div style={{ backgroundColor: `${'#4' + Math.random().toString(16).substr(-5)}` }}
            className="item">{obj}</div>)

    return (

        <div className="container">
            {cells}
        </div>
    )
}

export default Grid