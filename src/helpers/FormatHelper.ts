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

export const formatCurrency = (value: number | unknown): string =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value));
