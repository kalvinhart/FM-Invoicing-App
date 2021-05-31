export const getData = async () => {
  const result = await fetch("./data.json");
  const invoiceData = await result.json();
  return invoiceData;
};
