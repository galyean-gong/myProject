import $ from "jquery"
import getCart from "../ShoppingCart/GetCart.js"
import StateMachine from "javascript-state-machine"
import { log } from "../util/log.js"
export default class Item {
    constructor(list, data) {
        this.list = list
        this.data = data
        this.$el = $("<div>")
       this.cart = getCart()
    }
    inContent() {
        let $el = this.$el
        let data = this.data
        // 对还没有渲然的页面添加元素，是没有性能问题的
        $el.append(`<p>名称：${data.name}</p>`)
        $el.append(`<p>价格：${data.count}</p>`)
    }
    initBtn() {
        let $el = this.$el
        let $btn = $('<button>')
        // 保存当前this
        let _this = this
        // 状态管理
        let fsm = new StateMachine({
            // 初始化状态
            init: "加入购物车",
            // 状态变化
            transitions: [{
                    name: "addToCart",
                    from: "",
                    to: "从购物车删除"
                },
                {
                    name: "delCart",
                    from: "从购物车删除",
                    to: "加入购物车"

                }
            ],
            methods: {
                onAddToCart() {
                    _this.addToCartHandle()
                    updateText()
                },
                onDelCart() {
                    _this.delCartHandle()
                    updateText()
                }
            }
        })

        function updateText() {
            $btn.text(fsm.state)
        }
        $btn.click(() => {
            // 添加到购物车
            if (fsm.is("加入购物车")) {
                fsm.addToCart()
            } else {
                // 从购物车中删除
                fsm.delCart()
            }

        })

        updateText()
        $el.append($btn)
    }
    // 添加到购物车
    @log('add')
    addToCartHandle() {
    	
        this.cart.add(this.data)
    }
    // 从购物车中删除
    @log('del')
    delCartHandle() {
        this.cart.del(this.data.count)
    }
    render() {
        this.list.$el.append(this.$el)
    }
    init() {

        this.inContent()
        this.initBtn()
        this.render()
    }
}