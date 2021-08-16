function reset(){
    document.getElementById("one").className = "spacer";
    document.getElementById("two").className = "ib";
    document.getElementById("three").className = "spacel";
    document.getElementById("four").className = "spacer";
    document.getElementById("five").className = "ib";
    document.getElementById("six").className = "spacel";
    document.getElementById("seven").className = "spacer";
    document.getElementById("eight").className = "ib";
    document.getElementById("nine").className = "spacel";
    document.getElementById("pone").className = "p";
    document.getElementById("ptwo").className = "p";
    document.getElementById("pthree").className = "p";
    document.getElementById("pfour").className = "p";
    document.getElementById("pfive").className = "p";
    document.getElementById("psix").className = "p";
    document.getElementById("pseven").className = "p";
    document.getElementById("peight").className = "p";
    document.getElementById("pnine").className = "p";
}

function judg(){
    reset();
    var num = Number(document.getElementById("box").textContent);
if(num != 0 && document.getElementById("box").textContent != ""){    
    document.getElementById("one").className = "signr";
    document.getElementById("pone").className = "signp";
    let xa = (num % 2);
    if(xa == 0){
        document.getElementById("ptwo").className = "signp";
        document.getElementById("two").className = "signc";
    }
    let xb = (num % 3);
    if(xb == 0){
        document.getElementById("three").className = "signl";
        document.getElementById("pthree").className = "signp";
    }
    let xc = (num % 4);
    if(xc == 0){
        document.getElementById("four").className = "signr";
        document.getElementById("pfour").className = "signp";
    }
    let xd = (num % 5);
    if(xd == 0){
        document.getElementById("five").className = "signc";
        document.getElementById("pfive").className = "signp";
    }
    let xe = (num % 6);
    if(xe == 0){
        document.getElementById("six").className = "signl";
        document.getElementById("psix").className = "signp";
    }
    let xf = (num % 7);
    if(xf == 0){
        document.getElementById("seven").className = "signr";
        document.getElementById("pseven").className = "signp";
    }
    let xg = (num % 8);
    if(xg == 0){
        document.getElementById("eight").className = "signc";
        document.getElementById("peight").className = "signp";
    }
    let xh = (num % 9);
    if(xh == 0){
        document.getElementById("nine").className = "signl";
        document.getElementById("pnine").className = "signp";
    }
}};

function autoLink()
{location.href="https://NazoNeverland.github.io/lastc/";}







document.getElementById("one").addEventListener("click", function() {
    if(document.getElementById("box").textContent.indexOf('1') == -1){
    var a = "1";
    let T = document.getElementById("box").textContent + a;
    document.getElementById("box").textContent = T;
    let index = document.getElementById("box").textContent.length;
    if(index > 4){
    var result = document.getElementById("box").textContent.substr(0,4);
    document.getElementById("box").textContent = result;}
    }
    judg();
});

document.getElementById("two").addEventListener("click", function() {
    if(document.getElementById("box").textContent.indexOf('2') == -1){
    var b = "2"
    let T = document.getElementById("box").textContent + b;
    document.getElementById("box").textContent = T;
    let index = document.getElementById("box").textContent.length;
    if(index > 4){
    var result = document.getElementById("box").textContent.substr(0,4);
    document.getElementById("box").textContent = result;}
}
judg();
});

document.getElementById("three").addEventListener("click", function() {
    if(document.getElementById("box").textContent.indexOf('3') == -1){
    var c = "3";
    let T = document.getElementById("box").textContent + c;
    document.getElementById("box").textContent = T;
    let index = document.getElementById("box").textContent.length;
    if(index > 4){
    var result = document.getElementById("box").textContent.substr(0,4);
    document.getElementById("box").textContent = result;}
    }
    judg();
});

document.getElementById("four").addEventListener("click", function() {
    if(document.getElementById("box").textContent.indexOf('4') == -1){
    var d = "4";
    let T = document.getElementById("box").textContent + d;
    document.getElementById("box").textContent = T;
    let index = document.getElementById("box").textContent.length;
    if(index > 4){
    var result = document.getElementById("box").textContent.substr(0,4);
    document.getElementById("box").textContent = result;}
    }
    judg();
});

document.getElementById("five").addEventListener("click", function() {
    if(document.getElementById("box").textContent.indexOf('5') == -1){
    var e = "5";
    let T = document.getElementById("box").textContent + e;
    document.getElementById("box").textContent = T;
    let index = document.getElementById("box").textContent.length;
    if(index > 4){
    var result = document.getElementById("box").textContent.substr(0,4);
    document.getElementById("box").textContent = result;}
    }
    judg();
});

document.getElementById("six").addEventListener("click", function() {
    if(document.getElementById("box").textContent.indexOf('6') == -1){
    var f = "6";
    let T = document.getElementById("box").textContent + f;
    document.getElementById("box").textContent = T;
    let index = document.getElementById("box").textContent.length;
    if(index > 4){
    var result = document.getElementById("box").textContent.substr(0,4);
    document.getElementById("box").textContent = result;}
    }
    judg();
});

document.getElementById("seven").addEventListener("click", function() {
    if(document.getElementById("box").textContent.indexOf('7') == -1){
    var g = "7";
    let T = document.getElementById("box").textContent + g;
    document.getElementById("box").textContent = T;
    let index = document.getElementById("box").textContent.length;
    if(index > 4){
    var result = document.getElementById("box").textContent.substr(0,4);
    document.getElementById("box").textContent = result;}
    }
    judg();
});

document.getElementById("eight").addEventListener("click", function() {
    if(document.getElementById("box").textContent.indexOf('8') == -1){
    var h = "8";
    let T = document.getElementById("box").textContent + h;
    document.getElementById("box").textContent = T;
    let index = document.getElementById("box").textContent.length;
    if(index > 4){
    var result = document.getElementById("box").textContent.substr(0,4);
    document.getElementById("box").textContent = result;}
    }
    judg();
});

document.getElementById("nine").addEventListener("click", function() {
    if(document.getElementById("box").textContent.indexOf('9') == -1){
    var i = "9";
    let T = document.getElementById("box").textContent + i;
    document.getElementById("box").textContent = T;
    let index = document.getElementById("box").textContent.length;
    if(index > 4){
    var result = document.getElementById("box").textContent.substr(0,4);
    document.getElementById("box").textContent = result;}
    }
    judg();
});

document.getElementById("zero").addEventListener("click", function() {
    if(document.getElementById("box").textContent.indexOf('0') == -1){
    var j = "0";
    let T = document.getElementById("box").textContent + j;
    document.getElementById("box").textContent = T;
    let index = document.getElementById("box").textContent.length;
    if(index > 4){
    var result = document.getElementById("box").textContent.substr(0,4);
    document.getElementById("box").textContent = result;}
    var H = document.getElementById("box").textContent.substr(0,1);
    if(H == "0"){
        var He = document.getElementById("box").textContent.substr(1,4);
        document.getElementById("box").textContent = He;
    }
    var STR = document.getElementById("box").textContent;

    if(STR == "7560"){
    setTimeout("autoLink()",1000);
    }
}
judg();
});

document.getElementById("reset").addEventListener("click", function() {
    reset();
    document.getElementById("box").textContent = "";
});
