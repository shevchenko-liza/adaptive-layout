import React from 'react';
import classes from './styles.module.scss'
import clsx from 'clsx';

export const Marketing = () => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.top}>
                    <div className={classes.box}>
                        <div className={classes.marketing}>Marketing solutions that grow your business.</div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</div>
                        <div className={classes.buttonBox}>
                            <button className={clsx(classes.button, classes.btn)}>Our services</button>
                            <button className={clsx(classes.button_b, classes.btn_b)}>Contact us</button>
                        </div>
                    </div>
                </div>
                <div className={clsx(classes.main_images, classes.images_main)}>
                    <div className={classes.column}>
                        <div className={clsx(classes.images_main_item, classes.item)}>
                            <img src='img/icon1.png' />
                        </div>

                        <div className={clsx(classes.images_main_item, classes.item)}>
                            <img src='img/icon2.png' />
                        </div>
                    </div>
                    <div className={clsx(classes.column)}>
                        <div className={clsx(classes.images_main_item, classes.item)}>
                            <img src='img/icon3.png' />
                        </div>
                        <div className={clsx(classes.images_main_item, classes.item)}>
                            <img src='img/icon4.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


