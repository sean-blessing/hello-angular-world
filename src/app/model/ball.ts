export class Ball {
    id: number;
    color: string;
    size: string;

    constructor(inColor: string, inSize: string) {
        this.color = inColor;
        this.size = inSize;
    }
    
    about(): string {
        return("id = "+this.id+", color = "+this.color+",size = "+this.size);
    }
}