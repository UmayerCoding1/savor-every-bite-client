import React, { useEffect, useState } from "react";
import CompoBanner from "../../shared/compoBanner/CompoBanner";
import Product from "../home/top-seling/product/Product";
import axios from "axios";
import "./all-food.css";
import useAllFoods from "../../../hooks/useAllFoods";
import Loading from "../../../hooks/Loading";
import useTile from "../../../hooks/useTitle";


const AllFoods = () => {
  useTile("All Foods");
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPages, setItemPages] = useState(20);
  const [loading, setLoading] = useState(true);
  const foods = useAllFoods(currentPage, itemPages, setLoading);
  const [selectedOrigin, setSelectedOrigin] = useState(foods.allFoods);
  const { allFoods } = foods;
  const [seeAllFoods, setSeeAllFoods] = useState(allFoods);
  const [showFood, SetShowFood] = useState(true);
  const numberOfPages = Math.ceil(count / itemPages);
  const page = [...Array(numberOfPages).keys()];

  useEffect(() => {
    setSeeAllFoods(allFoods);
    const filterByCountry = allFoods.filter(
      (origin) => origin.Food_Origin === selectedOrigin
    );
    setSeeAllFoods(filterByCountry);
  }, [selectedOrigin]);
  console.log(seeAllFoods);

  //   stor all foods origin
  const origin = allFoods.reduce((initialVal, curVal) => {
    const { Food_Origin } = curVal;
    initialVal.push(Food_Origin);
    return initialVal;
  }, []);

  const removeDuplicateOrigin = (arr) => {
    const unique = [];
    for (const ori of arr) {
      if (unique.includes(ori) === false) {
        if (ori !== undefined) {
          unique.push(ori);
        }
      }
    }
    return unique;
  };

  const allFoodsOrigin = removeDuplicateOrigin(origin);

  useEffect(() => {
    axios("https://savor-every-bite-site.vercel.app/foodCount").then((res) =>
      setCount(res.data.count)
    );
  }, []);

  const handleItemPerPage = (e) => {
    setItemPages(e.target.value);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < page.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (loading) {
    return <Loading />;
  }

  // console.log(filterCountry);

  return (
    <div className="text-white">
      <div>
        <CompoBanner title={"All Foods"} pageTitle={"All Foods"} />
      </div>

      <div className="w-full h-5 bg-emerald-300 my-10"></div>

      <div className="mt-5 lg:grid grid-cols-7 ">
        <div className=" border-r text-white">
          <div className="border-b pb-2">
            <select
              className="bg-cyan-500  outline-none w-1/2 h-10 px-2 font-bold text-white text-lg rounded-lg"
              value={itemPages}
              onChange={handleItemPerPage}
              name=""
              id=""
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
            </select>
          </div>

          <div className="mt-5 px-2">
            <h3 className="text-lg font-bold border-b-2 text-orange-500 border-gray-400">
              Filter by country
            </h3>
            <div>
              <ul className="">
                <li
                  onClick={() => SetShowFood(true)}
                  className="cursor-pointer block w-full text-center mt-2 border-2 border-gray-400 rounded-lg py-1 hover:text-white hover:bg-gray-400"
                >
                  All Foods
                </li>
                {allFoodsOrigin.map((county) => (
                  <li
                    onClick={() => setSelectedOrigin(county)}
                    className="block w-full text-center mt-2 border-2 border-gray-400 rounded-lg py-1 hover:text-white hover:bg-gray-400"
                  >
                    <button onClick={() => SetShowFood(false)} className="">
                      {county}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-6 pl-1">
          {showFood ? (
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {allFoods.map((food) => (
                <Product key={food._id} food={food} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {seeAllFoods.map((food) => (
                <Product key={food._id} food={food} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="text-black flex items-center justify-center">
        <div className="">
          <button
            onClick={handlePrevPage}
            className="btn ml-5 mt-2 bg-blue-400 hover:bg-blue-400 border-0"
          >
            Prev
          </button>
          {page.map((p) => (
            <button
              onClick={() => {
                setCurrentPage(p);
              }}
              key={p}
              className={
                currentPage === p
                  ? "selected btn ml-5 mt-2 border-0"
                  : " btn ml-5 mt-2"
              }
            >
              {p + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            className="btn ml-5 mt-2 bg-blue-400 hover:bg-blue-400 border-0"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
