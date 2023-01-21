import { apiDecodeUrl } from './apiConst';

const fetchData = async (headers = {}, ...arg) => {
  try {
    const { baseUrl } = apiDecodeUrl;
    const searchArg = arg.join("");

    const request = await fetch(`${baseUrl}${searchArg}?format=json`, headers);
    const data = await request.json();

    return data;
  } catch (e) {
    console.log(`Error! ${e}`);
  }
};

export default fetchData;
