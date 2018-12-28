import React from 'react'

const Divider = class extends React.Component {

 render() {
   return (
    <hr
      style={{
        color: 'black',
        backgroundColor: 'rgb(240, 240, 240)',
        height: 0.5
      }}
    />
  )}
}

export default Divider
