function htcss() {
    window.txt.style = 'display: none;';
    window.txtcss.style = 'display: block;';
    window.bu1.style = ' border-left: 4px solid rgb(42 198 69);';
    window.bu2.style = 'border-left: 4px solid #fe5e54';
    // window.js.style ='display: none;';
}
function cssht() {
    window.txt.style = 'display: block;';
    window.txtcss.style = 'display: none;';
    window.bu2.style = ' border-left: 4px solid rgb(42 198 69);';
    window.bu1.style = 'border-left: 4px solid #fe5e54';
    // window.js.style ='display: none;';
}
// function jsht(){
//     window.js.style ='display: block;';
//     window.txtcss.style = 'display: none;';
//     window.txt.style ='display: none;';
// }
// font-family: "Cairo", sans-serif;
function WEB() {
    var tex = '<link href="../font/font.css" rel="stylesheet"><style>body{margin: 0;} </style><div id="t" style="padding: 10px;height: 20px;line-height: 20px;background: #282c34;color: #ffc400;font-family:sans-serif;font-weight:bold;"><a href="code-Editor.html" style="font-size: 20px;color:rgb(255 196 0);text-decoration:none;"> ↩ </a> </div>' + window.txt.value;
    // var scr = '<script>window.t.innerHTML = document.getElementsByTagName(title).innerHTML;';
    var css3 = "<style>" + document.getElementById('txtcss').value + "</style>";
    //   js = '<script>'+ document.getElementById('js').value;
    document.write(css3 + tex);
    window.t.innerHTML += document.title;
}
function save() {
    var x = window.txt.value,
        y = window.txtcss.value;
    //  j = window.js.value;
    localStorage.setItem('codehtml', x);
    localStorage.setItem('codecss', y);
    //   localStorage.setItem('js',j)

    window.seve.style = ' display: block;';
    function s1() {
        window.seve.style = ' display: none;';
    }
    setTimeout(s1, 4100);
}
function plus() {
    document.getElementById("txt").style = "font-size: 15px;";
    document.getElementById("txtcss").style = "font-size: 15px;display: none;";

}
function plus2() {
    document.getElementById("txt").style = "font-size: 20px;";
    document.getElementById("txtcss").style = "font-size: 20px;display: none;";

}

function moih() {
    document.getElementById("txt").style = "font-size: 13px;";
    document.getElementById("txtcss").style = "font-size: 13px;display: none;";

}
//width: 100%;

if (localStorage.getItem('codehtml') == null) {
    console.log('mm');
} else {
    window.txt.value = localStorage.getItem('codehtml');
    window.txtcss.value = localStorage.getItem('codecss');
    // window.js.value = localStorage.getItem('js');
}
// function butcode(){


// }
function addcode() {
    window.but.style = 'transition: all 0.8s;opacity: 1;right: -5px;';
}
window.but. ondblclick = function () {
    window.but.style = 'transition: all 0.8s;opacity: 0.4;right: -150px;';
}
