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
  // View Menu
  [ADD_COMMENTS]: 'Aggiungi commenti',
  [ADD_COMMENTS_PLACEHOLDER]: 'Scrivi fino a 100 caratteri',
  [ACCEPT]: 'Accettare',
  [CHANGE_LANGUAGE_PROMPT_TITLE]: 'Seleziona la lingua',
  [CHANGE_LANGUAGE_PROMPT_DESCRIPTION]: 'Seleziona la nuova lingua dei testi:',
  [CONFIRMED]: 'Confermato',
  [CONFIRMED_DESCRIPTION]: 'Il tuo ordine è stato confermato dal locale e verrà consegnato in pochi minuti',
  [EDIT_ORDER]: `Modificare l'ordine`,
  [FETCHING_ORDER]: `Ottenere l'ordine...`,
  [MAKE_ORDER]: `Fai l'ordine`,
  [MY_ORDER]: 'Il mio ordine',
  [ORDER]: 'Ordine',
  [PENDING]: 'In sospeso',
  [PENDING_DESCRIPTION]: 'Il tuo ordine è in attesa di conferma da parte del locale',
  [REJECTED]: 'Respinto',
  [REJECTED_DESCRIPTION]: 'La tua richiesta è stata rifiutata dal locale.',
  [REMOVE_ITEM_FROM_ORDER]: `Rimuovi dall'ordine`,
  [REMOVE_ORDER_PROMPT_TITLE]: 'Elimina ordine',
  [REMOVE_ORDER_PROMPT_DESCRIPTION]: '¿Cancellare il tuo ordine?',
  [ROOM]: 'Camera',
  [SEARCH]: 'Cercare',
  [SELECT]: 'Selezionare',
  [SELECT_SEND_TO]: 'Seleziona la destinazione',
  [SELECT_THE]: 'Selezionare',
  [SELECT_GETTING_THE_ORDER]: `per ricevere l'ordine.`,
  [SELECT_ROOM]: 'Seleziona la camera',
  [SELECT_TABLE]: 'Seleziona il tavolo',
  [SEND_TO]: 'Inviare a',
  [TABLE]: 'Tavolo',
  [TOTAL]: 'Totale',
  [SENDING_ORDER]: `Invio dell'ordine...`,
  [VIEW_ORDER]: 'Vedi ordine',
  [WRITE_ADDRESS]: "Scrivi informazioni di consegna",
  [WRITE_ADDRESS_SEND_TO]: "Informazioni sulla consegna",
  [STREET]: "Street",
  [NUMBER]: "Numero porta",
  [APARTMENT_NUMBER]: "Department",
  [STREET_CORNER]: "Corner",
  [PHONE_NUMBER]: "Numero di telefono",
  [PHONE_NUMBER_DESCRIPTION]: "Lo utilizzeremo per notificarti lo stato della consegna",
  [SHIPPING]: "Spedizione",
  [PAYMENT_METHOD]: "Metodo di pagamento",
  [CASH]: "Contanti / POS",
  [MANDATORY]: 'Necessario',
};

export default translation;
