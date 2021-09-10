import image150 from "./img/150.png"

function ItemBox(){
  const numOfBox = 9
  let displayArray = [];
    for(let i = 0; i < numOfBox; i++){
       displayArray.push(<img src={image150}/>)
    }
  return displayArray;
}

export default ItemBox;