import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Segment } from '../../entities/segment';
import { Tablet } from '../../entities/tablet';
import { Pattern } from '../../entities/pattern';
import { EditorService } from '../../editor.service';

@Component({
    selector: 'ribbon',
    providers: [],
    templateUrl: './ribbon.component.html',
    styleUrls: ['./ribbon.component.css']
})
export class RibbonComponent implements OnInit {

    palette: string[];
    segments: Segment[][];

    constructor(
        private editorService: EditorService
    ) {
        this.editorService = editorService;
    }

    loadPattern(): void {
        this.editorService.findByName('indifferent')
            .then(r => {
                this.palette = r.palette;
                this.segments = this.editorService.createSegments(r.tablets);
            });
    }

    ngOnInit(): void {
        this.loadPattern();
    }
}