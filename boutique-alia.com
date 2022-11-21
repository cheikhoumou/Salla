/*
################################
##                            ##
##    MADE BY Cheikho Abidin  ##
##                            ##
################################
 https://wa.me/22220523820
(◠‿◠)*/
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap');
* {
 font-family: 'Tajawal', sans-serif ;   
}
 .title--small {
    font-family: 'Tajawal', sans-serif;
     font-weight: 400;
}
@keyframes logobg {
    0% {
        transform: scale(1);
    }

    20% {
        transform: scale(1);
    }

    78% {
        transform: scale(1);
    }

    100% {
        transform: scale(0);
    }
}
body.index:before {
    content: "";
    width: 100%;
    height: 100%;
    background: #ffffff8f url(https://cdn.salla.sa/XDdlN/Iaog7Wup8aPnW7M1NWA3aDzPM4sXYQJq8lNztPSB.jpg);
    position: fixed;
    z-index: 99999999999999999 !important;
    transform: scale(0);
    background-size: 225px !important;
    background-repeat: no-repeat;
    background-position: center !important;
    animation-name: logobg;
    animation-duration: 3s;
    backdrop-filter: blur(4px);
}footer.footer:before {
    content: " ";
    background-image: url(https://drive.google.com/uc?id=12FtB3_a1johi_WLGBl_3J-UlX5-GnAwf)!important;
    display: block !important;
    background-position: center !important;
    background-repeat: no-repeat;
    background-size: cover !important;
    width: 100%;
    height: 100px;
    background: #000;
}


footer.footer {
    background: linear-gradient(45deg, #000, #000);
}

footer.footer * {color:#fff !important;}

.title--has-dash:before {
    background: #e8c380 !important;
}

.footer__bottom {
    background: #000;
}

.badge--danger {
    background: #18b6a1;
}

.testimonial-entry *{text-align: center;font-weight: bold;}


.testimonial-entry {
    justify-content: center;
    align-items: center;
}

.testimonial-entry__info {
    width: 100%;
    margin: auto;
    text-align: center !important;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.avatar-wrapper--small {padding: 4px;margin: 5px;border: 2px solid #000;width: 80px;height: 80px;display: flex;justify-content: center;align-items: center;}
.testimonial-entry__excerpt p {
    color: #000;
}.testimonial-entry {
    border-radius: 30px;
    box-shadow: 0px 0px 8px #00000017;
    position: relative;
    margin: 8px 1px;
    margin-bottom: 0px;
}.testimonial-entry:before {
 content:
 " ";
 display: block;
 position: absolute;
 width: 72px;
 height: 20px;
 top: 20px;
 right: 15px;
 background: url(https://cdn.salla.sa/XDdlN/Iaog7Wup8aPnW7M1NWA3aDzPM4sXYQJq8lNztPSB.jpg) no-repeat;
 z-index: 100;
 background-size: cover;
 background-position: center;
}

body > section.home-block.home-block--bg.home-block--testimonials.no-m > div > div:nth-child(1) > div > div {
    text-align: center;
}
@keyframes float {
 0% {
  transform: translatey(0px);
 }
 50% {
  transform: translatey(-20px);
 }
 100% {
  transform: translatey(0px);
 }
}
@keyframes shadeanm {
 0% {
  box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
 }
 50% {
  box-shadow: 0 15px 15px 0px rgba(0,0,0,0.2);
 }
 100% {
  box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
 }
}
.store-feature__icon{
    background: linear-gradient(288deg, #000 34%, #000 100%);
    animation: float 4s ease-in-out infinite, shadeanm 4s ease-in-out infinite;
    color: #ffe5be;
}
@media (max-width: 576px){
 section.home-block.home-block--store-features .col-sm-12 {
    display: inline-block;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex: 1 1 0%;
    font-weight: bold;
}
.home-block--store-features .container .row .col-sm-12 .store-feature .title--large {
    font-size: 17px !important;
}.home-block--store-features .container .row .col-sm-12 .store-feature p {
    font-size: 12px !important;
}}
.product-block .btn--add-to-cart {
    position: initial;
    display: block;
    border-radius: 50px;
    padding: 3px 0!important;
    width: 90%!important;
    height: auto!important;
    margin: 8px auto 10px auto!important;
    padding: 5px !important;
    border: 2px solid #000;
    background: no-repeat;
}
.product-block .btn--add-to-cart:not(.disabled) i:after {
    content: 'اضف للسلة';
    margin-inline: 0.5rem;
}

.s-button-text {
    display: block;
    pointer-events: visible;
    overflow: visible;
    text-overflow: unset;
    white-space: nowrap;
    color: #000;
    font-weight: bold !important;
    font-size: 14.5px;
}
.product-block .btn--add-to-cart:hover .s-button-text{
  color: #fff;
}
.product-block .btn--add-to-cart:hover {
    background: #e8c380;
    border-color: #e8c380;
}
.header-side-panel-trigger,header .site-header__cart .price,header .site-header__cart i {
    font-size: 26px;
    color: #000;
}
.sicon-cart:before {
    content: "\ef36";
}
.placeholder-block.white i:before {
    background: url(https://cdn.salla.sa/XDdlN/Iaog7Wup8aPnW7M1NWA3aDzPM4sXYQJq8lNztPSB.jpg) no-repeat;
    background-size: 83%;
    width: 162px;
    height: 122px;
    display: block;
    background-position: center;
    color: transparent;
}

.btn.btn--wide.btn--padded.btn--oval.btn--primary::before ,.btn.btn--wide.btn--padded.btn--oval.btn--primary::after{
    content: " ";
    display: block;
    width: 40px;
    height: 40px;
    background: #000;
    position: absolute;
    top: 18px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    z-index: -1;
    transition:  left, right ,0.9s ease-in-out;
 }
.btn.btn--wide.btn--padded.btn--oval.btn--primary::before {
    right: -10%;
 }

.btn.btn--wide.btn--padded.btn--oval.btn--primary::after {
    left: -10%;
 }
.btn.btn--wide.btn--padded.btn--oval.btn--primary:hover::before{
    right: 0%;
    border-radius: 0;
    height: 120px;
    top: -10px;
    width: 400px;
 }.btn.btn--wide.btn--padded.btn--oval.btn--primary:hover::after{
    left:0%;
    border-radius: 0;
    height: 120px;
    top: 20px;
    width: 400px;
 }.btn.btn--wide.btn--padded.btn--oval.btn--primary:hover{
    color: #fff;
    overflow: hidden;
 }.btn.btn--wide.btn--padded.btn--oval.btn--primary {
     background: no-repeat;
     border: 2px solid #000;
     color: #000;
     overflow: hidden;
     position:relative;
     width:80%;
     margin:auto;
 }


.splide--testimonials .splide__list {
    padding-bottom: 10px !important;
}


.s-cart-summary-icon svg {
    fill: #000;
    width: 2rem;
    height: 1.70rem;
}

.footer .footer-list--payment-methods li img {
    border-radius: 5px;
    background: #fff;
    margin: 5px;
    padding: 2px;
    outline: 2px solid #fff;
}

.footer .footer-list--payment-methods {
    overflow: visible;
}

.side-panel__content .d-flex{
    display: block !important;
    text-align: center;
}

.side-panel .store-about img {
    margin: auto;
    margin-bottom: 20px;
}

header.fixed-pinned .site-header{
    background: #ffffff69;
    backdrop-filter: blur(5px);
}

.title--has-dash:before {
    width: 15px;
    height: 15px;
    position: absolute;
    background: #000;
    right: -5px;
}
input.s-quantity-input-input {
    background: #ad9164b5;
}
button.undefined.s-button-element.s-button-btn.s-button-solid.s-button-wide.s-button-primary.s-button-loader-end span {
    color: #fff;
}

.product-block {
    border-radius: 20px;
    box-shadow: 0px 0px 5px #2c0f0f24;
}

.tamara-product-widget, .spotii-wrapper{
     box-shadow: 0px 0px 5px #2c0f0f24;
     border-radius: 20px !important;
}
div#tabbyPromoWrapper {
    border: 2px solid #eee;
    border-right: 4px solid #3bffc0;
    border-radius: 15px;
}
.btn--tag {
    background: #000;
    color: #fff;
    text-decoration: none;
    border-radius: 20px;
    font-size: 11px;
    padding: 5px 10px !important;
}
.nav-desktop--horizontal>ul .menu-item>a {
    font-weight: bold;
}
ul.footer-list.store-links-items {
    display: grid;
    grid-template-columns: 2fr 2fr;
}
ul.footer-list.store-links-items li {
    margin-right: 15px;
    padding: 4px;
    display: block;
}
ul.footer-list.store-links-items li a {
    background: #ffffff42;
    text-align: center;
    border-radius: 10px;
    font-size: 12px;
}
.spotii-wrapper * {
    color: #000 !important;
}
.spotii-wrapper {
    border-bottom: 4px solid #ff4b44;
}
.tamara-product-widget {border-top-color: #f8c386 !important;border-width: 4px !important;}

.footer__bottom .container>*:last-child {
    display: none;
}

.title--primary {
    color: #e8c380 !important;
}

.s-cart-summary-count {
    background: #e8c380;
}
footer.footer:before {
    content: " ";
    background-image: url(https://drive.google.com/uc?id=12FtB3_a1johi_WLGBl_3J-UlX5-GnAwf)!important;
    display: block !important;
    background-position: center !important;
    background-repeat: no-repeat;
    background-size: cover !important;
    width: 100%;
    height: 109px;
    margin-top: -12px;
}
