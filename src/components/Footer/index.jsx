import React from 'react';
import classes from './styles.module.scss'
import clsx from 'clsx';

export const Footer = () => {
    return (
        <div className={classes.container}>
            <div className={classes.first}>
                <div className={classes.iconBox}>
                    <img className={classes.icon} alt="logo  " src="img/logo.png" />
                </div>
                <div className={classes.text}>Growfy is a template highly suitable for modern marketing agencies, digital studios, startups and businesses. The design is made in the dark style, which makes the site memorable and you can easily adapt it to your brand.</div>
                <div className={classes.social}>
                    <div className={classes.in}>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.205 12.7498C14.2048 13.1476 14.0466 13.5291 13.7651 13.8102C13.4837 14.0914 13.1021 14.2492 12.7042 14.249C12.3064 14.2488 11.925 14.0906 11.6438 13.8092C11.3626 13.5277 11.2048 13.1461 11.205 12.7483C11.2052 12.3504 11.3634 11.969 11.6449 11.6878C11.9263 11.4067 12.3079 11.2488 12.7057 11.249C13.1036 11.2492 13.485 11.4074 13.7662 11.6889C14.0473 11.9703 14.2052 12.3519 14.205 12.7498V12.7498ZM14.25 15.3598H11.25V24.7498H14.25V15.3598ZM18.99 15.3598H16.005V24.7498H18.96V19.8223C18.96 17.0773 22.5375 16.8223 22.5375 19.8223V24.7498H25.5V18.8023C25.5 14.1748 20.205 14.3473 18.96 16.6198L18.99 15.3598V15.3598Z" fill="#75757F" />
                            <rect x="0.5" y="1.01562" width="35" height="35" rx="17.5" stroke="#81818B" stroke-opacity="0.9" />
                        </svg>
                    </div>
                    <div className={classes.twitter}>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.359 14.901C23.9874 14.4933 24.4035 13.9369 24.6072 13.2293C23.9959 13.572 23.387 13.8071 22.7788 13.9369C22.232 13.3156 21.5399 13 20.71 13C19.8988 13 19.2137 13.3008 18.6545 13.886C18.0984 14.4752 17.8176 15.1911 17.8176 16.0269C17.8176 16.2809 17.848 16.5077 17.9086 16.7C15.5163 16.6137 13.5362 15.565 11.9761 13.5465C11.7116 14.0405 11.5794 14.5435 11.5794 15.0637C11.5794 16.1329 12.0064 16.9803 12.8588 17.6024C12.3727 17.5589 11.9442 17.429 11.5794 17.2162C11.5794 17.9797 11.7917 18.6174 12.2172 19.1788C12.6441 19.7343 13.1924 20.0886 13.8621 20.2398C13.6194 20.3055 13.3635 20.3368 13.1007 20.3368C12.858 20.3368 12.6861 20.3154 12.5842 20.2685C12.7631 20.8907 13.1007 21.3953 13.5883 21.7816C14.0744 22.1695 14.6336 22.3742 15.262 22.3922C14.226 23.2511 13.0416 23.676 11.7015 23.676C11.3733 23.676 11.1408 23.671 11 23.6447C12.3198 24.5504 13.789 25 15.4144 25C17.078 25 18.5479 24.5546 19.8273 23.6637C21.1067 22.7777 22.0508 21.6846 22.6575 20.3976C23.2672 19.1122 23.569 17.7742 23.569 16.377V15.9924C24.1585 15.5239 24.6352 14.9963 25 14.4136C24.4711 14.6544 23.9244 14.818 23.359 14.901Z" fill="#75757F" />
                            <rect x="0.5" y="1.01562" width="35" height="35" rx="17.5" stroke="#81818B" stroke-opacity="0.9" />
                        </svg>
                    </div>
                    <div className={classes.facebook}>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5625 19.4667L21 17.1333L18.8125 17.1338V15.2667C18.8125 14.5461 19.1555 14.3333 20.125 14.3333H21V12C21 12 20.1031 12 19.25 12C17.4685 12 16.1875 13.1363 16.1875 15.2667V17.1333H14V19.4667H16.1875V26H18.8125V19.4667H20.5625Z" fill="#75757F" />
                            <rect x="0.5" y="1.01562" width="35" height="35" rx="17.5" stroke="#81818B" stroke-opacity="0.9" />
                        </svg>
                    </div>
                    <div className={classes.youTube}>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.6657 14.8776C25.4817 14.1385 24.9395 13.5565 24.2511 13.3589C23.0033 13 18 13 18 13C18 13 12.9967 13 11.7489 13.3589C11.0605 13.5565 10.5183 14.1385 10.3343 14.8776C10 16.2172 10 19.0121 10 19.0121C10 19.0121 10 21.8071 10.3343 23.1467C10.5183 23.8857 11.0605 24.4435 11.7489 24.6411C12.9967 25 18 25 18 25C18 25 23.0033 25 24.2511 24.6411C24.9395 24.4435 25.4817 23.8857 25.6657 23.1467C26 21.8071 26 19.0121 26 19.0121C26 19.0121 26 16.2172 25.6657 14.8776ZM16.3636 21.5497V16.4745L20.5454 19.0122L16.3636 21.5497Z" fill="#75757F" />
                            <rect x="0.5" y="1.01562" width="35" height="35" rx="17.5" stroke="#81818B" stroke-opacity="0.9" />
                        </svg>
                    </div>
                    <div className={classes.instagram}>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8 11H21.2C23.851 11 26 13.149 26 15.8V22.2C26 24.851 23.851 27 21.2 27H14.8C12.149 27 10 24.851 10 22.2V15.8C10 13.149 12.149 11 14.8 11ZM14.8 12.6C13.0327 12.6 11.6 14.0327 11.6 15.8V22.2C11.6 23.9673 13.0327 25.4 14.8 25.4H21.2C22.9673 25.4 24.4 23.9673 24.4 22.2V15.8C24.4 14.0327 22.9673 12.6 21.2 12.6H14.8ZM18 23C15.7909 23 14 21.2091 14 19C14 16.7909 15.7909 15 18 15C20.2091 15 22 16.7909 22 19C22 21.2091 20.2091 23 18 23ZM18 21.4C19.3255 21.4 20.4 20.3255 20.4 19C20.4 17.6745 19.3255 16.6 18 16.6C16.6745 16.6 15.6 17.6745 15.6 19C15.6 20.3255 16.6745 21.4 18 21.4ZM22 15.8C21.5582 15.8 21.2 15.4418 21.2 15C21.2 14.5582 21.5582 14.2 22 14.2C22.4418 14.2 22.8 14.5582 22.8 15C22.8 15.4418 22.4418 15.8 22 15.8Z" fill="#75757F" />
                            <rect x="0.5" y="1.01562" width="35" height="35" rx="17.5" stroke="#81818B" stroke-opacity="0.9" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className={classes.first}>
                <div className={classes.pages}>Pages</div>
                <div className={classes.item}>Home</div>
                <div className={classes.item}>About</div>
                <div className={classes.item}>Services</div>
                <div className={classes.item}>Packages</div>
                <div className={classes.item}>Blog</div>
                <div className={classes.item}>Contact</div>
            </div>

            <div className={classes.first}>
                <div className={classes.pages}>Utility pages</div>
                <div className={classes.item}>Instructions</div>
                <div className={classes.item}>Style guide</div>
                <div className={classes.item}>Licenses</div>
                <div className={classes.item}>Changelog</div>
                <div className={classes.item}>404 Not found</div>
                <div className={classes.item}>Password protected</div>
            </div>
    
            <div className={classes.first}>
                <div className={classes.top}>
                <div className={classes.titleF}>Subscribe to our newsletter</div>
                <div className={classes.textF} >Lorem ipsum dolor sit am consectetur adipiscing</div>
                <div className={classes.contact}> 
                <input className={classes.input} placeholder='Enter your email'></input>
                <button className={clsx(classes.button, classes.btn)}>Subscribe</button>
                </div>
                    
                
                </div>
         
            </div>
        </div>
    );
}


