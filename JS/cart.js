function render() {
  let userLogin = JSON.parse(localStorage.getItem("userLogin"));
  let text = ``;
  let a = 0;
  for (let i = 0; i < userLogin.cart.length; i++) {
    a++;
    text += `
    <tr>
                      <td>${a}</td>
                      <td><div><img style="height: 250px; width: 250px; object-fit: cover;" src="${
                        userLogin.cart[i].image
                      }" alt=""></div></td>
                      <td>${userLogin.cart[i].name}</td>
                      <td>${userLogin.cart[i].price}</td>
                      <td>${userLogin.cart[i].stock}</td>
                      
                      <td>${
                        userLogin.cart[i].quantity * userLogin.cart[i].price
                      }$</td>
                     
                  </tr>`;
  }
  document.getElementById("tbody").innerHTML = text;
}

render();
