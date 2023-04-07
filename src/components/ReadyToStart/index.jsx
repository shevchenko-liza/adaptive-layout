import React from 'react';
import classes from './styles.module.scss'
import clsx from 'clsx';

export const ReadyToStart = () => {
    return (
        <div className={classes.container} >
            <div className={classes.back}>
                <div className={classes.content}>
                    <div className={classes.box}>
                        <div className={classes.title}>Ready to start scaling your business now?</div>
                        <div className={classes.text}>Lorem ipsum dolor sit am consectetur adipiscing varius enim in eros.</div>
                    </div>
                    <div className={classes.buttonBox}>
                        <button className={clsx(classes.button, classes.btn)}>Our services</button>
                        <button className={clsx(classes.button_b, classes.btn_b)}>Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


