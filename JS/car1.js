function myFunction(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btnText.innerHTML = "Xem thêm";
        moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ẩn bớt"; 
    moreText.style.display = "inline";
  }
}
    
let containers = JSON.parse(localStorage.getItem("products"));
// console.log(containers);
// Check id
let id = JSON.parse(localStorage.getItem("keyDetail"));

let product = containers.find(function (e, i){
  return e.id === id;
})
console.log("1111111",product);



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
`
document.getElementById("table").innerHTML =`
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
`




