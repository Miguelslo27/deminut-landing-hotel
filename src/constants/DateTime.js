import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

const parseDate = date => moment.unix(date).format("LL");

const addTwoHours = date => moment(date).add('2', 'hours').toDate();

export {
  parseDate,
  addTwoHours,
};
