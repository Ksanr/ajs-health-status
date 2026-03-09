jest.mock('../http', () => ({
  __esModule: true,
  default: jest.fn(),      // дефолтный экспорт (fetchData)
  httpGet: jest.fn(),      // именованный экспорт httpGet
  httpPost: jest.fn(),     // именованный экспорт httpPost
}));

import { loadUser, getLevel, saveUser } from '../user';
import { httpGet } from '../http';
import fetchData from '../http';

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

test('saveUser throws error', () => {
  expect(() => saveUser({})).toThrow('Unimplemented');
});

describe('getLevel', () => {
  test('should return level message when status is "ok"', () => {
    fetchData.mockReturnValue({ status: 'ok', level: 42 });

    const result = getLevel(1);
    expect(result).toBe('Ваш текущий уровень: 42');
    expect(fetchData).toHaveBeenCalledTimes(1);
    // Исправлено: URL должен совпадать с реальным вызовом в user.js
    expect(fetchData).toHaveBeenCalledWith('http://server:8080/user/1');
  });

  test('should return unavailable message when status is not "ok"', () => {
    fetchData.mockReturnValue({ status: 'error' });

    const result = getLevel(2);
    expect(result).toBe('Информация об уровне временно недоступна');
    expect(fetchData).toHaveBeenCalledWith('http://server:8080/user/2');
  });

  test('should return unavailable message when response has no status field', () => {
    fetchData.mockReturnValue({ data: 'something' });

    const result = getLevel(3);
    expect(result).toBe('Информация об уровне временно недоступна');
    expect(fetchData).toHaveBeenCalledWith('http://server:8080/user/3');
  });
});
