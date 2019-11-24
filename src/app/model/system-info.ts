export class SystemInfo {
    corporationName: string;
    expiredTime: Date;

    constructor() {
        this.expiredTime = new Date(0);//1970-01-01 00:00:00  
        this.corporationName="五星禽蛋公司";
    }
}
