import React from 'react';
import {Card , CardContent , Typography , Grid} from '@material-ui/core'

import styles from './cards.module.css';


const Cards = ({data:{confirmed , recovered,deaths,lastUpdate}})=>{

    if(!confirmed){
        return 'Loading ...';
    }
    return (
        <div className={styles.container}>
                <Grid container spacing={3} justify="center">
                    <Grid item component={Card}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Infected
                            </Typography>
                            <Typography variant="h5">
                                Real Data
                            </Typography>

                            <Typography color="textSecondary" gutterBottom>
                                Real Date
                            </Typography>
                            <Typography variant="body2">
                               Number of ac
                            </Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component={Card}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Infected
                            </Typography>
                            <Typography variant="h5">
                                Real Data
                            </Typography>

                            <Typography color="textSecondary" gutterBottom>
                                Real Date
                            </Typography>
                            <Typography variant="body2">
                               Number of ac
                            </Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component={Card}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Infected
                            </Typography>
                            <Typography variant="h5">
                                Real Data
                            </Typography>

                            <Typography color="textSecondary" gutterBottom>
                                Real Date
                            </Typography>
                            <Typography variant="body2">
                               Number of ac
                            </Typography>
                        </CardContent>
                    </Grid>

                </Grid>
        </div>
    )
}

export default Cards;