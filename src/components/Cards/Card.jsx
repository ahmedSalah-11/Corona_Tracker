import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from "./Card.module.css";
import CountUp from 'react-countup';
import cx from "classnames";

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
    if (!confirmed) {
        return "loading...";
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5"> <CountUp start={0} end={confirmed.value} duration={3} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">
                            No. of infected cases of COVID-19
                        </Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={3} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2"> No. of recoveries of COVID-19</Typography>

                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"> <CountUp start={0} end={deaths.value} duration={3} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No. of deaths caused by COVID-19</Typography>

                    </CardContent>

                </Grid>


            </Grid>
        </div>
    );
}
export default Cards;