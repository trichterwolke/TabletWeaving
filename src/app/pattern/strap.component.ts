import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Tablet } from './tablet'
import { Pattern } from './pattern';
import { PatternService } from './pattern.service';

@Component({
    selector: 'strap',
    providers: [PatternService],
    templateUrl: './strap.component.html',
    styleUrls: ['./strap.component.css']
})
export class StrapComponent implements OnInit {

    palette: string[];

    constructor(private patternService: PatternService) {
        this.patternService = patternService;
    }

    loadPattern(): void {
        this.patternService.findByName('whatever')
            .then(r => this.palette = r.palette);
    }

    ngOnInit(): void {
        this.loadPattern();
    }
}