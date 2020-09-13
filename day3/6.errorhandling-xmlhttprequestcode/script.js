xhttp=new XMLHttpRequest();
doc_name = 'sample.html';
xhttp.open("GET",doc_name,false);
xhttp.send();

if (xhttp.status === 200 || xhttp.status === 304) {
    xmlDoc=xhttp.responseXML;
    if(xmlDoc==null)
    {
       xmlDoc=loadXMLDoc(defaultXml);
    }
}