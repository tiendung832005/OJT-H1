var customers = []; 
var customerCount = 0; 

function addCustomer() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    if (name === "" || email === "" || address === "") {
        alert("Vui lòng điền đầy đủ thông tin của khách hàng.");
        return;
    }

    var customer = {
        id: ++customerCount,
        name: name,
        email: email,
        address: address,
        banned: false // Thêm trường banned, mặc định là false
    };

    customers.push(customer);
    displayCustomers();

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
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
        row += "<td>" + (customer.banned ? "Đã khóa" : "Hoạt động") + "</td>"; // Hiển thị trạng thái banned hoặc hoạt động
        row += "<td><button onclick='toggleBan(" + i + ")'>" + (customer.banned ? "Unban" : "Ban") + "</button></td>"; // Thêm button để ban hoặc unban
        row += "</tr>";
        tableBody.innerHTML += row;
    }
}

function toggleBan(index) {
    customers[index].banned = !customers[index].banned; // Đảo ngược trạng thái banned
    displayCustomers();
}

function initializeData() {
    customers.push({ id: ++customerCount, name: "Nguyễn Văn A", email: "nguyenvana@example.com", address: "123 Đường ABC, Quận XYZ, Thành phố HCM", banned: false });
    customers.push({ id: ++customerCount, name: "Trần Thị B", email: "tranthib@example.com", address: "456 Đường DEF, Quận UVW, Thành phố Hanoi", banned: false });
    customers.push({ id: ++customerCount, name: "Lê Văn C", email: "levanc@example.com", address: "789 Đường GHI, Quận MNO, Thành phố Đà Nẵng", banned: false });

    displayCustomers();
}

window.onload = function() {
    initializeData();
};
initializeData();
