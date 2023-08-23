import React from 'react';
import Dropdown from './Dropdown';

const App = () => {
  const items = ['CU', 'LPU', 'Pes University', 'Jain University'];

  return (
    <div className="app">
      <h2 className="head">Should use a dropdown:</h2>
      <Dropdown items={items} />
    </div>
  );
};

export default App;
