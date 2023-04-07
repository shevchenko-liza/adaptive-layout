import React from 'react';
import classes from './styles.module.scss'
import clsx from 'clsx';

export const Clients = () => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.top}>
                    <button className={clsx(classes.button, classes.btn)}>testimonials</button>
                    <div className={classes.title}>See what our clients say</div>
                    <div className={classes.box}>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.</div>
                        <div className={classes.buttonBox}>
                            <button className={clsx(classes.button_b, classes.btn_b)}>Get in touch</button>
                        </div>
                    </div>
                </div>
                <div className={classes.part}>
                    <div className={clsx(classes.back)}>
                        <div className={classes.boxTitle}>
                            <div className={classes.iconBox}>
                                <img className={classes.icon} src="img/titlePartfolio.jpg" />
                            </div>
                            <div className={classes.inform}>
                                <div className={classes.name}>John Doe</div>
                                <div className={classes.company}>Company Name</div>
                            </div>
                        </div>
                        <div className={classes.item}>"I recommend this agency"</div>
                        <div className={classes.textBack}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</div>
                    </div>
                    <div className={classes.back}>
                        <div className={classes.boxTitle}>
                            <div className={classes.iconBox}>
                                <img className={classes.icon} src="img/titlePartfolio.jpg" />
                            </div>
                            <div className={classes.inform}>
                                <div className={classes.name}>Alice Smith</div>
                                <div className={classes.company}>Company Name</div>
                            </div>
                        </div>
                        <div className={classes.item}>"The support is awesome"</div>
                        <div className={classes.textBack}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</div>
                    </div>
                    <div className={classes.back}>
                        <div className={classes.boxTitle}>
                            <div className={classes.iconBox}>
                                <img className={classes.icon} src="img/titlePartfolio.jpg" />
                            </div>
                            <div className={classes.inform}>
                                <div className={classes.name}>Sophia Miller</div>
                                <div className={classes.company}>Company Name</div>
                            </div>
                        </div>
                        <div className={classes.item}>“A game changer for us”</div>
                        <div className={classes.textBack}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


