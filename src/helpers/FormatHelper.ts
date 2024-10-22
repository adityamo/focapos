export const dropdownFormat = (data: any) => {
  const transformedArray = data.map((item: any) => ({
    code: item.id,
    display: item.name,
  }));

  return transformedArray;
};
