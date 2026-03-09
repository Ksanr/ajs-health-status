export function httpGet(url) {
  throw new Error(`HTTP GET request to ${url} failed`);
}

export function httpPost(url) {
  throw new Error(`HTTP POST request to ${url} failed`);
}

export default function fetchData(url) {
  throw new Error(`Fetch data from ${url} failed - mock this!`);
}
