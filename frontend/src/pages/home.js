import React from "react";

const Home = () => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-4xl font-bold text-blue-700">Save Our Oceans</h2>
      <p className="mt-4 text-lg">
        Oceans are the lifeline of our planet, providing oxygen, regulating the climate, 
        and sustaining marine life. Pollution, plastic waste, and climate change threaten 
        their survival. Our goal is to achieve clean oceans by 2050, ensuring a healthy 
        future for marine ecosystems and humanity.
      </p>
      <img src="/images/ocean.jpg" alt="Ocean Cleanup" className="w-full mt-6 rounded-lg shadow-lg"/>
    </div>
  );
};

export default Home;
