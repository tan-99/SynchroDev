import React from 'react';

function Footer(props) {
    return (
        <footer>
            <div className="footer">
                <div className="footer-1">
                    <h3>Follow us on</h3>
                    <div className="social">
                        <a href=" "><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"/></a>
                        <a href=" "><img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"/></a>
                        <a href=" "><img src="https://cdn-icons-png.flaticon.com/512/1384/1384065.png"/></a>
                        <a href=" "><img src="https://cdn-icons-png.flaticon.com/512/1384/1384069.png"/></a>
                    </div>
                </div>
                <div className="footer-2">
                    <h3>Explore</h3>
                    <a href=" ">Home</a>
                    <a href=" ">About</a>
                    <a href=" ">Contact</a>
                    <a href=" ">Blog</a>
                </div>
                <div className="footer-3">
                    <h3>Legal</h3>
                    <a href=" ">Terms and Conditions</a>
                    <a href=" ">Privacy Policy</a>
                    <a href=" ">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;