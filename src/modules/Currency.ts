export class Currency {
    private name:string;
    private rate:number;
    public num:number = 0;
    constructor(name: string, rate: number) {
        this.name = name;
        this.rate = rate;
    }

    setMoney(num:number){
        this.num = num;
    }

}
