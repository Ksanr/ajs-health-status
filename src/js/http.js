export function httpGet(url) {
  throw new Error(url);
}

export function httpPost(url) {
  throw new Error(url);
}

// Демо-реализация, которая в реальности делает запрос к серверу.
// В тестах её полностью замена моком.
export default function fetchData(url) {
  throw new Error('Mock this!');
}
