import moment from "moment";

export const dropdownFormat = (data: any) => {
  const transformedArray = data.map((item: any) => ({
    code: item.id,
    display: item.name,
  }));

  return transformedArray;
};

export const getDateTimeNow = () => {
  const dateNow = moment().format();
  return dateNow;
};
