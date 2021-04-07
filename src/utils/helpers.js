export const getJSON = async function (url, errorMsg = 'Something went wrong') {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.drinks[0];
  } catch (err) {
    throw new Error(errorMsg);
  }
};
