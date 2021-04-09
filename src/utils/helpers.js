export const getJSON = async (url, errorMsg = 'Something went wrong') => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.drinks[0];
  } catch (err) {
    throw new Error(errorMsg);
  }
};

export const paginate = (data, num = 16) => {
  const itemsPerPage = num;
  if (data.length < num) return data;
  const numberOfPages = Math.ceil(data.length / itemsPerPage);

  const newData = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });

  return newData;
};
