import axios, { all } from "axios";
import React, { useEffect, useState } from "react";

const useAllFoods = (currentPage, itemPages, setLoading) => {
  const [allFoods, setAllFoods] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios(
      `https://savor-every-bite-site.vercel.app/foods?page=${currentPage}&size=${itemPages}`
    ).then((res) => {
      setAllFoods(res.data);
      setLoading(false);
    });
  }, [currentPage, itemPages]);


  
  return {allFoods};
};

export default useAllFoods;
