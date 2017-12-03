import { Pattern } from './entities/pattern';
import { Tablet } from './entities/tablet';

export const PATTERNS: Pattern[] = [
    {
        name: 'Simple Caret',
        palette: ['#a3b4ff', '#102fb7'],
        tablets: [
            { threading: 'Z', colors: [0, 0, 0, 0] },
            { threading: 'Z', colors: [0, 0, 0, 0] },
            { threading: 'Z', colors: [0, 0, 0, 1] },
            { threading: 'Z', colors: [0, 0, 1, 0] },
            { threading: 'Z', colors: [0, 1, 0, 0] },
            { threading: 'Z', colors: [1, 0, 0, 0] },
            { threading: 'S', colors: [1, 0, 0, 0] },
            { threading: 'S', colors: [0, 1, 0, 0] },
            { threading: 'S', colors: [0, 0, 1, 0] },
            { threading: 'S', colors: [0, 0, 0, 1] },
            { threading: 'S', colors: [0, 0, 0, 0] },
            { threading: 'S', colors: [0, 0, 0, 0] },
        ]
    },
    {
        name: 'Diamonds',
        palette: ['#232266', '#BB1829', '#F6B034'],
        tablets: [
            { threading: 'Z', colors: [0, 0, 0, 0] },
            { threading: 'Z', colors: [0, 0, 0, 0] },
            { threading: 'Z', colors: [1, 2, 1, 2] },
            { threading: 'Z', colors: [0, 1, 2, 1] },
            { threading: 'Z', colors: [2, 0, 1, 2] },
            { threading: 'Z', colors: [2, 2, 0, 1] },
            { threading: 'S', colors: [2, 2, 0, 1] },
            { threading: 'S', colors: [2, 0, 1, 2] },
            { threading: 'S', colors: [0, 1, 2, 1] },
            { threading: 'S', colors: [1, 2, 1, 2] },
            { threading: 'S', colors: [0, 0, 0, 0] },
            { threading: 'S', colors: [0, 0, 0, 0] },
        ]
    },
]