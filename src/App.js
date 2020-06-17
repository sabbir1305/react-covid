import React from 'react';
import { render } from '@testing-library/react';


import {Cards , Chart, CountryPicker } from './components';

import styles from './App.module.css';

import {fetchData ,fetchBangladeshiData } from './api';

import coronaLogo from './images/virus.svg';



class App extends React.Component{ 

    state={
        data : {},
        country:'',
        bangladeshData:{}
    }

   async componentDidMount(){
        const data = await fetchData();
        const bddata = await fetchBangladeshiData();
        console.log(data);
        console.log('BD',bddata);
        this.setState({data : data , bangladeshData : bddata});

    }

    handleCountryChange = async (country) => {
        //fetch the data
        console.log(country);
        const fetchedData = await fetchData(country);

        this.setState({data : fetchedData , country: country});
        
    }

    render(){
        const {data , country , bangladeshData} = this.state;
        return(
            <div className={styles.container}>
                  <img src={coronaLogo} className={styles.Applogo} alt="logo" />
  
               <Cards data = {data} bangladeshData={bangladeshData} />
               <CountryPicker handleCountryChange={this.handleCountryChange}/>
               <Chart data={data} country={country}/>
              
            </div>
        )
    }
}

export default App;