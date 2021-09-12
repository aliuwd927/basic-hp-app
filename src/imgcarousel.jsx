import { useState } from "react";
import imageOne from "./img/600x300.png"
import imageTwo from "./img/650x300.png"
import imageThree from "./img/700x300.png"

function ImgCarousel(){
  let imgArray = [imageOne, imageTwo, imageThree];
  let [currentValue, setCurrentValue] = useState(0);
  function btnClick(event){
    console.log(event)
   //console.log( Number(event.target.attributes[0].value))
   let changeImg = Number(event.target.attributes[1].value);
   setCurrentValue(currentValue + changeImg);
   if(currentValue >2){
     setCurrentValue(0)
   }else if(currentValue < 0){
     setCurrentValue(2);
   }
  }

  return (
    <div className="carousel_Container_Main">
      <div className="carousel_Container_Sub">
        <button className="carousel_Prev" onClick = {btnClick} data-back = "-1">Back</button>
        <div className="carousel_Container_Img">
         <img className="carousel_Img"src={imgArray[currentValue]} alt="place holder" />
        </div>
        <button className="carousel_Next"onClick ={btnClick} data-next = "1">Next</button>
      </div>
    </div>
  );
}

export default ImgCarousel;