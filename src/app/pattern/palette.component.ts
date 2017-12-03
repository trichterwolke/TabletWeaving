import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Tablet } from './tablet';
import { Pattern } from './pattern';
import { PatternService } from './pattern.service';
import { PatternSharedDataService } from './pattern.shareddata.service'

@Component({
    selector: 'palette',
    providers: [PatternService],
    templateUrl: './palette.component.html',
    styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {

    palette: string[];

    constructor(
        private patternService: PatternService, 
        private patternSharedDataService: PatternSharedDataService) {
        this.patternService = patternService;
        this.patternSharedDataService = patternSharedDataService;
    }

    loadPattern(): void {
        this.patternService.findByName('whatever')
            .then(r => this.palette = r.palette);
    }

    ngOnInit(): void {
        this.loadPattern();
    }

    public setColorIndex(index: number): void {
        console.info(index);
        this.patternSharedDataService.setSelectedColorIndex(index);
    }
}