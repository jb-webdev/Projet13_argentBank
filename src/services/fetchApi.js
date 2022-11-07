export const BASE_URL = "http://localhost:3001/api/v1"

const fetchApi = async ({
  url,
  method = 'GET',
  headers = {},
  body = '',
  errMsg = 'Failed to fetch data',
}) => {
  try {
    const res = await fetch(url, { method, headers, body: body === '' ? null : body });
    return res.json();
  } catch (err) {
    console.log("====== error API ======")
    console.log(errMsg)
    console.log(err)
    console.log("=======================")
  }
}

export default fetchApi;
