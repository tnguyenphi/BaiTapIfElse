/** Xuất 3 số theo thứ tự tăng dần
 * KHối 1:nhập vào 3 số nguyên bất kỳ
 * num1
 * num2
 * num3
 * 
 * Khối 2: So sánh các số nhập vào
 * if num1> num2 $$
 * Khối 3: Xuất thứ tự các số
 *
 * 
 */
function xapXepSo(){
    var a = document.getElementById("inputNum1").value;
    var b = document.getElementById("inputNum2").value;
    var c = document.getElementById("inputNum3").value;
    console.log(a,b,c);
    if(a >= b && b >= c){
       document.getElementById("txtNum").innerHTML = "kết quả là: " + c + "<" + b +"<" + a;
    }else if(a > c && c > b){
        document.getElementById("txtNum").innerHTML = "kết quả là: " + b + "<" + c +"<" + a;
    }else if(b>a && a > c){
        document.getElementById("txtNum").innerHTML = "kết quả là: " + c + "<" + a +"<" + b;
    }else if(b >c && c > a){
        document.getElementById("txtNum").innerHTML = "kết quả là: " + a + "<" + c +"<" + b;
    }else if(c >a && a > b){
        document.getElementById("txtNum").innerHTML = "kết quả là: " + b + "<" + a +"<" + c;
    }else if(c >b && b > a){
        document.getElementById("txtNum").innerHTML = "kết quả là: " + a + "<" + b +"<" + c;
    }
}
document.getElementById("btnNum").onclick = xapXepSo;


/** Bài tập 2 Gửi lời chào
 * Khối 1:
 * Chọn option của gia đình
 * bo
 * me
 * anh
 * em 
 * Khối 2:
 * Gán biến nếu giá trị ai thì sẽ gửi lời chào người đó
 * Khối 3:
 * Xuất Lời chào
 * 
 */

function guiLoiChao(){
    var loiChao = document.getElementById("exampleFormControlSelect1").value;
    if (loiChao == "B" ){
        document.getElementById("txtHello").innerHTML = "Xin Chào Bố";
    }
    else if (loiChao == "M" ){
        document.getElementById("txtHello").innerHTML = "Xin Chào Mẹ";
    }
    else if (loiChao == "A" ){
        document.getElementById("txtHello").innerHTML = "Xin Chào Anh Trai";
    }
    else if (loiChao == "E" ){
        document.getElementById("txtHello").innerHTML = "Xin Chào Em Gái";
    }
}
 document.getElementById("btnHello").onclick = guiLoiChao;



/** Bài Tập 3 Đếm số chẵn lẽ
 * Khối 1:Nhập vào ba số
 * so1
 * so2
 * so3
 * Khối 2:Tính toán
 *  so1%2;
 *  so2%2;
 *  so3%2;
 * Khối 3:
 * xuất biểu thức đếm số chẵn lẽ
 */

function Dem(){
    var so1 = document.getElementById("so1").value;
    var so2 = document.getElementById("so2").value;
    var so3 = document.getElementById("so3").value;
    var chiaso1 = so1%2;
    var chiaso2= so2%2;
    var chiaso3 = so3%2;
    var sochan = 0;
    var sole = 0;
    console.log(chiaso1,chiaso2,chiaso3);
    if(chiaso1 == 0){
        sochan++;
    }
    if(chiaso2 == 0){
        sochan++;
    }
    if(chiaso3 == 0){
        sochan++;
    }
    sole = 3 - sochan;
    document.getElementById("txtCount").innerHTML = "Có " + sochan +" số chẵn" + " và " + sole + " số lẻ";
}


 document.getElementById("btnCount").onclick = Dem;


 /** Bài tập 4: Dự đoán hình tam giác
  * Khối 1: nhập độ dài 3 cạnh của tam giác
  * canh1
  * canh2
  * canh3
  * Khối 2:
  * canh1=canh2=canh3: tam giác đều
  * canh1=canh2 canh1#canh3: tam giac cân
  * canh1*canh1 = canh2*canh2+canh3*canh3: tam giác vuông
  * Khối 3:
  * Dự đoán tam giác
  */

function tamGiac(){
    var canh1 = document.getElementById("canh1").value;
    var canh2 = document.getElementById("canh2").value;
    var canh3 = document.getElementById("canh3").value;
    var x = 0;
    var y = 0;
    var z = 0;
    x = canh1*canh1;
    y = canh2*canh2;
    z = canh3*canh3;
    if (canh1==canh2 && canh1==canh3){
        document.getElementById("txtTamGiac").innerHTML = "Tam Giác đều"
    }else if(canh1==canh2 && canh1 != canh3 ){
        document.getElementById("txtTamGiac").innerHTML = "Tam Giác Cân"
    } else if(canh2==canh3 && canh1 != canh3 ) {
        document.getElementById("txtTamGiac").innerHTML = "Tam Giác Cân"
    }else if(canh1==canh3 && canh1 != canh2){
        document.getElementById("txtTamGiac").innerHTML = "Tam Giác Cân"
    } else if(x==(y+z)){
        document.getElementById("txtTamGiac").innerHTML = "Tam Giác Vuông"
    } else if(y==(x+z)){
        document.getElementById("txtTamGiac").innerHTML = "Tam Giác Vuông"
    } else if(z==(x+y)){
        document.getElementById("txtTamGiac").innerHTML = "Tam Giác Vuông"
       
    }else{
        document.getElementById("txtTamGiac").innerHTML = "Tam Giác Loại Khác" 
    }
         
}



  document.getElementById("btnTamGiac").onclick = tamGiac;