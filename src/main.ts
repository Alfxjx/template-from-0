import { Currency } from "./modules/Currency";

let rmb = new Currency('人民币',1);

rmb.setMoney(10);

console.log(rmb.num);