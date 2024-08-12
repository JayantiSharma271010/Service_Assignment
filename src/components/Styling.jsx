import React from 'react'

const Styling = () => {
  const featured = [
    {
      title: "Blow Dry/Silk Press",
      time: "1 hr, 30 mins",
      body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
      price: "from $90",
    },
    {
      title: "Half Up Half Down Ponytail",
      time: "1 hr, 30 mins",
      body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
      price: "from $90",
    },
    {
      title: "Shampoo/Wrap (Relaxed Hair)",
      time: "1 hr, 30 mins",
      body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
      price: "from $90",
    },
    {
      title: "Pony Tail",
      time: "1 hr, 30 mins",
      body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
      price: "from $90",
    },
  ]
  return (
    <div className="featured haircut">
    <div className="heading">
      <h5>Styling</h5>
    <p className='heading-para'>Our Silk Press service does not include a trim</p>
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

export default Styling