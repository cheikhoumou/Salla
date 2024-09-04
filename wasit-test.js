    function seveddata(){
        document.querySelector("div > div.wajiha").style = `animation: fadeout 0.8s ease-in both;display:none;`;
        document.querySelector("div.sendbox").style = `display: block;animation: fadeIn 1.3s ease-in both;`;
        document.querySelector("div.sendbox > div.bloking1 > div").style = `transform: scale(0);display: none;`;
        document.querySelector("div.sendbox > div.bloking2").style = `display: block;animation: fadeIn 1.3s ease-in both;`;
        document.querySelector(".myimg img").style = `animation: fadeout 0.6s ease-in both; display:none;`
        document.querySelector("div.sendbox > div.progriss > span:nth-child(1)").style = `background: #4434c7;`;
        document.querySelector("div.sendbox > div.progriss > span:nth-child(2)").style = `background: #4434c7;`;
        document.querySelector("div.sendbox > div.progriss > span:nth-child(3)").style = `background: #4434c7;`;
        }
