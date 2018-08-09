import $ from "jquery"
import ShoppingCart from "./ShoppingCart/ShoppingCart.js"
import List from "./List/List.js"
export default class App {
    constructor(id) {
        // 将this.$el赋值jquery
        this.$el = $('#' + id)
    }
    // 初始化购物车
    initShoppingCart() {
        // 声明一个对象或者实例，将this传进去
        let shoppingCart = new ShoppingCart(this)
        shoppingCart.init()

    }
    // 初始化列表
    initList() {
        let list = new List(this)
        list.init()
    }
    init() {
        this.initShoppingCart()
        this.initList()
    }
}