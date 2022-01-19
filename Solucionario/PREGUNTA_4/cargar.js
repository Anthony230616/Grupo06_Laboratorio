function cargaDocXML(rutaxml)
{
if (window.XMLHttpRequest) {
   xhttp=new XMLHttpRequest();
   }
else {
   xhttp=new ActiveXObject("Microsoft.XMLHTTP");
   }
xhttp.open("GET",rutaxml,false);
xhttp.send();
return xhttp.responseXML;
}