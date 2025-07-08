import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Loading from "./Loading";

function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState('all') 
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()

  const api = import.meta.env.VITE_URL;

  async function getData() {
    const data = (await axios.get(api+"&s="+search)).data.Search;
      setIsLoading(false)
      setMoviesData(data);
  }

  async function handelClick(){
    const searchTerm = search.trim() === "" ? "all" : search.trim()
    const res = (await axios.get(api+"&s="+searchTerm))
    setMoviesData(res.data.Search)
  }

  async function handelmovieClick(movieId) {
    navigate(`/movies/${movieId}`)
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
        <div className="flex justify-center w-screen mb-4 mt-20"> 
          <input type="text" className="w-[20rem] border-2 rounded me-2 ps-4" onChange={(e) => setSearch(e.target.value)}/>
          <button className="bg-red-500 rounded px-4 py-2 text-white" onClick={handelClick}>Search</button>
        </div>
      <div className="flex justify-center w-screen gap-2">
        {isLoading ? <Loading length={moviesData.length}/> : <div className="flex flex-wrap justify-center gap-4 w-[80%]">
          {moviesData?.length>0 ? moviesData.map((ele, idx) => {
              return (
                <div
                  key={idx}
                  className="w-[200px] border-2 border-gray-500 rounded p-3"
                  onClick={() => handelmovieClick(ele.imdbID)}
                >
                  <img
                    src={ele.Poster}
                    alt={ele.Title}
                    className="w-full h-[15rem]"
                  />
                  <p className="text-sm truncate">
                    {" "}
                    <strong>Title: </strong> {ele.Title}
                  </p>
                  <p className="text-sm">
                    {" "}
                    <strong>Year: </strong> {ele.Year}{" "}
                  </p>
                </div>
              );
            }) : <h1>Movie not found</h1>}
        </div>} 
      </div>
    </div>
  );
}

export default Movies;
