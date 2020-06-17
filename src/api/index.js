import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country)=>{

    let changableUrl = url;
    if(country){
        changableUrl = `${url}/countries/${country}`;
    }
    
    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changableUrl);

      const modifiedData = {
          confirmed,
          recovered,
          deaths,
          lastUpdate
      };
        return modifiedData;
    }
    catch(error){
       // console.log(error);

    }
}


export const fetchDailyData = async ()=>{
    try {
        const {data} = await axios.get(`${url}/daily`);

      const modifiedData = data.map((dailyData)=>({
          confirmed:dailyData.confirmed.total,
          deaths:dailyData.deaths.total,
          date:dailyData.reportDate
      }))
        return modifiedData;
    }
    catch(error){
        console.log(error);

    }
}


export const fetchCountries = async() =>{
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`);
       console.log(countries);
       
        return countries.map((country)=> country.name );
        
    }
    catch (error){

    }
}

export const fetchBangladeshiData = async() =>{
    try{
        let bdurl =  'https://covid19.mathdro.id/api/countries/bangladesh/confirmed';



    //    const {data:{confirmed,recovered,deaths,active}} = await axios.get(bdurl);
        const {data} = await axios.get(bdurl);

        // const modifiedData = {
        //     confirmed,
        //     recovered,
        //     deaths,
        //     active
        // };
        //   return modifiedData;
        return data;
       
    }
    catch (error){

    }
}