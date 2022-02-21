import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.itemDispatch}>Buy Items</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes 
    : state.iceCream.numOfIceCreams 
  return {
    item: itemState,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())

  return {
    itemDispatch: dispatchFunction,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);