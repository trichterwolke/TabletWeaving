import { Component, OnInit} from '@angular/core';

import { Tablet } from '../../entities/tablet';
import { Pattern } from '../../entities/pattern';
import { EditorService } from '../../editor.service';

@Component({
    selector: 'pattern',
    providers: [],
    templateUrl: './pattern.component.html',
    styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {

    ordinals: string[];
    tablets: Tablet[];
    palette: string[];

    constructor(
        private editorService: EditorService) {
        this.ordinals = ['D', 'C', 'B', 'A'];
        this.editorService = editorService;
    }

    loadPattern(): void {
        this.editorService.findByName('indiffrent')
            .then(r => {
                this.tablets = r.tablets;
                this.palette = r.palette;
            });
    }

    ngOnInit(): void {
        this.loadPattern();
    }

    setColor(tabletIndex: number, colorIndex: number): void {
        console.info(colorIndex + ' ' + this.editorService.getSelectedColorIndex());
        this.tablets[tabletIndex].colors[colorIndex] =
            this.editorService.getSelectedColorIndex();
    }

    setThreading(tabletIndex: number): void {
        let tablet = this.tablets[tabletIndex];
        tablet.threading = tablet.threading === 'Z' ? 'S' : 'Z';
    }
}