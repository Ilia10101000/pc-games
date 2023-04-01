import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Category from './Category';
import Product from './Product';
import Sidebar from './Sidebar';
import { increment,decrement } from './store/countReducer';

function App() {
  const {mode, count} = useSelector(state => state);
  const dispatch = useDispatch()
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

  return (
    <div className={mode.mode === 'light'?'root dark':'root'}>
      <Sidebar/>
      <div style={{position: 'absolute', top:'100px', left:'300px'}}>{count.count}
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
// 'A case reducer on a non-draftable value must not return undefined' что это значит и напиши пример как правильно работать с состоянием стора через createSlice