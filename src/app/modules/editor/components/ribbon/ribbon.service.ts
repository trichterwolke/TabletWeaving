import { Injectable } from '@angular/core';

import { Tablet } from '../../entities/tablet';
import { Segment } from '../../entities/segment';
import { Pattern } from '../../entities/pattern';

@Injectable()
export class RibbonService {

    public createRibbon(tablets: Tablet[]): Segment[][] {

        console.info("createRibbon");
        let result = new Array();
        for (let tablet of tablets) {
            let stripe = this.createStripe(tablet);
            result.push(stripe);
        }

        return result;
    }

    private createStripe(tablet: Tablet): Segment[] {
        let result = new Array();
        let index = 15;
        let colorStep: number;
        while (index >= 0) {
            let length = tablet.colors.length;
            let colorIndex = index % (length * 2) >= length
                ? length - 1 - index % length
                : index % length;

            result.push({
                color: tablet.colors[colorIndex],
                shape: this.getShape(tablet.threading, index),
            });
            index--;
        }

        return result;
    }

    private getShape(threading: string, index: number) {
        if (index % 4 === 0 && index !== 0) {
            return 0;
        }

        let direction = threading === 'S';

        let type = index % 4 === 3 && index != 15 ? 2 : 1;

        if (index % 8 > 4) {
            direction = !direction;
        }

        if (type === 1) {
            return direction ? 2 : 1;
        } else if (type === 2) {
            return direction ? 3 : 4;
        }
    }

    /*
    1.   2.   3.   4.
    / |  | \  / |  | \
    | /  \ |  | |  | |
              | |  | |
              \ |  | /
    */
}