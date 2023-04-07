import React from 'react';
import classes from './styles.module.scss'
import clsx from 'clsx';

export const Services = () => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.top}>
                    <button className={clsx(classes.button, classes.btn)}>services</button>
                    <div className={classes.title}>Services we offer</div>
                    <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</div>
                    <button className={clsx(classes.button_b, classes.btn_b)}>All services</button>
                </div>
                <div className={classes.part}>
                    <div className={clsx(classes.social)}>
                        <div className={classes.img}>
                            <svg width="77" height="76" viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_228)">
                                    <g clip-path="url(#clip1_1_228)">
                                        <path opacity="0.06" d="M55.4036 0.265625H21.6277C10.08 0.265625 0.71875 9.62687 0.71875 21.1745V54.9505C0.71875 66.4981 10.08 75.8594 21.6277 75.8594H55.4036C66.9513 75.8594 76.3125 66.4981 76.3125 54.9505V21.1745C76.3125 9.62687 66.9513 0.265625 55.4036 0.265625Z" fill="#0089FF" />
                                        <path d="M38.5157 63.8029C52.7318 63.8029 64.2561 52.2786 64.2561 38.0625C64.2561 23.8465 52.7318 12.3221 38.5157 12.3221C24.2997 12.3221 12.7753 23.8465 12.7753 38.0625C12.7753 52.2786 24.2997 63.8029 38.5157 63.8029Z" fill="#1B76FF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1058 32.9688H29.7516V51.1299H25.1058C24.4063 51.1299 23.8392 50.5898 23.8392 49.9236V34.175C23.8392 33.5088 24.4063 32.9688 25.1058 32.9688Z" stroke="white" stroke-width="1.60838" stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.7796 47.7297C51.4855 49.9931 49.9732 51.1299 47.2848 51.1299H33.2172C31.3058 51.1299 29.7516 49.667 29.7516 47.8681V32.9905C34.2128 32.5556 36.4434 30.9982 36.4434 26.8104V24.8035C36.4434 22.6883 38.2439 20.9735 40.4649 20.9735C41.3113 20.9735 42.1361 21.2278 42.8219 21.7003C43.7671 22.3526 44.3693 23.5882 44.3693 25.3673V31.1765C44.3693 31.6707 45.2058 32.0759 46.0424 32.0759H50.5298C52.4202 32.0759 53.9535 33.4992 53.9955 35.2685C54.0235 36.448 53.2849 40.0991 51.7796 47.7297Z" stroke="white" stroke-width="1.60838" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_228">
                                        <rect width="75.5938" height="75.5938" fill="white" transform="translate(0.71875 0.265625)" />
                                    </clipPath>
                                    <clipPath id="clip1_1_228">
                                        <rect width="75.5938" height="75.5938" fill="white" transform="translate(0.71875 0.265625)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className={classes.titleItem}>Social Media Marketing</div>
                        <div className={classes.scText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.</div>
                    </div>
                    <div className={classes.social}>
                        <div className={classes.fg}>
                            <div className={classes.img}>
                                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_241)">
                                        <g clip-path="url(#clip1_1_241)">
                                            <path opacity="0.06" d="M55.0286 0.265625H21.2527C9.70499 0.265625 0.34375 9.62687 0.34375 21.1745V54.9505C0.34375 66.4981 9.70499 75.8594 21.2527 75.8594H55.0286C66.5763 75.8594 75.9375 66.4981 75.9375 54.9505V21.1745C75.9375 9.62687 66.5763 0.265625 55.0286 0.265625Z" fill="#FF6F35" />
                                            <path d="M38.1407 63.8029C52.3567 63.8029 63.8811 52.2786 63.8811 38.0625C63.8811 23.8465 52.3567 12.3221 38.1407 12.3221C23.9246 12.3221 12.4003 23.8465 12.4003 38.0625C12.4003 52.2786 23.9246 63.8029 38.1407 63.8029Z" fill="#FFCD1D" />
                                            <path d="M38.1406 21.8447V54.2804" stroke="white" stroke-width="2.41257" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M45.5124 27.7421H34.4548C33.0862 27.7421 31.7737 28.2857 30.8059 29.2535C29.8382 30.2211 29.2946 31.5337 29.2946 32.9022C29.2946 34.2708 29.8382 35.5833 30.8059 36.5511C31.7737 37.5188 33.0862 38.0625 34.4548 38.0625H41.8265C43.195 38.0625 44.5076 38.6061 45.4753 39.5739C46.4431 40.5415 46.9867 41.8541 46.9867 43.2227C46.9867 44.5913 46.4431 45.9038 45.4753 46.8715C44.5076 47.8392 43.195 48.3829 41.8265 48.3829H29.2946" stroke="white" stroke-width="2.41257" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_241">
                                            <rect width="75.5938" height="75.5938" fill="white" transform="translate(0.34375 0.265625)" />
                                        </clipPath>
                                        <clipPath id="clip1_1_241">
                                            <rect width="75.5938" height="75.5938" fill="white" transform="translate(0.34375 0.265625)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className={classes.titleItem}>Paid Advertising</div>
                            <div className={classes.scText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.</div>
                        </div>
                    </div>
                    <div className={classes.social}>
                        <div className={classes.img}>
                            <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_5_20)">
                                    <path opacity="0.06" d="M54.9787 0H21.0213C9.41155 0 0 9.41155 0 21.0213V54.9787C0 66.5885 9.41155 76 21.0213 76H54.9787C66.5885 76 76 66.5885 76 54.9787V21.0213C76 9.41155 66.5885 0 54.9787 0Z" fill="#F6CA4F" />
                                    <path d="M38.0001 63.8788C52.2925 63.8788 63.8788 52.2925 63.8788 38.0001C63.8788 23.7076 52.2925 12.1213 38.0001 12.1213C23.7076 12.1213 12.1213 23.7076 12.1213 38.0001C12.1213 52.2925 23.7076 63.8788 38.0001 63.8788Z" fill="#FF6D35" />
                                    <path d="M47.5505 49.6729H28.4495C26.1149 49.6729 24.2048 47.7628 24.2048 45.4282V30.5718C24.2048 28.2373 26.1149 26.3271 28.4495 26.3271H47.5505C49.8851 26.3271 51.7952 28.2373 51.7952 30.5718V45.4282C51.7952 47.7628 49.8851 49.6729 47.5505 49.6729Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M24.2048 31.6329L38 40.1223L51.7952 31.6329" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_5_20">
                                        <rect width="76" height="76" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className={classes.titleItem}>Email Marketing</div>
                        <div className={classes.scText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.</div>
                    </div>
                    <div className={classes.social}>
                        <div className={classes.img}>
                            <svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_253)">
                                    <g clip-path="url(#clip1_1_253)">
                                        <path opacity="0.06" d="M55.0286 0.859375H21.2527C9.70499 0.859375 0.34375 10.2206 0.34375 21.7683V55.5442C0.34375 67.0919 9.70499 76.4531 21.2527 76.4531H55.0286C66.5763 76.4531 75.9375 67.0919 75.9375 55.5442V21.7683C75.9375 10.2206 66.5763 0.859375 55.0286 0.859375Z" fill="#5CC97B" />
                                        <path d="M38.1407 64.3967C52.3567 64.3967 63.8811 52.8723 63.8811 38.6563C63.8811 24.4402 52.3567 12.9159 38.1407 12.9159C23.9246 12.9159 12.4003 24.4402 12.4003 38.6563C12.4003 52.8723 23.9246 64.3967 38.1407 64.3967Z" fill="#5CC97B" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.8977 45.0292C39.0546 46.2479 36.8249 46.9189 34.4491 46.8208C28.44 46.5726 23.7696 41.4995 24.0178 35.4901C24.2659 29.4807 29.3387 24.8111 35.3479 25.0593C41.3561 25.3073 46.0275 30.3794 45.7793 36.3889C45.6918 38.5072 45.0047 40.4592 43.8885 42.088L51.2251 49.2115C52.1303 50.1929 52.0979 51.7099 51.1678 52.6499L51.125 52.6893L51.0798 52.7284C50.0689 53.5779 48.5543 53.4868 47.65 52.5046L40.8977 45.0292ZM34.5529 44.309C29.9306 44.1181 26.3378 40.2157 26.5287 35.5935C26.7197 30.9713 30.622 27.3785 35.2442 27.5694C39.8665 27.7603 43.4593 31.6626 43.2684 36.2848C43.0775 40.9071 39.1751 44.4999 34.5529 44.309Z" fill="white" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_253">
                                        <rect width="75.5938" height="75.5938" fill="white" transform="translate(0.34375 0.859375)" />
                                    </clipPath>
                                    <clipPath id="clip1_1_253">
                                        <rect width="75.5938" height="75.5938" fill="white" transform="translate(0.34375 0.859375)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className={classes.titleItem}>SEO Optimization</div>
                        <div className={classes.scText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

