import React from 'react'

const Haircutting = () => {

  const featured = [
    {
      title: "A Bob Haircut",
      time: "1 hr, 30 mins",
      body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
      price: "from $90",
    },
    {
      title: "Haircut",
      time: "1 hr, 30 mins",
      body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
      price: "from $90",
    },
    {
      title: "Haircut Short Tapered",
      time: "1 hr, 30 mins",
      body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
      price: "from $90",
    },
  ]
  return (
    <div className="featured haircut">
    <div className="heading">
      <h5>Haircutting</h5>
    <p className='heading-para'> We do not have pricing for trims. All haircuts are full services that include a wash and style; either a wash and go or a silk press. Specify with stylist upon arrival.</p>
    </div>

    <div className="box-wrapper">
      {featured.map((feature) => (
        <div className="box">
          <h6>{feature.title}</h6>
          <p>{feature.time}</p>
          <p>{feature.body} </p>
          <p className="price">{feature.price}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Haircutting