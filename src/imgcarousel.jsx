import imageOne from "./img/600x300.png"
import imageTwo from "./img/650x300.png"
import imageThree from "./img/700x300.png"

function ImgCarousel(){
  let imgArray = [imageOne, imageTwo, imageThree];
  let currentValue = 0;
  function btnClick(event){
   //console.log( Number(event.target.attributes[0].value))
   let changeImg = Number(event.target.attributes[0].value);
   currentValue += changeImg;
   console.log(currentValue)
  }

  return (
    <div className="car_con">
      <button onClick = {btnClick} data-back = "-1">Back</button>
      <img src={imgArray[currentValue]} alt="place holder" />
      <button onClick ={btnClick} data-next = "1">Next</button>
    </div>
  );
}

export default ImgCarousel;