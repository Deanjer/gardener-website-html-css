function gone1(){
    toggleDisplay(document.getElementById("number2"));
    toggleDisplay(document.getElementById("number3"));
    toggleDisplay(document.getElementById("number4"));
    align();

    if (document.getElementById('number1').style.height == "1000px"){
        console.log("gone1 done");
        document.getElementById('number1').style.height = "500px";
    document.getElementById('number1').style.width = "500px";
    }else{
        document.getElementById('number1').style.height = "1000px";
    document.getElementById('number1').style.width = "1000px";
    }
    // document.getElementsByClassName('projects').style.align-items == "center";
    // document.getElementsByClassName('projects').style.justify-content == "center";
};
function gone2(){
    toggleDisplay(document.getElementById("number1"));
    toggleDisplay(document.getElementById("number3"));
    toggleDisplay(document.getElementById("number4"));
    align();

    if (document.getElementById('number2').style.height == "1000px"){
        console.log("gone2 done");
        document.getElementById('number2').style.height = "500px";
    document.getElementById('number2').style.width = "500px";
    }else{
        document.getElementById('number2').style.height = "1000px";
    document.getElementById('number2').style.width = "1000px";
    }
    // document.getElementsByClassName('projects').style.align-items == "center";
    // document.getElementsByClassName('projects').style.justify-content == "center";
};
function gone3(){
    toggleDisplay(document.getElementById("number1"));
    toggleDisplay(document.getElementById("number2"));
    toggleDisplay(document.getElementById("number4"));
    align();

    if (document.getElementById('number3').style.height == "1000px"){
        console.log("gone3 done");
        document.getElementById('number3').style.height = "500px";
    document.getElementById('number3').style.width = "500px";
    }else{
        document.getElementById('number3').style.height = "1000px";
    document.getElementById('number3').style.width = "1000px";
    // }
    // document.getElementsByClassName('projects').style.align-items == "center";
    // document.getElementsByClassName('projects').style.justify-content == "center";
};
function gone4(){
    toggleDisplay(document.getElementById("number1"));
    toggleDisplay(document.getElementById("number2"));
    toggleDisplay(document.getElementById("number3"));
    align();

    if (document.getElementById('number4').style.height == "1000px"){
        console.log("gone4 done");
        document.getElementById('number4').style.height = "500px";
    document.getElementById('number4').style.width = "500px";
    }else{
    document.getElementById('number4').style.height = "1000px";
    document.getElementById('number4').style.width = "1000px";
    }
};

function toggleDisplay(target){
    target.style.display = 
    (target.style.display == 'none') ?
    'block' :
    'none' 
} 

// function align(){
//     const projects = document.getElementsByClassName("projects");
//     for(let i = 0; i < projects.length; i++){
//         console.log(projects(1).style.display);
//         projects(1).style.display = "flex";
//         projects(i).style.justifyContent = "center";
//         projects(i).style.alignItems = "center";
//     };

    // if (document.getElementById('number4').style.height = "1000px"){
    //     console.log("gone4 done");
    //     document.getElementById('number4').style.height = "500px";
    // document.getElementById('number4').style.width = "500px";
    // }else{
    // document.getElementById('number4').style.height = "1000px";
    // document.getElementById('number4').style.width = "1000px";
    // }
};