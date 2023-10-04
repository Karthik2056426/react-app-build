import React from "react";
import './features.css';
import Feature from "../../components/feature/feature";
const featuresData = [
   {
      title: "Improving end distrusts instantly",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at semper arcu, et viverra ligula. Nulla molestie vestibulum enim tincidunt facilisis. Curabitur elementum metus metus, sed aliquet diam congue quis. Etiam in commodo turpis. Sed sed diam id tortor viverra dictum. Donec condimentum."
   },
   {
      title: "Efficient package managing",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at semper arcu, et viverra ligula. Nulla molestie vestibulum enim tincidunt facilisis. Curabitur elementum metus metus, sed aliquet diam congue quis. Etiam in commodo turpis. Sed sed diam id tortor viverra dictum. Donec condimentum."
   },
   {
      title: "Full time customer support",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at semper arcu, et viverra ligula. Nulla molestie vestibulum enim tincidunt facilisis. Curabitur elementum metus metus, sed aliquet diam congue quis. Etiam in commodo turpis. Sed sed diam id tortor viverra dictum. Donec condimentum."
   },
   {
      title: "Regular updates with malware protection",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at semper arcu, et viverra ligula. Nulla molestie vestibulum enim tincidunt facilisis. Curabitur elementum metus metus, sed aliquet diam congue quis. Etiam in commodo turpis. Sed sed diam id tortor viverra dictum. Donec condimentum."
   }
]

const Features = () => {

   return (
<div className="gpt3__features section__padding" id="features">
<div className="gpt3__features-heading">
   <h1 className="gradient__text">
      The future Is Now and You Just need to Realize it.Step into Future today and make it happen.
   </h1>
   <p>Request early access to Get Started.</p>
</div>
<div className="gpt3__features-container">
{featuresData.map((item,index) =>(<Feature title={item.title} text={item.text} key={item.title+index}/>))}
   
</div>

</div>
   );
};

export default Features;