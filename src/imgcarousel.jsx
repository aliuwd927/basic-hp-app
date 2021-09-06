import imageOne from "./img/600x300.png"
import imageTwo from "./img/650x300.png"
import imageThree from "./img/700x300.png"

function ImgCarousel(){
  let imgArray = [imageOne, imageTwo, imageThree];
  // imgArray.map((imgElement,index) =>{
  //   console.log(imgElement,index);
  // })

  function btnClick(event){
    console.log(event.target.innerHTML)
  }
  return (
    <div className="car_con">
      <button onClick = {btnClick}>Previous</button>
      <img src={imgArray[0]} alt="place holder" />
      <button onClick ={btnClick}>Advance</button>
    </div>
  );
}

export default ImgCarousel;