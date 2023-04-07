import React from 'react';
import classes from './styles.module.scss'
import clsx from 'clsx';

export const Header = () => {
    return (
        <div className={classes.block}>
            <div className={classes.logo}>
                <img src='img/logo.png' />
            </div>
            <div className={classes.menu}>
                <div className={classes.items}>
                    <a className={classes.item} href="#">Home</a>
                </div>
                <div className={classes.items}>
                    <a className={classes.item} href="#">About</a>
                </div>
                <div className={classes.items}>
                    <a className={classes.item} href="#">Pages</a>
                </div>
                <div className={classes.items}>
                    <a className={classes.item} href="#">Services</a>
                </div>
            </div>
            <a className={classes.cartBox}>
                <span className={classes.cart}>Cart</span>
                <span className={classes.num}>0</span>
            </a>
            <div className={classes.buttonBox}>
                <button className={clsx(classes.button, classes.btn)}>Get started</button>
            </div>
        </div>
    );
}


