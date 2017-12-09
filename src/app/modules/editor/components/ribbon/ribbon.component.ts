import { Component, OnInit } from '@angular/core';

import { Segment } from '../../entities/segment';
import { Tablet } from '../../entities/tablet';
import { Pattern } from '../../entities/pattern';
import { EditorService } from '../../editor.service';
import { RibbonService } from './ribbon.service';

@Component({
    selector: 'ribbon',
    providers: [RibbonService],
    templateUrl: './ribbon.component.html',
    styleUrls: ['./ribbon.component.css']
})
export class RibbonComponent {
    palette: string[];
    segments: Segment[][];

    constructor(
        private readonly editorService: EditorService,
        private readonly ribbonService: RibbonService) {        
        editorService.observePattern().subscribe(p => {
            this.palette = p.palette;
            this.segments = this.ribbonService.createRibbon(p.tablets);
        });
        
        //this.editorService.observePattern().subscribe(this.setPattern);
    }

    private setPattern(pattern: Pattern) {
        this.palette = pattern.palette;
        this.segments = this.ribbonService.createRibbon(pattern.tablets);
    }
}