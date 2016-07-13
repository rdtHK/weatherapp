import moment from "moment";

export const formatDate = (date) => {
  return moment.unix(date).format('dddd, MMM D');
}
