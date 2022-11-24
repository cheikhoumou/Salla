  /* Add custom Js code below */ 
document.querySelector('body.index section.home-block.home-block--main-slider + section.home-block.home-block--fixed-banner').innerHTML = `<style>
.cont {
    display: flex;
    flex-direction: column;
}.cont div img {
    width: 100%;
    border-radius: 8px;
}.cont div {
    width: 95%;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 10px;
    overflow: hidden;
    border-radius: 10px;
}.cont div:hover img {
    transform: scale(1.2) rotate(1deg) translateY(10px);
    transition: all 0.8s;
}.masseg {
    position: fixed;
    width: 90%;
    background: #fff;
    top: 20%;
    left: 5%;
    height: fit-content;
    padding: 20px 0px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px #1f050536;
    z-index: 9999999999;
}

.links {
    padding: 8px;
}

.masseg .links a {
    text-align: right;
    display: block;
    margin-right: 20px;
    padding: 10px;
    text-decoration: none;
    color: #000;
    border-top: 1px solid #eee;
    position: relative;
    font-size: 22px;
    transition: all 0.6s;
}

.masseg .links a:before {
    content: "";
    width: 15px;
    height: 15px;
    position: absolute;
    background: #e8c380;
    right: -10px;
    top: 20px;
    border-radius: 3px;
    transition: all 0.6s;
}

.masseg > div > a:last-child {
    border-bottom: 1px solid #eee;
}

.masseg .links a:hover{padding-right: 40px;}
.masseg .links a:hover:before {
    right: 15px;
}.bg {
    position: fixed;
    background: #f4d49954;
    width: 100%;
    top: 0;
    height: 100vh;
    backdrop-filter: blur(5px);
    left: 0;
    z-index: 99999999;
    transform: scale(0);
    transition: all 0.5s ease-in;
}
.bg .masseg img {
    width: 200px;
    margin: auto;
    display: flex;
    margin-bottom: 10px;
}.masseg h3 {
    text-align: center;
}.masseg span.close img {
    width: 20px;
    margin: 10px;
}

.masseg .close {
    width: 30px;
    height: 30px;
    background: #e8c380;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    top: -5px;
    right: -5px;
}
</style>
<div class="cont">

<div class="boxing1">
    <img src="https://cdn.salla.sa/form-builder/h8IfwzLNK5VXyl7NcZELq1NiT3AQ6xAupdLc2Aqb.png" alt="">
</div>
<div class="boxing2">
    <img src="https://cdn.salla.sa/form-builder/35OD7wTfvY3jVe8nYT4JPL0wg632uqVTzEFOt6q4.png" alt="">
</div>
<div class="boxing3">
    <img src="https://cdn.salla.sa/form-builder/HCvDyuGEpXbO0ZdUjGRTB65VpNyGQDAoij9rXKv8.jpg" alt="">
</div>
</div>

<div class="bg">
   <div class="masseg">
    <span class="close" onclick="closee();"><img src="https://www5.0zz0.com/2022/11/24/12/337868815.png" alt=""></span>
    <img src="https://cdn.salla.sa/XDdlN/Y6gCJORuud4eg5dkQPL6z8cY54XURM0T70hNvahK.png" alt="">
    <h3>
        اختر من بين التصنيفات
    </h3>
    <div class="links">
        
    </div>
</div> 
</div>`;
    function opnes(){
        document.querySelector('.bg').style = `transform: scale(1);`;
    }    function closee(){
        document.querySelector('.bg').style = `transform: scale(0);`;
    }
    document.querySelector('.boxing1').onclick = function(){
        opnes();
        document.querySelector('.bg .masseg .links').innerHTML = `      
          <a href="https://boutique-alia.com/ar/ساعات/c2085484978">ساعات</a> 
        <a href="https://boutique-alia.com/ar/أبواك/c1311381683">أبواك</a> 
        <a href="https://boutique-alia.com/ar/نظارات/c469182396"> نظارات</a> 
        <a href="https://boutique-alia.com/ar/خواتم/c1977370301">خواتم </a> 
        <a href="https://boutique-alia.com/ar/مسابح/c1203332542">  مسابح</a> 
        <a href="https://boutique-alia.com/ar/أقلام/c294094015">أقلام</a> 
        <a href="https://boutique-alia.com/ar/كبكات/c1492320443">كبكات</a> `;
        document.querySelector('.bg .masseg').style = `top: 6%;`;
    }
    document.querySelector('.boxing2').onclick = function(){
        opnes();
        document.querySelector('.bg .masseg .links').innerHTML = `
        <a href="https://boutique-alia.com/ar/ساعات/c154025908"> ساعات </a>
        <a href=" https://boutique-alia.com/ar/اكسسوارات/c1527471797">أطقم</a>
        <a href="https://boutique-alia.com/ar/نظارات/c886078902">نظارات</a>
        `;
        document.querySelector('.bg .masseg').style = `top: 20%;`;
    }
    document.querySelector('.boxing3').onclick = function(){
        opnes();

    document.querySelector('.bg .masseg .links').innerHTML = `
     <a href="https://boutique-alia.com/ar/ساعات/c1102230440"> ساعات </a> 
    <a href="https://boutique-alia.com/ar/نظارات/c249546111"> نظارات</a> 
    <a href="https://boutique-alia.com/ar/نظارات/c249546111">  اكسسوارات</a> 
    `;document.querySelector('.bg .masseg').style = `top: 20%;`;
    }
console.log("cheikhoumou salla Dev phone: +222 20523820");
console.log("web: https://www.cheikhoumou-portfolio.ml/");
console.log("http://wa.me/22220523820");
