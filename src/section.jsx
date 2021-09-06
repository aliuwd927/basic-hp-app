import ImgCarousel from "./imgcarousel";

function SectionPage(){
  let section = (
    <div className = "article_Container">
      <article className = "article_one">
        <ImgCarousel />
      </article>
      <div className ="article_Sub_Container">
        <article className = "article_two">Artical Two</article>
        <article className = "article_three">Artical Three</article>
      </div>
    </div>
  )
  return section;
}

export default SectionPage;