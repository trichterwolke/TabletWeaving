import { Injectable } from '@angular/core';

import { Pattern } from './pattern';
import { Tablet } from './tablet';
import { Segment } from './segment';

@Injectable()
export class RibbonService {

    createSegments(tablets: Tablet[]): Segment[][] {
        let result = new Array();
        for (let tablet of tablets) {
            let stripe = this.createStripe(tablet);
            result.push(stripe);
        }

        return result;
    }

    private createStripe(tablet: Tablet): Segment[] {
        let result = new Array();
        let index = 0;
        let colorStep: number;
        while (index < 16) {
            let length = tablet.colors.length;
            let colorIndex = index % (length * 2) >= length
                ? length - 1 - index % length
                : index % length;

            result.push({
                color: tablet.colors[colorIndex],
                shape: this.getShape(tablet.threading, index),
            });
            index++;
        }

        return result;
    }

    private getShape(threading: string, index: number) {
        if (threading === 'S') {
            if (index % 8 === 0) {
                return 3;
            }            

            if (index % 8 === 4) {
                return 4;
            }
            return index % 8 > 4 ? 1 : 2;
        }
        else {
            if (index % 8 === 0) {
                return 4;
            }

            if (index % 8 === 4) {
                return 3;
            }

            return index % 8 > 4 ? 2 : 1;
        }
    }

}

/*
1.  2.  3.  4.
/|  |\  /|  |\
|/  \|  \|  |/
*/