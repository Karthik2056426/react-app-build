import React from "react";
import './whatGPT3.css';
import  Feature  from "../../components/feature/feature.jsx";


const WhatGPT3= () => {

   return (
<div className="gpt3__whatgpt3 section__margin" id="wgpt3">
<div className="gpt3__whatgpt3-feature">
   <Feature title="what is GPT-3" text="Lorem Ipsum is simply dummy text of the printing ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "/>
</div>
<div className="gpt3__whatgpt3-heading">
   <h1 className="gradient__text">
      The possibilities are beyond your imagination.
   </h1>
   <p>Explore the library</p>
</div>
<div className="gpt3__whatgpt3-container">
   <Feature title="Chatbots" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"/>
   <Feature title="Knowledgebase" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book,"/>
   <Feature title="Education" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
</div>


</div>
   );
};

export default WhatGPT3;