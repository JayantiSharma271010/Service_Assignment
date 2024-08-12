import React from 'react'

const RelaxerTexturizerKeratin = () => {
    const featured = [
        {
          title: "New Single Process With full head highlights",
          time: "1 hr, 30 mins",
          body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
          price: "from $90",
        },
        {
          title: "New full head highlights",
          time: "1 hr, 30 mins",
          body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
          price: "from $90",
        },
        {
          title: "Blonde highlights (half head highlights)",
          time: "1 hr, 30 mins",
          body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
          price: "from $90",
        },
        {
          title: "Light brown/soft gloden brown/light ash brown (Virgin Single)",
          time: "1 hr, 30 mins",
          body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
          price: "from $90",
        },
        {
          title: "Dark browns and black ",
          time: "1 hr, 30 mins",
          body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
          price: "from $90",
        },
        {
          title: "Copper/red heads/ burgundy (Virgin Single)",
          time: "1 hr, 30 mins",
          body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
          price: "from $90",
        },
        {
          title: "Creative color pink/blue",
          time: "1 hr, 30 mins",
          body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
          price: "from $90",
        },
        {
          title: "Root Touch-Up (single Process)",
          time: "1 hr, 30 mins",
          body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
          price: "from $90",
        },
        {
          title: "Copper/red heads/ burgundy (Virgin Single)",
          time: "1 hr, 30 mins",
          body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
          price: "from $90",
        },
      ]
  return (
    <div className="featured haircut">
    <div className="heading">
      <h5>Relaxer/Texturizer/Keratin</h5>
    
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

export default RelaxerTexturizerKeratin