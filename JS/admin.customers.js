var customers = []; 
var customerCount = 0; 

function addCustomer() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value; // Lấy giá trị số điện thoại từ trường nhập liệu

    if (name === "" || email === "" || address === "" || phone === "") { // Kiểm tra xem có đủ thông tin không
        alert("Vui lòng điền đầy đủ thông tin của khách hàng.");
        return;
    }

    var customer = {
        id: ++customerCount,
        name: name,
        email: email,
        address: address,
        phone: phone, // Thêm số điện thoại vào đối tượng khách hàng
        banned: false
    };

    customers.push(customer);
    displayCustomers();

    // Xóa nội dung trường nhập sau khi thêm khách hàng
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
}

function displayCustomers() {
    var tableBody = document.getElementById("customerTable");
    tableBody.innerHTML = "";

    for (var i = 0; i < customers.length; i++) {
        var customer = customers[i];
        var row = "<tr>";
        row += "<td>" + customer.id + "</td>";
        row += "<td>" + customer.name + "</td>";
        row += "<td>" + customer.email + "</td>";
        row += "<td>" + customer.address + "</td>";
        row += "<td>" + customer.phone + "</td>"; // Hiển thị số điện thoại
        row += "<td>" + (customer.banned ? "Đã khóa" : "Hoạt động") + "</td>";
        row += "<td><button onclick='toggleBan(" + i + ")'>" + (customer.banned ? "Unban" : "Ban") + "</button></td>";
        row += "</tr>";
        tableBody.innerHTML += row;
    }
}

function toggleBan(index) {
    customers[index].banned = !customers[index].banned;
    displayCustomers();
}

function initializeData() {
    customers.push({ id: ++customerCount, name: "Nguyễn Văn A", email: "nguyenvana@gmail.com", address: "Thành phố HCM", phone: "0123456789", banned: false });
    customers.push({ id: ++customerCount, name: "Trần Thị B", email: "tranthib@gmail.com", address: "Thành phố Hanoi", phone: "0987654321", banned: false });
    customers.push({ id: ++customerCount, name: "Lê Văn C", email: "levanc@gmail.com", address: "Thành phố Đà Nẵng", phone: "0369852147", banned: false });

    displayCustomers();
}

window.onload = function() {
    initializeData();
};
initializeData();
