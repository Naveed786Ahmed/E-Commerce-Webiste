import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faSnapchat, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (

        <div className="footer">

            <div className="footer-heading">
                <h1>STAY CONNECTED</h1>
            </div>

            <div className="footer-media">
                <ul>
                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                    <li><FontAwesomeIcon icon={faYoutube} /></li>
                    <li><FontAwesomeIcon icon={faSnapchat} /></li>
                    <li><FontAwesomeIcon icon={faTiktok} /></li>
                </ul>
            </div>

            <div className="footer-content">

                <div className="help one">
                    <p>LET US HELP YOU</p>
                    <ul>
                        <li>Shipping Policy</li>
                        <li>Return and Exchange</li>
                        <li>Refund policy</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div className="newsletter two">
                    <p>SUBSCRIBE TO OUR NEWSLETTER & GET 12% OFF!</p>
                    <form>
                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Email</label>
                        </div>
                    </form>
                    <ul>
                        <li><FontAwesomeIcon icon={faInstagram} /></li>
                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                        <li><FontAwesomeIcon icon={faYoutube} /></li>
                        <li><FontAwesomeIcon icon={faSnapchat} /></li>
                        <li><FontAwesomeIcon icon={faTiktok} /></li>
                    </ul>
                </div>

                <div className="about one">
                    <p>GET TO KNOW US</p>
                    <ul>
                        <li>About Us</li>
                        <li>Contact us</li>
                        <li>Our Outlets</li>
                    </ul>
                </div>

                <div className="shopping one">
                    <p>SHOPPING</p>
                    <ul>
                        <li>Men Polo Shirts</li>
                        <li>Men T-shirts</li>
                        <li>Men Trousers</li>
                        <li>Caps</li>
                        <li>Plus Size Clothing</li>
                        <li>2XL Clothing</li>
                        <li>3XL Clothing</li>
                    </ul>
                </div>

                <div className="sclothers two">
                    <img src="https://www.sclothers.com/cdn/shop/files/123123213213.png?v=1711576593&width=1080" alt="Sclothers" />
                    <p>At Sclothers, we're committed to ensuring sustainable consumption and production patterns, making sure there is no wastage. Your order is made from the finest materials, meticulously crafted in Pakistan using premium fabrics. These fabrics seamlessly blend comfort and fashion, ensuring you look good and feel good for years to come. We also offer a wide range of Plus Size Clothing, with sizes ranging from 2XL to 3XL, providing a diverse selection for you to explore. Sclothers is where quality confidence is!</p>
                </div>

            </div>


            <div className="copyright">
                <p>© 2024 Sclothers All Rights and Trademarks Reserved.</p>
            </div>

        </div>
    );
};

export default Footer;
