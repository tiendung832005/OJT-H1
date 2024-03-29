let containers = JSON.parse(localStorage.getItem("products"));
let id = JSON.parse(localStorage.getItem("keyDetail"));

let product = containers.find(function (e, i) {
  return e.id === id;
});

document.getElementById("container").innerHTML = `
<img src="${product.image}" alt="" width = "500px">
<div class="infoCar">
  <h2>${product.name}</h2>
  <div class="i4">
    <h3>Thông số kĩ thuật</h3>
    <br />
    <p>Tên xe: ${product.name}</p>
    <p>Động cơ: ${product.engine}</p>
    <p>Kích Thước: ${product.size}</p>
    <p>Công suất:${product.wattage}</p>
    <p>Số lượng:${product.stock}</p>
    <p>Categories: Merrcedes, Mercedes C-class</p>
  </div>
  <h2>GIÁ:${product.price}</h2>
</div>
`;
document.getElementById("table").innerHTML = `
<table border="1px" style="width: 100%">
<thead>
  <tr>
    <th></th>
    <td style="font-weight: 600; font-size: 20px">
      Khuyến mãi mua xe ${product.name}
    </td>
  </tr>
</thead>
<tbody>
  <tr>
    <th rowspan="4" style="font-size: 20px">Khuyến mãi</th>
    <td style="font-size: 15px">
      - Tặng 01 năm bảo hiểm vật chất xe <br />
      - Tặng phụ kiện cao cấp chính hãng Mercedes <br />
      - Bảo hành 03 năm không giới hạn kilomet <br />
      - Quà tặng theo xe chính hãng Mercede <br />
      - Lái thử xe tận nhà miễn phí, giao xe tận nhà <br />
      - Ưu đãi & Số lượng xe giới hạn - Liên hệ ngay!!!
    </td>
  </tr>
  <tr>
    <td style="font-weight: 600; font-size: 20px">
      KHUYẾN MÃI LỚN - CƠ HỘI TỐT NHẤT NĂM !!!
    </td>
  </tr>
</tbody>
</table>
`;


function addToCart() {
  alert("Sản phẩm đã được thêm vào giỏ hàng");
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userLogin = JSON.parse(localStorage.getItem("userLogin")) || [];

  const cart = userLogin.cart;

  let index = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == product.id) {
      index = i;
      break;
    }
  }

  if (index == -1) {
    cart.push({ ...product, quantity: 1 });
  } else {
    cart[index].quantity += 1;
  }

  userLogin.cart = cart;
  localStorage.setItem("userLogin", JSON.stringify(userLogin));

  const indexUser = users.findIndex((user) => user.userId == userLogin.userId);
  users[indexUser] = userLogin;
  localStorage.setItem("users", JSON.stringify(users));
}
