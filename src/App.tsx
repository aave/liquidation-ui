import React from 'react';
import { DataGrid } from 'components/DataGrid';

import css from 'styled-jsx/css';

const staticStyles = css`
  .App {
    display: flex;
    flex-direction: column;
    flex: auto;
    height: 1px;
    &__content {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: hidden;
      position: relative;
    }
  }
`;

function App() {
  return (
    <div className="App">
      <DataGrid />

      <style jsx={true}>{staticStyles}</style>
    </div>
  );
}

export default App;
