export const apiDecodeUrl = {
  baseUrl: 'https://vpic.nhtsa.dot.gov/api/vehicles',
};
export const headersFetch = (type, body) => {
  return  {
    method: type,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
}
