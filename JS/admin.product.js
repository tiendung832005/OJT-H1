var customers = []; // Khởi tạo mảng lưu trữ thông tin khách hàng
// Hàm thêm khách hàng mới
function addCustomer() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    // Kiểm tra xem các trường nhập liệu có đều được điền đầy đủ không
    if (name === "" || email === "" || address === "") {
        alert("Vui lòng điền đầy đủ thông tin của khách hàng.");
        return;
    }

    // Tạo một đối tượng mới để lưu thông tin khách hàng
    var customer = {
        id: generateId(),
        name: name,
        email: email,
        address: address
    };

    // Thêm khách hàng vào mảng customers
    customers.push(customer);

    // Hiển thị thông tin khách hàng trên bảng
    displayCustomers();

    // Xóa nội dung trường nhập sau khi thêm khách hàng
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
}


// Hàm hiển thị thông tin khách hàng trên bảng
function displayCustomers() {
    var tableBody = document.getElementById("customerTable");
    tableBody.innerHTML = ""; // Xóa dữ liệu cũ

    // Duyệt qua mảng customers để hiển thị thông tin khách hàng
    for (var i = 0; i < customers.length; i++) {
        var customer = customers[i];
        var row = "<tr>";
        row += "<td>" + customer.id + "</td>";
        row += "<td>" + customer.name + "</td>";
        row += "<td>" + customer.email + "</td>";
        row += "<td>" + customer.address + "</td>";
        row += "<td><button onclick='editCustomer(" + i + ")'>Sửa</button> <button onclick='deleteCustomer(" + i + ")'>Xóa</button></td>";
        row += "</tr>";
        tableBody.innerHTML += row;
    }
}

// Hàm tạo ID ngẫu nhiên cho khách hàng mới
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

// Hàm sửa thông tin khách hàng
function editCustomer(index) {
    var newName = prompt("Nhập tên mới:", customers[index].name);
    var newEmail = prompt("Nhập email mới:", customers[index].email);
    var newAddress = prompt("Nhập địa chỉ mới:", customers[index].address);

    // Cập nhật thông tin khách hàng
    customers[index].name = newName;
    customers[index].email = newEmail;
    customers[index].address = newAddress;

    // Hiển thị lại danh sách khách hàng
    displayCustomers();
}

// Hàm xóa khách hàng
function deleteCustomer(index) {
    var confirmation = confirm("Bạn có chắc chắn muốn xóa khách hàng này?");
    if (confirmation) {
        customers.splice(index, 1);
        displayCustomers();
    }
}

// Tạo dữ liệu mẫu ban đầu
function initializeData() {
    // Mô phỏng dữ liệu khách hàng
    customers.push({ id: generateId(), name: "Nguyễn Văn A", email: "nguyenvana@example.com", address: "123 Đường ABC, Quận XYZ, Thành phố HCM" });
    customers.push({ id: generateId(), name: "Trần Thị B", email: "tranthib@example.com", address: "456 Đường DEF, Quận UVW, Thành phố Hanoi" });
    customers.push({ id: generateId(), name: "Lê Văn C", email: "levanc@example.com", address: "789 Đường GHI, Quận MNO, Thành phố Đà Nẵng" });

    // Hiển thị dữ liệu khách hàng ban đầu
    displayCustomers();
}

// Khởi tạo dữ liệu mẫu ban đầu khi trang web được tải
window.onload = function() {
    initializeData();
};
initializeData(); // Gọi hàm khởi tạo dữ liệu khi trang được tải
