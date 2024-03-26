const shopee = document.getElementsByClassName("shopee")[0];

// Gán sự kiện click cho thẻ div
shopee.addEventListener("click", load);
function load() {
  window.location.href = "../index.html";
}

//lấy dữ liệu về
let productADM = JSON.parse(localStorage.getItem("products"));

// Lặp qua danh sách sản phẩm và hiển thị chúng
for (let i = 0; i < productADM.length; i++) {
  document.getElementById("ADMproduct").innerHTML += `
    <tr>
        <td>${productADM[i].id}</td>
        <td>${productADM[i].name}</td>
        <td><img src="${productADM[i].image}" alt="" width="150px"></td>
        <td>${productADM[i].price}</td>
        <td>${productADM[i].stock}</td>
        <td class="editAll"><button class="button edit" data-id="${productADM[i].id}">Sửa</button> <button class="button delete" data-id="${productADM[i].id}">Xóa</button></td>
    </tr>
    `;
}
document
  .getElementById("addProductButton")
  .addEventListener("click", function () {
    let newProduct = {
      id: document.getElementById("productId").value,
      name: document.getElementById("productName").value,
      image: document.getElementById("productImage").value,
      price: document.getElementById("productPrice").value,
      stock: document.getElementById("productStock").value,
    };

    productADM.push(newProduct); // Thêm sản phẩm mới vào danh sách
    updateProductList(); // Cập nhật danh sách sản phẩm
    localStorage.setItem("products", JSON.stringify(productADM)); // Lưu danh sách vào local storage
  });

// Xóa sản phẩm
document
  .getElementById("ADMproduct")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
      let productId = event.target.getAttribute("data-id");
      productADM = productADM.filter((product) => product.id !== productId); // Lọc bỏ sản phẩm có ID tương ứng
      updateProductList(); // Cập nhật danh sách sản phẩm
      localStorage.setItem("products", JSON.stringify(productADM)); // Lưu danh sách vào local storage
    }
  });

// Cập nhật danh sách sản phẩm
function updateProductList() {
  let tableBody = document.getElementById("ADMproduct");
  tableBody.innerHTML = ""; // Xóa nội dung cũ

  for (let i = 0; i < productADM.length; i++) {
    tableBody.innerHTML += `
            <tr>
                <td>${productADM[i].id}</td>
                <td>${productADM[i].name}</td>
                <td><img src="${productADM[i].image}" alt="" width="150px"></td>
                <td>${productADM[i].price}</td>
                <td>${productADM[i].stock}</td>
                <td class="editAll"><button class="button edit" data-id="${productADM[i].id}">Sửa</button> <button class="button delete" data-id="${productADM[i].id}">Xóa</button></td>
            </tr>
        `;
  }
}
/* nút bấm về home */
let comeback = document.getElementsByClassName("topHeader")[0];
comeback.addEventListener("click", back);
function back() {
  window.location.href = "./index.html";
}
