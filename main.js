function changeColor(red, green, blue, type, elem){
    rgb = "rgb("+red.toString()+", "+green.toString()+", "+blue.toString()+")";
    if(typeof elem == 'number'){
        document.getElementsByTagName(type)[elem].style.backgroundColor = rgb;
    }
    else{
        for(i=0; i<document.getElementsByTagName(type).length; i++){
            document.getElementsByTagName(type)[i].style.backgroundColor = rgb;
        }
    }
}
export {changeColor as default};