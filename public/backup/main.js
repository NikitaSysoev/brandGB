function checkForm(t,i){this.reg=i,this.input=t,this.reg.test(this.input.val())?($(this.input).addClass("success"),$(this.input).removeClass("error")):($(this.input).removeClass("success"),$(this.input).addClass("error"))}function Citaty(t,i,a,e){Container.call(this),this.url=t,this.text=i,this.author=a,this.signature=e}function CityList(t,i){Container.call(this),this.id=t,this.name=i}function Container(){this.id="",this.className="",this.htmlCode=""}function Menu(t,i,a){Container.call(this),this.id=t,this.className=i,this.items=a}function MenuItem(t,i,a){Container.call(this),this.href=t,this.name=i,this.submenu=a||null}function SubMenu(t){MenuItem.call(this),this.submenu=t}function SubMenuItems(t,i){SubMenu.call(this),this.title=t||null,this.column=i}function image(t,i,a){Container.call(this),this.src=t,this.alt=i,this.title=a}function Basket(){Container.call(this),this.countGoods=0,this.amount=0,this.basketItems=[]}function ratingStars(t){switch(t){case 5:return'<i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>';case 4.5:return'<i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star-half-o" aria-hidden="true"></i>';case 4:return'<i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>';case 3.5:return'<i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star-half-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>';case 3:return'<i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>';case 2.5:return'<i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star-half-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>';case 2:return'<i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>';case 1.5:return'<i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star-half-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>';case 1:return'<i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>';case.5:return'<i class="fa fa-star-half-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>';default:return'<i class="fa fa-star-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>\n                            <i class="fa fa-star-o" aria-hidden="true"></i>'}}function ShopItem(t,i,a,e,s,r,n,d){Container.call(this),this.id=t,this.value=i,this.href=a,this.src=e,this.alt=s,this.price=r,this.name=n,this.rating=ratingStars(d)}function ShoppingCart(t){Container.call(this),this.root=t}Citaty.prototype=Object.create(Container.prototype),Citaty.prototype.constructor=Citaty,Citaty.prototype.render=function(t){var i=$("<div />",{class:"citaty",html:'<div class="sub_left_ava"></div>\n        <p class="sub_left_text">'+this.text+'</p>\n         <h4 class="sub_left_pod">'+this.author+'</h4>\n         <p class="sub_span">'+this.signature+"</p>"});$(".sub_left_ava").css("background-image","1"),$(t).prepend(i)},CityList.prototype=Object.create(Container.prototype),CityList.prototype.constructor=CityList,CityList.prototype.render=function(t){var i='<div id="'+this.id+'">'+this.name+"</div>";$(t).prepend(i)},Container.prototype.render=function(){return this.htmlCode},Container.prototype.remove=function(){var t=this.id,i=document.getElementById(t);i&&i.parentNode.removeChild(i)},Menu.prototype=Object.create(Container.prototype),Menu.prototype.constructor=Menu,Menu.prototype.render=function(){var t='<ul class="'+this.className+'" id="'+this.id+'">';return this.items.forEach(function(i){t+=i.render()}),t+="</ul>"},MenuItem.prototype=Object.create(Container.prototype),MenuItem.prototype.constructor=MenuItem,MenuItem.prototype.render=function(){var t="";return null===this.submenu?t='<li><a href="'+this.href+'">'+this.name+"</a></li>":(t+='<li><a href="'+this.href+'">'+this.name+"</a>",t+=new SubMenu(this.submenu).render(),t+="</li>"),t},SubMenu.prototype=Object.create(MenuItem.prototype),SubMenu.prototype.constructor=SubMenu,SubMenu.prototype.render=function(){var t='<div class="mega_menu">';return t+='<div class="transform"></div>',t+='<div class="mega-in">',t+=new SubMenuItems(this.submenu[0].title,this.submenu[0].column).render(),t+="</div>",t+='<div class="mega-in"><div>',t+=new SubMenuItems(this.submenu[1].title,this.submenu[1].column).render(),t+="</div><div>",t+=new SubMenuItems(this.submenu[2].title,this.submenu[2].column).render(),t+="</div></div>",t+='<div class="mega-in megas-in_last"><div class="mega_right">',t+=new SubMenuItems(this.submenu[3].title,this.submenu[3].column).render(),t+="</div>",t+='<div class="layer-mega">',t+=new image(this.submenu[4].src,this.submenu[4].alt,this.submenu[4].title).render(),t+="</div></div>"},SubMenuItems.prototype=Object.create(SubMenu.prototype),SubMenuItems.prototype.constructor=SubMenuItems,SubMenuItems.prototype.render=function(){var t="";for(t+="<p>"+this.title+"</p>",i=0;i<this.column.length;i++)t+='<a href="'+this.column[i].href+'">'+this.column[i].name+"</a>";return t},image.prototype=Object.create(Container.prototype),image.prototype.constructor=image,image.prototype.render=function(){var t="";return t+='<img src="'+this.src+'" alt="'+this.alt+'">',t+="<div>"+this.title+"</div>"},Basket.prototype=Object.create(Container.prototype),Basket.prototype.constructor=Basket,Basket.prototype.add=function(t,i,a,e,s,r,n){$(".items_number").css("display","block"),this.quantity=parseInt(e),this.price=parseInt(s),this.product="item"+parseInt(t)+"_cart",this.src=i,this.alt=a,this.name=r,document.getElementById("item_number").textContent=this.countGoods,document.getElementById("total_price").textContent=this.amount,n.length>3?this.rating=n:this.rating=ratingStars(n);var d=$("<div />",{class:"cart-hide_item",id:this.product,html:'<img class="cart-hide-img1" src="'+this.src+'" alt="'+this.alt+'">\n<div class="cart-hide-text">\n<h4>'+this.name+'</h4><div class="stars">'+this.rating+'</div>\n<p><span class="units">'+this.quantity+'</span>  <span> x </span>$<span class="delete-price">'+this.price+'</span>.00</p></div>\n<div class="cart-hide-delete"><i class="fa fa-times-circle" aria-hidden="true"></i></div>'}),o=document.getElementById(this.product),u=$(".load");if(o){var c=parseInt($(o).find(".units").html());c+=this.quantity,$(o).find(".units").html(c)}else u.prepend(d);this.amount+=this.price*this.quantity,this.countGoods+=this.quantity,$("#total_price").text(this.amount),$("#item_number").text(this.countGoods),$(".grand-total")&&$(".sub-total")&&($(".grand-total").find("span").text("$"+this.amount),$(".sub-total").find("span").text("$"+this.amount))},Basket.prototype.delete=function(t){var i=document.getElementById(t);this.countGoods-=$(i).find(".units").text(),$("#item_number").text(this.countGoods);var a=$(i).find(".delete-price").text(),e=$(i).find(".units").text(),s=$("#total_price").text();this.amount=s-e*a,$("#total_price").text(this.amount),i.remove(),0===this.amount&&$(".items_number").css("display","none"),$(".grand-total")&&$(".sub-total")&&($(".grand-total").find("span").text("$"+this.amount),$(".sub-total").find("span").text("$"+this.amount))},ShopItem.prototype=Object.create(Container.prototype),ShopItem.prototype.constructor=ShopItem,ShopItem.prototype.render=function(t){var i=$("<a />",{class:"fetured_item",id:this.id,value:this.value,href:this.href,html:'<div class="item_back"><img class="item_img" src="'+this.src+'" alt="'+this.alt+'"></div><div class="fetured_text">'+this.name+'</div><div class="fetured_cont">\n     <div class="fetured_price">$'+this.price+'.00</div><div class="stars stars_fetured">'+this.rating+'</div></div><div class="blockhover" onclick="return false"><div class="imgfix"><i class="sprite sprite-forma-1"></i><p class="block">Add to Card</p></div></div>'});$(t).append(i)},ShoppingCart.prototype=Object.create(Container.prototype),ShoppingCart.prototype.constructor=ShoppingCart,ShoppingCart.prototype.add=function(t){this.item=t;var i=$(this.item).attr("id").split("_")[0],a=i+"_shopping",e=$(this.item).find(".cart-hide-img1").attr("src"),s=$(this.item).find("h4").text(),r=$(this.item).find(".stars").html(),n=parseInt($(this.item).find(".delete-price").text()),d=parseInt($(this.item).find(".units").text()),o=n*d,u=$("<div />",{class:"shopping_cart_item",id:a,html:'<div class="details">\n<div class="item_picture item_picture__img1" style ="background-image: url('+e+');"></div>\n<div class="item_text">\n<div class="item_text_h">'+s+'</div>\n<div class="stars">'+r+'</div>\n<div class="item_text_p">Color: <span>Red</span></div>\n<div class="item_text_p">Size: <span> Xll</span></div></div></div>\n<div class="unit_price">'+n+'</div>\n<div class="quantity"><input class="text_cart_item1" type="text" value="'+d+'" maxlength="5"></div>\n<div class="shipping">free</div>\n<div class="subtotal">$'+o+'</div>\n<div class="action">\n<i class="fa fa-times-circle" aria-hidden="true"></i>\n   </div></div>'});$(this.root).append(u)},ShoppingCart.prototype.delete=function(t){document.getElementById(t).remove()};