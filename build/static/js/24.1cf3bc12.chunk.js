webpackJsonp([24],{1489:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),s=n.n(l),c=n(109),p=n(85),u=n.n(p),d=n(26),m=n(337),f=n.n(m),h=n(1932),A=n.n(h),g=n(1614),C=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),y={Preview_Image:"https://via.placeholder.com/625x800",image_gallery:["https://via.placeholder.com/625x800","https://via.placeholder.com/625x800","https://via.placeholder.com/625x800","https://via.placeholder.com/625x800","https://via.placeholder.com/625x800"]},b=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=function(e){return function(t){n.setState(i({},e,t.target.value))}},n.state={pictures:[],age:""},n.onDrop=n.onDrop.bind(n),n}return o(t,e),C(t,[{key:"onDrop",value:function(e){this.setState({pictures:this.state.pictures.concat(e)})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"iron-product-add-wrap pt-50 px-sm-50 px-md-0"},s.a.createElement(c.p,{container:!0,spacing:32,className:"my-0"},s.a.createElement(c.p,{item:!0,xs:12,sm:12,md:10,lg:9,className:"py-0 mx-auto"},s.a.createElement(c.p,{container:!0,spacing:32,className:"my-0"},s.a.createElement(c.p,{item:!0,xs:12,sm:12,md:6,lg:6,className:"py-0 mb-md-0 mb-30"},s.a.createElement(c.p,{container:!0,spacing:24,className:"iron-product-gallery my-0"},s.a.createElement(c.p,{item:!0,xs:3,sm:2,md:2,lg:2,className:"py-0"},s.a.createElement("div",{className:"product-gallery-nav"},y.image_gallery&&y.image_gallery.map(function(t,n){return s.a.createElement("div",{key:n,className:"product-gallery-item"},s.a.createElement("div",{className:"image-upload"},s.a.createElement("a",{href:"javascript:void(0)"},s.a.createElement("img",{src:t,alt:"product-item",height:"50"})),s.a.createElement("div",{className:"image-content d-flex justify-content-center align-items-center"},s.a.createElement(A.a,{withPreview:!0,withIcon:!1,buttonClassName:"primary-color bg-base border-circle add-Button",buttonText:"",onChange:function(){return e.onDrop()},imgExtension:[".jpg",".gif",".png",".gif"],maxFileSize:5242880}))))}))),s.a.createElement(c.p,{item:!0,xs:9,sm:10,md:10,lg:10,className:"py-0"},s.a.createElement("div",{className:"preview-full-image"},s.a.createElement("div",{className:"iron-shadow product-gallery-item "},s.a.createElement("div",null,s.a.createElement("a",{href:"javascript:void(0)"},s.a.createElement("img",{src:y.Preview_Image,alt:"poster-image"})))))))),s.a.createElement(c.p,{item:!0,xs:12,sm:12,md:6,lg:6,className:"py-0"},s.a.createElement("div",{className:"detail-content"},s.a.createElement(d.b,{to:"/admin-panel/admin/products",className:"text-14 d-inline-block font-medium py-10 mb-10"},"Back to products"),s.a.createElement("form",{className:"product-values"},s.a.createElement("div",{className:"d-flex justify-content-start align-items-start mb-10"},s.a.createElement("i",{className:"zmdi zmdi-plus mr-10 primary-color pt-10 text-h4 "}),s.a.createElement(u.a,{defaultValue:"Add Product Name",className:"text-capitalize add-product-input text-h3",inputProps:{"aria-label":"Description"}})),s.a.createElement("div",{className:"d-flex justify-content-start align-items-start mb-10"},s.a.createElement("i",{className:"zmdi zmdi-plus mr-10 primary-color pt-5 text-h5"}),s.a.createElement(u.a,{defaultValue:"Add price",className:"text-capitalize add-product-input text-h4 active-input",inputProps:{"aria-label":"Description"}})),s.a.createElement("div",{className:"mb-10"},s.a.createElement("h6",{className:"text-14 mb-0 add-text"},"availability :"),s.a.createElement(u.a,{defaultValue:"",className:"text-capitalize add-product-input pl-30",inputProps:{"aria-label":"Description"}})),s.a.createElement("div",{className:"mb-10"},s.a.createElement("h6",{className:"text-14 mb-0 add-text"},"product code :"),s.a.createElement(u.a,{defaultValue:"",className:"text-capitalize add-product-input pl-30",inputProps:{"aria-label":"Description"}})),s.a.createElement("div",{className:"mb-10"},s.a.createElement("h6",{className:"text-14 mb-0 add-text"},"tags :"),s.a.createElement(u.a,{defaultValue:"",className:"text-capitalize add-product-input pl-30",inputProps:{"aria-label":"Description"}})),s.a.createElement("div",{className:"mb-10"},s.a.createElement("h6",{className:"text-14 mb-0 add-text"},"add description :"),s.a.createElement(f.a,{id:"filled-multiline-static",multiline:!0,rows:"2",defaultValue:"",className:"text-capitalize add-product-input pl-30"})),s.a.createElement("div",{className:"mb-10"},s.a.createElement("h6",{className:"text-14 mb-0 add-text"},"features points :"),s.a.createElement(u.a,{defaultValue:"",className:"text-capitalize add-product-input pl-30",inputProps:{"aria-label":"Description"}})),s.a.createElement("div",{className:"mb-10"},s.a.createElement("h6",{className:"text-14 mb-0 add-text"},"total products :"),s.a.createElement(f.a,{fullWidth:!0,id:"filled-number",value:this.state.age,onChange:this.handleChange("age"),type:"number",className:"iron-select-width2 pl-30",InputLabelProps:{shrink:!0}}))),s.a.createElement("div",{className:"mb-sm-50 mb-20 detail-btns pl-25"},s.a.createElement(c.a,{className:"button btn-active btn-lg mr-15 mb-20 mb-sm-0"},"create"),s.a.createElement(c.a,{className:"button btn-base btn-lg mb-20 mb-sm-0"},"discard")),s.a.createElement("div",{className:"d-flex justify-content-start align-items-center pl-25"},s.a.createElement("span",{className:"d-inline-block mr-15 text-14"},"Share Now"),s.a.createElement("div",{className:"detail-product-share"},s.a.createElement(g.a,null)))))))))}}]),t}(s.a.Component);t.default=b},1614:function(e,t,n){"use strict";function i(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"d-inline-block iron-social-icons mb-0"},r.a.createElement("li",null,r.a.createElement(l.k,{size:"small",variant:"round",component:o.b,to:"#"},r.a.createElement("i",{className:"zmdi zmdi-facebook"}))),r.a.createElement("li",null,r.a.createElement(l.k,{size:"small",variant:"round",component:o.b,to:"#"},r.a.createElement("i",{className:"zmdi zmdi-twitter"}))),r.a.createElement("li",null,r.a.createElement(l.k,{size:"small",variant:"round",component:o.b,to:"#"},r.a.createElement("i",{className:"zmdi zmdi-google"}))),r.a.createElement("li",null,r.a.createElement(l.k,{size:"small",variant:"round",component:o.b,to:"#"},r.a.createElement("i",{className:"zmdi zmdi-instagram"})))))}t.a=i;var a=n(1),r=n.n(a),o=n(26),l=n(109)},1932:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=n(1),p=i(c),u=n(2),d=i(u);n(1933);var m=n(1935),f=i(m),h=n(1936),A=i(h),g={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",width:"100%"},C=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={pictures:[].concat(a(e.defaultImages)),files:[],notAcceptedFileType:[],notAcceptedFileSize:[]},n.inputElement="",n.onDropFile=n.onDropFile.bind(n),n.onUploadClick=n.onUploadClick.bind(n),n.triggerFileUpload=n.triggerFileUpload.bind(n),n}return l(t,e),s(t,[{key:"componentDidUpdate",value:function(e,t,n){t.files!==this.state.files&&this.props.onChange(this.state.files,this.state.pictures)}},{key:"componentWillReceiveProps",value:function(e){e.defaultImages!==this.props.defaultImages&&this.setState({pictures:e.defaultImages})}},{key:"hasExtension",value:function(e){var t="("+this.props.imgExtension.join("|").replace(/\./g,"\\.")+")$";return new RegExp(t,"i").test(e)}},{key:"onDropFile",value:function(e){for(var t=this,n=e.target.files,i=[],a=0;a<n.length;a++){var r=n[a];if(this.hasExtension(r.name))if(r.size>this.props.maxFileSize){var o=this.state.notAcceptedFileSize.slice();o.push(r.name),this.setState({notAcceptedFileSize:o})}else i.push(this.readFile(r));else{var l=this.state.notAcceptedFileType.slice();l.push(r.name),this.setState({notAcceptedFileType:l})}}Promise.all(i).then(function(e){var n=t.state.pictures.slice(),i=t.state.files.slice();e.forEach(function(e){n.push(e.dataURL),i.push(e.file)}),t.setState({pictures:n,files:i})})}},{key:"onUploadClick",value:function(e){e.target.value=null}},{key:"readFile",value:function(e){return new Promise(function(t,n){var i=new FileReader;i.onload=function(n){var i=n.target.result;i=i.replace(";base64",";name="+e.name+";base64"),t({file:e,dataURL:i})},i.readAsDataURL(e)})}},{key:"removeImage",value:function(e){var t=this,n=this.state.pictures.findIndex(function(t){return t===e}),i=this.state.pictures.filter(function(e,t){return t!==n}),a=this.state.files.filter(function(e,t){return t!==n});this.setState({pictures:i,files:a},function(){t.props.onChange(t.state.files,t.state.pictures)})}},{key:"renderErrors",value:function(){var e=this,t="";return this.state.notAcceptedFileType.length>0&&(t=this.state.notAcceptedFileType.map(function(t,n){return p.default.createElement("div",{className:"errorMessage "+e.props.errorClass,key:n,style:e.props.errorStyle},"* ",t," ",e.props.fileTypeError)})),this.state.notAcceptedFileSize.length>0&&(t=this.state.notAcceptedFileSize.map(function(t,n){return p.default.createElement("div",{className:"errorMessage "+e.props.errorClass,key:n,style:e.props.errorStyle},"* ",t," ",e.props.fileSizeError)})),t}},{key:"renderIcon",value:function(){if(this.props.withIcon)return p.default.createElement("img",{src:A.default,className:"uploadIcon",alt:"Upload Icon"})}},{key:"renderLabel",value:function(){if(this.props.withLabel)return p.default.createElement("p",{className:this.props.labelClass,style:this.props.labelStyles},this.props.label)}},{key:"renderPreview",value:function(){return p.default.createElement("div",{className:"uploadPicturesWrapper"},p.default.createElement(f.default,{enterAnimation:"fade",leaveAnimation:"fade",style:g},this.renderPreviewPictures()))}},{key:"renderPreviewPictures",value:function(){var e=this;return this.state.pictures.map(function(t,n){return p.default.createElement("div",{key:n,className:"uploadPictureContainer"},p.default.createElement("div",{className:"deleteImage",onClick:function(){return e.removeImage(t)}},"X"),p.default.createElement("img",{src:t,className:"uploadPicture",alt:"preview"}))})}},{key:"triggerFileUpload",value:function(){this.inputElement.click()}},{key:"clearPictures",value:function(){this.setState({pictures:[]})}},{key:"render",value:function(){var e=this;return p.default.createElement("div",{className:"fileUploader "+this.props.className,style:this.props.style},p.default.createElement("div",{className:"fileContainer",style:this.props.fileContainerStyle},this.renderIcon(),this.renderLabel(),p.default.createElement("div",{className:"errorsContainer"},this.renderErrors()),p.default.createElement("button",{type:this.props.buttonType,className:"chooseFileButton "+this.props.buttonClassName,style:this.props.buttonStyles,onClick:this.triggerFileUpload},this.props.buttonText),p.default.createElement("input",{type:"file",ref:function(t){return e.inputElement=t},name:this.props.name,multiple:!this.props.singleImage,onChange:this.onDropFile,onClick:this.onUploadClick,accept:this.props.accept}),this.props.withPreview?this.renderPreview():null))}}]),t}(p.default.Component);C.defaultProps={className:"",fileContainerStyle:{},buttonClassName:"",buttonStyles:{},withPreview:!1,accept:"image/*",name:"",withIcon:!0,buttonText:"Choose images",buttonType:"button",withLabel:!0,label:"Max file size: 5mb, accepted: jpg|gif|png",labelStyles:{},labelClass:"",imgExtension:[".jpg",".jpeg",".gif",".png"],maxFileSize:5242880,fileSizeError:" file size is too big",fileTypeError:" is not a supported file extension",errorClass:"",style:{},errorStyle:{},singleImage:!1,onChange:function(){},defaultImages:[]},C.propTypes={style:d.default.object,fileContainerStyle:d.default.object,className:d.default.string,onChange:d.default.func,onDelete:d.default.func,buttonClassName:d.default.string,buttonStyles:d.default.object,buttonType:d.default.string,withPreview:d.default.bool,accept:d.default.string,name:d.default.string,withIcon:d.default.bool,buttonText:d.default.string,withLabel:d.default.bool,label:d.default.string,labelStyles:d.default.object,labelClass:d.default.string,imgExtension:d.default.array,maxFileSize:d.default.number,fileSizeError:d.default.string,fileTypeError:d.default.string,errorClass:d.default.string,errorStyle:d.default.object,singleImage:d.default.bool,defaultImages:d.default.array},t.default=C},1933:function(e,t,n){var i=n(1934);"string"===typeof i&&(i=[[e.i,i,""]]);var a={hmr:!1};a.transform=void 0;n(355)(i,a);i.locals&&(e.exports=i.locals)},1934:function(e,t,n){t=e.exports=n(146)(!0),t.push([e.i,".fileUploader {\n\twidth: 100%;\n}\n\n.fileContainer {\n\tbackground: #fff;\n\t-webkit-box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.05);\n\t        box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.05);\n\tposition: relative;\n\tborder-radius: 10px;\n\tpadding: 20px 0;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-align: center;\n\t    align-items: center;\n\t-ms-flex-pack: center;\n\t    justify-content: center;\n\t-ms-flex-direction: column;\n\t    flex-direction: column;\n\tmargin: 10px auto;\n\t-webkit-transition: all 0.3s ease-in;\n\t-o-transition: all 0.3s ease-in;\n\ttransition: all 0.3s ease-in;\n}\n\n.fileContainer input {\n\topacity: 0;\n\tposition: absolute;\n\tz-index: -1;\n}\n\n.fileContainer p {\n\tfont-size: 12px;\n\tmargin: 8px 0 4px;\n}\n\n.fileContainer .errorsContainer {\n\tmax-width: 300px;\n\tfont-size: 12px;\n\tcolor: red;\n\ttext-align: left;\n}\n\n.fileContainer .chooseFileButton {\n\tpadding: 6px 23px;\n\tbackground: #3f4257;\n\tborder-radius: 30px;\n\tcolor: white;\n\tfont-weight: 300;\n\tfont-size: 14px;\n\tmargin: 10px 0;\n\t-webkit-transition: all 0.2s ease-in;\n\t-o-transition: all 0.2s ease-in;\n\ttransition: all 0.2s ease-in;\n\tcursor: pointer;\n\toutline: none;\n\tborder: none;\n}\n\n.fileContainer .chooseFileButton:hover {\n\tbackground: #545972;\n}\n\n.fileContainer .uploadFilesButton {\n\tpadding: 5px 43px;\n\tbackground: transparent;\n\tborder-radius: 30px;\n\tcolor: #3f4257;\n\tfont-weight: 300;\n\tfont-size: 14px;\n\tmargin: 10px 0;\n\t-webkit-transition: all 0.2s ease-in;\n\t-o-transition: all 0.2s ease-in;\n\ttransition: all 0.2s ease-in;\n\tcursor: pointer;\n\toutline: none;\n\tborder: 1px solid #3f4257;\n}\n\n.fileContainer .uploadFilesButton:hover {\n\tbackground: #3f4257;\n\tcolor: #fff;\n}\n\n.fileContainer .uploadIcon {\n\twidth: 50px;\n\theight: 50px;\n}\n\n.fileContainer .uploadPicturesWrapper {\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\t-ms-flex-pack: center;\n\t    justify-content: center;\n\twidth: 100%;\n}\n\n.fileContainer .uploadPictureContainer {\n\twidth: 25%;\n\tmargin: 5%;\n\tpadding: 10px;\n\tbackground: #edf2f6;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-align: center;\n\t    align-items: center;\n\t-ms-flex-pack: center;\n\t    justify-content: center;\n\theight: inherit;\n\t-webkit-box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);\n\t        box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);\n\tborder: 1px solid #d0dbe4;\n\tposition: relative;\n}\n\n.fileContainer .uploadPictureContainer img.uploadPicture {\n\twidth: 100%;\n}\n\n.fileContainer .deleteImage {\n\tposition: absolute;\n\ttop: -9px;\n\tright: -9px;\n\tcolor: #fff;\n\tbackground: #ff4081;\n\tborder-radius: 50%;\n\ttext-align: center;\n\tcursor: pointer;\n\tfont-size: 26px;\n\tfont-weight: bold;\n\tline-height: 30px;\n\twidth: 30px;\n\theight: 30px;\n}\n\n.flipMove {\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    width: 100%;\n}\n","",{version:3,sources:["E:/react/pcbuilder/node_modules/react-images-upload/index.css"],names:[],mappings:"AAAA;CACC,YAAY;CACZ;;AAED;CACC,iBAAiB;CACjB,sDAAsD;SAC9C,8CAA8C;CACtD,mBAAmB;CACnB,oBAAoB;CACpB,gBAAgB;CAChB,qBAAqB;CACrB,cAAc;CACd,uBAAuB;KACnB,oBAAoB;CACxB,sBAAsB;KAClB,wBAAwB;CAC5B,2BAA2B;KACvB,uBAAuB;CAC3B,kBAAkB;CAClB,qCAAqC;CACrC,gCAAgC;CAChC,6BAA6B;CAC7B;;AAED;CACC,WAAW;CACX,mBAAmB;CACnB,YAAY;CACZ;;AAED;CACC,gBAAgB;CAChB,kBAAkB;CAClB;;AAED;CACC,iBAAiB;CACjB,gBAAgB;CAChB,WAAW;CACX,iBAAiB;CACjB;;AAED;CACC,kBAAkB;CAClB,oBAAoB;CACpB,oBAAoB;CACpB,aAAa;CACb,iBAAiB;CACjB,gBAAgB;CAChB,eAAe;CACf,qCAAqC;CACrC,gCAAgC;CAChC,6BAA6B;CAC7B,gBAAgB;CAChB,cAAc;CACd,aAAa;CACb;;AAED;CACC,oBAAoB;CACpB;;AAED;CACC,kBAAkB;CAClB,wBAAwB;CACxB,oBAAoB;CACpB,eAAe;CACf,iBAAiB;CACjB,gBAAgB;CAChB,eAAe;CACf,qCAAqC;CACrC,gCAAgC;CAChC,6BAA6B;CAC7B,gBAAgB;CAChB,cAAc;CACd,0BAA0B;CAC1B;;AAED;CACC,oBAAoB;CACpB,YAAY;CACZ;;AAED;CACC,YAAY;CACZ,aAAa;CACb;;AAED;CACC,qBAAqB;CACrB,cAAc;CACd,oBAAoB;KAChB,gBAAgB;CACpB,sBAAsB;KAClB,wBAAwB;CAC5B,YAAY;CACZ;;AAED;CACC,WAAW;CACX,WAAW;CACX,cAAc;CACd,oBAAoB;CACpB,qBAAqB;CACrB,cAAc;CACd,uBAAuB;KACnB,oBAAoB;CACxB,sBAAsB;KAClB,wBAAwB;CAC5B,gBAAgB;CAChB,mDAAmD;SAC3C,2CAA2C;CACnD,0BAA0B;CAC1B,mBAAmB;CACnB;;AAED;CACC,YAAY;CACZ;;AAED;CACC,mBAAmB;CACnB,UAAU;CACV,YAAY;CACZ,YAAY;CACZ,oBAAoB;CACpB,mBAAmB;CACnB,mBAAmB;CACnB,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB,kBAAkB;CAClB,YAAY;CACZ,aAAa;CACb;;AAED;CACC,qBAAqB;CACrB,cAAc;IACX,uBAAuB;QACnB,oBAAoB;IACxB,sBAAsB;QAClB,wBAAwB;IAC5B,oBAAoB;QAChB,gBAAgB;IACpB,YAAY;CACf",file:"index.css",sourcesContent:[".fileUploader {\n\twidth: 100%;\n}\n\n.fileContainer {\n\tbackground: #fff;\n\t-webkit-box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.05);\n\t        box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.05);\n\tposition: relative;\n\tborder-radius: 10px;\n\tpadding: 20px 0;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-align: center;\n\t    align-items: center;\n\t-ms-flex-pack: center;\n\t    justify-content: center;\n\t-ms-flex-direction: column;\n\t    flex-direction: column;\n\tmargin: 10px auto;\n\t-webkit-transition: all 0.3s ease-in;\n\t-o-transition: all 0.3s ease-in;\n\ttransition: all 0.3s ease-in;\n}\n\n.fileContainer input {\n\topacity: 0;\n\tposition: absolute;\n\tz-index: -1;\n}\n\n.fileContainer p {\n\tfont-size: 12px;\n\tmargin: 8px 0 4px;\n}\n\n.fileContainer .errorsContainer {\n\tmax-width: 300px;\n\tfont-size: 12px;\n\tcolor: red;\n\ttext-align: left;\n}\n\n.fileContainer .chooseFileButton {\n\tpadding: 6px 23px;\n\tbackground: #3f4257;\n\tborder-radius: 30px;\n\tcolor: white;\n\tfont-weight: 300;\n\tfont-size: 14px;\n\tmargin: 10px 0;\n\t-webkit-transition: all 0.2s ease-in;\n\t-o-transition: all 0.2s ease-in;\n\ttransition: all 0.2s ease-in;\n\tcursor: pointer;\n\toutline: none;\n\tborder: none;\n}\n\n.fileContainer .chooseFileButton:hover {\n\tbackground: #545972;\n}\n\n.fileContainer .uploadFilesButton {\n\tpadding: 5px 43px;\n\tbackground: transparent;\n\tborder-radius: 30px;\n\tcolor: #3f4257;\n\tfont-weight: 300;\n\tfont-size: 14px;\n\tmargin: 10px 0;\n\t-webkit-transition: all 0.2s ease-in;\n\t-o-transition: all 0.2s ease-in;\n\ttransition: all 0.2s ease-in;\n\tcursor: pointer;\n\toutline: none;\n\tborder: 1px solid #3f4257;\n}\n\n.fileContainer .uploadFilesButton:hover {\n\tbackground: #3f4257;\n\tcolor: #fff;\n}\n\n.fileContainer .uploadIcon {\n\twidth: 50px;\n\theight: 50px;\n}\n\n.fileContainer .uploadPicturesWrapper {\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\t-ms-flex-pack: center;\n\t    justify-content: center;\n\twidth: 100%;\n}\n\n.fileContainer .uploadPictureContainer {\n\twidth: 25%;\n\tmargin: 5%;\n\tpadding: 10px;\n\tbackground: #edf2f6;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-align: center;\n\t    align-items: center;\n\t-ms-flex-pack: center;\n\t    justify-content: center;\n\theight: inherit;\n\t-webkit-box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);\n\t        box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);\n\tborder: 1px solid #d0dbe4;\n\tposition: relative;\n}\n\n.fileContainer .uploadPictureContainer img.uploadPicture {\n\twidth: 100%;\n}\n\n.fileContainer .deleteImage {\n\tposition: absolute;\n\ttop: -9px;\n\tright: -9px;\n\tcolor: #fff;\n\tbackground: #ff4081;\n\tborder-radius: 50%;\n\ttext-align: center;\n\tcursor: pointer;\n\tfont-size: 26px;\n\tfont-weight: bold;\n\tline-height: 30px;\n\twidth: 30px;\n\theight: 30px;\n}\n\n.flipMove {\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    width: 100%;\n}\n"],sourceRoot:""}])},1935:function(e,t,n){"use strict";function i(e){var t=!1;return function(){t||(console.warn(e),t=!0)}}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};return Object.keys(e).forEach(function(i){-1===t.indexOf(i)&&(n[i]=e[i])}),n}function r(e,t){if(e===t)return!0;var n=!x(e)||!x(t),i=e.length!==t.length;return!n&&!i&&v(function(e,n){return e===t[n]},e)}function o(e){var t=e.domNode,n=e.styles;Object.keys(n).forEach(function(e){t.style.setProperty(B(e),n[e])})}function l(e){return e.key||""}function s(e){return c.Children.toArray(e)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),p=n.n(c),u=n(27),d=n.n(u),m=(i("\n>> Error, via react-flip-move <<\n\nYou provided a stateless functional component as a child to <FlipMove>. Unfortunately, SFCs aren't supported, because Flip Move needs access to the backing instances via refs, and SFCs don't have a public instance that holds that info.\n\nPlease wrap your components in a native element (eg. <div>), or a non-functional component.\n"),i("\n>> Error, via react-flip-move <<\n\nYou provided a primitive (text or number) node as a child to <FlipMove>. Flip Move needs containers with unique keys to move children around.\n\nPlease wrap your value in a native element (eg. <span>), or a component.\n"),i("\n>> Warning, via react-flip-move <<\n\nWhen using \"wrapperless\" mode (by supplying 'typeName' of 'null'), strange things happen when the direct parent has the default \"static\" position.\n\nFlipMove has added 'position: relative' to this node, to ensure Flip Move animates correctly.\n\nTo avoid seeing this warning, simply apply a non-static position to that parent node.\n")),f=i("\n>> Warning, via react-flip-move <<\n\nOne or more of Flip Move's child elements have the html attribute 'disabled' set to true.\n\nPlease note that this will cause animations to break in Internet Explorer 11 and below. Either remove the disabled attribute or set 'animation' to false.\n"),h={elevator:{from:{transform:"scale(0)",opacity:"0"},to:{transform:"",opacity:""}},fade:{from:{opacity:"0"},to:{opacity:""}},accordionVertical:{from:{transform:"scaleY(0)",transformOrigin:"center top"},to:{transform:"",transformOrigin:"center top"}},accordionHorizontal:{from:{transform:"scaleX(0)",transformOrigin:"left center"},to:{transform:"",transformOrigin:"left center"}},none:null},A={elevator:{from:{transform:"scale(1)",opacity:"1"},to:{transform:"scale(0)",opacity:"0"}},fade:{from:{opacity:"1"},to:{opacity:"0"}},accordionVertical:{from:{transform:"scaleY(1)",transformOrigin:"center top"},to:{transform:"scaleY(0)",transformOrigin:"center top"}},accordionHorizontal:{from:{transform:"scaleX(1)",transformOrigin:"left center"},to:{transform:"scaleX(0)",transformOrigin:"left center"}},none:null},g=h,C="elevator",y="none",b=function(e,t){for(var n=0;n<t.length;n++)if(e(t[n],n,t))return t[n]},v=function(e,t){for(var n=0;n<t.length;n++)if(!e(t[n],n,t))return!1;return!0},x=function(e){return(x=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)},B=function(e){var t={};return function(n){return t[n]||(t[n]=e(n)),t[n]}}(function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}),E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},k=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},D=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},P=function(e){var t=e.childDomNode,n=e.parentDomNode,i=e.getPosition,a=i(n),r=i(t),o=r.top,l=r.left,s=r.right,c=r.bottom,p=r.width,u=r.height;return{top:o-a.top,left:l-a.left,right:a.right-s,bottom:a.bottom-c,width:p,height:u}},j=function(e){var t=e.childDomNode,n=e.childBoundingBox,i=e.parentBoundingBox,a=e.getPosition,r={top:0,left:0,right:0,bottom:0,height:0,width:0},o=n||r,l=i||r,s=a(t),c={top:s.top-l.top,left:s.left-l.left};return[o.left-c.left,o.top-c.top]},S=function(e,t){var n=e.domNode,i=e.boundingBox;if(n&&i){var a=window.getComputedStyle(n),r=["margin-top","margin-left","margin-right"],l=r.reduce(function(e,t){var n,i=a.getPropertyValue(t);return N({},e,(n={},n[t]=Number(i.replace("px","")),n))},{});o({domNode:n,styles:{position:"absolute",top:("bottom"===t?i.top-i.height:i.top)-l["margin-top"]+"px",left:i.left-l["margin-left"]+"px",right:i.right-l["margin-right"]+"px"}})}},O=function(e){var t=e.domNode,n=e.parentData,i=e.getPosition,a=n.domNode,r=n.boundingBox;if(a&&r){o({domNode:t,styles:{height:"0"}});var l=r.height,s=i(a).height,c=l-s;o({domNode:t,styles:{height:c>0?c+"px":"0"}})}},F=function(e){if("undefined"===typeof HTMLElement)return null;if(e instanceof HTMLElement)return e;var t=Object(u.findDOMNode)(e);return t&&t.nodeType===Node.TEXT_NODE?null:t},z=function(e,t){var n=t.delay,i=t.duration,a=t.staggerDurationBy,r=t.staggerDelayBy,o=t.easing;return n+=e*r,i+=e*a,["transform","opacity"].map(function(e){return e+" "+i+"ms "+o+" "+n+"ms"}).join(", ")},T=function(){var e={transition:"transitionend","-o-transition":"oTransitionEnd","-moz-transition":"transitionend","-webkit-transition":"webkitTransitionEnd"};if("undefined"===typeof document)return"";var t=document.createElement("fakeelement"),n=b(function(e){return void 0!==t.style.getPropertyValue(e)},Object.keys(e));return n?e[n]:""}(),I=!T,_=function(e){function t(){var n,i,a;w(this,t);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return n=i=D(this,e.call.apply(e,[this].concat(o))),i.state={children:s(i.props?i.props.children:[]).map(function(e){return N({},e,{element:e,appearing:!0})})},i.childrenData={},i.parentData={domNode:null,boundingBox:null},i.heightPlaceholderData={domNode:null},i.remainingAnimations=0,i.childrenToAnimate=[],i.findDOMContainer=function(){var e=d.a.findDOMNode(i),t=e&&e.parentNode;t&&t instanceof HTMLElement&&("static"===window.getComputedStyle(t).position&&(t.style.position="relative",m()),i.parentData.domNode=t)},i.runAnimation=function(){var e=i.state.children.filter(i.doesChildNeedToBeAnimated),t=e.map(function(e){return i.computeInitialStyles(e)});e.forEach(function(e,n){i.remainingAnimations+=1,i.childrenToAnimate.push(l(e)),i.animateChild(e,n,t[n])}),"function"===typeof i.props.onStartAll&&i.callChildrenHook(i.props.onStartAll)},i.doesChildNeedToBeAnimated=function(e){if(!l(e))return!1;var t=i.getChildData(l(e)),n=t.domNode,a=t.boundingBox,r=i.parentData.boundingBox;if(!n)return!1;var o=i.props,s=o.appearAnimation,c=o.enterAnimation,p=o.leaveAnimation,u=o.getPosition,d=e.appearing&&s,m=e.entering&&c,f=e.leaving&&p;if(d||m||f)return!0;var h=j({childDomNode:n,childBoundingBox:a,parentBoundingBox:r,getPosition:u}),A=h[0],g=h[1];return 0!==A||0!==g},a=n,D(i,a)}return k(t,e),t.prototype.componentDidMount=function(){null===this.props.typeName&&this.findDOMContainer(),this.props.appearAnimation&&!this.isAnimationDisabled(this.props)&&(this.prepForAnimation(),this.runAnimation())},t.prototype.componentWillReceiveProps=function(e){this.updateBoundingBoxCaches();var t=s(e.children);this.setState({children:this.isAnimationDisabled(e)?t.map(function(e){return N({},e,{element:e})}):this.calculateNextSetOfChildren(t)})},t.prototype.componentDidUpdate=function(e){null===this.props.typeName&&this.findDOMContainer(),!r(s(this.props.children).map(function(e){return e.key}),s(e.children).map(function(e){return e.key}))&&!this.isAnimationDisabled(this.props)&&(this.prepForAnimation(),this.runAnimation())},t.prototype.calculateNextSetOfChildren=function(e){var t=this,n=e.map(function(e){var n=t.findChildByKey(e.key),i=!n||n.leaving;return N({},e,{element:e,entering:i})}),i=0;return this.state.children.forEach(function(a,r){if(!b(function(e){return e.key===l(a)},e)&&t.props.leaveAnimation){var o=N({},a,{leaving:!0}),s=r+i;n.splice(s,0,o),i+=1}}),n},t.prototype.prepForAnimation=function(){var e=this,t=this.props,n=t.leaveAnimation,i=t.maintainContainerHeight,a=t.getPosition;if(n){this.state.children.filter(function(e){return e.leaving}).forEach(function(t){var n=e.getChildData(l(t));!e.isAnimationDisabled(e.props)&&n.domNode&&n.domNode.disabled&&f(),n.boundingBox&&S(n,e.props.verticalAlignment)}),i&&this.heightPlaceholderData.domNode&&O({domNode:this.heightPlaceholderData.domNode,parentData:this.parentData,getPosition:a})}this.state.children.forEach(function(t){var n=e.getChildData(l(t)),i=n.domNode;i&&(t.entering||t.leaving||o({domNode:i,styles:{transition:""}}))})},t.prototype.animateChild=function(e,t,n){var i=this,a=this.getChildData(l(e)),r=a.domNode;r&&(o({domNode:r,styles:n}),this.props.onStart&&this.props.onStart(e,r),requestAnimationFrame(function(){requestAnimationFrame(function(){var n={transition:z(t,i.props),transform:"",opacity:""};e.appearing&&i.props.appearAnimation?n=N({},n,i.props.appearAnimation.to):e.entering&&i.props.enterAnimation?n=N({},n,i.props.enterAnimation.to):e.leaving&&i.props.leaveAnimation&&(n=N({},n,i.props.leaveAnimation.to)),o({domNode:r,styles:n})})}),this.bindTransitionEndHandler(e))},t.prototype.bindTransitionEndHandler=function(e){var t=this,n=this.getChildData(l(e)),i=n.domNode;if(i){var a=function n(a){a.target===i&&(i.style.transition="",t.triggerFinishHooks(e,i),i.removeEventListener(T,n),e.leaving&&t.removeChildData(l(e)))};i.addEventListener(T,a)}},t.prototype.triggerFinishHooks=function(e,t){var n=this;if(this.props.onFinish&&this.props.onFinish(e,t),this.remainingAnimations-=1,0===this.remainingAnimations){var i=this.state.children.filter(function(e){return!e.leaving}).map(function(e){return N({},e,{element:e.element,appearing:!1,entering:!1})});this.setState({children:i},function(){"function"===typeof n.props.onFinishAll&&n.callChildrenHook(n.props.onFinishAll),n.childrenToAnimate=[]}),this.heightPlaceholderData.domNode&&(this.heightPlaceholderData.domNode.style.height="0")}},t.prototype.callChildrenHook=function(e){var t=this,n=[],i=[];this.childrenToAnimate.forEach(function(e){var a=t.findChildByKey(e);a&&(n.push(a),t.hasChildData(e)&&i.push(t.getChildData(e).domNode))}),e(n,i)},t.prototype.updateBoundingBoxCaches=function(){var e=this,t=this.parentData.domNode;if(t){this.parentData.boundingBox=this.props.getPosition(t);var n=[];this.state.children.forEach(function(i){var a=l(i);if(!a)return void n.push(null);if(!e.hasChildData(a))return void n.push(null);var r=e.getChildData(a);if(!r.domNode||!i)return void n.push(null);n.push(P({childDomNode:r.domNode,parentDomNode:t,getPosition:e.props.getPosition}))}),this.state.children.forEach(function(t,i){var a=l(t),r=n[i];a&&e.setChildData(a,{boundingBox:r})})}},t.prototype.computeInitialStyles=function(e){if(e.appearing)return this.props.appearAnimation?this.props.appearAnimation.from:{};if(e.entering)return this.props.enterAnimation?N({position:"",top:"",left:"",right:"",bottom:""},this.props.enterAnimation.from):{};if(e.leaving)return this.props.leaveAnimation?this.props.leaveAnimation.from:{};var t=this.getChildData(l(e)),n=t.domNode,i=t.boundingBox,a=this.parentData.boundingBox;if(!n)return{};var r=j({childDomNode:n,childBoundingBox:i,parentBoundingBox:a,getPosition:this.props.getPosition});return{transform:"translate("+r[0]+"px, "+r[1]+"px)"}},t.prototype.isAnimationDisabled=function(e){return I||e.disableAllAnimations||0===e.duration&&0===e.delay&&0===e.staggerDurationBy&&0===e.staggerDelayBy},t.prototype.findChildByKey=function(e){return b(function(t){return l(t)===e},this.state.children)},t.prototype.hasChildData=function(e){return Object.prototype.hasOwnProperty.call(this.childrenData,e)},t.prototype.getChildData=function(e){return this.hasChildData(e)?this.childrenData[e]:{}},t.prototype.setChildData=function(e,t){this.childrenData[e]=N({},this.getChildData(e),t)},t.prototype.removeChildData=function(e){delete this.childrenData[e],this.setState(function(t){return N({},t,{children:t.children.filter(function(t){return t.element.key!==e})})})},t.prototype.createHeightPlaceholder=function(){var e=this,t=this.props.typeName,n="ul"===t||"ol"===t,i=n?"li":"div";return Object(c.createElement)(i,{key:"height-placeholder",ref:function(t){e.heightPlaceholderData.domNode=t},style:{visibility:"hidden",height:0}})},t.prototype.childrenWithRefs=function(){var e=this;return this.state.children.map(function(t){return Object(c.cloneElement)(t.element,{ref:function(n){if(n){var i=F(n);e.setChildData(l(t),{domNode:i})}}})})},t.prototype.render=function(){var e=this,t=this.props,n=t.typeName,i=t.delegated,a=t.leaveAnimation,r=t.maintainContainerHeight,o=this.childrenWithRefs();if(a&&r&&o.push(this.createHeightPlaceholder()),!n)return o;var l=N({},i,{children:o,ref:function(t){e.parentData.domNode=t}});return Object(c.createElement)(n,l)},t}(c.Component),M=function(e){var t,n;return n=t=function(t){function n(){return w(this,n),D(this,t.apply(this,arguments))}return k(n,t),n.prototype.checkChildren=function(e){},n.prototype.convertProps=function(e){var t={children:e.children,easing:e.easing,onStart:e.onStart,onFinish:e.onFinish,onStartAll:e.onStartAll,onFinishAll:e.onFinishAll,typeName:e.typeName,disableAllAnimations:e.disableAllAnimations,getPosition:e.getPosition,maintainContainerHeight:e.maintainContainerHeight,verticalAlignment:e.verticalAlignment,duration:this.convertTimingProp("duration"),delay:this.convertTimingProp("delay"),staggerDurationBy:this.convertTimingProp("staggerDurationBy"),staggerDelayBy:this.convertTimingProp("staggerDelayBy"),appearAnimation:this.convertAnimationProp(e.appearAnimation,g),enterAnimation:this.convertAnimationProp(e.enterAnimation,h),leaveAnimation:this.convertAnimationProp(e.leaveAnimation,A),delegated:{}};this.checkChildren(t.children);var n=Object.keys(t),i=a(this.props,n);return i.style=N({position:"relative"},i.style),t.delegated=i,t},n.prototype.convertTimingProp=function(e){var t=this.props[e],i="number"===typeof t?t:parseInt(t,10);if(isNaN(i)){var a=n.defaultProps[e];return a}return i},n.prototype.convertAnimationProp=function(e,t){switch("undefined"===typeof e?"undefined":E(e)){case"boolean":return t[e?C:y];case"string":var n=Object.keys(t);return-1===n.indexOf(e)?t[C]:t[e];default:return e}},n.prototype.render=function(){return p.a.createElement(e,this.convertProps(this.props))},n}(c.Component),t.defaultProps={easing:"ease-in-out",duration:350,delay:0,staggerDurationBy:0,staggerDelayBy:0,typeName:"div",enterAnimation:C,leaveAnimation:C,disableAllAnimations:!1,getPosition:function(e){return e.getBoundingClientRect()},maintainContainerHeight:!1,verticalAlignment:"top"},n}(_);t.default=M},1936:function(e,t,n){e.exports=n.p+"static/media/UploadIcon.1cedb6e9.svg"}});
//# sourceMappingURL=24.1cf3bc12.chunk.js.map