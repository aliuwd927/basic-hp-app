import ImgCarousel from "./imgcarousel";
import ItemBox from "./ItemBox";
import Testimonial from "./testimonial";

function SectionPage(){
  return (
    <div className = "article_Container">
        <ImgCarousel />
        <Testimonial />
        <ItemBox />
    </div>
  );
}

export default SectionPage;