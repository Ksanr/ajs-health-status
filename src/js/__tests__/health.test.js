import { getHealthStatus } from '../health';

describe('getHealthStatus', () => {
  test('should return "healthy" for health > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  test('should return "wounded" for health between 50 and 15 inclusive', () => {
    expect(getHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
  });

  test('should return "critical" for health below 15', () => {
    expect(getHealthStatus({ name: 'Маг', health: 14 })).toBe('critical');
    expect(getHealthStatus({ name: 'Маг', health: 0 })).toBe('critical');
  });
});
