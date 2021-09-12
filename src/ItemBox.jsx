import image150 from "./img/150.png"

function ItemBox(){
  const numOfBox = 9
  let displayArray = [];
    for(let i = 0; i < numOfBox; i++){
       displayArray.push(<img  className ="placeHolder_Img"src={image150} alt="grey box"/>)
    }
  return (
    <div className="article_Sub_Container_Two">
      <h1 className="location_Text">Location</h1>
      <section className="array_Container">{displayArray}</section>
    </div>
  );
}

export default ItemBox;