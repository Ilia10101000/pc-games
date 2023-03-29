import React from 'react';


function App() {
  return (
    <>
      <header className='header-container'>
        <navbar className='navbar-container'>
          <navlink>
            <a>Link1</a>
            <a>Link2</a>
            <a>Link3</a>
            <a>Link4</a>
          </navlink>
        </navbar>
      </header>
      <main>
        <section>
          <div className='main-content'>4000$</div>
          <div>8000$</div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
