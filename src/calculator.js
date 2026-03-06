#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (√)
 */

class Calculator {
  /**
   * Addition: Add two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtraction: Subtract second number from first
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplication: Multiply two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Division: Divide first number by second
   * Handles division by zero error
   * @param {number} a - Dividend (first number)
   * @param {number} b - Divisor (second number)
   * @returns {number} Quotient of a and b
   * @throws {Error} If attempting to divide by zero
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Error: Division by zero is not allowed');
    }
    return a / b;
  }

  /**
   * Modulo: Returns the remainder of a divided by b
   * @param {number} a - Dividend (first number)
   * @param {number} b - Divisor (second number)
   * @returns {number} Remainder of a divided by b
   * @throws {Error} If attempting modulo by zero
   */
  modulo(a, b) {
    if (b === 0) {
      throw new Error('Error: Modulo by zero is not allowed');
    }
    return a % b;
  }

  /**
   * Power: Returns base raised to the exponent
   * @param {number} base - The base number
   * @param {number} exponent - The exponent
   * @returns {number} Base raised to the power of exponent
   */
  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  /**
   * Square Root: Returns the square root of a number
   * @param {number} n - The number to find square root of
   * @returns {number} Square root of n
   * @throws {Error} If attempting to find square root of negative number
   */
  squareRoot(n) {
    if (n < 0) {
      throw new Error('Error: Cannot calculate square root of a negative number');
    }
    return Math.sqrt(n);
  }
}

// CLI Interface
function main() {
  const args = process.argv.slice(2);

  // Support for operations that take 2 arguments (standard operations)
  const standardOps = ['+', '-', '*', '/', '%', '^'];
  const isSqrt = args[0] && (args[0] === 'sqrt' || args[0] === '√');
  
  if ((standardOps.includes(args[1]) && args.length < 3) || (isSqrt && args.length < 2)) {
    console.log('Node.js CLI Calculator');
    console.log('');
    console.log('Usage: calculator.js <number1> <operation> <number2>');
    console.log('   or: calculator.js sqrt <number>');
    console.log('');
    console.log('Supported Operations:');
    console.log('  +    : Addition');
    console.log('  -    : Subtraction');
    console.log('  *    : Multiplication');
    console.log('  /    : Division');
    console.log('  %    : Modulo (remainder)');
    console.log('  ^    : Exponentiation (power)');
    console.log('  sqrt : Square Root');
    console.log('');
    console.log('Examples:');
    console.log('  node src/calculator.js 10 + 5');
    console.log('  node src/calculator.js 20 - 8');
    console.log('  node src/calculator.js 6 * 7');
    console.log('  node src/calculator.js 100 / 4');
    console.log('  node src/calculator.js 17 % 5');
    console.log('  node src/calculator.js 2 ^ 8');
    console.log('  node src/calculator.js sqrt 16');
    process.exit(1);
  }

  const calculator = new Calculator();
  let result;

  try {
    // Handle square root operation (single argument)
    if (isSqrt) {
      const num = parseFloat(args[1]);
      if (isNaN(num)) {
        console.error('Error: Argument must be a valid number');
        process.exit(1);
      }
      result = calculator.squareRoot(num);
      console.log(`sqrt(${num}) = ${result}`);
    } else {
      // Handle binary operations (two arguments)
      const num1 = parseFloat(args[0]);
      const operation = args[1];
      const num2 = parseFloat(args[2]);

      if (isNaN(num1) || isNaN(num2)) {
        console.error('Error: Both arguments must be valid numbers');
        process.exit(1);
      }

      switch (operation) {
        case '+':
          result = calculator.add(num1, num2);
          console.log(`${num1} + ${num2} = ${result}`);
          break;
        case '-':
          result = calculator.subtract(num1, num2);
          console.log(`${num1} - ${num2} = ${result}`);
          break;
        case '*':
          result = calculator.multiply(num1, num2);
          console.log(`${num1} * ${num2} = ${result}`);
          break;
        case '/':
          result = calculator.divide(num1, num2);
          console.log(`${num1} / ${num2} = ${result}`);
          break;
        case '%':
          result = calculator.modulo(num1, num2);
          console.log(`${num1} % ${num2} = ${result}`);
          break;
        case '^':
          result = calculator.power(num1, num2);
          console.log(`${num1} ^ ${num2} = ${result}`);
          break;
        default:
          console.error(`Error: Unknown operation '${operation}'`);
          console.error('Supported operations: +, -, *, /, %, ^, sqrt');
          process.exit(1);
      }
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

// Export for testing
module.exports = Calculator;

// Run if called directly
if (require.main === module) {
  main();
}
