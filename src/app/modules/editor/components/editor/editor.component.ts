import { Component, OnInit } from '@angular/core';
import { EditorService } from './../../editor.service'
import { PATTERNS } from './mock-patterns';

@Component({
    selector: 'editor',
    templateUrl: './editor.component.html',
    providers: [EditorComponent]
})
export class EditorComponent implements OnInit {
    constructor(private readonly editorService: EditorService) {
    }

    ngOnInit(): void {
        this.editorService.setPattern(PATTERNS[1]);
    }
}
