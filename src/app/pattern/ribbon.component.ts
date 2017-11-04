import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Segment } from './segment';
import { Tablet } from './tablet';
import { Pattern } from './pattern';
import { PatternService } from './pattern.service';
import { RibbonService } from './ribbon.service';

@Component({
    selector: 'ribbon',
    providers: [PatternService, RibbonService],
    templateUrl: './ribbon.component.html',
    styleUrls: ['./ribbon.component.css']
})
export class RibbonComponent implements OnInit {

    palette: string[];
    segments: Segment[][];

    constructor(
        private patternService: PatternService,
        private ribbonService: RibbonService,
    ) {
        this.patternService = patternService;
        this.ribbonService = ribbonService;
    }

    loadPattern(): void {
        this.patternService.findByName('indifferent')
            .then(r => {
                this.palette = r.palette;
                this.segments = this.ribbonService.createSegments(r.tablets);
            });
    }

    ngOnInit(): void {
        this.loadPattern();
    }
}