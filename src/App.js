import './App.css';
import React, { Component } from "react";




export default class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      

       fullName : "Houssem",
       bio :"Tunis" ,
       imgSrc :"https://scontent.ftun10-1.fna.fbcdn.net/v/t1.0-1/c45.0.240.240a/p240x240/124824768_3371910139570812_3637779146417626089_n.jpg?_nc_cat=105&ccb=2&_nc_sid=7206a8&_nc_ohc=Rzk7X8C8MCgAX8k-X1S&_nc_ht=scontent.ftun10-1.fna&tp=27&oh=74b93c3dd63d7a9dcb0c2cabe7d0803f&oe=60419CA1", 
       profession1 :"User interface designer and " ,
       profession2 :"front-end developer" ,
       show : true

    };
  } 

 
 


render() {
  return (
    <div className="App"> 
      
      <div class="card-container">
    <span class="pro">PRO</span>
    <img
        class="round"
        src={this.state.imgSrc}
        alt="user"
    />
    <h3>{this.state.fullName}</h3>
    <h6>{this.state.bio}</h6>
    <p>
        {this.state.profession1} <br/>
        {this.state.profession2}
    </p>
    
    <div class="skills">
        <h6>Skills</h6>
        <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
        </ul>
    </div>

   </div> 
     
    </div>
  );
  
}

}
