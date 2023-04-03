import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Category from './Category';
import Product from './Product';
import Sidebar from './Sidebar';
import { Route, Routes } from 'react-router-dom';

function App() {
  // const [store, setStore] = React.useState([]);
  // console.log(store)
  // let res;
  // if(store.length){
  //   res = store.map(item => <Category key={item.id} name={item.name} img={item.image}/>)
  //   res = store.map(item => <Product key={item.id} title={item.title} images={item.images} price={item.price} description={item.description}/>)
  // }
  // let products;
  
  // React.useEffect(() => {
    //     // fetch('https://api.escuelajs.co/api/v1/categories')
    //     fetch('https://api.escuelajs.co/api/v1/products')
    //     .then(response => response.json())
    //     .then(data => setStore(data))
    //     .catch(e => console.log(e))
    // },[])
    const {mode, count} = useSelector(state => state);
    const dispatch = useDispatch()
    React.useEffect(()=>{
      document.querySelector('body').classList.toggle('dark')
    },[mode.isDark])

  return (
<Routes>
  <Route path='/' element={<Layout/>}>
    <Route index element={<HomePage/>}></Route>
    <Route path='products' element={<ProductsPage/>}></Route>
    <Route path='categories' element={<CategoriesPage/>}></Route>
    <Route path='users' element={<UsersPage/>}></Route>
    <Route path='*' element={<PageHasNotFound/>}></Route>
  </Route>
</Routes>
  );
}

export default App;
