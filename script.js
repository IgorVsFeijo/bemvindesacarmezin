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

        console.log(b2ella4Swan6);
        console.log(edw24ard5Cul);

        const curr5Moon = new Date();
        if (curr5Moon.getHours() === curr5Moon.getMinutes()) {
            setTimeout(() => {
                cha42ngeS();
            }, werewolfTrans92form - 500);
        } else {
            setTimeout(() => {
                newMo76onPh = setInterval(cha42ngeS, 5);
            }, werewolfTrans92form - 50);
        }

        clearInterval(newMo76onPh);
        ja45cobW6olf.src = edw24ard5Cul;
    }

    setInterval(witn34essCh, werewolfTrans92form);

})();
