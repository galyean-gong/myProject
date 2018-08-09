import $ from "jquery"
import getCart from "../ShoppingCart/GetCart.js"
export default class ShoppingCart {
    constructor(app,cart) {
    	this.app = app
    	this.cart = getCart()
    	this.$el = $('div')
    }
    initBtn() {
    	let $btn = $("<button>购物车</button>")
    	$btn.click(()=>{
    		 this.showCart()
    	})
    	this.$el.append($btn)
    }
    showCart() {
    	alert(this.cart.getList())
    }
    render() {
    	this.app.$el.append(this.$el)
    }
    init() {
        this.initBtn()
       
        this.render()
    }
}