document.addEventListener('DOMContentLoaded', () => {
    // Личный кабинет
    // Открытие формы вход и регистрация
    window.addEventListener('click', function (event) {
        // открытие скрытой формы вход
        if (event.target.dataset.welcome === "enter") {
            const display = document.querySelector('.welcome').classList.add('displayon')
            const welcome = document.querySelector('[data-welcome = "welcome"]').classList.add('displayon');
        }

        // открытие скрытой формы регистрация
        if (event.target.dataset.welcome === "register") {
            const welcome = document.querySelector('[data-welcome = "welcome"]').classList.remove('displayon');
            const register = document.querySelector('[data-register = "register"]').classList.add('displayon');
        };
        // возврат формы с регистрации на вход
        if (event.target.dataset.register === "back") {
            const welcome = document.querySelector('[data-welcome = "welcome"]').classList.add('displayon');
            const register = document.querySelector('[data-register = "register"]').classList.remove('displayon');
        };
    });
    // Закрытие формы вход и регистрация
    window.addEventListener('click', function (event) {
        if (event.target.dataset.off === "register") {
            event.target.closest('[data-register = "register"]').classList.remove('displayon');
            const display = document.querySelector('.welcome').classList.remove('displayon');
        };
        if (event.target.dataset.off === "welcome") {
            event.target.closest('[data-welcome = "welcome"]').classList.remove('displayon');
            const display = document.querySelector('.welcome').classList.remove('displayon');
        };
    });
    // Отображение акция, новинка, популярный товар
    function display() {

        if (document.querySelector(".popylar__title")) {
            const popylar = document.querySelectorAll("[data-info = 'popylar']");
            popylar.forEach(function (item) {
                if (item.innerText === "Популярный товар") {
                    let popylaron = item.closest('[data-id]');
                    popylaron = popylaron.classList.remove("displayoff")
                };
            });
        };

        if (document.querySelector("[data-sales = 'sales']")) {
            const popylar = document.querySelectorAll("[data-info = 'sales']");
            popylar.forEach(function (item) {
                if (item.innerText === "Акция") {
                    let popylaron = item.closest('[data-id]');
                    popylaron = popylaron.classList.remove("displayoff")
                };
            });
        };

        if (document.querySelector("[data-list= 'catalog-list']")) {
            const popylar = document.querySelectorAll("[data-id]");
            popylar.forEach(function (item) {
                item.classList.remove('displayoff')
            });
        };

        const sales = document.querySelectorAll("[data-info]");
        sales.forEach(function (item) {
            if (item.innerText === 'Акция') {
                let saleson = item.closest(".popylar__inner__element")
                saleson = saleson.querySelector("[data-info = 'sales']").classList.remove("displayoff")
            };
            if (item.innerText === 'Новинка') {
                let saleson = item.closest(".popylar__inner__element")
                saleson = saleson.querySelector("[data-info = 'news']").classList.remove("displayoff")
            };
            if (item.innerText === 'Популярный товар') {
                let saleson = item.closest(".popylar__inner__element")
                saleson = saleson.querySelector("[data-info = 'popylar']").classList.remove("displayoff")
            };
        });


    };
    display()
    // открытие и закрытие информации в корзине
    function infobasketcart() {
        const infobasket = document.querySelector(".basket-cart");
        const basket = document.querySelector('.basket--info');
        const delivery = document.querySelector('.basket-delivery');
        const basketform = document.querySelector('.basket-form');

        if (infobasket.children.length > 0) {
            basket.classList.add("displayoff");
            delivery.classList.add("displayon");
            basketform.classList.add("displayon");
        } else {
            basket.classList.remove("displayoff");
            delivery.classList.remove("displayon");
            basketform.classList.remove("displayon");
        };
    };
    // открытие и закрытие информации в избранном
    function infostarcart() {
        const infostar = document.querySelector(".star-cart");
        const star = document.querySelector('.star--info');

        if (infostar.children.length > 0) {
            star.classList.add("displayoff");
        } else {
            star.classList.remove("displayoff");
        };
    };
    // Работа общего счетчика "Итого" в корзине
    function fullprice() {
        const idcard = document.querySelectorAll(".basket__element");
        let idpricy = 0;
        let fullprice = document.querySelector('.delivery__price')
        idcard.forEach(function (item) {
            const pricecard = parseInt(item.querySelector('.basket__element__info__money__block__text').innerText);
            idpricy += pricecard;
        });
        fullprice.innerText = idpricy;
    };
    // categories__list открытие и закрытие скрытой формы каждого продукта
    window.addEventListener('click', function (event) {
        let info;
        if (event.target.dataset.info === 'info') {
            const infoclick = event.target.closest('.popylar__inner__element');
            info = infoclick.querySelector('#popylar__form__display');
            info.classList.add('displayon');
        };
        if (event.target.dataset.infooff === 'infooff') {
            event.target.closest('.popylar__inner__element').querySelector('#popylar__form__display').classList.remove("displayon");
        };
    });
    // categories__list работа Wrapper (увеличивание и уменьшение чисел)
    window.addEventListener('click', function (event) {
        let counter;
        let number;

        if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
            const counterWrapper = event.target.closest('.popylar__inner__element__block');
            counter = counterWrapper.querySelector('[data-content]');
            number = counterWrapper.querySelector('[data-number]');
        };

        if (event.target.dataset.action === 'plus') {
            if (parseInt(counter.innerText) < parseInt(number.innerText)) {
                counter.innerText = ++counter.innerText
            };
        };

        if (event.target.dataset.action === 'minus') {
            if (parseInt(counter.innerText) > 1) {
                counter.innerText = --counter.innerText
            };
        };
    });
    // categories__list работа переключателя картинок в сплавающем окне *Подробнее*
    window.addEventListener('click', function (event) {
        let popylar__img;
        let srcset;
        if (event.target.dataset.img === 'img') {
            const imgsrcset = event.target.closest('picture').querySelector('[srcset]').getAttribute('srcset');
            const src__img = event.target.getAttribute('src');
            const img = event.target.closest('.popylar__form--inner__block');
            popylar__img = img.querySelector("#img-active").src = src__img;
            srcset = img.querySelector(".popylar__form--inner__block__img__title").querySelector('[srcset]').srcset = imgsrcset;
        };
    });
    // открытие корзины и избранных товаров
    window.addEventListener('click', function (event) {
        if (event.target.dataset.basket === 'basket__on') {
            let basket = event.target.closest(".nav__top--btn__img__basket").querySelector(".nav__top--btn__img__basket__block");
            if (basket.classList.contains("displayon")) {
                basket.classList.remove("displayon");
            } else {
                basket.classList.add("displayon");
            };
            staroff = document.querySelector('.nav__top--btn__img__star__block').classList.remove("displayon")
        };

        if (event.target.dataset.basket === 'star__on') {
            let star = event.target.closest(".nav__top--btn__img__basket").querySelector(".nav__top--btn__img__star__block");
            if (star.classList.contains("displayon")) {
                star.classList.remove("displayon");
            } else {
                star.classList.add("displayon");
            };
            basketoff = document.querySelector('.nav__top--btn__img__basket__block').classList.remove("displayon");
        };
    });
    // закрытие корзины и избранных товаров
    window.addEventListener('click', function (click) {
        if (click.target.dataset.basket === 'basket__off') {
            const basket__off = click.target.closest('.nav__top--btn__img__basket__block').classList.remove('displayon')
        }
        if (click.target.dataset.basket === 'star__off') {
            const basket__off = click.target.closest('.nav__top--btn__img__star__block').classList.remove('displayon')
        }
    });
    // добавлените товаров в карзину и в избранное
    const cardbasket = document.querySelector('.basket-cart');
    const cardstar = document.querySelector('.star-cart');
    window.addEventListener('click', function (event) {
        // работа корзины
        if (event.target.dataset.basket === 'basket__popylar') {
            const card = event.target.closest('.popylar__inner__element');
            const cardinfo = {
                id: card.dataset.id,
                img: card.querySelector(".popylar__inner__element__img__element").getAttribute('src'),
                puy: card.querySelector(".popylar__inner__element__many").innerText,
                title: card.querySelector(".popylar__inner__element__info").innerText,
                col: card.querySelector(".col").innerText,
                number: card.querySelector(".product__block__btn__wrapper__element__content").innerText
            };
            const itemcardbasket = cardbasket.querySelector(`[data-id = "${cardinfo.id}"]`);
            if (itemcardbasket) {
                const number__basket = itemcardbasket.querySelector('[data-content]');
                const price__basket = itemcardbasket.querySelector('.basket__element__info__money__block__text');
                const col__basket = itemcardbasket.querySelector('.basket__element__info__number');
                if (parseInt(cardinfo.col) > parseInt(number__basket.innerText) && parseInt(number__basket.innerText) + parseInt(cardinfo.number) <= parseInt(col__basket.innerText)) {
                    number__basket.innerText = parseInt(number__basket.innerText) + parseInt(cardinfo.number);
                    price__basket.innerText = parseInt(number__basket.innerText) * parseInt(cardinfo.puy);
                };
            }
            else {
                const fill = card.querySelector('[data-basket]').classList.add('active-svg');
                const cardItemHTML = `  <div class="basket__element" data-id="${cardinfo.id}">
                                        <svg data-off="offbasket" id="kabinet" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490"
                                            style="enable-background: new 0 0 490 490" xml:space="preserve">
                                            <polygon
                                            points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 ">
                                            </polygon>
                                        </svg>
                                        <img class="basket__element__img" src="${cardinfo.img}" alt="">
                                        <div class="basket__element__info">
                                            <span class="basket__element__info__text">${cardinfo.title}</span>
                                            <div class="basket__element__info__number__block">
                                                <span> Имеется в наличии:</span><span class="basket__element__info__number">${cardinfo.col}</span><span>шт.</span>
                                            </div>
                                            <div class="basket__element__info__number__block">
                                                <span>Цена за шт. / </span><span class="basket__element__info__number" data-basket = "pricyCart"> ${cardinfo.puy} </span><span></span>
                                            </div>
                                            <div class="basket__element__info__money">
                                                <div class="basket__element__info__money__click">
                                                    <span class="basket__element__info__money__click__element" data-action="minus__basket">-</span>
                                                    <span class="basket__element__info__money__click__number" data-content="content__bastet">${cardinfo.number}</span>
                                                    <span class="basket__element__info__money__click__element"data-action="plus__basket">+</span>
                                                </div>
                                                <div class="basket__element__info__money__block">
                                                    <div>
                                                        <span>Итого:</span>
                                                        <span class="basket__element__info__money__block__text">${parseInt(cardinfo.puy) * parseInt(cardinfo.number)}</span>
                                                        <span>руб.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;
                // работа корзины
                cardbasket.insertAdjacentHTML('beforeend', cardItemHTML);
            };
            infobasketcart();
            fullprice();
            saveCartBasket()

        };

        // работа избранного
        if (event.target.dataset.star === 'star-popylar') {
            const card = event.target.closest('.popylar__inner__element');
            const cardinfo = {
                id: card.dataset.id,
                img: card.querySelector(".popylar__inner__element__img__element").getAttribute('src'),
                puy: card.querySelector(".popylar__inner__element__many").innerText,
                title: card.querySelector(".popylar__inner__element__info").innerText,
                col: card.querySelector(".col").innerText,
                number: card.querySelector(".product__block__btn__wrapper__element__content").innerText
            };

            const itemcardstar = cardstar.querySelector(`[data-id = "${cardinfo.id}"]`);


            if (itemcardstar) {
                const number__star = itemcardstar.querySelector('[data-content]');
                const col__star = itemcardstar.querySelector('.star__element__info__number');
                const price__star = itemcardstar.querySelector('.star__element__info__money__block__text');


                if (parseInt(cardinfo.col) > parseInt(number__star.innerText) && parseInt(number__star.innerText) + parseInt(cardinfo.number) <= parseInt(col__star.innerText)) {
                    number__star.innerText = parseInt(number__star.innerText) + parseInt(cardinfo.number);
                    price__star.innerText = parseInt(number__star.innerText) * parseInt(cardinfo.puy);
                };
            }
            else {
                const fill = card.querySelector('[data-star]').classList.add('active-svg');
                const cardItemHTML = `  <div class="star__element" data-id="${cardinfo.id}">
                                        <svg data-off="offstar" id="kabinet" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490"
                                            style="enable-background: new 0 0 490 490" xml:space="preserve">
                                            <polygon
                                            points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 ">
                                            </polygon>
                                        </svg>
                                        <img class="star__element__img" src="${cardinfo.img}" alt="">
                                        <div class="star__element__info">
                                            <span class="star__element__info__text">${cardinfo.title}</span>
                                            <div class="star__element__info__number__block">
                                                <span> Имеется в наличии:</span><span class="star__element__info__number">${cardinfo.col}</span><span>шт.</span>
                                            </div>
                                            <div class="basket__element__info__number__block">
                                                <span>Цена за шт. / </span><span class="star__element__info__number" data-star = "pricyCart"> ${cardinfo.puy} </span><span></span>
                                            </div>
                                            <div class="star__element__info__money">
                                                <div class="star__element__info__money__click">
                                                    <span class="star__element__info__money__click__element" data-action="minus__star">-</span>
                                                    <span class="star__element__info__money__click__number" data-content="content__bastet">${cardinfo.number}</span>
                                                    <span class="star__element__info__money__click__element"data-action="plus__star">+</span>
                                                </div>
                                                <div class="star__element__info__money__block">
                                                    <div>
                                                        <span>Итого:</span>
                                                        <span class="star__element__info__money__block__text">${parseInt(cardinfo.puy) * parseInt(cardinfo.number)}</span>
                                                        <span>руб.</span>
                                                    </div>
                                                    <svg data-basket="basket" width="21" height="20" viewBox="0 0 21 20" fill="#6B6B6B" xmlns="http://www.w3.org/2000/svg"> <path d="M17.799 16.0206H4.30429C4.12027 16.0206 3.93625 15.8979 3.81357 15.7752C3.69089 15.6525 3.69089 15.4072 3.75223 15.2232L4.91768 12.2789L3.75223 1.29903H0.010498V0.0722351H4.30429C4.61098 0.0722351 4.85634 0.317594 4.91768 0.624293L6.14448 12.2789C6.14448 12.4015 6.14448 12.4629 6.08314 12.5856L5.22438 14.7938H18.4124L17.799 16.0206Z" /> <path d="M5.6538 12.9536L5.40844 11.7268L19.6393 8.78251V3.75264H4.91772V2.52585H20.2527C20.6207 2.52585 20.8661 2.77121 20.8661 3.13925V9.27323C20.8661 9.57993 20.6821 9.82529 20.3754 9.88663L5.6538 12.9536Z" /> <path d="M18.4126 19.701C17.0631 19.701 15.959 18.5969 15.959 17.2474C15.959 15.8979 17.0631 14.7938 18.4126 14.7938C19.7621 14.7938 20.8662 15.8979 20.8662 17.2474C20.8662 18.5969 19.7621 19.701 18.4126 19.701ZM18.4126 16.0206C17.7378 16.0206 17.1858 16.5726 17.1858 17.2474C17.1858 17.9221 17.7378 18.4742 18.4126 18.4742C19.0873 18.4742 19.6394 17.9221 19.6394 17.2474C19.6394 16.5726 19.0873 16.0206 18.4126 16.0206Z" /> <path d="M3.6909 19.701C2.34142 19.701 1.2373 18.5969 1.2373 17.2474C1.2373 15.8979 2.34142 14.7938 3.6909 14.7938C5.04037 14.7938 6.14449 15.8979 6.14449 17.2474C6.14449 18.5969 5.04037 19.701 3.6909 19.701ZM3.6909 16.0206C3.01616 16.0206 2.4641 16.5726 2.4641 17.2474C2.4641 17.9221 3.01616 18.4742 3.6909 18.4742C4.36563 18.4742 4.91769 17.9221 4.91769 17.2474C4.91769 16.5726 4.36563 16.0206 3.6909 16.0206Z" /> </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;
                // работа корзины
                cardstar.insertAdjacentHTML('beforeend', cardItemHTML);
            };
            infostarcart();
            fullprice();
            saveCartStar()

        };

    });
    // работа Wrapper в избранном и в корзине
    window.addEventListener('click', function (event) {
        let wrapperbasket;
        let numberbasket;
        let wrapperstar;
        let numberstar;

        if (event.target.dataset.action === 'plus__basket' || event.target.dataset.action === 'minus__basket') {
            wrapperbasket = event.target.closest('.basket__element__info__money').querySelector(".basket__element__info__money__click__number");
            numberbasket = event.target.closest('.basket__element__info').querySelector(".basket__element__info__number");
        };

        if (event.target.dataset.action === 'plus__star' || event.target.dataset.action === 'minus__star') {
            wrapperstar = event.target.closest('.star__element__info__money').querySelector(".star__element__info__money__click__number");
            numberstar = event.target.closest('.star__element__info').querySelector(".star__element__info__number");
        };

        if (event.target.dataset.action === 'plus__basket') {
            if (parseInt(numberbasket.innerText) > parseInt(wrapperbasket.innerText)) {
                wrapperbasket.innerText = ++wrapperbasket.innerText;
            };

        };

        if (event.target.dataset.action === 'minus__basket') {
            if (parseInt(wrapperbasket.innerText) > 1) {
                wrapperbasket.innerText = --wrapperbasket.innerText;
            };
        };

        if (event.target.dataset.action === 'plus__star') {
            if (parseInt(numberstar.innerText) > parseInt(wrapperstar.innerText)) {
                wrapperstar.innerText = ++wrapperstar.innerText;
            };

        };

        if (event.target.dataset.action === 'minus__star') {
            if (parseInt(wrapperstar.innerText) > 1) {
                wrapperstar.innerText = --wrapperstar.innerText;
            };
        };

        if (event.target.dataset.action === 'plus__basket' || event.target.dataset.action === 'minus__basket') {
            const wrapperCol = event.target.closest('.basket__element__info__money__click').querySelector('[data-content="content__bastet"]')
            const wrapperCartPricy = event.target.closest('.basket__element__info').querySelector('[data-basket = "pricyCart"]')
            const cartPricy = event.target.closest('.basket__element__info__money').querySelector('.basket__element__info__money__block__text');
            cartPricy.innerText = parseInt(wrapperCol.innerText) * parseInt(wrapperCartPricy.innerText)
            fullprice();
            saveCartBasket()
        };

        if (event.target.dataset.action === 'plus__star' || event.target.dataset.action === 'minus__star') {
            const wrapperCol = event.target.closest('.star__element__info__money__click').querySelector('[data-content="content__bastet"]')
            const wrapperCartPricy = event.target.closest('.star__element__info').querySelector('[data-star="pricyCart"]')
            const cartPricy = event.target.closest('.star__element__info__money').querySelector('.star__element__info__money__block__text');
            cartPricy.innerText = parseInt(wrapperCol.innerText) * parseInt(wrapperCartPricy.innerText)
            fullprice();
            saveCartStar()
        };
    });
    // удаление товаров из карзины и избранного
    window.addEventListener('click', function (event) {
        if (event.target.dataset.off === 'offbasket') {
            const idcart = event.target.closest('.basket__element').getAttribute('data-id');
            if (document.querySelector('.popylar__inner') && document.querySelector('.popylar__inner').querySelector(`[data-id = "${idcart}"]`)){
                const filloff = document.querySelector('.popylar__inner').querySelector(`[data-id = "${idcart}"]`).querySelector('[data-basket]').classList.remove('active-svg');
            };
            event.target.closest('.basket__element').remove();
            infobasketcart();
            fullprice();
            saveCartBasket()
        };

        if (event.target.dataset.off === 'offstar') {
            const idcart = event.target.closest('.star__element').getAttribute('data-id');
            if (document.querySelector('.popylar__inner') && document.querySelector('.popylar__inner').querySelector(`[data-id = "${idcart}"]`)) {
                const filloff = document.querySelector('.popylar__inner').querySelector(`[data-id = "${idcart}"]`).querySelector('[data-star]').classList.remove('active-svg');
            };
            event.target.closest('.star__element').remove();
            infostarcart();
            saveCartStar()
        };
    });
    // перенос товара из избранного в корзину
    window.addEventListener('click', function (event) {
        const basketcart = document.querySelector('.basket-cart')
        if (event.target.dataset.basket === 'basket') {
            const idcart = event.target.closest('.star__element').getAttribute('data-id');
            const starid = event.target.closest('.star__element');
            const starinfo = {
                id: starid.getAttribute('data-id'),
                img: starid.querySelector('.star__element__img').getAttribute('src'),
                title: starid.querySelector('.star__element__info__text').innerText,
                col: starid.querySelector('.star__element__info__money__click__number').innerText,
                maxcol: starid.querySelector('.star__element__info__number').innerText,
                price: starid.querySelector('.star__element__info__money__block__text').innerText,
                pricycart: starid.querySelector('[data-star="pricyCart"]').innerText
            };

            const itemcardbasket = basketcart.querySelector(`[data-id = "${starinfo.id}"]`);

            if (itemcardbasket) {
                const basketprice = basketcart.querySelector('.basket__element__info__money__block__text');
                const basketcol = basketcart.querySelector('.basket__element__info__money__click__number');
                if ((parseInt(starinfo.col) + parseInt(basketcol.innerText)) <= parseInt(starinfo.maxcol)) {
                    basketprice.innerText = parseInt(starinfo.price) + parseInt(basketprice.innerText);
                    basketcol.innerText = parseInt(starinfo.col) + parseInt(basketcol.innerText);
                    if (document.querySelector('.popylar__inner') && document.querySelector('.popylar__inner').querySelector(`[data-id = "${idcart}"]`)) {
                        const filloff = document.querySelector('.popylar__inner').querySelector(`[data-id = "${idcart}"]`).querySelector('[data-star]').classList.remove('active-svg');
                        const fillon = document.querySelector('.popylar__inner').querySelector(`[data-id = "${idcart}"]`).querySelector('[data-basket]').classList.add('active-svg');
                    };
                    starid.remove();
                    console.log(itemcardbasket);
                    console.log(idcart);
                }else{
                    console.log('максимальное количество товара в корзине')
                };
            } else {
                const cardItemHTML = `<div class="basket__element" data-id="${starinfo.id}">
            <svg data-off="offbasket" id="kabinet" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490"
                style="enable-background: new 0 0 490 490" xml:space="preserve">
                <polygon
                points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 ">
                </polygon>
            </svg>
            <img class="basket__element__img" src="${starinfo.img}" alt="">
            <div class="basket__element__info">
                <span class="basket__element__info__text">${starinfo.title}</span>
                <div class="basket__element__info__number__block">
                    <span> Имеется в наличии:</span><span class="basket__element__info__number">${starinfo.maxcol}</span><span>шт.</span>
                </div>
                <div class="basket__element__info__number__block">
                    <span>Цена за шт. / </span><span class="basket__element__info__number" data-basket = "pricyCart"> ${starinfo.pricycart} </span><span></span>
                </div>
                <div class="basket__element__info__money">
                    <div class="basket__element__info__money__click">
                        <span class="basket__element__info__money__click__element" data-action="minus__basket">-</span>
                        <span class="basket__element__info__money__click__number" data-content="content__bastet">${starinfo.col}</span>
                        <span class="basket__element__info__money__click__element"data-action="plus__basket">+</span>
                    </div>
                    <div class="basket__element__info__money__block">
                        <div>
                            <span>Итого:</span>
                            <span class="basket__element__info__money__block__text">${parseInt(starinfo.price)}</span>
                            <span>руб.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
                basketcart.insertAdjacentHTML('beforeend', cardItemHTML);
                starid.remove();
            };
            infobasketcart();
            infostarcart();
            fullprice();
            saveCartBasket();
            saveCartStar();
        };
    });
    // открытие и закрытие информации в доставка и оплата
    window.addEventListener('click', function (event) {
        if (event.target.dataset.delivery === "click") {
            //нахождение  бока информации
            let delivery = event.target.closest('[data-delivery = "display"]').querySelector('.delivery__info');
            //проверка на наличие класса
            if (delivery.classList.contains("displayon")) {
                //удаление класса если он присутствует
                delivery.classList.remove('displayon');
            } else {
                //добавление класса если он отсутствует
                delivery.classList.add('displayon');
            };
        };
    });
























    // Burger функционал
    // Функции burger
    // Открытие и закрытие информации в корзине и избранном
    function burger__col() {
        const cart__burger = document.querySelector('.burger__basket-cart');
        const cart__star = document.querySelector('.burger__star__cart');
        if (cart__burger.children.length > 0) {
            const basket = document.querySelector('.burger__basket__form');
            const infobasket = basket.querySelector('.burger__basket__cart__none').classList.remove('displayon');
            const cart = basket.querySelector('.burger__basket-cart').classList.add('displayon');
            const delivery = basket.querySelector('.burger__basket-delivery').classList.add('displayon');
            const form = basket.querySelector('.burger__basket-form').classList.add('displayon');
        } else {
            const basket = document.querySelector('.burger__basket__form');
            const infobasket = basket.querySelector('.burger__basket__cart__none').classList.add('displayon');
            const cart = basket.querySelector('.burger__basket-cart').classList.remove('displayon');
            const delivery = basket.querySelector('.burger__basket-delivery').classList.remove('displayon');
            const form = basket.querySelector('.burger__basket-form').classList.remove('displayon');
        };

        if (cart__star.children.length > 0) {
            const basket = document.querySelector('.burger__star__form');
            const infostar = basket.querySelector('.burger__star__cart__none').classList.remove('displayon');
            const cart = basket.querySelector('.burger__star__cart').classList.add('displayon');
        } else {
            const basket = document.querySelector('.burger__star__form');
            const infostar = basket.querySelector('.burger__star__cart__none').classList.add('displayon');
            const cart = basket.querySelector('.burger__star__cart').classList.remove('displayon');
        };
    };
    // Калькулятор общей цена корзина
    function calc() {
        let idpricy = 0;
        let cartpricy;
        let pricy = document.querySelector('.burger__delivery__price');
        const cart = document.querySelector('.burger__basket-cart').querySelectorAll('.burger__basket-cart__element');
        cart.forEach(function (item) {
            cartpricy = parseInt(item.querySelector('[data-basket="pricy"]').innerText);
            idpricy += cartpricy
        });
        pricy.innerText = idpricy
    };
    // Взаимодействие burger
    // Открытие скрытой формы burger
    window.addEventListener('click', function (click) {
        if (click.target.dataset.burger === 'burger') {
            const burger__form = document.querySelector('.burger-form').classList.add('burger__on');
        };
    });
    // Закрытие скрытой формы burger
    window.addEventListener('click', function (click) {
        if (click.target.dataset.off === 'burger') {
            const burger__form = document.querySelector('.burger-form').classList.remove('burger__on');
        };
    });
    // Открытие скрытой формы burger "корзина" и "избранное"
    window.addEventListener('click', function (burger) {
        if (burger.target.dataset.burger === 'корзина') {
            const basket = document.querySelector('.burger__basket__inner').classList.add('burger__on')
            burger__col();
        };

        if (burger.target.dataset.burger === 'избранное') {
            const basket = document.querySelector('.burger__star__inner').classList.add('burger__on')
            burger__col();
        };
    });
    // Закрытие скрытой формы burger корзина и избранное
    window.addEventListener('click', function (off) {
        if (off.target.dataset.basket === 'burger__basket__off') {
            const basket = off.target.closest('.burger__basket__inner').classList.remove('burger__on')
        };

        if (off.target.dataset.basket === 'burger__star__off') {
            const basket = off.target.closest('.burger__star__inner').classList.remove('burger__on')
        };
    });
    // добавление товаров в корзину и  избранное
    window.addEventListener('click', function (event) {
        let info;
        let cart__info;
        if (event.target.dataset.basket === 'basket__popylar' || event.target.dataset.star === 'star-popylar') {
            info = event.target.closest('.popylar__inner__element');
            cart__info = {
                id: info.getAttribute('data-id'),
                img: info.querySelector('.popylar__inner__element__img__element').getAttribute('src'),
                price: parseInt(info.querySelector('.popylar__inner__element__many').innerText),
                title: info.querySelector('.popylar__inner__element__info').innerText,
                wrappercol: info.querySelector('.product__block__btn__wrapper__element__content').innerText,
                col: info.querySelector('.col').innerText
            }
        };
        if (event.target.dataset.basket === 'basket__popylar') {
            let burger__basket = document.querySelector('.burger__basket-cart');
            const burger__id = burger__basket.querySelector(`[data-id = "${cart__info.id}"]`)
            if (document.querySelector(".popylar__inner")){
                const fill__basket__on = document.querySelector(".popylar__inner").querySelector(`[data-id="${cart__info.id}"]`).querySelector("[data-basket='basket__popylar']").classList.add("active-svg");
            };
            if (burger__id) {
                let wrappercol = burger__id.querySelector('[data-wrappercol = "burger__wrappercol"]');
                let pricy;
                if (parseInt(wrappercol.innerText) + parseInt(cart__info.wrappercol) <= cart__info.col) {
                    wrappercol.innerText = parseInt(wrappercol.innerText) + parseInt(cart__info.wrappercol);
                };
                pricy = burger__id.querySelector('[data-basket="pricy"]')
                pricy.innerText = parseInt(wrappercol.innerText) * parseInt(cart__info.price)
            } else {
                const burger__cart = `<div class="burger__basket-cart__element" data-id = "${cart__info.id}">
                                    <svg data-off = "basket" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490"
                                        style="enable-background:new 0 0 490 490;" xml:space="preserve">
                                        <polygon data-off = "basket"
                                            points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 ">
                                        </polygon>
                                    </svg>
                                    <img src="${cart__info.img}" alt="">
                                    <div class="burger__basket-cart__info">
                                        <span>${cart__info.title}</span>
                                        <span>Цена за шт. / <span data-pricy="basket">${cart__info.price}</span> руб.</span>
                                        <div class="burder__col">
                                            <div class="burger__wrapper">
                                                <span class="burger__wrapper__btn" data-click = "basketminus">-</span>
                                                <span data-wrappercol = "burger__wrappercol">${cart__info.wrappercol}</span>
                                                <span class="burger__wrapper__btn" data-click = "basketplus">+</span>
                                            </div>
                                            <span>В наличии <span data-col>${cart__info.col}</span> шт.</span>
                                        </div>
                                        <span>Общая цена: <span data-basket = "pricy">${parseInt(cart__info.price) * parseInt(cart__info.wrappercol)}</span> руб.</span>
                                    </div>
                                </div>`

                burger__basket.insertAdjacentHTML('beforeend', burger__cart);
            };
            burger__col();
            calc()
            mobilesaveCartBasket();
        };


        if (event.target.dataset.star === 'star-popylar') {
            let burger__star = document.querySelector('.burger__star__cart');
            const burger__id = burger__star.querySelector(`[data-id = "${cart__info.id}"]`);
            const fill__star__on = document.querySelector(".popylar__inner").querySelector(`[data-id="${cart__info.id}"]`).querySelector("[data-star='star-popylar']").classList.add("active-svg");
            if (burger__id) {
                let wrappercol = burger__id.querySelector('[data-wrappercol = "burger__wrappercol"]');
                if (parseInt(wrappercol.innerText) + parseInt(cart__info.wrappercol) <= cart__info.col) {
                    wrappercol.innerText = parseInt(wrappercol.innerText) + parseInt(cart__info.wrappercol);
                };
            } else {
                const burger__cart = `<div class="burger__star-cart__element" data-id="${cart__info.id}">
                            <svg data-off="star" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490"
                                style="enable-background:new 0 0 490 490;" xml:space="preserve">
                                <polygon data-off="star"
                                    points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 ">
                                </polygon>
                            </svg>
                            <img data-star="img" src="${cart__info.img}" alt="" />
                            <div class="burger__star-cart__info">
                                <span data-star="title">${cart__info.title}</span>
                                <span>Цена за шт. / <span data-pricy="star">${cart__info.price}</span> руб.</span>
                                <div class="burder__col">
                                    <div class="burger__wrapper">
                                        <span class="burger__wrapper__btn" data-click="starminus">-</span>
                                        <span data-wrappercol="burger__wrappercol">${cart__info.wrappercol}</span>
                                        <span class="burger__wrapper__btn" data-click="starplus">+</span>
                                    </div>
                                    <span>В наличии <span data-col>${cart__info.col}</span> шт.</span>
                                </div>
                                <span>Итого <span data-pricyCartFinished = "star">${cart__info.price * parseInt(cart__info.wrappercol)}</span> руб.</span>
                                <p class="burger__star__basket" data-basket="star__basket">
                                    Добавить в корзину
                                </p>
                            </div>
                        </div>`
                burger__star.insertAdjacentHTML('beforeend', burger__cart);
            };
            burger__col();
            mobilesaveCartStar();
        };

    });
    // удаление товаров из корзины и избранного
    window.addEventListener('click', function (event) {
        if (event.target.dataset.off === 'basket') {
            const idcart = event.target.closest('.burger__basket-cart__element').getAttribute('data-id');
            if (document.querySelector(`.popylar__inner__element[data-id = "${idcart}"]`)){
                const filloff = document.querySelector('.popylar__inner').querySelector(`[data-id = "${idcart}"]`).querySelector('[data-basket]').classList.remove('active-svg');
            };
            event.target.closest('.burger__basket-cart__element').remove();
            burger__col();
            calc()
            mobilesaveCartBasket();
        };

        if (event.target.dataset.off === 'star') {
            const idcart = event.target.closest('.burger__star-cart__element').getAttribute('data-id');
            if (document.querySelector(`.popylar__inner__element[data-id = "${idcart}"]`)){  
                const filloff = document.querySelector('.popylar__inner').querySelector(`[data-id = "${idcart}"]`).querySelector('[data-star]').classList.remove('active-svg');
            };
            event.target.closest('.burger__star-cart__element').remove();
            burger__col();
            mobilesaveCartStar();
        };
    });
    //перенос товара из избранного в корзину
    window.addEventListener('click', function (event) {
        if (event.target.dataset.basket === 'star__basket') {
            let cart__element = event.target.closest('.burger__star-cart__element');
            const cart__info = {
                id: cart__element.getAttribute('data-id'),
                img: cart__element.querySelector('[data-star = "img"]').getAttribute('src'),
                title: cart__element.querySelector('[data-star = "title"]').innerText,
                col: cart__element.querySelector('[data-wrappercol="burger__wrappercol"]').innerText,
                maxcol: cart__element.querySelector('[data-col]').innerText,
                pricy: cart__element.querySelector('[data-pricy = "star"]').innerText
            }
            let basket__cart = document.querySelector('.burger__basket-cart');
            const basket__id = basket__cart.querySelector(`[data-id= "${cart__info.id}"]`);
            if (basket__id) {
                let basket__pricy = basket__id.querySelector('[data-basket="pricy"]');
                let basket__col = basket__id.querySelector('[data-wrappercol="burger__wrappercol"]');
                if (parseInt(basket__col.innerText) + parseInt(cart__info.col) <= cart__info.maxcol) {
                    basket__col.innerText = parseInt(basket__col.innerText) + parseInt(cart__info.col);
                    basket__pricy.innerText = (parseInt(cart__info.col) * parseInt(cart__info.pricy)) + parseInt(basket__pricy.innerText);
                    if (document.querySelector(`.popylar__inner__element[data-id = "${cart__info.id}"]`)){
                        const filloff = document.querySelector(`.popylar__inner__element[data-id = "${cart__info.id}"]`).querySelector('[data-star]').classList.remove('active-svg');
                    };
                    cart__element.remove();
                };
            } else {
                if (document.querySelector(`.popylar__inner__element[data-id = "${cart__info.id}"]`)){
                    const fill__star__off = document.querySelector(`.popylar__inner__element[data-id = "${cart__info.id}"]`).querySelector('[data-star]').classList.remove('active-svg');
                    const filloff = document.querySelector(`.popylar__inner__element[data-id = "${cart__info.id}"]`).querySelector('[data-basket]').classList.add('active-svg');
                };
                const burger__cart = `<div class="burger__basket-cart__element" data-id = "${cart__info.id}">
                                    <svg data-off = "basket" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490"
                                        style="enable-background:new 0 0 490 490;" xml:space="preserve">
                                        <polygon data-off = "basket"
                                            points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 ">
                                        </polygon>
                                    </svg>
                                    <img src="${cart__info.img}" alt="">
                                    <div class="burger__basket-cart__info">
                                        <span>${cart__info.title}</span>
                                        <span>Цена за шт. / <span data-pricy="basket">${cart__info.pricy}</span> руб.</span>
                                        <div class="burder__col">
                                            <div class="burger__wrapper">
                                                <span class="burger__wrapper__btn" data-click = "basketminus">-</span>
                                                <span data-wrappercol = "burger__wrappercol">${cart__info.col}</span>
                                                <span class="burger__wrapper__btn" data-click = "basketplus">+</span>
                                            </div>
                                            <span>В наличии <span data-col>${cart__info.maxcol}</span> шт.</span>
                                        </div>
                                        <span>Общая цена: <span data-basket = "pricy">${parseInt(cart__info.pricy) * parseInt(cart__info.col)}</span> руб.</span>
                                    </div>
                                </div>`

                basket__cart.insertAdjacentHTML('beforeend', burger__cart);
                cart__element.remove();
            };
            burger__col();
            calc()
            mobilesaveCartStar();
            mobilesaveCartBasket();
        };
    });
    // работа wrapper в избранном
    window.addEventListener('click', function (click) {
        if (click.target.dataset.click === "starplus" || click.target.dataset.click === "starminus"){
            let element__wrapper = click.target.closest('.burger__wrapper').querySelector('[data-wrappercol="burger__wrappercol"]');
            const element__col = click.target.closest('.burder__col').querySelector('[data-col]');
            if (click.target.dataset.click === "starplus" && (parseInt(element__wrapper.innerText) < (parseInt(element__col.innerText)))){
                element__wrapper.innerText = ++element__wrapper.innerText
            };

            if (click.target.dataset.click === "starminus" && (parseInt(element__wrapper.innerText) > 1)) {
                element__wrapper.innerText = --element__wrapper.innerText
            };
        };
    });
    // работа wrapper в корзине
    window.addEventListener('click', function (click) {
        if (click.target.dataset.click === "basketplus" || click.target.dataset.click === "basketminus") {
            let element__wrapper = click.target.closest('.burger__wrapper').querySelector('[data-wrappercol="burger__wrappercol"]');
            const element__col = click.target.closest('.burder__col').querySelector('[data-col]');
            if (click.target.dataset.click === "basketplus" && (parseInt(element__wrapper.innerText) < (parseInt(element__col.innerText)))) {
                element__wrapper.innerText = ++element__wrapper.innerText
            };

            if (click.target.dataset.click === "basketminus" && (parseInt(element__wrapper.innerText) > 1)) {
                element__wrapper.innerText = --element__wrapper.innerText
            };
        };
    });
    //полная стоимость карточки в избраном
    window.addEventListener('click',function(click){
        if (click.target.dataset.click === "starplus" || click.target.dataset.click === "starminus"){
            const oneCartPricy = click.target.closest('.burger__star-cart__info').querySelector('[data-pricy="star"]');
            const cartCol = click.target.closest('.burger__wrapper').querySelector('[data-wrappercol="burger__wrappercol"]')
            const FullCartPricy = click.target.closest('.burger__star-cart__info').querySelector('[data-pricycartfinished="star"]')
            FullCartPricy.innerText = parseInt(oneCartPricy.innerText) * parseInt(cartCol.innerText)
        };
    });
    //полная стоимость карточки в корзине
    window.addEventListener('click', function (click) {
        if (click.target.dataset.click === "basketplus" || click.target.dataset.click === "basketminus") {
            const oneCartPricy = click.target.closest('.burger__basket-cart__element').querySelector('[data-pricy="basket"]');
            const cartCol = click.target.closest('.burger__wrapper').querySelector('[data-wrappercol="burger__wrappercol"]')
            const FullCartPricy = click.target.closest('.burger__basket-cart__element').querySelector('[data-basket="pricy"]')
            FullCartPricy.innerText = parseInt(oneCartPricy.innerText) * parseInt(cartCol.innerText);
        };
        calc()
    });























//Функционах с сохранением корзины и избранных товаров в LocalStore
    // сохранение корзины для разных страниц
    function saveCartBasket() {
        const html = document.querySelector('.basket-cart').innerHTML.trim();
        if (html.length !== 0) {
            localStorage.setItem('cartBasket', html)
        } else {
            localStorage.removeItem('cartBasket')
            localStorage.removeItem('mobileCartBasket')
        };
    };
    // вывод корзины для разных страниц
    function initSaveCart() {
        if (localStorage.getItem('cartBasket') !== null) {
            document.querySelector('.basket-cart').innerHTML = localStorage.getItem('cartBasket');
        };

        document.querySelectorAll('.basket__element').forEach(function(el){
            const id = el.dataset.id;
            if (document.querySelector(`.popylar__inner__element[data-id = "${id}"]`)){
                document.querySelector(`.popylar__inner__element[data-id = "${id}"]`).querySelector('[data-basket="basket__popylar"]').classList.add('active-svg');
            };

        });
        infobasketcart()
        fullprice()
    };
    initSaveCart();
    // сохранение избранных товаров для разных страниц
    function saveCartStar (){
        const html = document.querySelector('.star-cart').innerHTML.trim();
        if (html.length !== 0) {
            localStorage.setItem('cartStar', html)
        } else {
            localStorage.removeItem('cartStar')
            localStorage.removeItem('mobileCartStar')
        };
    };
    // вывод избранных товаров для разных страниц
    function initSaveCartStar() {
        if (localStorage.getItem('cartStar') !== null) {
            document.querySelector('.star-cart').innerHTML = localStorage.getItem('cartStar');
        };

        document.querySelectorAll('.star__element').forEach(function (el) {
            const id = el.dataset.id;
            if (document.querySelector(`.popylar__inner__element[data-id = "${id}"]`)) {
                document.querySelector(`.popylar__inner__element[data-id = "${id}"]`).querySelector('[data-star="star-popylar"]').classList.add('active-svg');
            };

        });
        infostarcart()
        fullprice()
    };
    initSaveCartStar();
    // мобильная версия сохранения корзины
    function mobilesaveCartBasket() {
        const html = document.querySelector('.burger__basket-cart').innerHTML.trim();
        if (html.length !== 0) {
            localStorage.setItem('mobileCartBasket', html)
        } else {
            localStorage.removeItem('mobileCartBasket')
            localStorage.removeItem('cartBasket')
        };
    };
    // мобильная версия вывод корзины для разных страниц
    function mobileinitSaveCart() {
        if (localStorage.getItem('mobileCartBasket') !== null) {
            document.querySelector('.burger__basket-cart').innerHTML = localStorage.getItem('mobileCartBasket');
            document.querySelectorAll('.burger__basket-cart__element').forEach(function (el) {
                const id = el.dataset.id;
                if (document.querySelector(`.popylar__inner__element[data-id = "${id}"]`)) {
                    document.querySelector(`.popylar__inner__element[data-id = "${id}"]`).querySelector('[data-basket="basket__popylar"]').classList.add('active-svg');
                };

            });
        };
        infobasketcart()
        fullprice()
    };
    mobileinitSaveCart();
    // мобильная версия сохранения избранных товаров
    function mobilesaveCartStar() {
        const html = document.querySelector('.burger__star__cart').innerHTML.trim();
        if (html.length !== 0) {
            localStorage.setItem('mobileCartStar', html)
        } else {
            localStorage.removeItem('mobileCartStar')
            localStorage.removeItem('cartStar')
        };
    };
    // мобильная версия вывод избранных товаров для разных страниц
    function mobileinitSaveCartStar() {
        if (localStorage.getItem('mobileCartStar') !== null) {
            document.querySelector('.burger__star__cart').innerHTML = localStorage.getItem('mobileCartStar');
        };

        document.querySelectorAll('.burger__star-cart__element').forEach(function (el) {
            const id = el.dataset.id;
            if (document.querySelector(`.popylar__inner__element[data-id = "${id}"]`)) {
                document.querySelector(`.popylar__inner__element[data-id = "${id}"]`).querySelector('[data-star="star-popylar"]').classList.add('active-svg');
            };

        });
        infobasketcart()
        fullprice()
    };
    mobileinitSaveCartStar();

});


