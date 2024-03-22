// Lấy dữ liệu trên local
const userLogin = JSON.parse(localStorage.getItem("userLogin")) ;

const userLoginElement = document.getElementById("userLogin");

if(userLogin){
    // Hiển thị tên user đang đăng nhập lên header
    userLoginElement.innerHTML = userLogin.userName;
}else{
    userLoginElement.innerHTML = ""
}

// // Mảng chứa sản phẩm
// let products = [
//     {
//         image: "../asset/image/mercedes-c200-avantgarde-plus-2022-2023-2024-2025-ngoai-that-noi-that-mercedeshaxaco-com-vn-3.jpg",
//         name: "Mercedes C200 Avantgarde 2023",
//         price: "$90000 | $900/month",
//         id: 1,
//         sold: "2023",
//       engine: "I4",
//       size: "4751 x 1890 x 1437",
//       wattage: "150kW [204hp] tại 6100 vòng/phút",
//       Categories: "Merrcedes, Mercedes C-class",
//       stock: 20,
//     },
//     {
//         image: "../asset/image/car2 glb 200 amg.jpg",
//         name: "Mercedes GLB 200 AMG 2022",
//         price: "$90000 | $900/month",
//         id: 2,
//         sold: "2022",
//       engine: "I4",
//         size: "4655 mm x 1840 mm x 1680 mm",
//       wattage: "163 hp tại 5.500 vòng/phút",
//       Categories: "Merrcedes, Mercedes C-class",
//       stock: 12,
//     },
//     {
//         image: "../asset/image/car3 c300 amg.jpg",
//         name: "Mercedes C300 AMG 2021",
//         price: "$97000 | $978/month",
//         id: 3,
//         sold: "2021",
//       engine: "I4 2.0L",
//         size: "4688 x 1810 x 1442 (mm)",
//       wattage: "255 Mã Lực",
//       Categories: "Merrcedes, Mercedes C-class",
//       stock: 11,
//     },
//     {
//         image: "../asset/image/car4 e200 exclusive.jpg",
//         name: "Mercedes E200 Exclusive 2023",
//         price: "$94000 | $960/month",
//         id: 4,
//         sold: "2023",
//       engine: "I4",
//         size: "4923x1852x1468 (mm)",
//       wattage: "145kW [197hp] tại 5500-6100 vòng/phút",
//       Categories: "Merrcedes, Mercedes C-class",
//       price1: "$94000 | $960/month",
//       stock: 5,
//     },
//     {
//         image: "../asset/image/car5 glc300 4matic.jpg",
//         name: "Mercedes GLC300 4Matic 2023",
//         price: "$95000 | $950/month",
//         id: 5,
//         sold: "2023",
//       engine: "I4",
//         size: " 4670 x 1900 x 1650 (mm)",
//       wattage: "190 kW [258 hp] tại 6100 vòng/phút",
//       Categories: "Merrcedes, Mercedes C-class",
//       stock: 3,
//     },
//     {
//         image: "../asset/image/car6 maybach s680 4matic.jpg",
//         name: "Mercedes-Maybach S680 4Matic 2023",
//         price: "$600000 | $8000/month",
//         id: 6,
//         sold: "2023",
//       engine: "V12",
//         size: "5469 x 1920 x1508 (mm)",
//       wattage: "450 kW [612 hp] tại 5500 vòng/phút",
//       Categories: "Merrcedes, Mercedes C-class",
//       stock: 2,
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
        <a href="#" class="btn payP">Mua </a>
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
    // for(let i=0;i<users.length;i++){
    //     if(users[i].id==checkLogin){
    //         console.log("Giỏ hàng của bạn sẽ là: ", users[i].cart);
    //         let product = JSON.parse(localStorage.getItem("products"));
    //         for(let i=0;i<product.length;i++){
    //             if(productId ==product[i].id){
    //                 console.log("111",product[i]);
    //             }
    //         }  
    //         break;
    //     }
    // }
}
for (let i = 0; i < products.length; i++) {
    const content = document.getElementsByClassName("payP")[i];
    content.addEventListener("click", load)
        function load() {
            localStorage.setItem('keyDetail',JSON.stringify(products[i].id));
            window.location.href = `./car1.html`;
        };
}