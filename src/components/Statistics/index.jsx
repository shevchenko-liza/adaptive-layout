import React from 'react';
import classes from './styles.module.scss'

export const Statistics = () => {
    return (
        <div className={classes.container}>
            <div className={classes.items}>
                <div className={classes.top}>
                    <div className={classes.box}>
                        <div className={classes.title}>1.2M+</div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.</div>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.title}>3.4B</div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.</div>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.title}>98%</div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.</div>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.title}>10+</div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.</div>
                    </div>
                </div>
                <img className={classes.icon} src="img/statistic.png" />
            </div>
        </div>
    );
}


