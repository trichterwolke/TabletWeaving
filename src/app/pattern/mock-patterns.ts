import { Pattern } from './pattern';
import { Tablet } from './tablet';

export const PATTERNS: Pattern[] = [
    {
        name: 'Simple Caret', palette: ['#111111', '#dddddd', '#ffff00', '#cc11cc'], tablets: [
            { threading: 'Z', colors: [0, 0, 0, 0] },
            { threading: 'S', colors: [1, 0, 1, 0] },
            { threading: 'S', colors: [1, 0, 1, 0] },
            { threading: 'Z', colors: [2, 2, 2, 2] },
            { threading: 'Z', colors: [0, 0, 0, 0] },
            { threading: 'S', colors: [1, 0, 1, 0] },
            { threading: 'S', colors: [1, 0, 1, 0] },
            { threading: 'Z', colors: [2, 2, 2, 2] },
            { threading: 'Z', colors: [0, 0, 0, 0] },
            { threading: 'S', colors: [1, 0, 1, 0] },
            { threading: 'S', colors: [1, 0, 1, 0] },
            { threading: 'Z', colors: [2, 2, 2, 2] },
        ]
    },
    {
        name: 'Snakebite', palette: ['Red', 'White', 'Blue'], tablets: [
            { threading: 'Z', colors: [0, 0, 0, 0] },
            { threading: 'S', colors: [1, 0, 1, 0] },
            { threading: 'S', colors: [1, 0, 1, 0] },
            { threading: 'Z', colors: [2, 2, 2, 2] }
        ]
    },
]