class Cart {
	constructor(){
		this.list = []
	}	
	add(data){
		this.list.push(data)
	}
	del(id){
		// 根据id删除，进行刷选
		this.list = this.list.filter(item=>{
			if(item.count = id){
				return false
			}
			return true
		})

	}
	getList(){
		return this.list.map(item=>{
			return item.name
		}).join("\n")
	}
}

// 返回单例
let getCart =(function(){
	let cart
	return function(){
		if(!cart){
			cart = new Cart()
		}
		return cart
	}
})()

// 最终返回一个函数,函数执行返回类的单例，不会让外面new cart的实例
 
 export default getCart