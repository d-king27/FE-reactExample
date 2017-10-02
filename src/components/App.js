import React from 'react';
import ItemList from './ItemList' 
class App extends React.Component {
  render () {
    return (
      <div>
      <h2> Todo App </h2>
      <ItemList></ItemList>
      </div>
    );
  }
}


export default App;