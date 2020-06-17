import React from 'react';
import {Card , CardContent , Typography , Grid} from '@material-ui/core'
import CountUp from 'react-countup';
import styles from './cards.module.css';
import cx from 'classnames';

const Cards = ({data:{confirmed , recovered,deaths,lastUpdate},bangladeshData})=>{
    console.log('dd',bangladeshData[0]);
    if(!confirmed){
        return 'Loading ...';
    }
    return (
      
        <div className={styles.container}>
                <Grid container spacing={2} justify="center">

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.bdcard)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                 
                              <span className={styles.bd}>
                              Bangladesh Today

                              </span>
                            </Typography>
                            <Typography variant="h6">
                                <span className={styles.bdtotal}>Total : </span> 
                                <CountUp
                                start={0}
                                end =  {bangladeshData[0].confirmed}
                                duration={3}
                                separator=","
                                />
                              
                            </Typography>

                            <Typography variant="h6">
                               <span className={styles.bdrecovered}>Recovered :  </span>
                                <CountUp
                                start={0}
                                end =  {bangladeshData[0].recovered}
                                duration={3}
                                separator=","
                                />
                              
                            </Typography>

                            <Typography variant="h6">
                               <span className={styles.bddeaths}>Deaths : </span> 
                                <CountUp
                                start={0}
                                end =  {bangladeshData[0].deaths}
                                duration={3}
                                separator=","
                                />
                              
                            </Typography>

                            <Typography variant="h6">
                                <span className={styles.bdactive}>Active : </span>

                                 
                                <CountUp
                                start={0}
                                end = {bangladeshData[0].active}
                                duration={3}
                                separator=","
                                />
                              
                            </Typography>

                        </CardContent>
                    </Grid>


                    <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Infected
                            </Typography>
                            <Typography variant="h5">
                                <CountUp
                                start={0}
                                end =  {confirmed.value}
                                duration={3}
                                separator=","
                                />
                              
                            </Typography>

                            <Typography color="textSecondary" gutterBottom>
                               {new Date(lastUpdate).toDateString()}
                            </Typography>
                            <Typography variant="body2">
                               Number of active cases of COVID-19
                            </Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                            Recovered
                            </Typography>
                            <Typography variant="h5">
                            <CountUp
                                start={0}
                                end =  {recovered.value}
                                duration={3}
                                separator=","
                                />
                            </Typography>

                            <Typography color="textSecondary" gutterBottom>
                            {new Date(lastUpdate).toDateString()}
                            </Typography>
                            <Typography variant="body2">
                            Number of recoveries  from COVID-19
                            </Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Deaths
                            </Typography>
                            <Typography variant="h5">
                            <CountUp
                                start={0}
                                end =  {deaths.value}
                                duration={3}
                                separator=","
                                />
                            </Typography>

                            <Typography color="textSecondary" gutterBottom>
                            {new Date(lastUpdate).toDateString()}
                            </Typography>
                            <Typography variant="body2">
                            Number of Deaths  casued by COVID-19
                            </Typography>
                        </CardContent>
                    </Grid>

                </Grid>
        </div>
    )
}

export default Cards;