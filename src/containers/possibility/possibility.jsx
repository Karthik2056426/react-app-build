import React from "react";
import possibilityImage from "../../assets/possibility.png"
import './possibility.css';


const Possibility = () => {

   return (
<div className="gpt3__possibility section__padding" id="possibility">
<div className="gpt3__possibility-image">
   <img src={possibilityImage} alt="possibility"/>
</div>
<div className="gpt3__possibility-content">
   <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis nisi ac rutrum tincidunt. Aliquam erat volutpat. Vivamus fringilla mauris quis cursus posuere. In auctor libero ante. Duis vitae malesuada sapien. Proin lorem dui, gravida non eros non, euismod ornare nisl. Ut non diam enim. Proin quis sodales velit. </p>
   <h4>Request early access to get started</h4>
</div>



</div>
   );
};

export default Possibility;