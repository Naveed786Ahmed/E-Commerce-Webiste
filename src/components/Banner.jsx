import React from 'react';
import '../index.css';

const Banner = () => {
    return (
        <div className="banner">
            <h1 className="hashtag">#LETSBREAKSTYLE</h1>
            <p className="description">
                Create your own style with <span className="brand">SCLOTHERS</span><br />
                & Inspire others too.<br /><br />
                Share your style & give us a mention with <br />
                <span className="brand">@sclothers</span> & <span className="brand">#letsbreakstyle</span>.
            </p>
        </div>
    );
};

export default Banner;
