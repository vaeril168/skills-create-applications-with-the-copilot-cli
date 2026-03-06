#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
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
}

// CLI Interface
function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log('Node.js CLI Calculator');
    console.log('');
    console.log('Usage: calculator.js <number1> <operation> <number2>');
    console.log('');
    console.log('Supported Operations:');
    console.log('  +  : Addition');
    console.log('  -  : Subtraction');
    console.log('  *  : Multiplication');
    console.log('  /  : Division');
    console.log('');
    console.log('Examples:');
    console.log('  node src/calculator.js 10 + 5');
    console.log('  node src/calculator.js 20 - 8');
    console.log('  node src/calculator.js 6 * 7');
    console.log('  node src/calculator.js 100 / 4');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1];
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both arguments must be valid numbers');
    process.exit(1);
  }

  const calculator = new Calculator();
  let result;

  try {
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
      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.error('Supported operations: +, -, *, /');
        process.exit(1);
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
