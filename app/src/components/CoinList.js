import React, { useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { connect } from 'react-redux';

import { getData } from '../actions'

import { currencyFormat } from '../utils'

const CoinList = (props) => {
  console.log(props)

  useEffect(() => {
    props.getData()

    setInterval(() => {
      props.getData()
    }, 5000)
  }, [])

  return (
    <>
      <h1>I suck</h1>
      {props.coins.map(coin =>
        <Card> 
          <CardImg style={{width: '10%'}} src={coin.image}/>
          <div>{coin.symbol}</div> 
          <div>{coin.name}</div>
          <div>{currencyFormat(coin.current_price)}</div>
          <div>{currencyFormat(coin.market_cap)}</div>
        </Card>
      )}
      <button onClick={props.getData}>Fetch Coin Data</button>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    coins: state.coins,
    isFetchingData: state.isFetchingData
  }
}


export default connect( mapStateToProps, { getData })(CoinList)