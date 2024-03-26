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
    document.getElementById("ADMproduct").innerHTML += 
    `
    <tr>
        <td>${productADM[i].id}</td>
        <td>${productADM[i].name}</td>
        <td><img src="${productADM[i].image}" alt="" width="150px"></td>
        <td>${productADM[i].price}</td>
        <td>${productADM[i].stock}</td>
        <td class="editAll"><button class="button edit" data-id="${productADM[i].id}">Sửa</button> <button class="button delete" data-id="${productADM[i].id}">Xóa</button></td>
    </tr>
    `
}

// Lấy danh sách các nút sửa và xóa

const deleteButtons = document.querySelectorAll('.delete');



// Lặp qua các nút xóa và gán sự kiện click
deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Lấy ID sản phẩm tương ứng từ thuộc tính data-id của nút
        const productId = parseInt(button.getAttribute('data-id'));
        // Xác nhận xóa sản phẩm và thực hiện hành động xóa (ví dụ: xác nhận rồi xóa sản phẩm từ danh sách và cập nhật lại giao diện)
        if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
            // Xử lý xóa sản phẩm ở đây
            // Sau đó cập nhật lại danh sách sản phẩm và giao diện
        }
    });
});

/* nút bấm về home */
let comeback = document.getElementsByClassName("topHeader")[0];
comeback.addEventListener("click", back);
function back() {
    window.location.href = "./index.html";
}
