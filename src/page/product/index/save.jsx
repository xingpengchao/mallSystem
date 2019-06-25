//添加商品组件

import React                from 'react';
import PageTitle            from 'component/page-title/index.jsx';
import MUtil                from 'util/mm.jsx';
import Product              from 'service/product-service.jsx';
import CategorySelector     from './category-selector.jsx';
import FileUpLoader         from 'util/file-uploader/index.jsx';

import './save.scss';

const _mm         = new MUtil();
const _product    = new Product();

class ProductSave extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			categoryId       : 0,
			parentCategoryId : 0,
			subImages        : []
		}
	}

    //品类选择器变化
	onCategoryChange(categoryId, parentCategoryId){
		console.log('categoryId:',categoryId);
		console.log('parentCategoryId:',parentCategoryId);
	}

    //上传图片成功
    onUploadSuccess(res){
    	let subImages = this.state.subImages;
    	subImages.push(res);
		this.setState({
			subImages : subImages
		});
    }
    //图片上传失败 
    onUploadError(errMsg){
		_mm.errTips(errMsg);
    }

    //删除图片
    onImageDelete(e){
		let index     = parseInt(e.target.getAttribute('index')),
		    subImages = this.state.subImages;
		    subImages.splice(index, 1);
		    this.setState({
				subImages : subImages
		    });
    } 

	render(){
		return (
    		<div id="page-wrapper">
				<PageTitle title="添加商品"/>
				<div className="form-horizontal">
					<div className="form-group">
						<label className="col-md-2 control-label">商品名称</label>
							<div className="col-md-5">
								<input type="text" className="form-control" placeholder="请输人商品名称"/>
						    </div>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label">商品描述</label>
							<div className="col-md-5">
								<input type="text" className="form-control" placeholder="请输入商品描述"/>
					        </div>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label">所属分类</label>
						<CategorySelector onCategoryChange={(categoryId, parentCategoryId) => 
							this.onCategoryChange(categoryId, parentCategoryId)
						}/>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label">商品价格</label>
							<div className="col-md-3">
							    <div className="input-group">
									<input type="number" className="form-control" placeholder="价格"/>
									<span className="input-group-addon">元</span>
								</div>
					        </div>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label">商品库存</label>
							<div className="col-md-3">
								<div className="input-group">
									<input type="number" className="form-control" placeholder="库存"/>
									<span className="input-group-addon">件</span>
								</div>
					        </div>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label">商品图片</label>
							<div className="col-md-10">
								{
									this.state.subImages.length ? this.state.subImages.map(
										(image, index) => (
                                            <div className="img-con" key={index}>
                                            	<img className="img" src={image.url}/>
                                            	<i className="fa fa-close" index={index} onClick={(e) => this.onImageDelete(e)}></i>
                                            </div>)
									) : (<div>请上传图片</div>)
								}
							</div>
							<div className="col-md-offset-2 col-md-10 file-upload-con">
								<FileUpLoader onSuccess={(res) => {this.onUploadSuccess(res)}}
							           	onError={(errMsg) => {this.onUploadError(errMsg)}}/>
					        </div>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label">商品详情</label>
							<div className="col-md-10">
								Detail!
					        </div>
					</div>
					<div className="form-group">
						<div className="col-md-offset-2 col-md-10">
						    <div className="input-group">
								<button type="submit" className="btn btn-primary">提交</button>
						    </div>
						</div>
					</div>
				</div>
		    </div>
		);
	}
}

export default ProductSave;