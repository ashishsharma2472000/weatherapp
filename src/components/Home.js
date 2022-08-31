import React,{useState,useEffect} from "react";

import '../style/home.css';

const Home = ()=>{

    const[city,setCity]=useState(null);
    const[search,setSearch] = useState("Mumbai");

    useEffect(()=>{
        const fetchApi = async()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=231bf9ac1c4e47d26d0e7e76dfb7aa3a`
            const response = await fetch(url);
            const resjson = await response.json();
            setCity(resjson.main);
        }

        fetchApi();

    },[search])

    var showdate = new Date();
    var displaytodaydate = showdate.getDate()+"/"+showdate.getMonth()+"/"+showdate.getFullYear();
    var dt = showdate.toDateString();

    return(

            <>
              <div className="box">
                    <div className="inputData">
                        <input type="search" value={search} className="inputField" onChange={(event)=>{setSearch(event.target.value)}}  />
                    </div>


                    {!city?(
                        <p className="errorMsg">No Data Found</p>
                    ):(
                        <div>
                            <div className="info">
                                <h2 className="location">
                                <i className="fa-solid fa-street-view" ></i>{search}
                                </h2>
                                <h1 className="temp">
                                {city.temp}&deg;C
                                </h1>
                                <p id="date" >
                                {dt}
                                </p>
                                 <h3 className="tempmin_max">Min {city.temp_min}&deg;C | Max {city.temp_max}&deg;C</h3>
                        </div>
                    
                     <div className="wave -one"></div>
                     <div className="wave -two"></div>
                     <div className="wave -three"></div>


                     <div id="weathercon">
                         <i class='fa-solid fa-cloud' ></i>
                        </div>



                    </div>

                    )}

                    

                    

              </div>
              

            </>





    )
}

export default Home