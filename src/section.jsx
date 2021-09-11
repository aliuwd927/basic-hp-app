import ImgCarousel from "./imgcarousel";
import ItemBox from "./ItemBox";

function SectionPage(){
  return (
    <div className = "article_Container">
      <article className = "article_one">
        <ImgCarousel />
      </article>
      <div className="article_Sub_Container_One">
      <article className = "article_two">
          article two
        </article>
      </div>
      <div className ="article_Sub_Container_Two">
        <article className = "article_three">
        <h1 className="location_Text">Location</h1>
          <ItemBox />
        </article>
      </div>
    </div>
  );
}

export default SectionPage;