import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Tablet } from './tablet'
import { Pattern } from './pattern';
import { PatternService } from './pattern.service';

@Component({
    selector: 'pattern',
    providers: [PatternService],
    templateUrl: './pattern.component.html',
    styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {

    tablets: Tablet[];
    palette: string[];

    constructor(private patternService: PatternService) {
        this.patternService = patternService;
    }

    loadPattern(): void {
        this.patternService.findByName('indiffrent')
            .then(r => {
                this.tablets = r.tablets;
                this.palette = r.palette;
            });
    }

    ngOnInit(): void {
        this.loadPattern();
    }
}