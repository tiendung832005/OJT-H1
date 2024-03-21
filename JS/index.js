// Lấy dữ liệu trên local
const userLogin = JSON.parse(localStorage.getItem("userLogin")) ;

const userLoginElement = document.getElementById("userLogin");

if(userLogin){
    // Hiển thị tên user đang đăng nhập lên header
    userLoginElement.innerHTML = userLogin.userName;
}else{
    userLoginElement.innerHTML = ""
}

// Mảng chứa sản phẩm
// let products = [
//     {
//         image: "../asset/image/mercedes-c200-avantgarde-plus-2022-2023-2024-2025-ngoai-that-noi-that-mercedeshaxaco-com-vn-3.jpg",
//         name: "Mercedes C200 Avantgarde 2023",
//         price: "$90000 | $900/month",
//         id: 1,
//         sold: "2023",
//     },
//     {
//         image: "../asset/image/car2 glb 200 amg.jpg",
//         name: "Mercedes GLB 200 AMG 2022",
//         price: "$90000 | $900/month",
//         id: 2,
//         sold: "2022",
//     },
//     {
//         image: "../asset/image/car3 c300 amg.jpg",
//         name: "Mercedes C300 AMG 2021",
//         price: "$97000 | $978/month",
//         id: 3,
//         sold: "2021",
//     },
//     {
//         image: "../asset/image/car4 e200 exclusive.jpg",
//         name: "Mercedes E200 Exclusive 2023",
//         price: "$94000 | $960/month",
//         id: 4,
//         sold: "2023",
//     },
//     {
//         image: "../asset/image/car5 glc300 4matic.jpg",
//         name: "Mercedes GLC300 4Matic 2023",
//         price: "$95000 | $950/month",
//         id: 5,
//         sold: "2023",
//     },
//     {
//         image: "../asset/image/car6 maybach s680 4matic.jpg",
//         name: "Mercedes-Maybach S680 4Matic 2023",
//         price: "$600000 | $8000/month",
//         id: 6,
//         sold: "2023",
//     },
// ]

// localStorage.setItem("products", JSON.stringify(products));

// Lấy dữ liệu về đi render
let products = JSON.parse(localStorage.getItem("products"));



function renderProduct(){
    let element = "";
    for(let i=0;i < products.length;i++ ){
        element += 
        `<div class="box">
        <div class="box-img">
          <img
            src="${products[i].image}"
            alt=""
          />
        </div>
        <p>${products[i].sold}</p>
        <h3>${products[i].name}</h3>
        <h2>${products[i].price}</h2>
        <a href="#" class="btn">Mua </a>
        <br />
        <a href="#" class="btn">Thêm vào giỏ</a>
      </div>`
      
    }
    document.getElementById("products").innerHTML=element;
}
renderProduct();

// Function đi mua hàng
function addToCart(){
    // Đăng nhập mới cho đi mua hàng

    let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
    if(checkLogin==null){
        alert("Bạn phải đăng nhập để đi mua hàng");
        return;
    }
    console.log("đi mua hàng bthg");
    // Lấy giở hàng để đi mua
    let users = JSON.parse(localStorage.getItem("users"));
    for(let i=0;i<users.length;i++){
        if(users[i].id==checkLogin){
            console.log("Giỏ hàng của bạn sẽ là: ", users[i].cart);
            let product = JSON.parse(localStorage.getItem("products"));
            for(let i=0;i<product.length;i++){
                if(productId ==product[i].id){
                    console.log("111",product[i]);
                }
            }  
            break;
        }
    }
}