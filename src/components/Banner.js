import React from 'react'

import banner from '../../public/img/img_3196_banner.png'

const Banner = class extends React.Component {

 render() {
   return (

    <div className="container">
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            banner
          })`,
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  )}
}

export default Banner
