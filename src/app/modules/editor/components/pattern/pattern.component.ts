import { Component, OnInit } from '@angular/core';

import { Tablet } from '../../entities/tablet';
import { Pattern } from '../../entities/pattern';
import { EditorService } from '../../editor.service';

@Component({
    selector: 'pattern',
    providers: [],
    templateUrl: './pattern.component.html',
    styleUrls: ['./pattern.component.css']
})
export class PatternComponent {

    public ordinals: string[];
    public tablets: Tablet[];
    public palette: string[];

    constructor(private readonly editorService: EditorService) {
        this.ordinals = ['D', 'C', 'B', 'A'];
        this.editorService.observePattern().subscribe(p => {
            this.tablets = p.tablets;
            this.palette = p.palette;
        })
    }
    

    public setColor(tabletIndex: number, colorIndex: number): void {
        this.tablets[tabletIndex].colors[colorIndex] =
            this.editorService.getSelectedColorIndex();
        this.editorService.refreshPattern();
    }

    public setThreading(tabletIndex: number): void {
        let tablet = this.tablets[tabletIndex];
        tablet.threading = tablet.threading === 'Z' ? 'S' : 'Z';
        this.editorService.refreshPattern();
    }
}