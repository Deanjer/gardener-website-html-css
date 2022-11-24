function toggleDisplay(target){
    target.style.display = 
    (target.style.display == 'none') ?
    'flex' :
    'none' 
} 
function toggleText(target){
    target.style.display = 
    (target.style.display == 'flex') ?
    'none' :
    'flex' 
} 


function gone1(){
    toggleDisplay(document.getElementById("number2"));
    toggleDisplay(document.getElementById("number3"));
    toggleDisplay(document.getElementById("number4"));
    toggleText(document.getElementById("hidden1"));
    toggleText(document.getElementById("hidden2"));

    if (document.getElementById('number1').style.height == "1000px"){
        document.getElementById('number1').style.height = "500px";
        document.getElementById('number1').style.width = "500px";
    }
    else{
        document.getElementById('number1').style.height = "1000px";
        document.getElementById('number1').style.width = "1000px";
    }

    // if (document.getElementById('number1').style.justifyContent == "flex-start"){
    //     document.getElementById('number1').style.justifyContent = "center";
    //     document.getElementById('number1').style.alignItems = "center";
    // }
    // else{
    //     document.getElementById('number1').style.justifyContent = "flex-start";
    //     document.getElementById('number1').style.alignItems = "flex-start";
    //}

    if (document.getElementById("img1").style.height == "100%"){
        document.getElementById("img1").style.height = "200%";
    }else{
        document.getElementById("img1").style.height = "100%";
    }

};
function gone2(){
    toggleDisplay(document.getElementById("number1"));
    toggleDisplay(document.getElementById("number3"));
    toggleDisplay(document.getElementById("number4"));
    toggleText(document.getElementById("hidden3"));
    toggleText(document.getElementById("hidden4"));

    if (document.getElementById('number2').style.height == "1000px"){
        document.getElementById('number2').style.height = "500px";
        document.getElementById('number2').style.width = "500px";
    }else{
        document.getElementById('number2').style.height = "1000px";
        document.getElementById('number2').style.width = "1000px";
    }
    // if (document.getElementById('number2').style.justifyContent == "flex-start"){
    //     document.getElementById('number2').style.justifyContent = "center";
    //     document.getElementById('number2').style.alignItems = "center";
    // }
    // else{
    //     document.getElementById('number2').style.justifyContent = "flex-start";
    //     document.getElementById('number2').style.alignItems = "flex-start";
    // }
    if (document.getElementById("img2").style.height == "100%"){
        document.getElementById("img2").style.height = "200%";
    }else{
        document.getElementById("img2").style.height = "100%";
    }
};
function gone3(){
    toggleDisplay(document.getElementById("number1"));
    toggleDisplay(document.getElementById("number2"));
    toggleDisplay(document.getElementById("number4"));
    toggleText(document.getElementById("hidden5"));
    toggleText(document.getElementById("hidden6"));

    if (document.getElementById('number3').style.height == "1000px"){
        document.getElementById('number3').style.height = "500px";
        document.getElementById('number3').style.width = "500px";
    }else{
        document.getElementById('number3').style.height = "1000px";
        document.getElementById('number3').style.width = "1000px";
    }
    // if (document.getElementById('number3').style.justifyContent == "flex-start"){
    //     document.getElementById('number3').style.justifyContent = "center";
    //     document.getElementById('number3').style.alignItems = "center";
    // }
    // else{
    //     document.getElementById('number3').style.justifyContent = "flex-start";
    //     document.getElementById('number3').style.alignItems = "flex-start";
    // }
    if (document.getElementById("img3").style.height == "100%"){
        document.getElementById("img3").style.height = "200%";
    }else{
        document.getElementById("img3").style.height = "100%";
    }
};
function gone4(){
    toggleDisplay(document.getElementById("number1"));
    toggleDisplay(document.getElementById("number2"));
    toggleDisplay(document.getElementById("number3"));
    toggleText(document.getElementById("hidden7"));
    toggleText(document.getElementById("hidden8"));

    if (document.getElementById('number4').style.height == "1000px"){
        document.getElementById('number4').style.height = "500px";
        document.getElementById('number4').style.width = "500px";
    }else{
        document.getElementById('number4').style.height = "1000px";
        document.getElementById('number4').style.width = "1000px";
    }
    // if (document.getElementById('number4').style.justifyContent == "flex-start"){
    //     document.getElementById('number4').style.justifyContent = "center";
    //     document.getElementById('number4').style.alignItems = "center";
    // }
    // else{
    //     document.getElementById('number4').style.justifyContent = "flex-start";
    //     document.getElementById('number4').style.alignItems = "flex-start";
    // }

    if (document.getElementById("img4").style.height == "100%"){
        document.getElementById("img4").style.height = "200%";
    }else{
        document.getElementById("img4").style.height = "100%";
    }
};



