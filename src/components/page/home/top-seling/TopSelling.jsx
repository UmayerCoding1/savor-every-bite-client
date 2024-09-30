import axios from "axios";
import React, { useEffect, useState } from "react";
import TextEffect from "./text-genaretor/TextEffect";
import Product from "./product/Product";
import Loading from "../../../../hooks/Loading";

const TopSelling = () => {
  const [topSelling, setTopSelling] = useState([]);
  const [loading,setLoading]=useState(true);

  
  useEffect(() => {
    setLoading(true);
    axios("https://savor-every-bite-site.vercel.app/topSelling")
      // axios('http://localhost:5000/topSelling')
      .then((res) => {
        setTopSelling(res.data)
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Loading/>
    );
  }

  return (
    <div className="relative mt-20 p-5">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-3">
          <TextEffect />
        </h2>
        <p>
          Lean grilled chicken breast served over nutrient-rich quinoa with
          roasted vegetables and a light herb dressing.
        </p>
      </div>
      <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {topSelling.map((food) => {
          return [<Product key={food._id} food={food} />];
        })}
      </div>
    </div>
  );
};

export default TopSelling;
