import Item from "./Item.js"
function createCount(itemData){
	// 代理模式做折扣显示
	return new Proxy(itemData,{
		get:function(target,key,receiver){
			if(key === "name"){
				return `${target[key]}【折扣】`
			}
			if(key === "count"){
				return target[key] * 0.8
			}
			// 如果不是以上2种信息直接返回
			return target[key]
		}
	})
}
 function createItem(list,itemData){
	// 工厂模式
	// 如果有折扣，先处理，最后将其返回
	if(itemData.count == 9){

		itemData = createCount(itemData)
	}
	return new Item(list,itemData)
}

export default createItem