import React, { useState } from 'react';

const Calculator = () => {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState(null);

    const handleCalculation = () => {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);
        let res;

        switch (operator) {
            case '+':
                res = num1 + num2;
                break;
            case '-':
                res = num1 - num2;
                break;
            case '*':
                res = num1 * num2;
                break;
            case '/':
                res = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
                break;
            default:
                res = 'Invalid operator';
        }

        setResult(res);
    };

    return (
        <>
            <div>
                <form className="flex flex-col items-center max-w-sm mx-auto mt-4">
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                        placeholder="Enter first number"
                        value={firstNumber}
                        onChange={(e) => setFirstNumber(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                        placeholder="Enter second number"
                        value={secondNumber}
                        onChange={(e) => setSecondNumber(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                        placeholder="Enter operator (+, -, *, /)"
                        value={operator}
                        onChange={(e) => setOperator(e.target.value)}
                        required
                    />
                    <div className="flex justify-center">
                        <button
                            type="button"
                            onClick={handleCalculation}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-3"
                        >
                            Calculate
                        </button>
                    </div>
                </form>
                {result !== null && (
                    <div className="text-center mt-4">
                        <h2 className="text-lg font-bold">Result: {result}</h2>
                    </div>
                )}
            </div>
        </>
    );
};

export default Calculator;