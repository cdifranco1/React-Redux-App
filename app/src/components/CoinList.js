import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getData, fetchMore } from '../actions'
import { currencyFormat } from '../utils'

import { TableHeader } from './TableHeader'

export const column = {
  width: '25%',
  textAlign: 'left',
}

const container = {
  display: 'flex', 
  flexDirection: 'column', 
  padding: '2%'
}


const CoinList = (props) => {
  console.log(props)

  useEffect(() => {
    props.getData(props.listings)
  }, [props.listings])

  const handleFetch = (e) => {
    e.preventDefault()
    props.fetchMore()
  }

  return (
    <div style={container}>
      <TableHeader />
      {props.coins.map(coin =>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}> 
          <div style={column}><img style={{width: '10%', marginRight: '2%'}} src={coin.image}/>{coin.name}</div>
          <div style={column}>{coin.symbol}</div> 
          <div style={column}>{currencyFormat(coin.current_price)}</div>
          <div style={column}>{currencyFormat(coin.market_cap)}</div>
        </div>
      )}
      {(props.isFetchingData && <button style={{width: '15%', margin: '0 auto'}}>Loading...</button>) ||
      <button onClick={handleFetch} style={{width: '15%', margin: '0 auto'}}>More</button>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    coins: state.coins,
    isFetchingData: state.isFetchingData
  }
}


export default connect( mapStateToProps, { getData, fetchMore })(CoinList)