function render() {
  let userLogin = JSON.parse(localStorage.getItem("userLogin"));
  let text = ``;
  let a = 0;
  for (let i = 0; i < userLogin.cart.length; i++) {
    let product = userLogin.cart[i];
    a++;
    text += `
    <tr>
                      <td>${a}</td>
                      <td><div><img style="height: 250px; width: 250px; object-fit: cover;" src="${userLogin.cart[i].image}" alt=""></div></td>
                      <td>${userLogin.cart[i].name}</td>
                      <td>${userLogin.cart[i].price}</td>
                      <td>${userLogin.cart[i].stock}</td>
                  </tr>`;
  }
  text += `
                <tr>
                <th>Tổng tiền</th>
                <td id="sumPrice" colspan="5"></td>
                <td><button id="pay" onclick="pay()" style="height: 30px; width: 120px; border-radius: 3px; background-color: #ee4d2d; color: white;">Thanh toán</button></td>
            </tr>
                `;
  document.getElementById("tbody").innerHTML = text;

  // Hiển thị tổng tiền
  document.getElementById("sumPrice").textContent = totalPrice;
}
function pay() {
  alert("Thanh toán thành công! Hóa đơn của bạn đang được nhân viên xử lí");
}
render();
