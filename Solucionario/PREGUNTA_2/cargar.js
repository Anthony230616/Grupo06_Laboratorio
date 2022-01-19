    xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function(){
        document.getElementById("contenido").innerHTML=this.responseText;
        this.responseText;
    }
    xmlhttp.open("GET", "ejemplo.xml", false);
    xmlhttp.send();
