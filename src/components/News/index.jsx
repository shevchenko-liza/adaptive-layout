import React from 'react';
import classes from './styles.module.scss'
import clsx from 'clsx';

export const News = () => {
    return (
        <div className={classes.container}>
            <div>
                <button className={clsx(classes.button, classes.btn)}>Blog</button>
                <div className={classes.title}>Read our articles & news</div>
                <div className={classes.box}>
                    <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.</div>
                    <div className={classes.buttonBox}>
                        <button className={clsx(classes.button_b, classes.btn_b)}>All Posts</button>
                    </div>
                </div>
                <div className={classes.part}>
                    <div className={classes.back}>
                        <div className={classes.iconBox}>
                            <img className={classes.icon} src="img/professions.jpg" />
                        </div>
                        <div className={classes.main}>
                            <div className={classes.data} >August 28, 2022</div>
                            <div className={classes.inform} >How to Use Social Proof in Marketing</div>
                            <div className={classes.textBack}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.</div>
                            <div className={classes.lk}>
                                <a className={classes.link} href="#"> Read now</a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.back}>
                        <div className={classes.iconBox}>
                            <img className={classes.icon} src="img/prf2.jpg" />
                        </div>
                        <div className={classes.main}>
                            <div className={classes.data} >August 28, 2022</div>
                            <div className={classes.inform} >Make a great first impression with these titles</div>
                            <div className={classes.textBack}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.</div>
                            <div className={classes.lk}>
                                <a className={classes.link} href="#"> Read now</a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.back}>
                        <div className={classes.iconBox}>
                            <img className={classes.icon} src="img/pr3.jpg" />
                        </div>
                        <div className={classes.main}>
                            <div className={classes.data} >August 28, 2022</div>
                            <div className={classes.inform} >How to Grab Your Reader’s Attention</div>
                            <div className={classes.textBack}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.</div>
                            <div className={classes.lk}>
                                <a className={classes.link} href="#"> Read now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


