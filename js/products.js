const products = [
    {
        id: 1,
        ten: "Hoa sen",
        gia: "1.500.000đ/bó",
        hinh_anh: "../assets/images/hoa-sen.jpg",
        lien_ket: "https://linhflower.com/thanh-tao-sen/",
        description: "Hoa sen mang vẻ đẹp thanh tao và tinh khiết. Đây là loài hoa biểu tượng cho sự nhẹ nhàng, thanh cao và rất được yêu thích trong các dịp lễ truyền thống."
    },

    {
        id: 2,
        ten: "Hoa hồng đỏ",
        gia: "2.000.000đ/bó",
        hinh_anh: "../assets/images/hoa-hong.jpg",
        lien_ket: "https://linhflower.com/bo-hoa-hong-dep-nhat-tang-nguoi-yeu/",
        description: "Hoa hồng đỏ là biểu tượng của tình yêu và sự lãng mạn. Sản phẩm thích hợp dành cho các dịp đặc biệt như sinh nhật, lễ tình nhân và ngày kỷ niệm."
    },

    {
        id: 3,
        ten: "Hoa ly",
        gia: "500.000đ/bó",
        hinh_anh: "../assets/images/hoa-ly.jpg",
        lien_ket: "https://linhflower.com/ly-hong-cuoi/",
        description: "Hoa ly mang hương thơm dịu nhẹ và vẻ đẹp sang trọng. Đây là loại hoa được nhiều người lựa chọn để trang trí và làm quà tặng."
    },

    {
        id: 4,
        ten: "Hoa hướng dương",
        gia: "700.000đ/bó",
        hinh_anh: "../assets/images/hoa-huong-duong.jpg",
        lien_ket: "https://linhflower.com/bo-hoa-huong-duong-tang-sinh-nhat/",
        description: "Hoa hướng dương tượng trưng cho sự tích cực, niềm tin và hy vọng. Màu vàng tươi sáng giúp sản phẩm nổi bật và tràn đầy năng lượng."
    },

    {
        id: 5,
        ten: "Hoa cúc",
        gia: "52.000đ/bó",
        hinh_anh: "../assets/images/hoa-cuc.jpg",
        lien_ket: "https://dalat.flowers/302/9516_cuc-rossi-hong-10-canh.html",
        description: "Hoa cúc mang vẻ đẹp giản dị nhưng tinh tế. Đây là loại hoa thường dùng trong trang trí nhà cửa và các dịp lễ truyền thống."
    }
];
const productList = document.getElementById("product-list");

products.forEach(product => {

    const productItem = document.createElement("div");
    productItem.setAttribute(
        "class",
        "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-custom"
    );

    const card = document.createElement("div");
    card.setAttribute("class", "card h-100 shadow-sm border-0");

    // Ảnh
    const img = document.createElement("img");
    img.setAttribute("src", product.hinh_anh);
    img.setAttribute("class", "card-img-top");

    // Body
    const cardBody = document.createElement("div");
    cardBody.setAttribute(
        "class",
        "card-body d-flex flex-column text-center"
    );

    // Tên
    const productName = document.createElement("h5");
    productName.setAttribute("class", "fw-bold");
    productName.innerText = product.ten;

    // Giá
    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "text-danger fw-bold");
    productPrice.innerText = product.gia;

    // Nút chi tiết
    const detailButton = document.createElement("a");
    detailButton.setAttribute(
        "class",
        "btn btn-primary mt-auto"
    );

    detailButton.setAttribute(
        "href",
        `product-detail.html?id=${product.id}`
    );

    detailButton.innerText = "Xem chi tiết";

    // Gắn phần tử
    cardBody.appendChild(productName);
    cardBody.appendChild(productPrice);
    cardBody.appendChild(detailButton);

    card.appendChild(img);
    card.appendChild(cardBody);

    productItem.appendChild(card);

    productList.appendChild(productItem);
});