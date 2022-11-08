/*

################################
##                            ##
##    MADE BY Cheikho Abidin  ##
##                            ##
################################

https://wa.me/22220523820

(◠‿◠)

*/
/*FONT*/

@import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&display=swap');
:not(i) {
  font-family: 'El Messiri' !important;
}

/***FONT*/

/* HEADER */

header.site-header.sticky {
  border-radius: 0 0 15px 15px;
}

input#searchbox {
  background: linear-gradient(227deg, #ff88bb, #fbb016) !important;
  border-radius: 20px !important;
  text-align: center;
}

input#searchbox {
  background: linear-gradient(227deg, #ff88bb, #fbb016) !important;
  border-radius: 20px !important;
  text-align: center;
}


a.ml-1.site-header__cart.d-none.d-lg-flex {
  border-radius: 50px;
  background: linear-gradient(227deg, #ff88bb, #fbb016) !important;
  color: #000;
}

a.ml-1.site-header__cart.d-none.d-lg-flex>div:nth-child(1) {
  border-left: 2px solid #000000;
  background:
  transparent !important;
  color: #000;
}

/* MENU */

.salla-theme_6 .sub-nav .main-menu>li>a {
  border-radius: 15px;
  color: #f8961c !important;
}
.salla-theme_6 .sub-nav .main-menu>li>a:hover {
  background: linear-gradient(227deg, #ff88bb, #fbb016);
  color: #000 !important;
}

.sub-nav-header {
  background: #000000 !important;
}

.sub-nav-header::before {
  content: "";
  text-align: center !important;
  display: block;
  height: 70px !important;
  background-image: url(https://cdn.salla.sa/yjwGl/rpB2D012nsfhNxW8DP7brsb28IyoMknevomAjVew.png);
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: top center !important;
}

.salla-theme_6 .product .product-footer .not-available {
  display: block;
  width: 100%;
  height: 50px !important;
  margin: 10px 0 0;
  padding: 10px 15px !important;
  border-radius: 0 !important;
  background-color: #ff6d6d;
  font-size: 15px;
  color: #fff;
  line-height: 30px;
  text-align: center;
}

.sub-nav-header img {
  display: none !important;
  padding-bottom: 2px !important;
  padding-top: 2px !important;
}

.sub-nav-header a {
  color: #0b3a36 !important;
  background: linear-gradient(227deg, #ff88bb, #fbb016);
  line-height: 35px;
  border-radius: 7px;
}

.salla-theme_6 .site-header .header-top .search-wrapper #search .results {
  top: 45px !important;
  border-radius: 10px;
  border: 1px solid #f7f7f7;
  box-shadow: 0 6px 6px rgb(0 0 0 / 18%);
  width: 95% !important;
  margin-left: 11px;
}

.salla-theme_6 .site-header .header-top .search-wrapper #search .results .seach_container {
  border: 0 !important;
}

.sub-nav__close svg {
    fill: red;
}
/* SLIDE/BANNER */
@media only screen and (min-width: 992px){
.main-slider img {
    width: 100%!important;
    margin-top: 15px !important;
    border-radius: 35px!important;
}

.main-slider.slick-dotted.slick-slider {
    margin-bottom: 0;
    padding: 0;
}

.main-slider.slick-initialized a {
    padding: 0 60px;
}

.container.banner a img {
    border-radius: 25px;
}}
/* SECTION */

body.salla-theme_6 .section--title, .feature-item h3, .feature-item p {
    font-family: 'El Messiri' !important;
}

.salla-theme_6 .section-header h2.section--title span {
  font-size: 0.9rem !important;
  background: linear-gradient(227deg, #ff88bb, #fbb016)!important;
  color: #0b3c38 !important;
  box-shadow: 0 2px 5px -3px rgb(0 0 0 / 61%);
  line-height: 25px;
  border-radius: 7px !important;
  padding: 11px 19px 11px 19px;
}

.salla-theme_6 .section-header .btn.btn-rounded {
  background: linear-gradient(227deg, #ff88bb, #fbb016);
  color: #0b3c38 !important;
  position: relative;
  top: 10px;
  left: 2px;
  border: 0 !important;
  font-size: 13px !important;
  box-shadow: 0 2px 5px -3px rgb(0 0 0 / 61%);
  line-height: 30px;
  border-radius: 7px !important;
}

.salla-theme_6 .section-header .section-actions .button-more {
  background: linear-gradient(227deg, #ff88bb, #fbb016)!important;
  color: #0b3c38 !important;
  box-shadow: 0 2px 5px -3px rgb(0 0 0 / 61%);
  line-height: 25px;
  border-radius: 7px !important;
  padding: 5px 19px 19px 19px;
}

.salla-theme_6 .section-header .section-actions .circle-action {
  box-shadow: 0 2px 5px -3px rgb(0 0 0 / 61%);
}

/* PRODUCTS */

.salla-theme_6 .product .product-footer .not-available {
  display: block;
  width: 100%;
  height: 50px !important;
  margin: 10px 0 0;
  padding: 10px 15px !important;
  border-radius: 0 !important;
  background-color: #ff6d6d;
  font-size: 15px;
  color: #fff;
  line-height: 30px;
  text-align: center;
}

.products-grid.eq-height .product,
.products-grid.eq-height .thumbnail,
.products-listing.eq-height .product,
.products-listing.eq-height .thumbnail,
body.salla-default #products_div.eq-height .product,
body.salla-default #products_div.eq-height .thumbnail {
  border-radius: 15px;
  box-shadow: 0 1px 12px -3px rgb(0 0 0 / 23%);
}

.salla-theme_6 .product-footer {
  padding: 0 !important;
}

.salla-theme_6 .product .product-footer .product-add.add_to_cart_btn {
  position: relative;
  margin: 10px 0 0;
  padding: 10px 15px !important;
  background: linear-gradient(227deg, #ff88bb, #fbb016);
  color: #000 !important;
  font-size: 15px;
  line-height: 30px;
  border-radius: 0;
  height: 50px !important;
}


.product-price {
  font-weight: 400;
}

body.salla-theme_6 .products-listing.eq-height .slick-track .slick-slide {
  padding-bottom: 30px !important;
  margin-top: 20px !important;
}


.products-listing {
  border: 0 !important;
}

.salla-theme_6 section.section.has-slider .products-listing.slick-slider {
  padding-left: 50px !important;
  padding-right: 50px !important;
  padding-top: 0;
  padding-bottom: 20px;
}

.salla-theme_6 .product .product-price {
  margin-bottom: 10px;
}

.salla-theme_6 .product>a .product-subtitle {
  font-style: italic;
  font-size: 12px;
  color: #70d074;
}

.product-details__price,
.product-price {
  color: #0b3c38 !important;
}

.salla-theme_6 .product>a .product-subtitle {
  text-align: center !important;
}

.salla-theme_6 .product>a .promotion-title {
  position: absolute;
  padding: 5px;
  color: #b91e22 !important;
  background: linear-gradient(227deg, #ff88bb, #fbb016);
  font-weight: bold;
}

.salla-theme_6 .product .product-price {
  width: 100%;
  text-align: center;
}

.salla-theme_6 .product-details__title {
  font-size: 20px;
  text-align: center;
  padding: 15px;
}

/*ARAA L3OMALAA*/

.py-4.text-center.bg-brand>.container>.section--title.mb-2.text-white {
  background-color: #e6ac3e;
  color: #636362;
  padding-left: 28px;
  border-radius: 7px;
  display: inline-block;
  margin-bottom: 30px!important;
}

.py-4.text-center.bg-brand>.container>.section--title.mb-2.text-white:after {
  content: "";
  display: block;
  position: absolute;
  border: 1px solid #2c89a0;
  left: -6px;
  right: -6px;
  top: -6px;
  bottom: -6px;
  border-radius: 7px;
  width: auto;
  height: auto;
}

.py-4.text-center.bg-brand>.container>.section--title.mb-2.text-white::after {
  -webkit-animation-name: ShineAnimation;
  -webkit-animation-duration: 5s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(0.6, -0.28, 0.74, 0.05);
}

.py-4.text-center.bg-brand>.container>.section--title.mb-2.text-white {
  background: linear-gradient(227deg, #ff88bb, #fbb016);
  color: #636362;
  border-radius: 7px;
  display: inline-flex;
  margin-bottom: 30px!important;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 30px;
  padding-left: 30px;
  padding-bottom: 10px;
  padding-top: 10px;
}

.py-4.text-center.bg-brand>.container>.section--title.mb-2.text-white {
  background-color: #e6ac3e;
  color: #636362;
}

@-webkit-keyframes ShineAnimation {
  from {
    background-repeat: no-repeat;
    background-image: -webkit-linear-gradient( top left, rgba(255, 255, 255, 0.0) 0%, rgba(255, 255, 255, 0.0) 45%, rgba(255, 255, 255, 0.5) 48%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.5) 52%, rgba(255, 255, 255, 0.0) 57%, rgba(255, 255, 255, 0.0) 100%);
    background-position: -250px -250px;
    background-size: 600px 600px
  }
  to {
    background-repeat: no-repeat;
    background-position: 250px 250px;
  }
}

.bg-brand {
  background-color: #fafafa !important;
  margin-top: 30px;
}

.salla-theme_6 .testimonails-listing .testimonials-item blockquote {
  background: #fff;
  box-shadow: 0 1px 12px -4px rgb(0 0 0 / 19%);
  border-radius: 15px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 13px;
}



/* FOOTER*/

li.social__item {
  background: linear-gradient(227deg, #ff88bb, #fbb016);
  padding: 5px !important;
  border-radius: 50px;
}

li.social__item a span{
  color: #000 !important;
  font-weight: 900;
}

footer>div {
  color: #ffffff;
  background-color: #000000 !important;
}


.footer-main .container::before {
  text-align: center !important;
  display: block;
  height: 96px !important;
  background-image: url(https://cdn.salla.sa/yjwGl/rpB2D012nsfhNxW8DP7brsb28IyoMknevomAjVew.png);
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: top center !important;
}

.footer-main * {
  text-align: center;
}
@media only screen and (max-width: 992px){
ul.footer-links {
    display: flex;
    flex-direction: column;
}}

.social {
  display: flex;
  justify-content: space-evenly;
}

.salla-theme_6 footer .footer-sub .fs-cont .icons {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
  border-radius: 60px;
}

.salla-theme_6 footer .footer-sub .fs-cont {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column-reverse;
  padding: 0.5rem 0;
  border-radius: 15px;
  color: black;
  background: linear-gradient(227deg, #ff88bb, #fbb016);
  align-content: center;
  flex-wrap: wrap;
}

.salla-theme_6 footer .footer-sub .fs-cont .fs-rights p{
  font-size: 0;
}.salla-theme_6 footer .footer-sub .fs-cont .fs-rights p:before{
  content:
  "الحقوق محفوظة Signature World © 2022 ";
  font-size: 15px;
}

.salla-theme_6 footer .store-certificate b {
  transform: translateY(0px) !important;
}

.salla-theme_6 footer .footer-sub .fs-cont .icons {
  flex-direction: column;
}

.salla-theme_6 footer .store-certificate {
  flex-direction: column;
  border: none !important;
  margin-left: 0;
  padding-left: 0;
  padding-bottom: 15px;
}

/* FEATURES */

.feature-item__icon {
  background: linear-gradient(227deg, #ff88bb, #fbb016);
  color: #000;
  border: none;
  height: 100px;
  width: 100px;
  padding: 27.5px 0 !important;
  box-shadow: 0 2px 5px -3px rgb(0 0 0 / 100%);
}

.feature-item__icon i {
  font-size: 45px;
}

.salla-theme_6 .u-light h2.section--title.mb-4 {
  background: linear-gradient(227deg, #ff88bb, #fbb016) !important;
  width: fit-content;
  padding: 5px 15px;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 2px 5px -3px rgb(0 0 0 / 61%);
}

.footer-main .container>.row {
    margin-top: 5%;
}
@media only screen and (min-width: 992px){
.footer-main .container>.row {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2%;
}
.footer-main .container>.row>div:nth-child(1) {
    width:100%;
    padding:0 20%;
}.footer-main .container>.row>div:nth-child(2) {
    width:50%;
    padding:0 5%
}.footer-main .container>.row>div:nth-child(3) {
    width:50%;
    padding:0 5%
}

}

h2.footer-title span {
    font-size: 1.5em;
    background: linear-gradient(227deg, #ff88bb, #fbb016) !important;
    padding: 5px 15px;
    color: #000 !important;
    border-radius: 15px;
}

/*INTRO*/

@keyframes intro {
  0% {
    width: 100%;
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  99% {
    width: 100%;
    
  }
  100% {
    width: 0;
    opacity: 0;
    display: none;
  }
}

@keyframes intro_logo {
  0% {
    width: 280px;
    opacity: 0;
    transform: translate(140px, -100px);
  }
  50% {
    opacity: 1;
    transform: translate(140px, -140px);
  }
  70% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  99% {
    width: 280px;
  }
  100% {
    width: 0;
    opacity: 0;
    display: none;
  }
}

body::before {
  content: " ";
  background: linear-gradient(45deg, #000, #000000);
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  z-index: 999999999999999999;
  opacity: 0;
  animation: intro 1.7s;
}

body:after {
  z-index: 999999999999999999;
  position: fixed;
  content: "";
  background-image: url('https://cdn.salla.sa/yjwGl/rpB2D012nsfhNxW8DP7brsb28IyoMknevomAjVew.png');
  background-position: center;
  background-size: 280px;
  background-repeat: no-repeat;
  width: 0;
  transform: translate(140px, -140px);
  height: 280px;
  right: 50%;
  top: 50%;
  opacity: 0;
  animation: intro_logo 1.5s;
}


@media only screen and (min-width: 991px) {
  .sub-nav {
    padding-bottom: 0.5%;
  }
  ul.main-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .sub-nav .container-fluid.sub-nav-content ul.main-menu>li {
    width: 20%;
  }
  .has-children ul {
    width: 100% !important;
  }
}

.container-fluid.sub-nav-content.is-active .sub-menu-logged-in {
  width: 50%;
}

.container-fluid.sub-nav-content.is-active ul.main-menu {
  flex-wrap: wrap;
  display: flex;
}

.sub-nav .main-menu li.sub-menu-header.categories-holder {
  width: 100%;
}

.salla-theme_6 span.d-block.mr-auto {
  margin: 0 auto;
}

.sub-nav .main-menu li.sub-menu-logged-in a i {
  font-size: 45px !important;
  text-align: center;
  line-height: 1.5 !important;
  width: 100%;
  margin: 0 !important;
}

.sub-nav .main-menu li.sub-menu-logged-in a {
  text-align: center;
  font-size: 14px !important;
  display: flex;
  flex-direction: column;
  padding: 0 !important;
}

.sub-nav .main-menu li.sub-menu-header.categories-holder>span, .sub-nav .main-menu li#ls_switcher_mobile {
    border-top: none;
    margin-top: 10%;
    font-size: 25px;
}
.container-fluid.sub-nav-content.is-active ul.main-menu li.sub-menu-header.categories-holder ul>li>a {
    border: 2px solid;
    border-radius: 10px;
    margin: 5px 20px;
}



.container-fluid.sub-nav-content.is-active {
    background-color: #000;
}

.sub-nav .main-menu li.sub-menu-header.categories-holder ul.store-categories li.active {
    background-color: #000;
}
.container-fluid.sub-nav-content.is-active .main-menu *{
    color: #f8961c !important;
}

.sub-nav .main-menu li.sub-menu-header.categories-holder ul.store-categories li {
  border: none;
}
.container-fluid.sub-nav-content.is-active .sub-menu-logged-in {
  border: none;
}



/*CAT*/

@media only screen and (max-width: 991px) {
	.salla-theme_6 .category-grid>div {
		width: 23%;
	}
	.salla-theme_6 .category-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 2%;
		justify-content: center;
	}
}

@media only screen and (min-width: 992px) {
	.salla-theme_6 .category-grid {
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
	}
	.salla-theme_6 .category-grid>div {
		width: 32.45%;
	}
	.salla-theme_6 .category-grid>div .category-featured {
		height: calc(20vw) !important;
	}
	.salla-theme_6 .category-grid>div .category-featured a:hover {
		background-color: #f0f0f0;
		border: 3px solid #1d2647;
    box-sizing: border-box;
    border-radius: 10px;
	}	

	/*cat with title*/
	.salla-theme_6 .section-header+.category-grid {
		display: flex;
		flex-wrap: wrap;
	}
	.salla-theme_6 .section-header+.category-grid>div {
		width: 32.45%;
	}
	.salla-theme_6 .section-header+.category-grid>div .category-featured {
		height: 210px !important
	}
	.salla-theme_6 .section-header+.category-grid>div .category-featured a {
		background-size: cover !important;
	}
	/***cat with title*/
}

@media only screen and (min-width: 1280px) {
	.salla-theme_6 .category-grid>div .category-featured {
		height: 250px !important;
	}
}
.category-featured {
    box-shadow: 0 0 7px -2px #00000022;
    margin-bottom: 4%;
}.salla-theme_6 .category-grid>div {
    width: 48%;
}
/***CAT*/
