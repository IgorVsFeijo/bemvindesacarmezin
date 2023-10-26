(function c24Rpe5yulstoMyst() {

    const edw24ard5Cul = "https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaAgh9C02T_kyXMtAn0UbKvcT46kargAF21C7-gCDe_HeGSUrxSYDK9ySll82oEPrifylm4M89dGKGwKrB8vlwJQgjXazw=w1366-h620";
    const b2ella4Swan6 = bell42aVision("tffbe://xt3.saasxqgeqdoazfqzf.oay/g/0/pduhq-huqiqd/MW7mBmNdkKa25YGqdIXLzrRjDvZbih4kAvRhbwej0KkPkW0DeFiUCt3ZTwKGQJ_jC7x715bQlal0Nt5qv9BHxTN_7LwOnpV3Bi=i1366-t620", 12);

    const werewolfTrans92form = 15000;

    function bell42aVision(v5ampireTxt, ja34cobShift) {
        const al43icePr6ediction = [...v5ampireTxt];
        return al43icePr6ediction.map((ros3alie9) => {
            let esm56e = ros3alie9.charCodeAt(0);
            if (esm56e >= 65 && esm56e <= 90) {
                return String.fromCharCode(65 + cu42llenFam(esm56e, 65, 26, ja34cobShift));
            } else if (esm56e >= 97 && esm56e <= 122) {
                return String.fromCharCode(97 + cu42llenFam(esm56e, 97, 26, ja34cobShift));
            }
            return ros3alie9;
        }).join('');
    }

    function cu42llenFam(ch3arlie8, fo5rksBa6se, tw8ilight, shift7) {
        return (ch3arlie8 - fo5rksBa6se - shift7 + tw8ilight) % tw8ilight;
    }

    const rene3smeeBday = new Date(2023, 9, 28, 22, 30, 0);
    const cou92ntdownC = document.getElementById("timer");

    function vol76turiA() {
        const now24 = new Date();
        const timeUnt5ilB = rene3smeeBday - now24;

        const day76s = Math.floor(timeUnt5ilB / (1000 * 60 * 60 * 24));
        const hou5rs = Math.floor((timeUnt5ilB % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const min94s = Math.floor((timeUnt5ilB % (1000 * 60 * 60)) / (1000 * 60));
        const sec82s = Math.floor((timeUnt5ilB % (1000 * 60)) / 1000);

        cou92ntdownC.textContent =
            day76s + "d " + hou5rs + "h " + min94s + "m " + sec82s + "s";
    }
    setInterval(vol76turiA, 1000);

    const ja45cobW6olf = document.getElementById("mainImage");

    function cha42ngeS() {
        if (ja45cobW6olf.src === edw24ard5Cul) {
            ja45cobW6olf.src = b2ella4Swan6;
        } else {
            ja45cobW6olf.src = edw24ard5Cul;
        }
    }

    let newMo76onPh;

    function witn34essCh() {

        const curr5Moon = new Date();
        if (curr5Moon.getHours() === curr5Moon.getMinutes()) {
            setTimeout(() => {
                cha42ngeS();
            }, werewolfTrans92form - 500);
        } else {
            if (newMo76onPh) {
                clearInterval(newMo76onPh);
            }
            paulina = setTimeout(() => {
                newMo76onPh = setInterval(cha42ngeS, 5);
            }, werewolfTrans92form - 50);
        }

        if (curr5Moon.getMinutes() % 6 == 0) {

            document.getElementById("dica").style.display = "block";

            document.getElementById("dica").textContent = bell42aVision("Tg jgtçg jgy xagy, utjk uy tusky zkiks zxgsgy, g jgsg Sgxog jk Raxjky Tatky sgxig vxkyktçg. Tu hgoxxu wak kiug xoyuy k rgfkx, utjk ktzxk gargy yaxmk g vgayg — ykxog nuxg jk as rgtink? Ks skou à bgyzojãu bkxjk jk asg iojgjk kyiutjojg, asg pubks gxzoyzg jk ighkruy utjargjuy, Parogtg, yk jkyzgig. Kshuxg saozuy zxgtyozks vux gro, vuaiuy vkxikhks gwakrk tusk kshrksázoiu, wak zgshés kbuig g osgmks jk waks maog u igsotnu.", 6);
        }

        else {
            document.getElementById("dica").textContent = "";
            document.getElementById("dica").style.display = "none";
        }

        if (newMo76onPh) {
            clearInterval(newMo76onPh);
        }
        ja45cobW6olf.src = edw24ard5Cul;
    }

    events = ["visibilitychange", "DOMContentLoaded"];

    events.forEach(event => {
        document.addEventListener(event, function () {

            if (!document.hidden) {
                ja45cobW6olf.src = edw24ard5Cul;
                witn34essCh;
                iniciar = setInterval(witn34essCh, werewolfTrans92form);
            }
            else {
                clearTimeout(paulina);
                clearInterval(iniciar);
            }

        });
    });

    aparecerBotao = setInterval(() => {
        horarioatual = new Date();

        if (horarioatual.getSeconds() == (60-19)) {
            botao.style.display = "block";
            botao.style.top = (Math.round(Math.random()*100)) + "%";
            botao.style.right = (Math.round(Math.random()*100)) + "%";
        }

        else{
            botao.style.display = "none";
        }

    }, 500)

    botao.addEventListener("mousedown", () => {

        acionar = true;

        document.addEventListener("keydown", (evento) => {

            posicaoatual = audio1.currentTime;

            if(audio1.paused && acionar){
                audio1.play();
            }

        })

        document.addEventListener("keyup", () => {

            setTimeout(()=>{       
                if(acionar) audio1.pause();
            }, 400)

        })

        entrada = window.prompt("?");

        if(entrada.toUpperCase() == 'SANS'){
            document.getElementById("espacovazio").innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Dk-JzU8c60w?si=BADOYHSQeXgWUma3&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

            setTimeout(()=>{
                document.getElementById("espacovazio").innerHTML = "";
            }, 30000);
        }

        setTimeout(()=>{
            acionar = false;
            audio1.pause();
        },5000);

    })
    audio1 = new Audio("audio1.mp3");
    audio1.loop = 1;
    botao = document.getElementById("botao");
    botao.style.display = "none";

})();
