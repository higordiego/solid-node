import Order from './order'
import Cigar from './cigar'
import Beer from './beer'
import Water from './water'

describe('Order testing', function() {

    test('should calculate order sub total', ()=> {
        const order = new Order();
        order.addItem(new Cigar("Marlboro", 10));
        order.addItem(new Beer( "Itaipava", 5));
        order.addItem(new Water("Crystal 300ml", 2));
        const subtotal = order.getSubTotal()
        expect(subtotal).toBe(17)    
    })

    test('should calculate order taxes', ()=> {
        const order = new Order();
        order.addItem(new Cigar("Marlboro", 10));
        order.addItem(new Beer( "Itaipava", 5));
        order.addItem(new Water("Crystal 300ml", 2));
        const taxes = order.getTaxes(new Date("2021-07-09"))
        expect(taxes).toBe(2.5)
    })
    
    test('should calculate order total', ()=> {
        const order = new Order();
        order.addItem(new Cigar("Marlboro", 10));
        order.addItem(new Beer( "Itaipava", 5));
        order.addItem(new Water("Crystal 300ml", 2));
        const taxes = order.getTotal(new Date("2021-07-09"))
        expect(taxes).toBe(19.5)
    })

    test('should calculate order holiday taxes', ()=> {
        const order = new Order();
        order.addItem(new Cigar("Marlboro", 10));
        order.addItem(new Beer( "Itaipava", 5));
        order.addItem(new Water("Crystal 300ml", 2));
        const taxes = order.getTaxes(new Date("2021-01-09"))
        expect(taxes).toBe(1.5)
    })

})