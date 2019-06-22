//请求服务类

import MUtil from 'util/mm.jsx';

const _mm   = new MUtil();

class Product{
    //获取商品列表 
	getProductList(pageNum){
		return _mm.request({
	    		type : 'post',
	    		url  : '/manage/product/list.do',
	    		data : {
	    			pageNum : pageNum
	    		}
    	});
	}
    //变更商品销售状态
	setProductStatus(productInfo){
		return _mm.request({
	    		type : 'post',
	    		url  : '/manage/product/set_sale_status.do',
	    		data : productInfo
    	});
	}
}

export default Product;