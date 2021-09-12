import image100 from "./img/100.png";

function FooterHead(){
  const maxFour = 4;
  const socialMediaBox = [];
  for(let i = 0; i < maxFour; i++){
    socialMediaBox.push(<img  className="socialMedia_circle"src={image100} alt="socialMediaBox" key={i}/>)
  }
  return (
    <div className="footerHead_Container">
      <div className="socialMedia_Container">
        {socialMediaBox}
      </div>
    </div>
  )
}

export default FooterHead;