import React from 'react';
import { render } from '@testing-library/react';


import {Cards , Chart, CountryPicker } from './components';

import styles from './App.module.css';

import {fetchData } from './api';




class App extends React.Component{

    state={
        data : {},
    }

   async componentDidMount(){
        const data = await fetchData();
        console.log(data);
        this.setState({data : data});
    }

    render(){
        const {data } = this.state;
        return(
            <div className={styles.container}>
               <Cards data = {data}/>
               <Chart/>
               <CountryPicker/>
            </div>
        )
    }
}

export default App;