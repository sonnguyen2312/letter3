function zoomFontSize(size,id){
    var tag = domID(id);
    var fontSize = Number(tag.style.fontSize.replace('px',''));
    fontSize += size;
    tag.style.fontSize = fontSize + 'px';
}
//Viết chương trình trả về 1 thẻ sau khi DOM
function domID(id){
    return document.getElementById(id);
}
