import React from "react";
import './RecipeCard.css';

const RecipeCard = ({name, imgUrl, description}) => {
    return (
        <div id="recipe-card-container">
            <div className="ui card" >
                <div className="image">
                    <img src={imgUrl}/>
                </div>
                <div className="content">
                    <a className="header">{name}</a>
                    <div className="description">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;