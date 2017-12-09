import { Component } from '@angular/core';

import { Tablet } from '../../entities/tablet';
import { Pattern } from '../../entities/pattern';
import { EditorService } from '../../editor.service';

@Component({
    selector: 'palette',
    providers: [],
    templateUrl: './palette.component.html',
    styleUrls: ['./palette.component.css']
})
export class PaletteComponent {
    public palette: string[];

    constructor(private editorService: EditorService) {
        this.editorService.observePattern().subscribe(p => this.palette = p.palette);
    }

    public setColorIndex(index: number): void {
        this.editorService.setSelectedColorIndex(index);
    }

    public getColorIndex() {
        return this.editorService.getSelectedColorIndex();
    }
}