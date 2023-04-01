// code img
document.querySelector(
  ".s-block.s-block--photos-slider + section.s-block.s-block--banners"
).innerHTML = `
<style>.boxsalla {width: 98%;margin: auto;display: block;}.boxsalla .boxing {display: flex;width: 100%;}.boxing a {width: 33.3%;margin: 8px;}.boxing a img {width: 100%;}section.s-block.s-block--photos-slider + section.s-block.s-block--banners + section.s-block.s-block--banners {display: none;}
.boxsalla .boxing .linkstop:before {
    content:"";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: block;
    border-radius: 6px;
    background-color: #000000b8;
    opacity: 0;
    z-index: 100;
}a.linkstop {
    position: relative;
    overflow: hidden;
    border-radius: 6px;
}.boxsalla .boxing .linkstop:hover:before{
    transition: all 0.4s;
    opacity: 1;} .linkstop:hover img{
    transform:scale(1.2);
    transition: all 0.3s;
}salla-slider.photos-slider .swiper-slide {
    width: 100%;
    margin: auto 11px;
    padding: 0;
}</style>
<div class="boxsalla">
<div class="boxing">
  <a class="linkstop" href="https://riddle-store.com/redirect/categories/123901576">
  <img src="https://cdn.salla.sa/form-builder/vpo9MqkHeKwh4eyfdVEYvHhrSGjs5WurOE7Z4yJa.png">
  </a>
   <a class="linkstop" href="https://riddle-store.com/redirect/categories/1770922737">
  <img src="https://cdn.salla.sa/form-builder/TMHMGF7iNFY6atRYfX3NubUzAXhIaAhz7XHqIOGD.png">
   </a>
   <a class="linkstop" href="https://riddle-store.com/redirect/categories/701274744">
  <img src="https://cdn.salla.sa/form-builder/MUu7PDUkzktCHIslWwXtLr5yenkn2O9JbeZfWIDG.png">
   </a>
  </div>
  <div class="boxing">
   <a class="linkstop" href="https://riddle-store.com/redirect/categories/1753944227">
  <img src="https://cdn.salla.sa/form-builder/11SwnaDrfzxGSSO39VRZzE2PLK0StE7Yy8MmrgqD.png">
   </a>
   <a class="linkstop" href="https://riddle-store.com/redirect/categories/902942546">
  <img src="https://cdn.salla.sa/form-builder/ElazKGLVYEtZnrZioxkHpH3Nlw5ppWoceIBKuPxq.png">
   </a><a class="linkstop" href="https://riddle-store.com/redirect/categories/593505373">
  <img src="https://cdn.salla.sa/form-builder/Dc0s3NfvfM4xKHdJ9GwDRP4KK9ielbnvtSI81VdI.png"></a></div></div>`;

document.querySelector(
  "a.footer-logo img"
).src = `	https://e.top4top.io/p_261996pp61.gif`;

//code img
document.querySelector(".boxsalla").innerHTML = `<style>
.cont {
    display: flex;
    flex-direction: column;
}.section[data-type=banner] {
    padding: 0 !important;
    margin: 0 !important;
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
/* position: relative; */
    width: 90%;
    background: #fff;
    height: fit-content;
    padding: 20px 0px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px #1f050536;
    z-index: 9999999999;
    max-width: 530px;
}.links {
    padding: 8px;
}
.flexcont {
    display: flex;
    width: 100%;
    justify-content: center;
}
.flexcont a img {width: 100%;border-radius: 14px;}.flexcont a {
    margin: 1%;
}
.masseg > div > a:last-child {
    border-bottom: 1px solid #eee;
}
.bg {
    position: fixed;
    background: #14161e9e;
    width: 100%;
    top: 0;
    height: 100vh;
    backdrop-filter: blur(5px);
    left: 0;
    z-index: 99999999;
    transform: scale(0);
    transition: all 0.5s ease-in;
    display: flex;
    justify-content: center;
    align-items: center;
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
    background: #f5a665;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    top: 5px;
    right: 10px;
}
/* الصور */
.tousbox section img {
    width: 100%;

}.tousbox section {
    margin-top: -5px;
}
</style>

<div class="bg">
   <div class="masseg">
    <span class="close" onclick="closee();"><img src="https://www5.0zz0.com/2022/11/24/12/337868815.png" alt=""></span>
    <h3>
        اختر من بين التصنيفات
    </h3>
    <div class="links">
        
    </div>
</div> 
</div>`;

function opnes() {
  document.querySelector(".bg").style = `transform: scale(1);`;
}
function closee() {
  document.querySelector(".bg").style = `transform: scale(0);`;
}
document.querySelector(
  "#app > div.app-inner.flex.flex-col.min-h-screen.relative > section:nth-child(6) > div > div.grid.grid-cols-2.md\\:grid-cols-4.gap-2\\.5.md\\:gap-4.lg\\:gap-5.has-6-photos > div:nth-child(1)"
).onclick = function () {
  opnes();
  // خدمات التصميم
  document.querySelector(".bg .masseg .links").innerHTML = `
        <div class="flexcont">
            <a href="https://riddle-store.com/%D8%A8%D9%84%D8%A7%D9%8A%D8%B3%D8%AA%D9%8A%D8%B4%D9%86-%D8%B3%D8%AA%D9%88%D8%B1-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A/c678665448"><img src="https://www13.0zz0.com/2023/04/01/21/334755815.jpeg" alt=""></a>
            <a href="https://riddle-store.com/%D8%A8%D9%84%D8%A7%D9%8A%D8%B3%D8%AA%D9%8A%D8%B4%D9%86-%D8%B3%D8%AA%D9%88%D8%B1-%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D9%8A/c1586855407"><img src="https://www13.0zz0.com/2023/04/01/21/712685529.jpeg" alt=""></a>
            <a href="https://riddle-store.com/%D8%A8%D9%84%D8%A7%D9%8A%D8%B3%D8%AA%D9%8A%D8%B4%D9%86-%D8%B3%D8%AA%D9%88%D8%B1-%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A/c60524671"><img src="https://www13.0zz0.com/2023/04/01/21/550075929.jpeg" alt=""></a>
        </div>
        <div class="flexcont">
            <a href="https://riddle-store.com/%D8%A8%D9%84%D8%A7%D9%8A%D8%B3%D8%AA%D9%8A%D8%B4%D9%86-%D8%B3%D8%AA%D9%88%D8%B1-%D8%A7%D9%85%D8%A7%D8%B1%D8%A7%D8%AA%D9%8A/c618402628"><img src="https://www13.0zz0.com/2023/04/01/21/565706689.jpeg" alt=""></a>
            <a href="https://riddle-store.com/%D8%B3%D8%AA%D9%8A%D9%85-%D9%83%D9%88%D9%8A%D8%AA%D9%8A/c984974315"><img src="https://www13.0zz0.com/2023/04/01/21/860298886.jpeg" alt=""></a>
            <a href="https://riddle-store.com/%D8%A8%D9%84%D8%A7%D9%8A%D8%B3%D8%AA%D9%8A%D8%B4%D9%86-%D8%B3%D8%AA%D9%88%D8%B1-%D9%82%D8%B7%D8%B1%D9%8A/c308506695"><img src="https://www13.0zz0.com/2023/04/01/21/161530046.jpeg" alt=""></a>
        </div>
        <div class="flexcont">
            <a href="https://riddle-store.com/%D8%A8%D9%84%D8%A7%D9%8A%D8%B3%D8%AA%D9%8A%D8%B4%D9%86-%D8%B3%D8%AA%D9%88%D8%B1-%D8%B9%D9%85%D8%A7%D9%86%D9%8A/c1082544454"><img src="https://www13.0zz0.com/2023/04/01/21/174044584.jpeg" alt=""></a>
            <a href="https://riddle-store.com/%D8%A8%D9%84%D8%A7%D9%8A%D8%B3%D8%AA%D9%8A%D8%B4%D9%86-%D8%B3%D8%AA%D9%88%D8%B1-%D8%A8%D8%AD%D8%B1%D9%8A%D9%86%D9%8A/c1991848517"><img src="https://www13.0zz0.com/2023/04/01/21/608013285.jpeg" alt=""></a>
        </div>

        `;
  document.querySelector(".bg .masseg").style = `top: 20%;`;
};
//founction 2
document.querySelector(
  "#app > div.app-inner.flex.flex-col.min-h-screen.relative > section:nth-child(6) > div > div.grid.grid-cols-2.md\\:grid-cols-4.gap-2\\.5.md\\:gap-4.lg\\:gap-5.has-6-photos > div:nth-child(5)"
).onclick = function () {
  opnes();
  // خدمات التصميم
  document.querySelector(".bg .masseg .links").innerHTML = `
        <div class="flexcont">
            <a href="https://riddle-store.com/%D8%A7%D9%8A%D8%AA%D9%88%D9%86%D8%B2-%D8%A7%D9%85%D8%B1%D9%8A%D9%83%D9%8A/c1577483490"><img src="https://www8.0zz0.com/2023/04/01/21/581531087.jpeg" alt=""></a>
            <a href="https://riddle-store.com/%D8%A7%D9%8A%D8%AA%D9%88%D9%86%D8%B2-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A/c205086177"><img src="https://www8.0zz0.com/2023/04/01/21/481256617.jpeg" alt=""></a>
            <a href="https://riddle-store.com/%D8%A7%D9%8A%D8%AA%D9%88%D9%86%D8%B2-%D8%A7%D9%85%D8%A7%D8%B1%D8%A7%D8%AA%D9%8A/c736926691"><img src="https://www8.0zz0.com/2023/04/01/21/493821675.jpeg" alt=""></a>
        </div>
        `;
  document.querySelector(".bg .masseg").style = `top: 20%;`;
};
//founction 3

document.querySelector(
  "#app > div.app-inner.flex.flex-col.min-h-screen.relative > section:nth-child(7) > div > div > div:nth-child(4)"
).onclick = function () {
  opnes();
  // خدمات التصميم
  document.querySelector(".bg .masseg .links").innerHTML = `
        <div class="flexcont">
            <a href="https://riddle-store.com/%D8%B3%D8%AA%D9%8A%D9%85-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A/c520242665"><img src="https://www10.0zz0.com/2023/04/01/21/284783189.jpeg" alt=""></a>
            <a href="https://riddle-store.com/%D8%B3%D8%AA%D9%8A%D9%85-%D8%A7%D9%85%D8%B1%D9%8A%D9%83%D9%8A/c662416124"><img src="https://www10.0zz0.com/2023/04/01/21/254664549.jpeg" alt=""></a>
            <a href="https://riddle-store.com/%D8%B3%D8%AA%D9%8A%D9%85-%D8%A7%D9%85%D8%A7%D8%B1%D8%A7%D8%AA%D9%8A/c1760519402 "><img src="https://www10.0zz0.com/2023/04/01/21/977380892.jpeg" alt=""></a>
        </div>
        <div class="flexcont">
        <a href="https://riddle-store.com/%D8%B3%D8%AA%D9%8A%D9%85-%D9%83%D9%88%D9%8A%D8%AA%D9%8A/c984974315"><img src="https://www10.0zz0.com/2023/04/01/21/797815874.jpeg" alt=""></a>
        <a href="https://riddle-store.com/%D8%B3%D8%AA%D9%8A%D9%85-%D9%82%D8%B7%D8%B1%D9%8A/c703286769"><img src="https://www10.0zz0.com/2023/04/01/21/336589332.jpeg" alt=""></a>
        <a href="https://riddle-store.com/%D8%B3%D8%AA%D9%8A%D9%85-%D8%B9%D9%85%D8%A7%D9%86%D9%8A/c1544433392"><img src="https://www10.0zz0.com/2023/04/01/21/892579582.jpeg" alt=""></a>
    </div>
    <div class="flexcont">
   
    <a href="https://riddle-store.com/%D8%B3%D8%AA%D9%8A%D9%85-%D8%A7%D9%88%D8%B1%D9%88%D8%A8%D9%8A/c1859589880"><img src="https://www10.0zz0.com/2023/04/01/21/863024749.jpeg" alt=""></a>
    <a href="https://riddle-store.com/%D8%B3%D8%AA%D9%8A%D9%85-%D8%A8%D8%AD%D8%B1%D9%8A%D9%86%D9%8A/c345154292"><img src="https://www10.0zz0.com/2023/04/01/21/525288405.jpeg" alt=""></a>
    <a href="https://riddle-store.com/%D8%B3%D8%AA%D9%8A%D9%85-%D8%AA%D8%B1%D9%83%D9%8A/c1127082238"><img src="https://www10.0zz0.com/2023/04/01/21/229028445.jpeg" alt=""></a>
</div>
        `;
  document.querySelector(".bg .masseg").style = `top: 20%;`;
};
//founction 4

document.querySelector(
  "#app > div.app-inner.flex.flex-col.min-h-screen.relative > section:nth-child(6) > div > div.grid.grid-cols-2.md\\:grid-cols-4.gap-2\\.5.md\\:gap-4.lg\\:gap-5.has-6-photos > div:nth-child(2)"
).onclick = function () {
  opnes();
  // خدمات التصميم
  document.querySelector(".bg .masseg .links").innerHTML = `
            <div class="flexcont">
                <a href="https://riddle-store.com/%D8%A7%D9%83%D8%B3-%D8%A8%D9%88%D9%83%D8%B3-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A/c2102416793"><img src="https://www4.0zz0.com/2023/04/01/22/369250068.jpeg" alt=""></a>
                <a href="https://riddle-store.com/%D8%A7%D9%83%D8%B3-%D8%A8%D9%88%D9%83%D8%B3-%D8%AE%D9%84%D9%8A%D8%AC%D9%8A/c421237659"><img src="https://www4.0zz0.com/2023/04/01/22/153176883.jpeg" alt=""></a>
                <a href="https://riddle-store.com/%D8%A7%D9%83%D8%B3-%D8%A8%D9%88%D9%83%D8%B3-%D8%A7%D9%85%D8%B1%D9%8A%D9%83%D9%8A/c1793110756"><img src="https://www4.0zz0.com/2023/04/01/22/947618478.jpeg" alt=""></a>
            </div>
            <div class="flexcont">
            <a href="https://riddle-store.com/%D8%A7%D9%83%D8%B3-%D8%A8%D9%88%D9%83%D8%B3-%D8%A7%D9%88%D8%B1%D9%88%D8%A8%D9%8A/c1154339301"><img src="https://www4.0zz0.com/2023/04/01/22/117638567.jpeg" alt=""></a>
        </div>

            `;
  document.querySelector(".bg .masseg").style = `top: 20%;`;
};
// code links
document.querySelector(
  "#app > div.app-inner.flex.flex-col.min-h-screen.relative > section:nth-child(6) > div > div.grid.grid-cols-2.md\\:grid-cols-4.gap-2\\.5.md\\:gap-4.lg\\:gap-5.has-6-photos > div:nth-child(2) > a"
).href = "#";
document.querySelector(
  "#app > div.app-inner.flex.flex-col.min-h-screen.relative > section:nth-child(7) > div > div > div:nth-child(4) > a"
).href = "#";
document.querySelector(
  "#app > div.app-inner.flex.flex-col.min-h-screen.relative > section:nth-child(6) > div > div.grid.grid-cols-2.md\\:grid-cols-4.gap-2\\.5.md\\:gap-4.lg\\:gap-5.has-6-photos > div:nth-child(1) > a"
).href = "#";
document.querySelector(
  "#app > div.app-inner.flex.flex-col.min-h-screen.relative > section:nth-child(6) > div > div.grid.grid-cols-2.md\\:grid-cols-4.gap-2\\.5.md\\:gap-4.lg\\:gap-5.has-6-photos > div:nth-child(5) > a"
).href = "#";
console.log("cheikhoumou salla Dev");
console.log("phone: +222 20523820");
console.log("web: https://www.cheikhoumou-portfolio.ml/");
console.log("http://wa.me/22220523820");
