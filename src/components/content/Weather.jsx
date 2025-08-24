// import React, { useEffect, useState } from 'react'
// import wind from "../../assets/wind.png";

// const Weather = () => {

//   //searchbar
//      const [city,setcity]=useState("")
//      const [season, setSeason] = useState("");

//      const handlecity=(e)=>{
//         setcity(e.target.value)
//      }

  
//     const handlesearch = () => {
//   if (!city) return; 

//   const getSeason = (lat, timezone) => {
//   // Get current UTC time
//   const now = new Date();
//   const utc = now.getTime() + now.getTimezoneOffset() * 60000;

//   // Adjust UTC to city’s local time
//   const localTime = new Date(utc + timezone * 1000);

//   // Get the month (1–12)
//   const month = localTime.getMonth() + 1;

//   let season = "";

//   if (lat >= 0) {
//     // 🌍 Northern Hemisphere
//     if ([12, 1, 2].includes(month)) season = "Winter";
//     else if ([3, 4, 5].includes(month)) season = "Spring";
//     else if ([6, 7, 8].includes(month)) season = "Summer";
//     else season = "Autumn";
//   } else {
//     // 🌍 Southern Hemisphere
//     if ([12, 1, 2].includes(month)) season = "Summer";
//     else if ([3, 4, 5].includes(month)) season = "Autumn";
//     else if ([6, 7, 8].includes(month)) season = "Winter";
//     else season = "Spring";
//   }

//   return season;
// };


//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a5e0a66950c6c4887b9779c628700760&units=metric`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data)
//       setweatherdetails(data); 

//     if (data.timezone) {
//     const localTime = getLocalTime(data.timezone);
//     setcurrenttime(localTime);

//       // 🌤️ Get season here
//     const currentSeason = getSeason(data.coord.lat, data.timezone);
//     setSeason(currentSeason);
//   }
//     })
    
// };

  

//   //api

//    const[weatherdetails,setweatherdetails]=useState([])
//    const [currenttime, setcurrenttime] = useState("");
//      const [uv, setUv] = useState(null);

   
//      const getLocalTime = (timezone) => {
//     const utc = Date.now() + new Date().getTimezoneOffset() * 60000;
//     const local = new Date(utc + timezone * 1000);
//     return local.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//   };
   
//    useEffect(()=>{
//       fetch("https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=a5e0a66950c6c4887b9779c628700760&units=metric")
//       .then((res)=>res.json())
//       .then((data)=>{
       
//        setweatherdetails(data) });
       
//    },[])

  

  


//   return (
//    <>
//    <div  className='text-white flex justify-between  border border-white/20 rounded-2xl px-6 py-2 mt-4 w-4/5 mx-auto'>
//     <input
//      onChange={handlecity} 
//      value={city}
//      placeholder='Wanna go new City'   className="bg-transparent outline-none border-none text-white placeholder-gray-400 w-full"  ></input>
//     <button onClick={handlesearch} className='bg-white px-3 py-1 rounded-xl text-black font-semibold'>Search</button>
//    </div>
//     <div>
//     <p className='text-white px-20 mt-8 text-3xl'>{weatherdetails.name}</p>
//    </div>
//    <div className='shadow-2xl bg-white/10 mt-10 mx-auto rounded-2xl p-8 w-4/5 flex flex-col gap-8'>


//    <div className='flex items-center gap-4'>

 
//     <p className='text-white text-xl font-medium '>Current Weather</p>
//     <p className='text-white text-2xl'>{currenttime}</p> 
//     </div>
   
//     <div className='flex  items-center gap-8'>
//     <p className='text-5xl text-white '>{weatherdetails.main?.temp    ? `${Math.round(weatherdetails.main.temp)}°C`
//     : "Loading..."}</p>
//     <p className='text-xl text-white'>{weatherdetails.weather?.[0]?.description}</p>
    
//   <p className='text-white'>Season: {season}</p>

//     </div>

 
//    <div className='flex justify-around text-white'>
 
//       <div>
//         <p>Wind</p>
//         <p>{weatherdetails.wind?.speed}</p>
//     </div>
//       <div>
//         <p>Humidity</p>
//         <p>{weatherdetails.main?.humidity}</p>
//     </div>
   
//       <div>
//         <p>Pressure</p>
//         <p>{weatherdetails.main?.pressure}</p>
//     </div>

//     <div>
//       <p>Uv rays</p>
    
//     </div>
    
//    </div>
//   </div>
//    </>
//   );
// };

// export default Weather;



// import React, { useEffect, useState } from 'react'
// import wind from "../../assets/wind.png";

// const Weather = () => {
//   const [city, setCity] = useState("");
//   const [season, setSeason] = useState("");
//   const [weatherDetails, setWeatherDetails] = useState([]);
//   const [currentTime, setCurrentTime] = useState("");
//   const [uv, setUv] = useState(null);
//   const [today, setToday] = useState(null);

//   const API_KEY_OPENWEATHER = "a5e0a66950c6c4887b9779c628700760";
//   const API_KEY_TOMORROW = "RcTXUWomTGYmnIgOGA6XoA73Hf45GcE5";

//   // --- handle input ---
//   const handleCity = (e) => setCity(e.target.value);

//   // --- get local time ---
//   const getLocalTime = (timezone) => {
//     const utc = Date.now() + new Date().getTimezoneOffset() * 60000;
//     const local = new Date(utc + timezone * 1000);
//     return local.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//   };

//   // --- get season ---
//   const getSeason = (lat, timezone) => {
//     const now = new Date();
//     const utc = now.getTime() + now.getTimezoneOffset() * 60000;
//     const localTime = new Date(utc + timezone * 1000);
//     const month = localTime.getMonth() + 1;

//     if (lat >= 0) {
//       if ([12, 1, 2].includes(month)) return "Winter";
//       if ([3, 4, 5].includes(month)) return "Spring";
//       if ([6, 7, 8].includes(month)) return "Summer";
//       return "Autumn";
//     } else {
//       if ([12, 1, 2].includes(month)) return "Summer";
//       if ([3, 4, 5].includes(month)) return "Autumn";
//       if ([6, 7, 8].includes(month)) return "Winter";
//       return "Spring";
//     }
//   };

//   // --- search city ---
//   const handleSearch = () => {
//     if (!city) return;

//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_OPENWEATHER}&units=metric`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("OpenWeather Data:", data);
//         setWeatherDetails(data);

//         if (data.coord && data.timezone) {
//           const localTime = getLocalTime(data.timezone);
//           setCurrentTime(localTime);

//           const currentSeason = getSeason(data.coord.lat, data.timezone);
//           setSeason(currentSeason);

//           // --- fetch Tomorrow.io with lat/lon ---
//           fetch(
//             `https://api.tomorrow.io/v4/weather/forecast?location=${data.coord.lat},${data.coord.lon}&timesteps=1h&apikey=${API_KEY_TOMORROW}`
//           )
//             .then((res1) => res1.json())
//             .then((data1) => {
//               console.log("Tomorrow.io Data:", data1);

//               setToday(data1);
 
//               // Example: extract UV index from hourly data
//               const uvIndex = data1.timelines?.hourly?.[0]?.values?.uvIndex;
//               setUv(uvIndex);
//             });
//         }
//       });
//   };

//   // --- initial load (default city Chennai) ---
//   useEffect(() => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=${API_KEY_OPENWEATHER}&units=metric`
//     )
//       .then((res) => res.json())
//       .then((data) => setWeatherDetails(data));
//   }, []);

//   return (
//     <>
//       <div className="text-white flex justify-between border border-white/20 rounded-2xl px-6 py-2 mt-4 w-4/5 mx-auto">
//         <input
//           onChange={handleCity}
//           value={city}
//           placeholder="Wanna go new City"
//           className="bg-transparent outline-none border-none text-white placeholder-gray-400 w-full"
//         />
//         <button
//           onClick={handleSearch}
//           className="bg-white px-3 py-1 rounded-xl text-black font-semibold"
//         >
//           Search
//         </button>
//       </div>

//       <div>
//         <p className="text-white px-20 mt-8 text-3xl">
//           {weatherDetails.name}
//         </p>
//       </div>

//       <div className="shadow-2xl bg-white/10 mt-10 mx-auto rounded-2xl p-8 w-4/5 flex flex-col gap-8">
//         <div className="flex items-center gap-4">
//           <p className="text-white text-xl font-medium">Current Weather</p>
//           <p className="text-white text-2xl">{currentTime}</p>
//         </div>

//         <div className="flex justify-center not-first:items-center gap-8">
//           <p className="text-5xl text-white">
//             {weatherDetails.main?.temp
//               ? `${Math.round(weatherDetails.main.temp)}°C`
//               : "Loading..."}
//           </p>
//           <p className="text-xl text-white">
//             {weatherDetails.weather?.[0]?.description}
//           </p>
//           <p className="text-white">Season: {season}</p>
//         </div>

//         <div className="flex justify-around gap-3 text-white items-center ">
//           <div>
//             <p>Wind</p>
//             <p>{weatherDetails.wind?.speed}</p>
//           </div>
//           <div>
//             <p>Humidity</p>
//             <p>{weatherDetails.main?.humidity}</p>
//           </div>
//           <div>
//             <p>Pressure</p>
//             <p>{weatherDetails.main?.pressure}</p>
//           </div>
//           <div>
//             <p>UV Index</p>
//             <p>{uv !== null ? uv : "Loading..."}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Weather;




// import React, { useEffect, useState } from 'react'


// const Weather = () => {
//   const [city, setCity] = useState("");
//   const [season, setSeason] = useState("");
//   const [weatherDetails, setWeatherDetails] = useState([]);
//   const [currentTime, setCurrentTime] = useState("");
//   const [uv, setUv] = useState(null);
//   const [today, setToday] = useState(null);

//   const API_KEY_OPENWEATHER = "a5e0a66950c6c4887b9779c628700760";
//   const API_KEY_TOMORROW = "RcTXUWomTGYmnIgOGA6XoA73Hf45GcE5";

//   const handleCity = (e) => setCity(e.target.value);

//   const getLocalTime = (timezone) => {
//     const utc = Date.now() + new Date().getTimezoneOffset() * 60000;
//     const local = new Date(utc + timezone * 1000);
//     return local.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//   };

//   const getSeason = (lat, timezone) => {
//     const now = new Date();
//     const utc = now.getTime() + now.getTimezoneOffset() * 60000;
//     const localTime = new Date(utc + timezone * 1000);
//     const month = localTime.getMonth() + 1;

//     if (lat >= 0) {
//       if ([12, 1, 2].includes(month)) return "Winter";
//       if ([3, 4, 5].includes(month)) return "Spring";
//       if ([6, 7, 8].includes(month)) return "Summer";
//       return "Autumn";
//     } else {
//       if ([12, 1, 2].includes(month)) return "Summer";
//       if ([3, 4, 5].includes(month)) return "Autumn";
//       if ([6, 7, 8].includes(month)) return "Winter";
//       return "Spring";
//     }
//   };

//   // ✅ Sunscreen recommendation logic
//   const getSunscreenRecommendation = (uv) => {
//     if (uv === null) return "Loading...";
//     if (uv < 3) return "Low – Sunscreen optional, wear sunglasses.";
//     if (uv < 6) return "Moderate – Use SPF 30+, wear a hat.";
//     if (uv < 8) return "High – Use SPF 50+, sunglasses, protective clothing.";
//     if (uv < 11) return "Very High – Apply SPF 50+, reapply every 2 hours, seek shade.";
//     return "Extreme – Avoid sun if possible, SPF 50+, hat, sunglasses, full protection.";
//   };

//     // ✅ Water recommendation logic
//   const getwaterconsumption = (uv) => {
//     if (uv === null) return "Loading...";
//     if (uv < 3) return " Must Drink  1.5–2 L/day";
//     if (uv < 6) return " Must Drink  2–2.5 L/day";
//     if (uv < 8) return " Must Drink  2.5–3 L/day";
//     if (uv < 11) return " Must Drink  3–3.5 L/day";
//     return "Must Drink 3.5–4+ L/day";
//   };

//       // ✅ Cloth recommendation logic
// const getCloth = (uv, temp) => {
//   if (uv === null || temp === null) return "Loading...";
  
//   if (uv < 3 && temp < 30) return "Light cotton or linen clothes are fine.";
//   if (uv < 6 && temp >= 30) return "Loose cotton or linen recommended, avoid tight synthetic.";
//   if (uv < 8) return "Light-colored long cotton/linen clothes recommended.";
//   if (uv < 11) return "UV-protective clothing, cover all skin, wear a hat.";
//   return "Maximum protection: full UV-protective clothing.";
// };

// const getFoodRecommendation = (uv) => {
//   if (uv === null) return "Loading...";
  
//   if (uv < 3) {
//     return "Protein: 50–70g, Carbs: 225–325g, Fiber: 25–30g. Normal intake.";
//   }
//   if (uv < 6) {
//     return "Protein: 55–75g, Carbs: 250–300g, Fiber: 25–30g. Stay hydrated.";
//   }
//   if (uv < 8) {
//     return "Protein: 60–80g, Carbs: 250–350g, Fiber: 25–30g. Prefer light, hydrating meals.";
//   }
//   if (uv < 11) {
//     return "Protein: 65–85g, Carbs: 250–350g, Fiber: 25–30g. Focus on hydration and electrolytes.";
//   }
//   return "Protein: 70–90g, Carbs: 250–350g, Fiber: 25–30g. Avoid heavy meals; prioritize hydration and light, nutritious foods.";
// };


//   const handleSearch = () => {
//     if (!city) return;

//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_OPENWEATHER}&units=metric`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("OpenWeather Data:", data);
//         setWeatherDetails(data);

//         if (data.coord && data.timezone) {
//           const localTime = getLocalTime(data.timezone);
//           setCurrentTime(localTime);

//           const currentSeason = getSeason(data.coord.lat, data.timezone);
//           setSeason(currentSeason);

//           fetch(
//             `https://api.tomorrow.io/v4/weather/forecast?location=${data.coord.lat},${data.coord.lon}&timesteps=1h&apikey=${API_KEY_TOMORROW}`
//           )
//             .then((res1) => res1.json())
//             .then((data1) => {
//               console.log("Tomorrow.io Data:", data1);
//               setToday(data1);

//               const uvIndex = data1.timelines?.hourly?.[0]?.values?.uvIndex;
//               setUv(uvIndex);
//             });
//         }
//       });
//   };

//   useEffect(() => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=${API_KEY_OPENWEATHER}&units=metric`
//     )
//       .then((res) => res.json())
//       .then((data) => setWeatherDetails(data));
//   }, []);

//   return (
//     <>
//       <div className="text-white flex justify-between border border-white/20 rounded-2xl px-6 py-2 mt-4 w-4/5 mx-auto">
//         <input
//           onChange={handleCity}
//           value={city}
//           placeholder="Wanna go new City"
//           className="bg-transparent outline-none border-none text-white placeholder-gray-400 w-full"
//         />
//         <button
//           onClick={handleSearch}
//           className="bg-white px-3 py-1 rounded-xl text-black font-semibold"
//         >
//           Search
//         </button>
//       </div>

//       <div>
//         <p className="text-white px-20 mt-8 text-3xl">
//           {weatherDetails.name}
//         </p>
//       </div>

//       <div className="shadow-2xl bg-white/10 mt-10 mx-auto rounded-2xl p-8 w-4/5 flex flex-col gap-8">
//         <div className="flex items-center gap-4">
//           <p className="text-white text-xl font-medium">Current Weather</p>
//           <p className="text-white text-2xl">{currentTime}</p>
//         </div>

//         <div className="flex justify-around not-first:items-center gap-8">
         
         
      

//           <p className="text-5xl text-white">
//   {today?.timelines?.hourly?.[0]?.values?.temperature
//     ? `${Math.round(today.timelines.hourly[0].values.temperature)}°C`
//     : "35°C"}
// </p>




//           <p className="text-xl text-white">
//             {weatherDetails.weather?.[0]?.description}
//           </p>
//           <p className="text-white">Season: {season}</p>
//         </div>

//         <div className="flex justify-around gap-3 text-white items-center">
//           <div>
//             <p>Wind</p>
//             <p>{weatherDetails.wind?.speed}</p>
//           </div>
//           <div>
//             <p>Humidity</p>
//             <p>{weatherDetails.main?.humidity}</p>
//           </div>
//           <div>
//             <p>Pressure</p>
//             <p>{weatherDetails.main?.pressure}</p>
//           </div>
//           <div>
//             <p>UV Index</p>
//             <p>{uv !== null ? uv : "Loading..."}</p>
//           </div>
//         </div>

//         {/* ✅ Sunscreen recommendation */}
//         <div className='flex flex-col gap-4 mt-4'>
//         <div className=" bg-white/20 p-4 rounded-xl text-white">
//           <h2 className="text-lg font-semibold">Sunscreen Recommendation</h2>
//           <p>{getSunscreenRecommendation(uv)}</p>
//         </div>

//           <div className=" bg-white/20 p-4 rounded-xl text-white">
//           <h2 className="text-lg font-semibold">Water Consumption</h2>
//           <p>{getwaterconsumption(uv)}</p>
//         </div>

          
//           <div className=" bg-white/20 p-4 rounded-xl text-white">
//           <h2 className="text-lg font-semibold">Cloth Recommendation</h2>
//           <p>{getCloth(uv)}</p>
//         </div>

//         <div className=" bg-white/20 p-4 rounded-xl text-white">
//        <h2 className="text-lg font-semibold">Food Intake Recommendation</h2>
//          <p>{getFoodRecommendation(uv)}</p>
// </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Weather;



import React, { useEffect, useState } from 'react';
import wind from "../../assets/wind.png";

const Weather = () => {
  const [city, setCity] = useState("");
  const [season, setSeason] = useState("");
  const [weatherDetails, setWeatherDetails] = useState([]);
  const [currentTime, setCurrentTime] = useState("");
  const [uv, setUv] = useState(null);
  const [today, setToday] = useState(null);

  const API_KEY_OPENWEATHER = "a5e0a66950c6c4887b9779c628700760";
  const API_KEY_TOMORROW = "RcTXUWomTGYmnIgOGA6XoA73Hf45GcE5";

  const handleCity = (e) => setCity(e.target.value);

  const getLocalTime = (timezone) => {
    const utc = Date.now() + new Date().getTimezoneOffset() * 60000;
    const local = new Date(utc + timezone * 1000);
    return local.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const getSeason = (lat, timezone) => {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const localTime = new Date(utc + timezone * 1000);
    const month = localTime.getMonth() + 1;

    if (lat >= 0) {
      if ([12, 1, 2].includes(month)) return "❄️ Winter";
      if ([3, 4, 5].includes(month)) return "🌸 Spring";
      if ([6, 7, 8].includes(month)) return "☀️ Summer";
      return "🍂 Autumn";
    } else {
      if ([12, 1, 2].includes(month)) return "☀️ Summer";
      if ([3, 4, 5].includes(month)) return "🍂 Autumn";
      if ([6, 7, 8].includes(month)) return "❄️ Winter";
      return "🌸 Spring";
    }
  };

  const getSunscreenRecommendation = (uv) => {
    if (uv === null) return "Loading...";
    if (uv < 3) return "🕶️ Low – Sunscreen optional, wear sunglasses.";
    if (uv < 6) return "🧴 Moderate – Use SPF 30+, wear a hat.";
    if (uv < 8) return "🔥 High – Use SPF 50+, sunglasses, protective clothing.";
    if (uv < 11) return "⚠️ Very High – Apply SPF 50+, reapply every 2 hours, seek shade.";
    return "🚫 Extreme – Avoid sun if possible, SPF 50+, hat, sunglasses, full protection.";
  };

  const getWaterConsumption = (uv) => {
    if (uv === null) return "Loading...";
    if (uv < 3) return "💧 Drink 1.5–2 L/day";
    if (uv < 6) return "💦 Drink 2–2.5 L/day";
    if (uv < 8) return "🧊 Drink 2.5–3 L/day";
    if (uv < 11) return "🥤 Drink 3–3.5 L/day";
    return "🚰 Drink 3.5–4+ L/day";
  };

  const getCloth = (uv, temp) => {
    if (uv === null || temp === null) return "Loading...";
    if (uv < 3 && temp < 30) return "👕 Light cotton or linen clothes are fine.";
    if (uv < 6 && temp >= 30) return "👗 Loose cotton or linen, avoid tight synthetic.";
    if (uv < 8) return "👚 Light-colored long cotton/linen clothes recommended.";
    if (uv < 11) return "🧢 UV-protective clothing, cover all skin, wear a hat.";
    return "🧥 Full UV-protective clothing recommended.";
  };

  const getFoodRecommendation = (uv) => {
    if (uv === null) return "Loading...";
    if (uv < 3) return "🥩 Protein: 50–70g, 🍞 Carbs: 225–325g, 🥗 Fiber: 25–30g. Normal intake.";
    if (uv < 6) return "🥩 Protein: 55–75g, 🍞 Carbs: 250–300g, 🥗 Fiber: 25–30g. Stay hydrated.";
    if (uv < 8) return "🥩 Protein: 60–80g, 🍞 Carbs: 250–350g, 🥗 Fiber: 25–30g. Prefer light, hydrating meals.";
    if (uv < 11) return "🥩 Protein: 65–85g, 🍞 Carbs: 250–350g, 🥗 Fiber: 25–30g. Focus on hydration and electrolytes.";
    return "🥩 Protein: 70–90g, 🍞 Carbs: 250–350g, 🥗 Fiber: 25–30g. Avoid heavy meals; prioritize hydration.";
  };

  const handleSearch = () => {
    if (!city) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_OPENWEATHER}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherDetails(data);
        if (data.coord && data.timezone) {
          setCurrentTime(getLocalTime(data.timezone));
          setSeason(getSeason(data.coord.lat, data.timezone));

          fetch(
            `https://api.tomorrow.io/v4/weather/forecast?location=${data.coord.lat},${data.coord.lon}&timesteps=1h&apikey=${API_KEY_TOMORROW}`
          )
            .then((res1) => res1.json())
            .then((data1) => {
              setToday(data1);
              const uvIndex = data1.timelines?.hourly?.[0]?.values?.uvIndex;
              setUv(uvIndex);
            });
        }
      });
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=${API_KEY_OPENWEATHER}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeatherDetails(data));
  }, []);

  return (
    <>
      {/* Search Bar */}
      <div className="text-white flex flex-col sm:flex-row justify-between border border-white/20 rounded-2xl px-4 py-2 mt-4 w-11/12 sm:w-4/5 mx-auto gap-2 sm:gap-0">
        <input
          onChange={handleCity}
          value={city}
          placeholder="Wanna go new City"
          className="bg-transparent outline-none border-none text-white placeholder-gray-400 w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-white px-3 py-2 rounded-xl text-black font-semibold sm:ml-2"
        >
          Search
        </button>
      </div>

      {/* City Name */}
      <div>
        <p className="text-white px-4 sm:px-20 mt-8 text-2xl sm:text-3xl text-center sm:text-left">
          {weatherDetails.name}
        </p>
      </div>

      {/* Weather Card */}
      <div className="shadow-2xl bg-white/10 mt-6 mx-auto rounded-2xl p-6 sm:p-8 w-11/12 sm:w-4/5 flex flex-col gap-6 sm:gap-8">

        {/* Current Time */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-4">
          <p className="text-white text-lg sm:text-xl font-medium">⏰ Current Weather</p>
          <p className="text-white text-lg sm:text-2xl">{currentTime}</p>
        </div>

        {/* Temperature & Description */}
        <div className="flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-8 text-center sm:text-left">
          <p className="text-4xl sm:text-5xl text-white">
            {today?.timelines?.hourly?.[0]?.values?.temperature
              ? `${Math.round(today.timelines.hourly[0].values.temperature)}°C`
              : "35°C"}
          </p>
          <p className="text-lg sm:text-xl text-white capitalize">
            {weatherDetails.weather?.[0]?.description}
          </p>
          <p className="text-white">{season}</p>
        </div>

        {/* Wind, Humidity, Pressure, UV */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-white text-center sm:text-left">
          <div>💨<p>Wind</p><p>{weatherDetails.wind?.speed} m/s</p></div>
          <div>💧<p>Humidity</p><p>{weatherDetails.main?.humidity}%</p></div>
          <div>🌡️<p>Pressure</p><p>{weatherDetails.main?.pressure} hPa</p></div>
          <div>☀️<p>UV Index</p><p>{uv !== null ? uv : "Loading..."}</p></div>
        </div>

        {/* Recommendations */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="bg-white/20 p-4 rounded-xl text-white">
            <h2 className="text-lg font-semibold">🧴 Sunscreen Recommendation</h2>
            <p>{getSunscreenRecommendation(uv)}</p>
          </div>

          <div className="bg-white/20 p-4 rounded-xl text-white">
            <h2 className="text-lg font-semibold">💦 Water Consumption</h2>
            <p>{getWaterConsumption(uv)}</p>
          </div>

          <div className="bg-white/20 p-4 rounded-xl text-white">
            <h2 className="text-lg font-semibold">👕 Cloth Recommendation</h2>
            <p>{getCloth(uv, today?.timelines?.hourly?.[0]?.values?.temperature)}</p>
          </div>

          <div className="bg-white/20 p-4 rounded-xl text-white">
            <h2 className="text-lg font-semibold">🥗 Food Intake Recommendation</h2>
            <p>{getFoodRecommendation(uv)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;




