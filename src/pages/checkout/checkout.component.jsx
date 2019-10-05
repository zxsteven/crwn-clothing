import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import './checkout.styles'
import { CheckoutPageContainer, CheckoutHeader, CheckoutHeaderBlock, Total, TestWarning } from './checkout.styles'

const CheckoutPage = ({cartItems, total}) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <CheckoutHeaderBlock>
        <span>Product</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Description</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Quantity</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Price</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Remove</span>
      </CheckoutHeaderBlock>
    </CheckoutHeader>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <Total>
      <span>Total: ${total}</span>
    </Total>

    <TestWarning>
      *Please use the following test credit card for payments*
      <br/>
      4242 4242 4242 4242 - exp:01/20 - CVC:123
    </TestWarning>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)