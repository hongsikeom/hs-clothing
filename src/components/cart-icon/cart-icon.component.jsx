import React from 'react';
import { ReactComponent as ShoppintIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { toggleCartHidden } from '../../redux/cart/cart.action';
import './cart-icon.styles.scss';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={() => toggleCartHidden()}>
        <ShoppintIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);


const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);