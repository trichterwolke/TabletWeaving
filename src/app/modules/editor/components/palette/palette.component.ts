import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Tablet } from '../../entities/tablet';
import { Pattern } from '../../entities/pattern';
import { EditorService } from '../../editor.service';

@Component({
    selector: 'palette',
    providers: [],
    templateUrl: './palette.component.html',
    styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {

    palette: string[];

    constructor(
        private editorService: EditorService) {
        this.editorService = editorService;
    }

    loadPattern(): void {
        this.editorService.findByName('whatever')
            .then(r => this.palette = r.palette);
    }

    ngOnInit(): void {
        this.loadPattern();
    }

    public setColorIndex(index: number): void {
        console.info(index);
        this.editorService.setSelectedColorIndex(index);
    }

    public getColorIndex(){
        return this.editorService.getSelectedColorIndex();
    }
}