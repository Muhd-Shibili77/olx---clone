import React from 'react';
import './Footer.css';
import facebook from '../../assets/facebook_icon.svg';
import instagram from '../../assets/instagram_icon.svg';
import twitter from '../../assets/twitter_icon.svg';
import player_icon from '../../assets/circle-play-regular.svg';
import appStore from '../../assets/appstore_logo.png';
import playstore from '../../assets/playstore_logo.png';
import olx from '../../assets/olx.svg'
import bikewale from '../../assets/bikewale.svg';
import carwale from '../../assets/carwale.svg';
import cartrade from '../../assets/cartrade.svg';
import cartrade_tech from '../../assets/cartrade_tech.svg';
import mobility from '../../assets/mobility.svg'

function Footer() {
    return (
        <div className="Footer">
            <div className="footerOne">
                <div className="f_para">
                    <h2>POPULAR LOCATIONS</h2>
                    <ul>
                        <li>Kolkata</li>
                        <li>Mumbai</li>
                        <li>Chennai</li>
                        <li>Pune</li>
                    </ul>
                </div>
                <div className="f_para">
                    <h2>TRENDING LOCATIONS</h2>
                    <ul>
                        <li>Bhubaneswar</li>
                        <li>Hyderabad</li>
                        <li>Chandigarh</li>
                        <li>Nashik</li>
                    </ul>
                </div>
                <div className="f_para">
                    <h2>ABOUT US</h2>
                    <ul>
                        <li>Tech@OLX</li>
                    </ul>
                </div>
                <div className="f_para">
                    <h2>OLX</h2>
                    <ul>
                        <li>Blog</li>
                        <li>Help</li>
                        <li>Sitemap</li>
                        <li>Legal & Privacy Information</li>
                        <li>Vulnerability Disclosure Program</li>
                    </ul>
                </div>
                <div className="f_para">
                    <h2>FOLLOW US</h2>
                    <div className="footicon">
                        <img src={facebook} alt="Facebook Icon" />
                        <img src={instagram} alt="Instagram Icon" />
                        <img src={twitter} alt="Twitter Icon" />
                        <img src={player_icon} alt="Play Icon" />
                    </div>
                    <div className="footapp">
                        <img src={appStore} alt="App Store" className='appStore' />
                        <img src={playstore} alt="Google Play Store" />
                    </div>
                </div>
            </div>
            <div className="footerTwo">
                <div className="footerLogos">
                    <img src={cartrade_tech} alt="CarTrade Tech" className="mainLogo" />
                    <div className="divider"></div>
                    <div className="partnerLogos">
                       
                        <img src={olx} alt="CarWale" />
                        <img src={carwale} alt="CarWale" />
                        <img src={bikewale} alt="BikeWale" />
                        <img src={cartrade} alt="CarTrade" />
                        <img src={mobility} alt="CarTrade" />
                    </div>
                </div>
                <div className="footerCredits">
                    <p className='helpText'>Help - Sitemap</p>
                    <p className='rightsText'> All rights reserved © 2006-2024 OLX</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
