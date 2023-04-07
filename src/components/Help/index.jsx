import React from 'react';
import classes from './styles.module.scss'
import clsx from 'clsx';

export const Help = () => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.iconBox}>
                    <div className={classes.icon} >
                        <img src="img/hepl1.png" />
                    </div>
                    <div className={classes.icon2} >
                        <img src="img/help2.png" />
                    </div>
                </div>
                <div className={classes.textPart}>
                    <button className={clsx(classes.button, classes.btn)}>why choose us</button>
                    <div className={classes.title}>We help great brands
                        scale with content marketing.</div>
                    <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</div>
                    <div className={classes.adviсe}>
                        <div className={classes.itemBox}>
                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.25" width="32" height="32" rx="16" fill="#81818B" fill-opacity="0.1" />
                                <path d="M22.7063 11.2937C23.0969 11.6843 23.0969 12.3187 22.7063 12.7093L14.7063 20.7093C14.3156 21.1 13.6813 21.1 13.2906 20.7093L9.29065 16.7093C8.90002 16.3187 8.90002 15.6843 9.29065 15.2937C9.68127 14.9031 10.3156 14.9031 10.7063 15.2937L14 18.5843L21.2938 11.2937C21.6844 10.9031 22.3188 10.9031 22.7094 11.2937H22.7063Z" fill="#5CC97B" />
                            </svg>
                            <div className={classes.item}>This is some text inside of a div.</div>
                        </div>
                        <div className={classes.itemBox}>
                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.25" width="32" height="32" rx="16" fill="#81818B" fill-opacity="0.1" />
                                <path d="M22.7063 11.2937C23.0969 11.6843 23.0969 12.3187 22.7063 12.7093L14.7063 20.7093C14.3156 21.1 13.6813 21.1 13.2906 20.7093L9.29065 16.7093C8.90002 16.3187 8.90002 15.6843 9.29065 15.2937C9.68127 14.9031 10.3156 14.9031 10.7063 15.2937L14 18.5843L21.2938 11.2937C21.6844 10.9031 22.3188 10.9031 22.7094 11.2937H22.7063Z" fill="#5CC97B" />
                            </svg>
                            <div className={classes.item}>This is some text inside of a div.</div>
                        </div>
                        <div className={classes.itemBox}>
                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.25" width="32" height="32" rx="16" fill="#81818B" fill-opacity="0.1" />
                                <path d="M22.7063 11.2937C23.0969 11.6843 23.0969 12.3187 22.7063 12.7093L14.7063 20.7093C14.3156 21.1 13.6813 21.1 13.2906 20.7093L9.29065 16.7093C8.90002 16.3187 8.90002 15.6843 9.29065 15.2937C9.68127 14.9031 10.3156 14.9031 10.7063 15.2937L14 18.5843L21.2938 11.2937C21.6844 10.9031 22.3188 10.9031 22.7094 11.2937H22.7063Z" fill="#5CC97B" />
                            </svg>
                            <div className={classes.item}>This is some text inside of a div.</div>
                        </div>
                        <div className={classes.itemBox}>
                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.25" width="32" height="32" rx="16" fill="#81818B" fill-opacity="0.1" />
                                <path d="M22.7063 11.2937C23.0969 11.6843 23.0969 12.3187 22.7063 12.7093L14.7063 20.7093C14.3156 21.1 13.6813 21.1 13.2906 20.7093L9.29065 16.7093C8.90002 16.3187 8.90002 15.6843 9.29065 15.2937C9.68127 14.9031 10.3156 14.9031 10.7063 15.2937L14 18.5843L21.2938 11.2937C21.6844 10.9031 22.3188 10.9031 22.7094 11.2937H22.7063Z" fill="#5CC97B" />
                            </svg>
                            <div className={classes.item}>This is some text inside of a div.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


