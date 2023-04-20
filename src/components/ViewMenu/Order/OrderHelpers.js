import { SYMBOL_S } from '../../../constants/Currencies';

const BASE_AMOUNT = 1;

export const getTotalPrice = (items, shippingPrice) => {
  return Number(shippingPrice) + items?.reduce((acc, curr) => acc + (+curr.discountPrice || +curr.price) * curr.quantity, 0);
}

export const getPrice = (currency, price, amount = BASE_AMOUNT) => {
  if (currency === SYMBOL_S) {
    return `${currency}${Math.floor(price) * amount}`;
  }
  return `${currency}${price}`;
}
