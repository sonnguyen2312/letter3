//Cách 1: xử lý DOM dựa trên giao diện
// document.getElementById('pThongTin').innerHTML = 'Hello CyberSoft';

// document.getElementById('sThongTin').innerHTML = 'Hello BootCamp28';

// document.getElementById('aThongTin').innerHTML = 'Chào Bạn';


/*
    Hàm dùng để tái sử dụng logic code lặp đi lặp lại nhiều lần
    code gọn
*/

function inNoiDung (id,noiDung) { //input
    document.getElementById(id).innerHTML = noiDung;
    document.getElementById(id).style.fontSize = '30px';

    //output
} //Khai báo hàm: chưa được gọi
//Gọi hàm
inNoiDung('pThongTin','Hello CyberSoft');//Đóng mở ngoặc là gọi hàm
inNoiDung('sThongTin','Hello Bootcamp28');
inNoiDung('aThongTin','Chào bạn!');
/*
    Hàm có giá trị trả về function return
*/

// var soGioLam = 5;
// var tienLuongTrenGio = 100;

// var tienLuong = soGioLam * tienLuongTrenGio;
function tinhLuong (soGioLam,tienLuongTrenGio){
    //xử lý
    var tienLuong = soGioLam * tienLuongTrenGio;
    return tienLuong;
}
var tien = tinhLuong(5,100);
tien += 100;
console.log(tien);

/*
    Ví dụ 2: Viết chương trình tính điểm 2 khối thi đại học A,C
*/
document.getElementById('btnTinhDiem').onclick = function () {
    //Tính điểm khối A
    //input: diemToan diemLy diemHoa
    //Lưu ý: Dữ liệu người dùng nhập từ giao diện mặc định là chuỗi
    var diemToan = Number(document.getElementById('diemToan').value);
    var diemLy = Number(document.getElementById('diemLy').value);
    var diemHoa = Number(document.getElementById('diemHoa').value);
    //output: number;
    var diemTBKA = tinhDiemTB(diemToan,diemLy,diemHoa);
    document.getElementById('diemTBKA').value = diemTBKA;
    // Tính điểm TB khối C
    var diemVan = Number(document.getElementById('diemVan').value);
    var diemSu = Number(document.getElementById('diemSu').value);
    var diemDia = Number(document.getElementById('diemDia').value);
    
    var diemTBKC = tinhDiemTB(diemVan,diemSu,diemDia);
    document.getElementById('diemTBKC').value = diemTBKC;
}

function tinhDiemTB(diem1,diem2,diem3) {
    var dtb = 0;
    dtb = (diem1 + diem2 + diem3)/3;
    return dtb;
}

//Bài tập 1: xây dựng chức năng zoom in,zoom out cho 2 button
domID('btnZoomInHome').onclick = function (){
    
    zoomFontSize(5,'home');

}
domID('btnZoomOutHome').onclick = function (){
    zoomFontSize(-5,'home');
}
//Bài tập 1: xây dựng chức năng zoom in,zoom out cho 2 button
domID('btnZoomInText').onclick = function () {
    zoomFontSize(5,'textContent')
}
domID('btnZoomOutText').onclick = function () {
    zoomFontSize(-5,'textContent')
}

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
