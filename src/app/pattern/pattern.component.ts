import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Tablet } from './tablet'
import { Pattern } from './pattern';
import { PatternService } from './pattern.service';
import { PatternSharedDataService } from './pattern.shareddata.service'

@Component({
    selector: 'pattern',
    providers: [PatternService],
    templateUrl: './pattern.component.html',
    styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {

    ordinals: string[];
    tablets: Tablet[];
    palette: string[];

    constructor(
        private patternService: PatternService,
        private patternSharedDataService: PatternSharedDataService) {
        this.ordinals = ['D', 'C', 'B', 'A'];
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

    setColor(tabletIndex: number, colorIndex: number): void {
        console.info(colorIndex + ' ' + this.patternSharedDataService.getSelectedColorIndex());
        this.tablets[tabletIndex].colors[colorIndex] =
            this.patternSharedDataService.getSelectedColorIndex();
    }

    setThreading(tabletIndex: number): void {
        let tablet = this.tablets[tabletIndex];
        tablet.threading = tablet.threading === 'Z' ? 'S' : 'Z';
    }
}