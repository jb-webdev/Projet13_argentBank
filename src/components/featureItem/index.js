import React from 'react'
import './features.css'


export default function FeatureItem({icon, alt, title, text}) {
    return (
        <div className="feature-item">
            <img src={icon} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{text} </p>
        </div>
    )
}
