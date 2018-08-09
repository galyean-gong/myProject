import $ from "jquery"
import { GET_LIST } from "../config/config.js"
import createItem from "./CreateItem.js"
export default class List {
    constructor(app) {
    	this.app = app
    	this.$el = $("<div>")
    }
    // 获取数据
    loadData() {
    	// 利用fetch函数，通过promise的形式返回ajax的结果
    	// 返回promise实例，.then返回的也是promise实例
    	return fetch(GET_LIST).then( result =>{
    		// fetch的标准，将json数据返回
    		return result.json()
    	})
    }
    // 生成列表
    initItemList(data) {

    	// data.map(itemData =>{
    	// 	// 创建一个item，然后init
    	// 	let item = createItem(this,itemData)
    	// 	item.init()
    	// 	return item
    		
    	// })
    	
    	data.forEach(itemData =>{
    		// 创建一个item，然后init
    		let item = createItem(this,itemData)
    		item.init()
    		
    	})
    }
    // 渲染
    render() {
    	// this.app.$el是app容器
    	// this.$el当前list的容器
    	this.app.$el.append(this.$el)
    }
    init() {
        this.loadData().then(data=>{

        	// 将data传到item中去
        	 this.initItemList(data.tags)
        	 
        }).then(()=>{
        	// 拿到数据就可以进行渲染了
        	this.render()
        })
       
        
    }
}