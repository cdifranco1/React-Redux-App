import React from 'react';
import { column } from './CoinList'


export const TableHeader = () =>
    <>
      <h1>Cryptocurrency Prices</h1>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h2 style={column}></h2>
        <h2 style={column}>Symbol</h2>
        <h2 style={column}>Current Price</h2>
        <h2 style={column}>Market Cap</h2>
      </div>
    </>