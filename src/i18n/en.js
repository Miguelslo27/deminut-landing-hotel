import {
  ADD_COMMENTS,
  ADD_COMMENTS_PLACEHOLDER,
  ACCEPT,
  CHANGE_LANGUAGE_PROMPT_DESCRIPTION,
  CHANGE_LANGUAGE_PROMPT_TITLE,
  CONFIRMED,
  CONFIRMED_DESCRIPTION,
  EDIT_ORDER,
  FETCHING_ORDER,
  MAKE_ORDER,
  MY_ORDER,
  ORDER,
  PENDING,
  PENDING_DESCRIPTION,
  REJECTED,
  REJECTED_DESCRIPTION,
  REMOVE_ITEM_FROM_ORDER,
  REMOVE_ORDER_PROMPT_DESCRIPTION,
  REMOVE_ORDER_PROMPT_TITLE,
  ROOM,
  SEARCH,
  SELECT,
  SELECT_ROOM,
  SENDING_ORDER,
  SELECT_TABLE,
  SELECT_GETTING_THE_ORDER,
  SELECT_THE,
  SELECT_SEND_TO,
  SEND_TO,
  TABLE,
  TOTAL,
  VIEW_ORDER,
  WRITE_ADDRESS,
  WRITE_ADDRESS_SEND_TO,
  STREET,
  NUMBER,
  APARTMENT_NUMBER,
  STREET_CORNER,
  PHONE_NUMBER,
  PHONE_NUMBER_DESCRIPTION,
  SHIPPING,
  PAYMENT_METHOD,
  CASH,
  MANDATORY,
} from './keys';
const translation = {
  // ViewMenu
  [ADD_COMMENTS]: 'Add comments',
  [ADD_COMMENTS_PLACEHOLDER]: 'Write up to 100 characters',
  [ACCEPT]: 'Accept',
  [CHANGE_LANGUAGE_PROMPT_TITLE]: 'Select your language',
  [CHANGE_LANGUAGE_PROMPT_DESCRIPTION]: 'Select the new text language:',
  [CONFIRMED]: 'Confirmed',
  [CONFIRMED_DESCRIPTION]: 'Your order was confirmed by the store and will be delivered in a few minutes.',
  [EDIT_ORDER]: 'Edit order',
  [FETCHING_ORDER]: 'Fetching order...',
  [MAKE_ORDER]: 'Make order',
  [MY_ORDER]: 'My order',
  [ORDER]: 'Order',
  [PENDING]: 'Pending',
  [PENDING_DESCRIPTION]: 'Your order is awaiting confirmation from the store.',
  [REJECTED]: 'Rejected',
  [REJECTED_DESCRIPTION]: 'Your order was rejected by the store.',
  [REMOVE_ITEM_FROM_ORDER]: 'Remove from order',
  [REMOVE_ORDER_PROMPT_TITLE]: 'Remove order',
  [REMOVE_ORDER_PROMPT_DESCRIPTION]: 'Do you wish to remove your order?',
  [ROOM]: 'Room',
  [SEARCH]: 'Search',
  [SELECT]: 'Select',
  [SELECT_SEND_TO]: 'Select destination',
  [SELECT_THE]: 'Select a',
  [SELECT_GETTING_THE_ORDER]: 'to receive the order.',
  [SELECT_ROOM]: 'Select room',
  [SELECT_TABLE]: 'Select table',
  [SEND_TO]: 'Send to',
  [TABLE]: 'Table',
  [TOTAL]: 'Total',
  [SENDING_ORDER]: 'Sending order...',
  [VIEW_ORDER]: 'View order',
  [WRITE_ADDRESS]: 'Write delivery information',
  [WRITE_ADDRESS_SEND_TO]: 'Delivery information',
  [STREET]: 'Street',
  [NUMBER]: 'Door number',
  [APARTMENT_NUMBER]: 'Department',
  [STREET_CORNER]: 'Corner',
  [PHONE_NUMBER]: 'Phone number',
  [PHONE_NUMBER_DESCRIPTION]: 'We will use it to notify you the delivery status',
  [SHIPPING]: 'Shipping',
  [PAYMENT_METHOD]: 'Payment method',
  [CASH]: 'Cash / POS',
  [MANDATORY]: 'Mandatory',
};

export default translation;
