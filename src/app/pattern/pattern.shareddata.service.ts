export class PatternSharedDataService {

    private colorIndex = 0;

    public setSelectedColorIndex(index: number): void {
        console.info('set' + this.colorIndex);
        this.colorIndex = index;
    }

    public getSelectedColorIndex(): number {
        console.info('get' + this.colorIndex);
        return this.colorIndex;
    }
}