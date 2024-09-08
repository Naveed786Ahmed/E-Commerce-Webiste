import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons'; // Correct package for Bandcamp icon
import { faBold, faMale, faRecycle } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { faFlag, faUser } from '@fortawesome/free-regular-svg-icons'; // Regular icons
import './HeroSec.css'; // Custom CSS for styling

const data = [
    {
        icon: <FontAwesomeIcon icon={faBandcamp} />,
        title: "Top Quality Fabric",
        des: 'Sclothers credits its origin to a simple yet industry-disrupting realization: "Quality should never be a privilege." We synthesize the best of both worlds: quality, fashionable apparel that does not form craters in your wallet.'
    },
    {
        icon: <FontAwesomeIcon icon={faMale} />,
        title: "All Sizes Matter",
        des: "The best part of being human is that we are uniquely different. We come in all shapes and sizes; So, every design we make is always available in all sizes, up to 2XL and 3XL as well."
    },
    {
        icon: <FontAwesomeIcon icon={faFlag} />,
        title: "Proudly Made in Pakistan",
        des: "Our textile industry manufactures fabric for the most loved brands globally. We take pride in being a Pakistani-owned and produced entity."
    },
    {
        icon: <FontAwesomeIcon icon={faRecycle} />,
        title: "Sustainable Practices",
        des: "At Sclothers, we're on a mission to provide eco-friendly clothing using sustainable materials and reducing our carbon footprint."
    },
    {
        icon: <FontAwesomeIcon icon={faBold} />,
        title: "Fast Delivery Services",
        des: "We prioritize fast turnaround times. You'll be rocking your new Sclothers styles in just a few business days."
    },
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: "Expert Customer Care",
        des: "Our customer support team is here to assist you. Call/WhatsApp us at +(92)301-9229998 or email care@sclothers.com."
    }
];

export const HeroSec = () => {
    return (
        <div className="card-container">
           
            {data.map((item, index) => (
                <div className="card" key={index}>
                    <div className="icon">{item.icon}</div>
                    <h3 className="title">{item.title}</h3>
                    <p className="description">{item.des}</p>
                </div>
            ))}
        </div>
    );
};
