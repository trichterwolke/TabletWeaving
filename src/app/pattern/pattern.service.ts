import { Injectable } from '@angular/core';

import { Pattern } from './pattern';
import { PATTERNS } from './mock-patterns';

@Injectable()
export class PatternService {
    findAll(): Promise<Pattern[]> {
        return Promise.resolve(PATTERNS);
    }

    findByName(name: string): Promise<Pattern> {
        return Promise.resolve(PATTERNS[0]);
    }
}