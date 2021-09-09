function ItemBox(){
  const numOfBox = [1,2,3,4,5,6,7,8,9];
  let display = numOfBox.map(element =>{
    return <h1 key={element}>{element}</h1>
  })
return <div>{display}</div>
}

export default ItemBox;