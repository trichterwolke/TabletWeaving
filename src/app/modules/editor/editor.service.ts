import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'

import { Tablet } from './entities/tablet';
import { Segment } from './entities/segment';
import { Pattern } from './entities/pattern';

@Injectable()
export class EditorService {    
    
    public test(): void {
        console.warn('test');
    }

    private patternSubject = new Subject<Pattern>();
    private pattern : Pattern; 
    private selectedColorIndex = 0;

    constructor() {
    }

    public observePattern(): Observable<Pattern> {
        return this.patternSubject.asObservable();
    }

    public setPattern(pattern: Pattern): void {
        this.pattern = pattern;
        this.refreshPattern();
    }

    public refreshPattern(): void {
        this.patternSubject.next(this.pattern);
    }

    public setSelectedColorIndex(index: number): void {
        this.selectedColorIndex = index;
    }

    public getSelectedColorIndex(): number {
        return this.selectedColorIndex;
    }
}