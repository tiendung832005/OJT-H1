
var customers = [];

window.onload = function() {
    document.getElementById("addCustomerBtn").addEventListener("click", function() {
        document.getElementById("myModal").style.display = "block";
        document.getElementById("modalTitle").innerText = "Thêm Khách hàng";
    });

    document.getElementById("saveCustomerBtn").addEventListener("click", function(event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        
        if (name && email) {
            if (document.getElementById("modalTitle").innerText === "Thêm Khách hàng") {
                addCustomer(name, email);
            } else {
                var customerId = document.getElementById("saveCustomerBtn").getAttribute("data-id");
                updateCustomer(customerId, name, email);
            }
            closeModel();
        } else {
            alert("Vui lòng điền đầy đủ thông tin.");
        }
    });

    document.getElementsByClassName("close")[0].addEventListener("click", function() {
        closeModel();
    });

    renderCustomerList();
};

function renderCustomerList() {
    var customerList = document.getElementById("customerList");
    customerList.innerHTML = "";
    customers.forEach(function(customer, index) {
        var customerDiv = document.createElement("div");
        customerDiv.className = "customer";
        customerDiv.innerHTML = "<strong>" + customer.name + "</strong><br>" + customer.email + "<br>" +
            "<button onclick='editCustomer(" + index + ")'>Sửa</button>" +
            "<button onclick='deleteCustomer(" + index + ")'>Xóa</button>";
        customerList.appendChild(customerDiv);
    });
}

function addCustomer(name, email) {
    customers.push({ name: name, email: email });
    renderCustomerList();
}

function editCustomer(index) {
    var customer = customers[index];
    document.getElementById("myModal").style.display = "block";
    document.getElementById("modalTitle").innerText = "Sửa Khách hàng";
    document.getElementById("name").value = customer.name;
    document.getElementById("email").value = customer.email;
    document.getElementById("saveCustomerBtn").setAttribute("data-id", index);
}

function updateCustomer(index, name, email) {
    customers[index].name = name;
    customers[index].email = email;
    renderCustomerList();
}

function deleteCustomer(index) {
    customers.splice(index, 1);
    renderCustomerList();
}

function closeModel() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("saveCustomerBtn").removeAttribute("data-id");
}
