document.addEventListener("DOMContentLoaded",(()=>{function e(){const e=document.querySelector(".basket-cart"),t=document.querySelector(".basket--info"),a=document.querySelector(".basket-delivery"),r=document.querySelector(".basket-form");e.children.length>0?(t.classList.add("displayoff"),a.classList.add("displayon"),r.classList.add("displayon")):(t.classList.remove("displayoff"),a.classList.remove("displayon"),r.classList.remove("displayon"))}function t(){const e=document.querySelector(".star-cart"),t=document.querySelector(".star--info");e.children.length>0?t.classList.add("displayoff"):t.classList.remove("displayoff")}function a(){const e=document.querySelectorAll(".basket__element");let t=0,a=document.querySelector(".delivery__price");e.forEach((function(e){const a=parseInt(e.querySelector(".basket__element__info__money__block__text").innerText);t+=a})),a.innerText=t}window.addEventListener("click",(function(e){"enter"===e.target.dataset.welcome&&(document.querySelector(".welcome").classList.add("displayon"),document.querySelector('[data-welcome = "welcome"]').classList.add("displayon")),"register"===e.target.dataset.welcome&&(document.querySelector('[data-welcome = "welcome"]').classList.remove("displayon"),document.querySelector('[data-register = "register"]').classList.add("displayon")),"back"===e.target.dataset.register&&(document.querySelector('[data-welcome = "welcome"]').classList.add("displayon"),document.querySelector('[data-register = "register"]').classList.remove("displayon"))})),window.addEventListener("click",(function(e){"register"===e.target.dataset.off&&(e.target.closest('[data-register = "register"]').classList.remove("displayon"),document.querySelector(".welcome").classList.remove("displayon")),"welcome"===e.target.dataset.off&&(e.target.closest('[data-welcome = "welcome"]').classList.remove("displayon"),document.querySelector(".welcome").classList.remove("displayon"))})),document.querySelector(".popylar__title")&&document.querySelectorAll("[data-info = 'popylar']").forEach((function(e){if("Популярный товар"===e.innerText){let t=e.closest("[data-id]");t=t.classList.remove("displayoff")}})),document.querySelector("[data-sales = 'sales']")&&document.querySelectorAll("[data-info = 'sales']").forEach((function(e){if("Акция"===e.innerText){let t=e.closest("[data-id]");t=t.classList.remove("displayoff")}})),document.querySelector("[data-list= 'catalog-list']")&&document.querySelectorAll("[data-id]").forEach((function(e){e.classList.remove("displayoff")})),document.querySelectorAll("[data-info]").forEach((function(e){if("Акция"===e.innerText){let t=e.closest(".popylar__inner__element");t=t.querySelector("[data-info = 'sales']").classList.remove("displayoff")}if("Новинка"===e.innerText){let t=e.closest(".popylar__inner__element");t=t.querySelector("[data-info = 'news']").classList.remove("displayoff")}if("Популярный товар"===e.innerText){let t=e.closest(".popylar__inner__element");t=t.querySelector("[data-info = 'popylar']").classList.remove("displayoff")}})),window.addEventListener("click",(function(e){let t;"info"===e.target.dataset.info&&(t=e.target.closest(".popylar__inner__element").querySelector("#popylar__form__display"),t.classList.add("displayon")),"infooff"===e.target.dataset.infooff&&e.target.closest(".popylar__inner__element").querySelector("#popylar__form__display").classList.remove("displayon")})),window.addEventListener("click",(function(e){let t,a;if("plus"===e.target.dataset.action||"minus"===e.target.dataset.action){const r=e.target.closest(".popylar__inner__element__block");t=r.querySelector("[data-content]"),a=r.querySelector("[data-number]")}"plus"===e.target.dataset.action&&parseInt(t.innerText)<parseInt(a.innerText)&&(t.innerText=++t.innerText),"minus"===e.target.dataset.action&&parseInt(t.innerText)>1&&(t.innerText=--t.innerText)})),window.addEventListener("click",(function(e){let t,a;if("img"===e.target.dataset.img){const r=e.target.closest("picture").querySelector("[srcset]").getAttribute("srcset"),n=e.target.getAttribute("src"),s=e.target.closest(".popylar__form--inner__block");t=s.querySelector("#img-active").src=n,a=s.querySelector(".popylar__form--inner__block__img__title").querySelector("[srcset]").srcset=r}})),window.addEventListener("click",(function(e){if("basket__on"===e.target.dataset.basket){let t=e.target.closest(".nav__top--btn__img__basket").querySelector(".nav__top--btn__img__basket__block");t.classList.contains("displayon")?t.classList.remove("displayon"):t.classList.add("displayon"),staroff=document.querySelector(".nav__top--btn__img__star__block").classList.remove("displayon")}if("star__on"===e.target.dataset.basket){let t=e.target.closest(".nav__top--btn__img__basket").querySelector(".nav__top--btn__img__star__block");t.classList.contains("displayon")?t.classList.remove("displayon"):t.classList.add("displayon"),basketoff=document.querySelector(".nav__top--btn__img__basket__block").classList.remove("displayon")}})),window.addEventListener("click",(function(e){"basket__off"===e.target.dataset.basket&&e.target.closest(".nav__top--btn__img__basket__block").classList.remove("displayon"),"star__off"===e.target.dataset.basket&&e.target.closest(".nav__top--btn__img__star__block").classList.remove("displayon")}));const r=document.querySelector(".basket-cart"),n=document.querySelector(".star-cart");function s(){const e=document.querySelector(".burger__basket-cart"),t=document.querySelector(".burger__star__cart");if(e.children.length>0){const e=document.querySelector(".burger__basket__form");e.querySelector(".burger__basket__cart__none").classList.remove("displayon"),e.querySelector(".burger__basket-cart").classList.add("displayon"),e.querySelector(".burger__basket-delivery").classList.add("displayon"),e.querySelector(".burger__basket-form").classList.add("displayon")}else{const e=document.querySelector(".burger__basket__form");e.querySelector(".burger__basket__cart__none").classList.add("displayon"),e.querySelector(".burger__basket-cart").classList.remove("displayon"),e.querySelector(".burger__basket-delivery").classList.remove("displayon"),e.querySelector(".burger__basket-form").classList.remove("displayon")}if(t.children.length>0){const e=document.querySelector(".burger__star__form");e.querySelector(".burger__star__cart__none").classList.remove("displayon"),e.querySelector(".burger__star__cart").classList.add("displayon")}else{const e=document.querySelector(".burger__star__form");e.querySelector(".burger__star__cart__none").classList.add("displayon"),e.querySelector(".burger__star__cart").classList.remove("displayon")}}function _(){let e,t=0,a=document.querySelector(".burger__delivery__price");document.querySelector(".burger__basket-cart").querySelectorAll(".burger__basket-cart__element").forEach((function(a){e=parseInt(a.querySelector('[data-basket="pricy"]').innerText),t+=e})),a.innerText=t}function o(){const e=document.querySelector(".basket-cart").innerHTML.trim();0!==e.length?localStorage.setItem("cartBasket",e):(localStorage.removeItem("cartBasket"),localStorage.removeItem("mobileCartBasket"))}function l(){const e=document.querySelector(".star-cart").innerHTML.trim();0!==e.length?localStorage.setItem("cartStar",e):(localStorage.removeItem("cartStar"),localStorage.removeItem("mobileCartStar"))}function c(){const e=document.querySelector(".burger__basket-cart").innerHTML.trim();0!==e.length?localStorage.setItem("mobileCartBasket",e):(localStorage.removeItem("mobileCartBasket"),localStorage.removeItem("cartBasket"))}function i(){const e=document.querySelector(".burger__star__cart").innerHTML.trim();0!==e.length?localStorage.setItem("mobileCartStar",e):(localStorage.removeItem("mobileCartStar"),localStorage.removeItem("cartStar"))}window.addEventListener("click",(function(s){if("basket__popylar"===s.target.dataset.basket){const t=s.target.closest(".popylar__inner__element"),n={id:t.dataset.id,img:t.querySelector(".popylar__inner__element__img__element").getAttribute("src"),puy:t.querySelector(".popylar__inner__element__many").innerText,title:t.querySelector(".popylar__inner__element__info").innerText,col:t.querySelector(".col").innerText,number:t.querySelector(".product__block__btn__wrapper__element__content").innerText},_=r.querySelector(`[data-id = "${n.id}"]`);if(_){const e=_.querySelector("[data-content]"),t=_.querySelector(".basket__element__info__money__block__text"),a=_.querySelector(".basket__element__info__number");parseInt(n.col)>parseInt(e.innerText)&&parseInt(e.innerText)+parseInt(n.number)<=parseInt(a.innerText)&&(e.innerText=parseInt(e.innerText)+parseInt(n.number),t.innerText=parseInt(e.innerText)*parseInt(n.puy))}else{t.querySelector("[data-basket]").classList.add("active-svg");const e=`  <div class="basket__element" data-id="${n.id}">\n                                        <svg data-off="offbasket" id="kabinet" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"\n                                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490"\n                                            style="enable-background: new 0 0 490 490" xml:space="preserve">\n                                            <polygon\n                                            points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 ">\n                                            </polygon>\n                                        </svg>\n                                        <img class="basket__element__img" src="${n.img}" alt="">\n                                        <div class="basket__element__info">\n                                            <span class="basket__element__info__text">${n.title}</span>\n                                            <div class="basket__element__info__number__block">\n                                                <span> Имеется в наличии:</span><span class="basket__element__info__number">${n.col}</span><span>шт.</span>\n                                            </div>\n                                            <div class="basket__element__info__number__block">\n                                                <span>Цена за шт. / </span><span class="basket__element__info__number" data-basket = "pricyCart"> ${n.puy} </span><span></span>\n                                            </div>\n                                            <div class="basket__element__info__money">\n                                                <div class="basket__element__info__money__click">\n                                                    <span class="basket__element__info__money__click__element" data-action="minus__basket">-</span>\n                                                    <span class="basket__element__info__money__click__number" data-content="content__bastet">${n.number}</span>\n                                                    <span class="basket__element__info__money__click__element"data-action="plus__basket">+</span>\n                                                </div>\n                                                <div class="basket__element__info__money__block">\n                                                    <div>\n                                                        <span>Итого:</span>\n                                                        <span class="basket__element__info__money__block__text">${parseInt(n.puy)*parseInt(n.number)}</span>\n                                                        <span>руб.</span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>`;r.insertAdjacentHTML("beforeend",e)}e(),a(),o()}if("star-popylar"===s.target.dataset.star){const e=s.target.closest(".popylar__inner__element"),r={id:e.dataset.id,img:e.querySelector(".popylar__inner__element__img__element").getAttribute("src"),puy:e.querySelector(".popylar__inner__element__many").innerText,title:e.querySelector(".popylar__inner__element__info").innerText,col:e.querySelector(".col").innerText,number:e.querySelector(".product__block__btn__wrapper__element__content").innerText},_=n.querySelector(`[data-id = "${r.id}"]`);if(_){const e=_.querySelector("[data-content]"),t=_.querySelector(".star__element__info__number"),a=_.querySelector(".star__element__info__money__block__text");parseInt(r.col)>parseInt(e.innerText)&&parseInt(e.innerText)+parseInt(r.number)<=parseInt(t.innerText)&&(e.innerText=parseInt(e.innerText)+parseInt(r.number),a.innerText=parseInt(e.innerText)*parseInt(r.puy))}else{e.querySelector("[data-star]").classList.add("active-svg");const t=`  <div class="star__element" data-id="${r.id}">\n                                        <svg data-off="offstar" id="kabinet" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"\n                                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490"\n                                            style="enable-background: new 0 0 490 490" xml:space="preserve">\n                                            <polygon\n                                            points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 ">\n                                            </polygon>\n                                        </svg>\n                                        <img class="star__element__img" src="${r.img}" alt="">\n                                        <div class="star__element__info">\n                                            <span class="star__element__info__text">${r.title}</span>\n                                            <div class="star__element__info__number__block">\n                                                <span> Имеется в наличии:</span><span class="star__element__info__number">${r.col}</span><span>шт.</span>\n                                            </div>\n                                            <div class="basket__element__info__number__block">\n                                                <span>Цена за шт. / </span><span class="star__element__info__number" data-star = "pricyCart"> ${r.puy} </span><span></span>\n                                            </div>\n                                            <div class="star__element__info__money">\n                                                <div class="star__element__info__money__click">\n                                                    <span class="star__element__info__money__click__element" data-action="minus__star">-</span>\n                                                    <span class="star__element__info__money__click__number" data-content="content__bastet">${r.number}</span>\n                                                    <span class="star__element__info__money__click__element"data-action="plus__star">+</span>\n                                                </div>\n                                                <div class="star__element__info__money__block">\n                                                    <div>\n                                                        <span>Итого:</span>\n                                                        <span class="star__element__info__money__block__text">${parseInt(r.puy)*parseInt(r.number)}</span>\n                                                        <span>руб.</span>\n                                                    </div>\n                                                    <svg data-basket="basket" width="21" height="20" viewBox="0 0 21 20" fill="#6B6B6B" xmlns="http://www.w3.org/2000/svg"> <path d="M17.799 16.0206H4.30429C4.12027 16.0206 3.93625 15.8979 3.81357 15.7752C3.69089 15.6525 3.69089 15.4072 3.75223 15.2232L4.91768 12.2789L3.75223 1.29903H0.010498V0.0722351H4.30429C4.61098 0.0722351 4.85634 0.317594 4.91768 0.624293L6.14448 12.2789C6.14448 12.4015 6.14448 12.4629 6.08314 12.5856L5.22438 14.7938H18.4124L17.799 16.0206Z" /> <path d="M5.6538 12.9536L5.40844 11.7268L19.6393 8.78251V3.75264H4.91772V2.52585H20.2527C20.6207 2.52585 20.8661 2.77121 20.8661 3.13925V9.27323C20.8661 9.57993 20.6821 9.82529 20.3754 9.88663L5.6538 12.9536Z" /> <path d="M18.4126 19.701C17.0631 19.701 15.959 18.5969 15.959 17.2474C15.959 15.8979 17.0631 14.7938 18.4126 14.7938C19.7621 14.7938 20.8662 15.8979 20.8662 17.2474C20.8662 18.5969 19.7621 19.701 18.4126 19.701ZM18.4126 16.0206C17.7378 16.0206 17.1858 16.5726 17.1858 17.2474C17.1858 17.9221 17.7378 18.4742 18.4126 18.4742C19.0873 18.4742 19.6394 17.9221 19.6394 17.2474C19.6394 16.5726 19.0873 16.0206 18.4126 16.0206Z" /> <path d="M3.6909 19.701C2.34142 19.701 1.2373 18.5969 1.2373 17.2474C1.2373 15.8979 2.34142 14.7938 3.6909 14.7938C5.04037 14.7938 6.14449 15.8979 6.14449 17.2474C6.14449 18.5969 5.04037 19.701 3.6909 19.701ZM3.6909 16.0206C3.01616 16.0206 2.4641 16.5726 2.4641 17.2474C2.4641 17.9221 3.01616 18.4742 3.6909 18.4742C4.36563 18.4742 4.91769 17.9221 4.91769 17.2474C4.91769 16.5726 4.36563 16.0206 3.6909 16.0206Z" /> </svg>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>`;n.insertAdjacentHTML("beforeend",t)}t(),a(),l()}})),window.addEventListener("click",(function(e){let t,r,n,s;if("plus__basket"!==e.target.dataset.action&&"minus__basket"!==e.target.dataset.action||(t=e.target.closest(".basket__element__info__money").querySelector(".basket__element__info__money__click__number"),r=e.target.closest(".basket__element__info").querySelector(".basket__element__info__number")),"plus__star"!==e.target.dataset.action&&"minus__star"!==e.target.dataset.action||(n=e.target.closest(".star__element__info__money").querySelector(".star__element__info__money__click__number"),s=e.target.closest(".star__element__info").querySelector(".star__element__info__number")),"plus__basket"===e.target.dataset.action&&parseInt(r.innerText)>parseInt(t.innerText)&&(t.innerText=++t.innerText),"minus__basket"===e.target.dataset.action&&parseInt(t.innerText)>1&&(t.innerText=--t.innerText),"plus__star"===e.target.dataset.action&&parseInt(s.innerText)>parseInt(n.innerText)&&(n.innerText=++n.innerText),"minus__star"===e.target.dataset.action&&parseInt(n.innerText)>1&&(n.innerText=--n.innerText),"plus__basket"===e.target.dataset.action||"minus__basket"===e.target.dataset.action){const t=e.target.closest(".basket__element__info__money__click").querySelector('[data-content="content__bastet"]'),r=e.target.closest(".basket__element__info").querySelector('[data-basket = "pricyCart"]');e.target.closest(".basket__element__info__money").querySelector(".basket__element__info__money__block__text").innerText=parseInt(t.innerText)*parseInt(r.innerText),a(),o()}if("plus__star"===e.target.dataset.action||"minus__star"===e.target.dataset.action){const t=e.target.closest(".star__element__info__money__click").querySelector('[data-content="content__bastet"]'),r=e.target.closest(".star__element__info").querySelector('[data-star="pricyCart"]');e.target.closest(".star__element__info__money").querySelector(".star__element__info__money__block__text").innerText=parseInt(t.innerText)*parseInt(r.innerText),a(),l()}})),window.addEventListener("click",(function(r){if("offbasket"===r.target.dataset.off){const t=r.target.closest(".basket__element").getAttribute("data-id");document.querySelector(".popylar__inner")&&document.querySelector(".popylar__inner").querySelector(`[data-id = "${t}"]`)&&document.querySelector(".popylar__inner").querySelector(`[data-id = "${t}"]`).querySelector("[data-basket]").classList.remove("active-svg"),r.target.closest(".basket__element").remove(),e(),a(),o()}if("offstar"===r.target.dataset.off){const e=r.target.closest(".star__element").getAttribute("data-id");document.querySelector(".popylar__inner")&&document.querySelector(".popylar__inner").querySelector(`[data-id = "${e}"]`)&&document.querySelector(".popylar__inner").querySelector(`[data-id = "${e}"]`).querySelector("[data-star]").classList.remove("active-svg"),r.target.closest(".star__element").remove(),t(),l()}})),window.addEventListener("click",(function(r){const n=document.querySelector(".basket-cart");if("basket"===r.target.dataset.basket){const s=r.target.closest(".star__element").getAttribute("data-id"),_=r.target.closest(".star__element"),c={id:_.getAttribute("data-id"),img:_.querySelector(".star__element__img").getAttribute("src"),title:_.querySelector(".star__element__info__text").innerText,col:_.querySelector(".star__element__info__money__click__number").innerText,maxcol:_.querySelector(".star__element__info__number").innerText,price:_.querySelector(".star__element__info__money__block__text").innerText,pricycart:_.querySelector('[data-star="pricyCart"]').innerText},i=n.querySelector(`[data-id = "${c.id}"]`);if(i){const e=n.querySelector(".basket__element__info__money__block__text"),t=n.querySelector(".basket__element__info__money__click__number");parseInt(c.col)+parseInt(t.innerText)<=parseInt(c.maxcol)?(e.innerText=parseInt(c.price)+parseInt(e.innerText),t.innerText=parseInt(c.col)+parseInt(t.innerText),document.querySelector(".popylar__inner")&&document.querySelector(".popylar__inner").querySelector(`[data-id = "${s}"]`)&&(document.querySelector(".popylar__inner").querySelector(`[data-id = "${s}"]`).querySelector("[data-star]").classList.remove("active-svg"),document.querySelector(".popylar__inner").querySelector(`[data-id = "${s}"]`).querySelector("[data-basket]").classList.add("active-svg")),_.remove(),console.log(i),console.log(s)):console.log("максимальное количество товара в корзине")}else{const e=`<div class="basket__element" data-id="${c.id}">\n            <svg data-off="offbasket" id="kabinet" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"\n                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490"\n                style="enable-background: new 0 0 490 490" xml:space="preserve">\n                <polygon\n                points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 ">\n                </polygon>\n            </svg>\n            <img class="basket__element__img" src="${c.img}" alt="">\n            <div class="basket__element__info">\n                <span class="basket__element__info__text">${c.title}</span>\n                <div class="basket__element__info__number__block">\n                    <span> Имеется в наличии:</span><span class="basket__element__info__number">${c.maxcol}</span><span>шт.</span>\n                </div>\n                <div class="basket__element__info__number__block">\n                    <span>Цена за шт. / </span><span class="basket__element__info__number" data-basket = "pricyCart"> ${c.pricycart} </span><span></span>\n                </div>\n                <div class="basket__element__info__money">\n                    <div class="basket__element__info__money__click">\n                        <span class="basket__element__info__money__click__element" data-action="minus__basket">-</span>\n                        <span class="basket__element__info__money__click__number" data-content="content__bastet">${c.col}</span>\n                        <span class="basket__element__info__money__click__element"data-action="plus__basket">+</span>\n                    </div>\n                    <div class="basket__element__info__money__block">\n                        <div>\n                            <span>Итого:</span>\n                            <span class="basket__element__info__money__block__text">${parseInt(c.price)}</span>\n                            <span>руб.</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>`;n.insertAdjacentHTML("beforeend",e),_.remove()}e(),t(),a(),o(),l()}})),window.addEventListener("click",(function(e){if("click"===e.target.dataset.delivery){let t=e.target.closest('[data-delivery = "display"]').querySelector(".delivery__info");t.classList.contains("displayon")?t.classList.remove("displayon"):t.classList.add("displayon")}})),window.addEventListener("click",(function(e){"burger"===e.target.dataset.burger&&document.querySelector(".burger-form").classList.add("burger__on")})),window.addEventListener("click",(function(e){"burger"===e.target.dataset.off&&document.querySelector(".burger-form").classList.remove("burger__on")})),window.addEventListener("click",(function(e){"корзина"===e.target.dataset.burger&&(document.querySelector(".burger__basket__inner").classList.add("burger__on"),s()),"избранное"===e.target.dataset.burger&&(document.querySelector(".burger__star__inner").classList.add("burger__on"),s())})),window.addEventListener("click",(function(e){"burger__basket__off"===e.target.dataset.basket&&e.target.closest(".burger__basket__inner").classList.remove("burger__on"),"burger__star__off"===e.target.dataset.basket&&e.target.closest(".burger__star__inner").classList.remove("burger__on")})),window.addEventListener("click",(function(e){let t,a;if("basket__popylar"!==e.target.dataset.basket&&"star-popylar"!==e.target.dataset.star||(t=e.target.closest(".popylar__inner__element"),a={id:t.getAttribute("data-id"),img:t.querySelector(".popylar__inner__element__img__element").getAttribute("src"),price:parseInt(t.querySelector(".popylar__inner__element__many").innerText),title:t.querySelector(".popylar__inner__element__info").innerText,wrappercol:t.querySelector(".product__block__btn__wrapper__element__content").innerText,col:t.querySelector(".col").innerText}),"basket__popylar"===e.target.dataset.basket){let e=document.querySelector(".burger__basket-cart");const t=e.querySelector(`[data-id = "${a.id}"]`);if(document.querySelector(".popylar__inner")&&document.querySelector(".popylar__inner").querySelector(`[data-id="${a.id}"]`).querySelector("[data-basket='basket__popylar']").classList.add("active-svg"),t){let e,r=t.querySelector('[data-wrappercol = "burger__wrappercol"]');parseInt(r.innerText)+parseInt(a.wrappercol)<=a.col&&(r.innerText=parseInt(r.innerText)+parseInt(a.wrappercol)),e=t.querySelector('[data-basket="pricy"]'),e.innerText=parseInt(r.innerText)*parseInt(a.price)}else{const t=`<div class="burger__basket-cart__element" data-id = "${a.id}">\n                                    <svg data-off = "basket" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"\n                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490"\n                                        style="enable-background:new 0 0 490 490;" xml:space="preserve">\n                                        <polygon data-off = "basket"\n                                            points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 ">\n                                        </polygon>\n                                    </svg>\n                                    <img src="${a.img}" alt="">\n                                    <div class="burger__basket-cart__info">\n                                        <span>${a.title}</span>\n                                        <span>Цена за шт. / <span data-pricy="basket">${a.price}</span> руб.</span>\n                                        <div class="burder__col">\n                                            <div class="burger__wrapper">\n                                                <span class="burger__wrapper__btn" data-click = "basketminus">-</span>\n                                                <span data-wrappercol = "burger__wrappercol">${a.wrappercol}</span>\n                                                <span class="burger__wrapper__btn" data-click = "basketplus">+</span>\n                                            </div>\n                                            <span>В наличии <span data-col>${a.col}</span> шт.</span>\n                                        </div>\n                                        <span>Общая цена: <span data-basket = "pricy">${parseInt(a.price)*parseInt(a.wrappercol)}</span> руб.</span>\n                                    </div>\n                                </div>`;e.insertAdjacentHTML("beforeend",t)}s(),_(),c()}if("star-popylar"===e.target.dataset.star){let e=document.querySelector(".burger__star__cart");const t=e.querySelector(`[data-id = "${a.id}"]`);if(document.querySelector(".popylar__inner").querySelector(`[data-id="${a.id}"]`).querySelector("[data-star='star-popylar']").classList.add("active-svg"),t){let e=t.querySelector('[data-wrappercol = "burger__wrappercol"]');parseInt(e.innerText)+parseInt(a.wrappercol)<=a.col&&(e.innerText=parseInt(e.innerText)+parseInt(a.wrappercol))}else{const t=`<div class="burger__star-cart__element" data-id="${a.id}">\n                            <svg data-off="star" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"\n                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490"\n                                style="enable-background:new 0 0 490 490;" xml:space="preserve">\n                                <polygon data-off="star"\n                                    points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 ">\n                                </polygon>\n                            </svg>\n                            <img data-star="img" src="${a.img}" alt="" />\n                            <div class="burger__star-cart__info">\n                                <span data-star="title">${a.title}</span>\n                                <span>Цена за шт. / <span data-pricy="star">${a.price}</span> руб.</span>\n                                <div class="burder__col">\n                                    <div class="burger__wrapper">\n                                        <span class="burger__wrapper__btn" data-click="starminus">-</span>\n                                        <span data-wrappercol="burger__wrappercol">${a.wrappercol}</span>\n                                        <span class="burger__wrapper__btn" data-click="starplus">+</span>\n                                    </div>\n                                    <span>В наличии <span data-col>${a.col}</span> шт.</span>\n                                </div>\n                                <span>Итого <span data-pricyCartFinished = "star">${a.price*parseInt(a.wrappercol)}</span> руб.</span>\n                                <p class="burger__star__basket" data-basket="star__basket">\n                                    Добавить в корзину\n                                </p>\n                            </div>\n                        </div>`;e.insertAdjacentHTML("beforeend",t)}s(),i()}})),window.addEventListener("click",(function(e){if("basket"===e.target.dataset.off){const t=e.target.closest(".burger__basket-cart__element").getAttribute("data-id");document.querySelector(`.popylar__inner__element[data-id = "${t}"]`)&&document.querySelector(".popylar__inner").querySelector(`[data-id = "${t}"]`).querySelector("[data-basket]").classList.remove("active-svg"),e.target.closest(".burger__basket-cart__element").remove(),s(),_(),c()}if("star"===e.target.dataset.off){const t=e.target.closest(".burger__star-cart__element").getAttribute("data-id");document.querySelector(`.popylar__inner__element[data-id = "${t}"]`)&&document.querySelector(".popylar__inner").querySelector(`[data-id = "${t}"]`).querySelector("[data-star]").classList.remove("active-svg"),e.target.closest(".burger__star-cart__element").remove(),s(),i()}})),window.addEventListener("click",(function(e){if("star__basket"===e.target.dataset.basket){let t=e.target.closest(".burger__star-cart__element");const a={id:t.getAttribute("data-id"),img:t.querySelector('[data-star = "img"]').getAttribute("src"),title:t.querySelector('[data-star = "title"]').innerText,col:t.querySelector('[data-wrappercol="burger__wrappercol"]').innerText,maxcol:t.querySelector("[data-col]").innerText,pricy:t.querySelector('[data-pricy = "star"]').innerText};let r=document.querySelector(".burger__basket-cart");const n=r.querySelector(`[data-id= "${a.id}"]`);if(n){let e=n.querySelector('[data-basket="pricy"]'),r=n.querySelector('[data-wrappercol="burger__wrappercol"]');parseInt(r.innerText)+parseInt(a.col)<=a.maxcol&&(r.innerText=parseInt(r.innerText)+parseInt(a.col),e.innerText=parseInt(a.col)*parseInt(a.pricy)+parseInt(e.innerText),document.querySelector(`.popylar__inner__element[data-id = "${a.id}"]`)&&document.querySelector(`.popylar__inner__element[data-id = "${a.id}"]`).querySelector("[data-star]").classList.remove("active-svg"),t.remove())}else{document.querySelector(`.popylar__inner__element[data-id = "${a.id}"]`)&&(document.querySelector(`.popylar__inner__element[data-id = "${a.id}"]`).querySelector("[data-star]").classList.remove("active-svg"),document.querySelector(`.popylar__inner__element[data-id = "${a.id}"]`).querySelector("[data-basket]").classList.add("active-svg"));const e=`<div class="burger__basket-cart__element" data-id = "${a.id}">\n                                    <svg data-off = "basket" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"\n                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490"\n                                        style="enable-background:new 0 0 490 490;" xml:space="preserve">\n                                        <polygon data-off = "basket"\n                                            points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 ">\n                                        </polygon>\n                                    </svg>\n                                    <img src="${a.img}" alt="">\n                                    <div class="burger__basket-cart__info">\n                                        <span>${a.title}</span>\n                                        <span>Цена за шт. / <span data-pricy="basket">${a.pricy}</span> руб.</span>\n                                        <div class="burder__col">\n                                            <div class="burger__wrapper">\n                                                <span class="burger__wrapper__btn" data-click = "basketminus">-</span>\n                                                <span data-wrappercol = "burger__wrappercol">${a.col}</span>\n                                                <span class="burger__wrapper__btn" data-click = "basketplus">+</span>\n                                            </div>\n                                            <span>В наличии <span data-col>${a.maxcol}</span> шт.</span>\n                                        </div>\n                                        <span>Общая цена: <span data-basket = "pricy">${parseInt(a.pricy)*parseInt(a.col)}</span> руб.</span>\n                                    </div>\n                                </div>`;r.insertAdjacentHTML("beforeend",e),t.remove()}s(),_(),i(),c()}})),window.addEventListener("click",(function(e){if("starplus"===e.target.dataset.click||"starminus"===e.target.dataset.click){let t=e.target.closest(".burger__wrapper").querySelector('[data-wrappercol="burger__wrappercol"]');const a=e.target.closest(".burder__col").querySelector("[data-col]");"starplus"===e.target.dataset.click&&parseInt(t.innerText)<parseInt(a.innerText)&&(t.innerText=++t.innerText),"starminus"===e.target.dataset.click&&parseInt(t.innerText)>1&&(t.innerText=--t.innerText)}})),window.addEventListener("click",(function(e){if("basketplus"===e.target.dataset.click||"basketminus"===e.target.dataset.click){let t=e.target.closest(".burger__wrapper").querySelector('[data-wrappercol="burger__wrappercol"]');const a=e.target.closest(".burder__col").querySelector("[data-col]");"basketplus"===e.target.dataset.click&&parseInt(t.innerText)<parseInt(a.innerText)&&(t.innerText=++t.innerText),"basketminus"===e.target.dataset.click&&parseInt(t.innerText)>1&&(t.innerText=--t.innerText)}})),window.addEventListener("click",(function(e){if("starplus"===e.target.dataset.click||"starminus"===e.target.dataset.click){const t=e.target.closest(".burger__star-cart__info").querySelector('[data-pricy="star"]'),a=e.target.closest(".burger__wrapper").querySelector('[data-wrappercol="burger__wrappercol"]');e.target.closest(".burger__star-cart__info").querySelector('[data-pricycartfinished="star"]').innerText=parseInt(t.innerText)*parseInt(a.innerText)}})),window.addEventListener("click",(function(e){if("basketplus"===e.target.dataset.click||"basketminus"===e.target.dataset.click){const t=e.target.closest(".burger__basket-cart__element").querySelector('[data-pricy="basket"]'),a=e.target.closest(".burger__wrapper").querySelector('[data-wrappercol="burger__wrappercol"]');e.target.closest(".burger__basket-cart__element").querySelector('[data-basket="pricy"]').innerText=parseInt(t.innerText)*parseInt(a.innerText)}_()})),null!==localStorage.getItem("cartBasket")&&(document.querySelector(".basket-cart").innerHTML=localStorage.getItem("cartBasket")),document.querySelectorAll(".basket__element").forEach((function(e){const t=e.dataset.id;document.querySelector(`.popylar__inner__element[data-id = "${t}"]`)&&document.querySelector(`.popylar__inner__element[data-id = "${t}"]`).querySelector('[data-basket="basket__popylar"]').classList.add("active-svg")})),e(),a(),null!==localStorage.getItem("cartStar")&&(document.querySelector(".star-cart").innerHTML=localStorage.getItem("cartStar")),document.querySelectorAll(".star__element").forEach((function(e){const t=e.dataset.id;document.querySelector(`.popylar__inner__element[data-id = "${t}"]`)&&document.querySelector(`.popylar__inner__element[data-id = "${t}"]`).querySelector('[data-star="star-popylar"]').classList.add("active-svg")})),t(),a(),null!==localStorage.getItem("mobileCartBasket")&&(document.querySelector(".burger__basket-cart").innerHTML=localStorage.getItem("mobileCartBasket"),document.querySelectorAll(".burger__basket-cart__element").forEach((function(e){const t=e.dataset.id;document.querySelector(`.popylar__inner__element[data-id = "${t}"]`)&&document.querySelector(`.popylar__inner__element[data-id = "${t}"]`).querySelector('[data-basket="basket__popylar"]').classList.add("active-svg")}))),e(),a(),null!==localStorage.getItem("mobileCartStar")&&(document.querySelector(".burger__star__cart").innerHTML=localStorage.getItem("mobileCartStar")),document.querySelectorAll(".burger__star-cart__element").forEach((function(e){const t=e.dataset.id;document.querySelector(`.popylar__inner__element[data-id = "${t}"]`)&&document.querySelector(`.popylar__inner__element[data-id = "${t}"]`).querySelector('[data-star="star-popylar"]').classList.add("active-svg")})),e(),a()}));