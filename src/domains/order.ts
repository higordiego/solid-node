import Item from "./item";
import TaxItem from "./taxItem";

export default class Order {
    code: string;
    items: Item[]
    constructor() {
        this.code = `${Math.floor(Math.random() * 1000000)}`
        this.items = [];
    }
    
    addItem(item: Item) {
        this.items.push(item);
    }
    
    getSubTotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.price
        }
        return total
    }
    
    getTaxes (date: Date) {
        let taxes = 0
        for (const item of this.items) {
            if (item instanceof TaxItem) {
                taxes += item.calculateTaxes(date)
            }
        }
        return taxes
    }
    
    getTotal(date: Date) {
        return this.getSubTotal() + this.getTaxes(date)
    }
}