//Elements của trang
const formLogin = document.getElementById("formLogin");
const emailElement =document.getElementById("email");
const passwordElement =document.getElementById("password");

//Lắng nghe sự kiện
formLogin.addEventListener("submit", function(e){
    //Ngăn chặn sự kiện load
    e.preventDefault();

    //Validate dữ liệu đầu vào

    // Lấy dữ liệu từ local về
    const userLocal =JSON.parse(localStorage.getItem("users")) || [];

    
    //Tìm kiếm email và mật khẩu ng dùng có trùng kh
    const findUser = userLocal.find((user) => user.email === emailElement.value && user.password === passwordElement.value);

    if(!findUser){
        alert("Email hoặc mật khẩu không đúng")
    }
    else{
        window.location.href = "indexUser.html";
    }
    //Nếu có thì đăng nhập

    // Nếu ko thì sai
});
