import moment from "moment";

export const formatDateOnly = (date) => {
  const localTime = moment.utc(date).local();

  if (localTime.isValid()) {
    return localTime.format("DD MMM, YYYY");
  }

  return null;
};

export const formatDate = (date, dateFormat) => {
  const localTime = moment.utc(date).local();

  if (localTime.isValid()) {
    return localTime.format(dateFormat || "DD MMM, YYYY HH:mm");
  }

  return "-";
};
