import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import NavTabs from "./components/NavTabs";
import imageFiles from "./imageFiles.json";

var msg = "Click on any image to start the game!"
var counter = 0

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    imageFiles
  };

  // function to shuffle pictures, updating comments & score
  shuffleImage = (sourceArray,id) => {  
    // updating counter and restarting the game is the user clicks on the same image twice
    for (var k=0; k < sourceArray.length; k++){
      if (this.state.imageFiles[k].id === id){
        if (!sourceArray[k].didClick){
          msg = "You guessed correctly!"
          sourceArray[k].didClick = true;
          counter++;
        } else {
          msg = "You Guessed Incorrectly!"
          counter=0;
          for(var l=0; l < sourceArray.length; l++){
            sourceArray[l].didClick = false;
          }
        }
      }
    }
    // resuffling the entire array object and updating it through setState to re-render the component
    for (var i = 0; i < sourceArray.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (sourceArray.length - i));

      var temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
    }
    this.setState({ 
      imageFiles: sourceArray
    });
  }

  // Map over this.state.imageFiles and render a ImageCard component for each imageFile object
  render() {
    //console.log(this.state.imageFiles)
    return (
      <Wrapper>
        <NavTabs 
          msg={msg}
          counter={counter}
        /> 
          {this.state.imageFiles.map(imageFile => (
            <ImageCard
              shuffleImage={this.shuffleImage}
              id={imageFile.id}
              key={imageFile.id}
              name={imageFile.name}
              image={imageFile.image}
              didClick={imageFile.didClick}
              imageArray={this.state.imageFiles}
            />
        ))}
      </Wrapper>
    );
  }
}

export default App;