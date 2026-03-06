const Calculator = require('../calculator');

describe('Calculator - Basic Operations', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('Addition Tests', () => {
    test('should add two positive numbers: 2 + 3 = 5', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add larger positive numbers: 100 + 50 = 150', () => {
      expect(calculator.add(100, 50)).toBe(150);
    });

    test('should add negative numbers: -5 + -10 = -15', () => {
      expect(calculator.add(-5, -10)).toBe(-15);
    });

    test('should add positive and negative: 10 + -5 = 5', () => {
      expect(calculator.add(10, -5)).toBe(5);
    });

    test('should handle zero: 0 + 5 = 5', () => {
      expect(calculator.add(0, 5)).toBe(5);
    });

    test('should add decimals: 2.5 + 3.5 = 6', () => {
      expect(calculator.add(2.5, 3.5)).toBe(6);
    });

    test('should add zero and zero: 0 + 0 = 0', () => {
      expect(calculator.add(0, 0)).toBe(0);
    });
  });

  describe('Subtraction Tests', () => {
    test('should subtract two positive numbers: 10 - 4 = 6', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should subtract larger numbers: 100 - 45 = 55', () => {
      expect(calculator.subtract(100, 45)).toBe(55);
    });

    test('should subtract negative numbers: -5 - -3 = -2', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    test('should subtract positive from negative: -10 - 5 = -15', () => {
      expect(calculator.subtract(-10, 5)).toBe(-15);
    });

    test('should subtract to get negative result: 5 - 10 = -5', () => {
      expect(calculator.subtract(5, 10)).toBe(-5);
    });

    test('should handle zero: 10 - 0 = 10', () => {
      expect(calculator.subtract(10, 0)).toBe(10);
    });

    test('should subtract decimals: 10.5 - 4.5 = 6', () => {
      expect(calculator.subtract(10.5, 4.5)).toBe(6);
    });

    test('should subtract same number: 7 - 7 = 0', () => {
      expect(calculator.subtract(7, 7)).toBe(0);
    });
  });

  describe('Multiplication Tests', () => {
    test('should multiply two positive numbers: 45 * 2 = 90', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should multiply larger numbers: 12 * 8 = 96', () => {
      expect(calculator.multiply(12, 8)).toBe(96);
    });

    test('should multiply by one: 5 * 1 = 5', () => {
      expect(calculator.multiply(5, 1)).toBe(5);
    });

    test('should multiply by zero: 5 * 0 = 0', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('should multiply negative numbers: -3 * -4 = 12', () => {
      expect(calculator.multiply(-3, -4)).toBe(12);
    });

    test('should multiply positive and negative: 6 * -3 = -18', () => {
      expect(calculator.multiply(6, -3)).toBe(-18);
    });

    test('should multiply decimals: 2.5 * 4 = 10', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });

    test('should multiply two decimals: 1.5 * 2.5 = 3.75', () => {
      expect(calculator.multiply(1.5, 2.5)).toBe(3.75);
    });

    test('should handle zero: 0 * 0 = 0', () => {
      expect(calculator.multiply(0, 0)).toBe(0);
    });
  });

  describe('Division Tests', () => {
    test('should divide two positive numbers: 20 / 5 = 4', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test('should divide with remainder: 10 / 3 ≈ 3.333...', () => {
      expect(calculator.divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should divide by one: 15 / 1 = 15', () => {
      expect(calculator.divide(15, 1)).toBe(15);
    });

    test('should divide larger numbers: 100 / 4 = 25', () => {
      expect(calculator.divide(100, 4)).toBe(25);
    });

    test('should divide negative numbers: -12 / -3 = 4', () => {
      expect(calculator.divide(-12, -3)).toBe(4);
    });

    test('should divide positive by negative: 12 / -3 = -4', () => {
      expect(calculator.divide(12, -3)).toBe(-4);
    });

    test('should divide negative by positive: -12 / 3 = -4', () => {
      expect(calculator.divide(-12, 3)).toBe(-4);
    });

    test('should divide decimals: 10.5 / 2 = 5.25', () => {
      expect(calculator.divide(10.5, 2)).toBe(5.25);
    });

    test('should divide zero: 0 / 5 = 0', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });
  });

  describe('Division by Zero - Edge Cases', () => {
    test('should throw error when dividing by zero: 10 / 0', () => {
      expect(() => {
        calculator.divide(10, 0);
      }).toThrow('Error: Division by zero is not allowed');
    });

    test('should throw error when dividing negative by zero: -5 / 0', () => {
      expect(() => {
        calculator.divide(-5, 0);
      }).toThrow('Error: Division by zero is not allowed');
    });

    test('should throw error when dividing zero by zero: 0 / 0', () => {
      expect(() => {
        calculator.divide(0, 0);
      }).toThrow('Error: Division by zero is not allowed');
    });

    test('error message should be specific', () => {
      expect(() => {
        calculator.divide(100, 0);
      }).toThrow('Error: Division by zero is not allowed');
    });
  });

  describe('Image Examples - Basic Operations', () => {
    test('example 1 from image: 2 + 3 = 5', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('example 2 from image: 10 - 4 = 6', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('example 3 from image: 45 * 2 = 90', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('example 4 from image: 20 / 5 = 4', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });
  });

  describe('Type Checking', () => {
    test('add should work with number types', () => {
      expect(typeof calculator.add(5, 3)).toBe('number');
    });

    test('subtract should return a number', () => {
      expect(typeof calculator.subtract(10, 5)).toBe('number');
    });

    test('multiply should return a number', () => {
      expect(typeof calculator.multiply(6, 7)).toBe('number');
    });

    test('divide should return a number', () => {
      expect(typeof calculator.divide(15, 3)).toBe('number');
    });
  });

  describe('Large Numbers', () => {
    test('should handle large number addition', () => {
      expect(calculator.add(1000000, 2000000)).toBe(3000000);
    });

    test('should handle large number multiplication', () => {
      expect(calculator.multiply(1000, 1000)).toBe(1000000);
    });

    test('should handle large number division', () => {
      expect(calculator.divide(1000000, 1000)).toBe(1000);
    });
  });

  describe('Floating Point Precision', () => {
    test('should handle floating point arithmetic: 0.1 + 0.2', () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3, 5);
    });

    test('should handle floating point subtraction', () => {
      expect(calculator.subtract(1.1, 1.0)).toBeCloseTo(0.1, 5);
    });

    test('should handle floating point multiplication', () => {
      expect(calculator.multiply(0.3, 10)).toBeCloseTo(3.0, 5);
    });
  });

  describe('Modulo Tests', () => {
    test('should find modulo: 5 % 2 = 1', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('example from image: modulo with 5 % 2', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('should find modulo of larger numbers: 17 % 5 = 2', () => {
      expect(calculator.modulo(17, 5)).toBe(2);
    });

    test('should find modulo with result of zero: 10 % 5 = 0', () => {
      expect(calculator.modulo(10, 5)).toBe(0);
    });

    test('should handle negative dividend: -17 % 5 = -2', () => {
      expect(calculator.modulo(-17, 5)).toBe(-2);
    });

    test('should handle negative divisor: 17 % -5 = 2', () => {
      expect(calculator.modulo(17, -5)).toBe(2);
    });

    test('should handle both negative: -17 % -5 = -2', () => {
      expect(calculator.modulo(-17, -5)).toBe(-2);
    });

    test('should handle decimals: 10.5 % 3 ≈ 1.5', () => {
      expect(calculator.modulo(10.5, 3)).toBeCloseTo(1.5, 5);
    });
  });

  describe('Modulo by Zero - Edge Cases', () => {
    test('should throw error when modulo by zero: 10 % 0', () => {
      expect(() => {
        calculator.modulo(10, 0);
      }).toThrow('Error: Modulo by zero is not allowed');
    });

    test('should throw error when modulo with negative by zero: -5 % 0', () => {
      expect(() => {
        calculator.modulo(-5, 0);
      }).toThrow('Error: Modulo by zero is not allowed');
    });

    test('should throw error when zero modulo zero: 0 % 0', () => {
      expect(() => {
        calculator.modulo(0, 0);
      }).toThrow('Error: Modulo by zero is not allowed');
    });
  });

  describe('Power/Exponentiation Tests', () => {
    test('should calculate power: 2 ^ 3 = 8', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('example from image: power with 2 ^ 3', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should calculate power: 2 ^ 8 = 256', () => {
      expect(calculator.power(2, 8)).toBe(256);
    });

    test('should calculate power: 5 ^ 2 = 25', () => {
      expect(calculator.power(5, 2)).toBe(25);
    });

    test('should handle power of zero: 5 ^ 0 = 1', () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    test('should handle zero to power: 0 ^ 5 = 0', () => {
      expect(calculator.power(0, 5)).toBe(0);
    });

    test('should handle power of one: 1 ^ 100 = 1', () => {
      expect(calculator.power(1, 100)).toBe(1);
    });

    test('should handle negative base: -2 ^ 3 = -8', () => {
      expect(calculator.power(-2, 3)).toBe(-8);
    });

    test('should handle negative base with even exponent: -2 ^ 4 = 16', () => {
      expect(calculator.power(-2, 4)).toBe(16);
    });

    test('should handle fractional exponent: 4 ^ 0.5 = 2', () => {
      expect(calculator.power(4, 0.5)).toBe(2);
    });

    test('should handle decimal base: 2.5 ^ 2 = 6.25', () => {
      expect(calculator.power(2.5, 2)).toBeCloseTo(6.25, 5);
    });

    test('should handle negative exponent: 2 ^ -1 = 0.5', () => {
      expect(calculator.power(2, -1)).toBeCloseTo(0.5, 5);
    });

    test('should handle large exponent: 10 ^ 6 = 1000000', () => {
      expect(calculator.power(10, 6)).toBe(1000000);
    });
  });

  describe('Square Root Tests', () => {
    test('should calculate square root: √16 = 4', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('example from image: square root with √16', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('should calculate square root: √25 = 5', () => {
      expect(calculator.squareRoot(25)).toBe(5);
    });

    test('should calculate square root: √100 = 10', () => {
      expect(calculator.squareRoot(100)).toBe(10);
    });

    test('should handle square root of zero: √0 = 0', () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    test('should handle square root of one: √1 = 1', () => {
      expect(calculator.squareRoot(1)).toBe(1);
    });

    test('should handle square root of decimal: √2.25 = 1.5', () => {
      expect(calculator.squareRoot(2.25)).toBe(1.5);
    });

    test('should handle square root returning decimal: √2 ≈ 1.414', () => {
      expect(calculator.squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('should handle square root of large number: √10000 = 100', () => {
      expect(calculator.squareRoot(10000)).toBe(100);
    });

    test('should handle square root of small decimal: √0.25 = 0.5', () => {
      expect(calculator.squareRoot(0.25)).toBe(0.5);
    });
  });

  describe('Square Root - Edge Cases (Negative Numbers)', () => {
    test('should throw error for square root of negative: √-1', () => {
      expect(() => {
        calculator.squareRoot(-1);
      }).toThrow('Error: Cannot calculate square root of a negative number');
    });

    test('should throw error for square root of negative: √-16', () => {
      expect(() => {
        calculator.squareRoot(-16);
      }).toThrow('Error: Cannot calculate square root of a negative number');
    });

    test('should throw error for square root of negative decimal: √-2.5', () => {
      expect(() => {
        calculator.squareRoot(-2.5);
      }).toThrow('Error: Cannot calculate square root of a negative number');
    });

    test('error message should be specific', () => {
      expect(() => {
        calculator.squareRoot(-100);
      }).toThrow('Error: Cannot calculate square root of a negative number');
    });
  });

  describe('Image Examples - Extended Operations', () => {
    test('example 1 from image: modulo with 5 % 2 = 1', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('example 2 from image: power with 2 ^ 3 = 8', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('example 3 from image: square root with √16 = 4', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });
  });

  describe('Type Checking - Extended Operations', () => {
    test('modulo should return a number', () => {
      expect(typeof calculator.modulo(10, 3)).toBe('number');
    });

    test('power should return a number', () => {
      expect(typeof calculator.power(2, 3)).toBe('number');
    });

    test('squareRoot should return a number', () => {
      expect(typeof calculator.squareRoot(16)).toBe('number');
    });
  });

  describe('Combined Operations Tests', () => {
    test('should combine modulo and power: (2 ^ 5) % 7 = 4', () => {
      const power = calculator.power(2, 5);
      expect(calculator.modulo(power, 7)).toBe(4);
    });

    test('should combine power and square root: √(4 ^ 2) = 4', () => {
      const power = calculator.power(4, 2);
      expect(calculator.squareRoot(power)).toBe(4);
    });

    test('should combine all operations: (√16 + 3) % 5 = 2', () => {
      const sqrt = calculator.squareRoot(16);
      const sum = calculator.add(sqrt, 3);
      expect(calculator.modulo(sum, 5)).toBe(2);
    });
  });
});
