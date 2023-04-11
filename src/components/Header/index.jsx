import React from 'react';
import classes from './styles.module.scss'
import clsx from 'clsx';
import { useState } from 'react';

export const Header = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className={classes.block}>
            <div className={classes.logo}>
                <img src='img/logo.png' />
            </div>
            <ul
                className={
                    nav ? [classes.menu, classes.active].join(' ') : [classes.menu]
                }
            >
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
            </ul>
            <a className={classes.cartBox}>
                <span className={classes.cart}>Cart</span>
                <span className={classes.num}>0</span>
            </a>
            <div className={classes.buttonBox}>
                <button className={clsx(classes.button, classes.btn)}>Get started</button>
            </div>
            <div onClick={() => setNav(!nav)} className={clsx(classes.mobile_btn)}>
                {nav ? <div className={classes.menuIcon}>x</div> : <img className={classes.menuIcon} src="img/menu.jpg" />}
            </div>
        </div>
    );
}


