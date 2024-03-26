var customers = [];
var customerCount = 0;

// Hàm để lấy dữ liệu người dùng từ local storage
function getUsersFromLocalStorage() {
    var usersData = localStorage.getItem("users");
    if (usersData) {
        customers = JSON.parse(usersData);
        customerCount = customers.length;
        displayCustomers();
    }
}

// Gọi hàm này khi trang được tải
window.onload = getUsersFromLocalStorage;

function addCustomer() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;

    if (name === "" || email === "" || address === "" || phone === "") {
        alert("Vui lòng điền đầy đủ thông tin của khách hàng.");
        return;
    }

    var customer = {
        id: ++customerCount,
        name: name,
        email: email,
        address: address,
        phone: phone,
        banned: false
    };

    customers.push(customer);
    saveCustomersToLocalStorage(); // Lưu dữ liệu người dùng vào local storage
    displayCustomers();

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
}

// Hàm để lưu dữ liệu người dùng vào local storage
function saveCustomersToLocalStorage() {
    localStorage.setItem("users", JSON.stringify(customers));
}

function displayCustomers() {
    var tableBody = document.getElementById("customerTable");
    tableBody.innerHTML = "";

    for (var i = 0; i < customers.length; i++) {
        var customer = customers[i];
        var row = "<tr>";
        row += "<td>" + customer.userId + "</td>";
        row += "<td>" + customer.userName + "</td>";
        row += "<td>" + customer.email + "</td>";
        row += "<td>" + customer.address + "</td>";
        row += "<td>" + customer.password + "</td>";
        row += "<td>" + (customer.banned ? "Đã khóa" : "Hoạt động") + "</td>";
        row += "<td><button onclick='toggleBan(" + i + ")'>" + (customer.banned ? "Unban" : "Ban") + "</button></td>";
        row += "</tr>";
        tableBody.innerHTML += row;
    }
}

function toggleBan(index) {
    customers[index].banned = !customers[index].banned;
    saveCustomersToLocalStorage(); // Lưu dữ liệu sau khi thay đổi vào local storage
    displayCustomers();
}
