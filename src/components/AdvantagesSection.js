import React from 'react';
import './AdvantagesSection.css';
import { IoLogoReact } from "react-icons/io5";

function AdvantagesSection() {

    const advantages = [
        "Надійність",
        "Безпека",
        "Масштабованість"
    ];

    return (
        <div className="advantages-container">
             <IoLogoReact className="advantages-background-icon" size="100%" />
            {advantages.map((advantage, index) => (
       
                <div key={index} className="advantage-item">
                     {/* Додавання іконки */}
                    <p>{advantage}</p>
                    
                </div>
            ))}
        </div>
    );
}

export default AdvantagesSection;
