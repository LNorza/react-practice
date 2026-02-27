import { describe, expect, test } from 'vitest';
import { add, multiply, subtract } from './math.helper';

describe('add', () => {
  test('Should add two positives numbers', () => {
    // Arrange
    const a = 1;
    const b = 3;

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(a + b);
  });

  test('Should add two negative numbers', () => {
    // Arrange
    const a = -1;
    const b = -3;

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(a + b);
  });
});

describe('subtract', () => {
  test('Should subtract two positives numbers', () => {
    // Arrange
    const a = 5;
    const b = 3;
    // Act
    const result = subtract(a, b);
    // Assert
    expect(result).toBe(a - b);
  });

  test('Should subtract two negative numbers', () => {
    // Arrange
    const a = -5;
    const b = -3;

    // Act
    const result = subtract(a, b);

    // Assert
    expect(result).toBe(a - b);
  });
});

describe('multiply', () => {
  test('Should multiply two positive numbers', () => {
    // Arrange
    const a = 2;
    const b = 3;

    // Act
    const result = multiply(a, b);

    // Assert
    expect(result).toBe(a * b);
  });

  test('Should multiply two negative numbers', () => {
    // Arrange
    const a = -2;
    const b = -3;

    // Act
    const result = multiply(a, b);

    // Assert
    expect(result).toBe(a * b);
  });
});
