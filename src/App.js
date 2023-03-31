import React from 'react';
import Category from './Category';
import Product from './Product';

function App() {

  const [store, setStore] = React.useState([]);
  console.log(store)
  let res;
  if(store.length){
    // res = store.map(item => <Category key={item.id} name={item.name} img={item.image}/>)
    res = store.map(item => <Product key={item.id} title={item.title} images={item.images} price={item.price} description={item.description}/>)
  }
  let products;

  React.useEffect(() => {
      // fetch('https://api.escuelajs.co/api/v1/categories')
      fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setStore(data))
      .catch(e => console.log(e))
  },[])

  return (
    <>
      {res}
    </>
  );
}

export default App;
