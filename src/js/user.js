import { httpGet } from './http';
import fetchData from './http';

export function loadUser(id) {
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}

// eslint-disable-next-line no-unused-vars
export function saveUser(user) {
  throw new Error('Unimplemented');
}

export function getLevel(id) {
  const response = fetchData(`http://server:8080/user/${id}`);
  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }
  return `Информация об уровне временно недоступна`;
}
