import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import DataGrid from './screens/DataGrid';
import LiquidationConfirmation from './screens/LiquidationConfirmation';

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
      <Switch>
        <Route exact={true} path="/" component={DataGrid} />
        <Route
          exact={true}
          path="/liquidation/:collateralReserve/:reserveId/confirmation"
          component={LiquidationConfirmation}
        />

        <Redirect to="/" />
      </Switch>

      <style jsx={true}>{staticStyles}</style>
    </div>
  );
}

export default App;
