import { s } from './stack/stack.js';
/**
 * Returns the factorial for the number
 * @param {number} num 
 * @returns {number}
 */
export default function factorial(num) {
    if (num == 1)
        return 1;
    
    return num * factorial(num - 1);
}