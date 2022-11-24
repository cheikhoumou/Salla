
 function opnes(){
    document.querySelector('.bg').style = 'transform: scale(1);';
}    function closee(){
    document.querySelector('.bg').style = 'transform: scale(0);';
}
document.querySelector('.boxing1').onclick = function(){
    opnes();
    document.querySelector('.bg .masseg .links').innerHTML = '<a href="https://boutique-alia.com/ar/ساعات/c2085484978">ساعات</a> <a href="https://boutique-alia.com/ar/أبواك/c1311381683">أبواك</a> <a href="https://boutique-alia.com/ar/نظارات/c469182396"> نظارات</a> <a href="https://boutique-alia.com/ar/خواتم/c1977370301">خواتم </a> <a href="https://boutique-alia.com/ar/مسابح/c1203332542">  مسابح</a> <a href="https://boutique-alia.com/ar/أقلام/c294094015">أقلام</a><a href="https://boutique-alia.com/ar/كبكات/c1492320443">كبكات</a> ';
    document.querySelector('.bg .masseg').style = 'top: 6%;';
}
document.querySelector('.boxing2').onclick = function(){
    opnes();
    document.querySelector('.bg .masseg .links').innerHTML = '<a href="https://boutique-alia.com/ar/ساعات/c154025908"> ساعات </a><a href=" https://boutique-alia.com/ar/اكسسوارات/c1527471797">أطقم</a><a href="https://boutique-alia.com/ar/نظارات/c886078902">نظارات</a>';
    document.querySelector('.bg .masseg').style = 'top: 20%;';
}
document.querySelector('.boxing3').onclick = function(){
    opnes();

document.querySelector('.bg .masseg .links').innerHTML = '<a href="https://boutique-alia.com/ar/ساعات/c1102230440"> ساعات </a><a href="https://boutique-alia.com/ar/نظارات/c249546111"> نظارات</a><a href="https://boutique-alia.com/ar/نظارات/c249546111">  اكسسوارات</a>';

document.querySelector('.bg .masseg').style = 'top: 20%;';
}
