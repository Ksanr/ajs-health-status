import { sortHeroes } from '../sortHeroes';

describe('sortHeroes', () => {
  test('sorts heroes by health in descending order', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
    expect(sortHeroes(input)).toEqual(expected);
  });

  test('returns empty array for empty input', () => {
    expect(sortHeroes([])).toEqual([]);
  });

  test('returns single-element array unchanged', () => {
    const input = [{ name: 'маг', health: 100 }];
    expect(sortHeroes(input)).toEqual(input);
  });

  test('handles equal health values (stable sort not required)', () => {
    const input = [
      { name: 'A', health: 50 },
      { name: 'B', health: 50 },
    ];
    const result = sortHeroes(input);
    // Поскольку алгоритм сортировки нестабильный, но мы используем sort с числовым сравнением,
    // для равных значений порядок может сохраниться (зависит от реализации движка).
    // Проверим, что результат содержит те же объекты в любом порядке.
    expect(result).toEqual(expect.arrayContaining(input));
    expect(result).toHaveLength(2);
  });

  test('does not mutate original array', () => {
    const input = [{ name: 'мечник', health: 10 }];
    const copy = [...input];
    sortHeroes(input);
    expect(input).toEqual(copy);
  });
});
