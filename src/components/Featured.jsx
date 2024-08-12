import React from "react";

const Featured = () => {
  const featured = [
    {
      title: "Haircut",
      time: "1 hr, 30 mins",
      body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
      price: "from $90",
    },
    {
      title: "Deep Condition (Standard)",
      time: "1 hr, 30 mins",
      body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
      price: "from $90",
    },
    {
      title: "Blow Dry/Silk Press",
      time: "1 hr, 30 mins",
      body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
      price: "from $90",
    },
    {
      title: "Root Touch-Up (Single Process)",
      time: "1 hr, 30 mins",
      body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
      price: "from $90",
    },
    {
      title: "Wash & Go - Curly Style",
      time: "1 hr, 30 mins",
      body: "We do not have pricing for trims. All haircuts are full services that includes a wash",
      price: "from $90",
    },
  ];
  return (
    <div className="featured">
      <div className="heading">
        <h5>Featured</h5>
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
  );
};

export default Featured;
