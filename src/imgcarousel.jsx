import imageOne from "./img/600x300.png"
import imageTwo from "./img/650x300.png"
import imageThree from "./img/700x300.png"

function ImgCarousel(){
  let imgArray = [imageOne, imageTwo, imageThree];
  return <img src = {imgArray[0]} alt="placeholder" />;
}

export default ImgCarousel;