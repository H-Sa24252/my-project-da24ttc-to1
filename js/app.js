// Merged products, page7 and detail scripts into a single file

// --- products data (expanded descriptions) ---
const products = [
    {
        id: 1,
        ten: "Hoa sen",
        gia: "1.500.000đ/bó",
        hinh_anh: "../assets/images/hoa-sen.jpg",
        lien_ket: "https://linhflower.com/thanh-tao-sen/",
        description: "Hoa sen mang vẻ đẹp thanh tao và tinh khiết. Thích hợp cho lễ cúng, quà tặng và trang trí không gian thanh lịch. Bó hoa sen thường được kết tỉ mỉ, giữ nguyên hình dáng tự nhiên của hoa, tạo cảm giác nhẹ nhàng và trang nghiêm."
    },
    {
        id: 2,
        ten: "Hoa hồng đỏ",
        gia: "2.000.000đ/bó",
        hinh_anh: "../assets/images/hoa-hong.jpg",
        lien_ket: "https://linhflower.com/bo-hoa-hong-dep-nhat-tang-nguoi-yeu/",
        description: "Hoa hồng đỏ biểu tượng cho tình yêu nồng nàn và lãng mạn. Lựa chọn hoàn hảo cho ngày lễ tình nhân, kỷ niệm và lời chúc ngọt ngào. Bó hoa có thể kết hợp lá xanh và phụ kiện, làm nổi bật màu đỏ rực rỡ."
    },
    {
        id: 3,
        ten: "Hoa ly",
        gia: "500.000đ/bó",
        hinh_anh: "../assets/images/hoa-ly.jpg",
        lien_ket: "https://linhflower.com/ly-hong-cuoi/",
        description: "Hoa ly có hương thơm dịu nhẹ và vẻ đẹp tinh tế. Thường được dùng trong trang trí tiệc cưới, kỷ niệm và làm quà tặng cao cấp. Cánh hoa to, thanh lịch, khi kết hợp với xanh lá tạo nên bố cục sang trọng."
    },
    {
        id: 4,
        ten: "Hoa hướng dương",
        gia: "700.000đ/bó",
        hinh_anh: "../assets/images/hoa-huong-duong.jpg",
        lien_ket: "https://linhflower.com/bo-hoa-huong-duong-tang-sinh-nhat/",
        description: "Hoa hướng dương tượng trưng cho niềm vui, sự lạc quan và hy vọng. Màu vàng rực rỡ mang lại nguồn năng lượng tích cực, phù hợp làm quà tặng mừng sinh nhật hoặc trang trí văn phòng."
    },
    {
        id: 5,
        ten: "Hoa cúc (10 cành)",
        gia: "52.000đ/bó",
        hinh_anh: "../assets/images/hoa-cuc.jpg",
        lien_ket: "https://dalat.flowers/302/9516_cuc-rossi-hong-10-canh.html",
        description: "Hoa cúc mang vẻ đẹp giản dị và tinh tế. Thích hợp cho trang trí gia đình, quà tặng bạn bè và không gian nhẹ nhàng. Cúc có nhiều màu sắc, dễ phối cùng các loài hoa khác."
    },
    {
        id: 6,
        ten: "Hoa sao xanh",
        gia: "71.000đ/bó",
        hinh_anh: "../assets/images/hoa-sao.jpg",
        lien_ket: "https://dalat.flowers/340/13333_hoa-sao-xanh-810-canh.html",
        description: "Hoa sao xanh độc đáo với tông màu dịu mát. Phù hợp để trang trí phong cách hiện đại hoặc làm điểm nhấn cho không gian. Có thể kết hợp với đèn nhỏ để tạo hiệu ứng lung linh."
    },
    {
        id: 7,
        ten: "Thủy tiên trắng",
        gia: "60.000đ/bó",
        hinh_anh: "../assets/images/thuy-tien-trang.jpg",
        lien_ket: "https://dalat.flowers/297/14277_thuy-tien-trang-10-canh.html",
        description: "Thủy tiên trắng nhẹ nhàng và trang nhã. Hoa thể hiện sự thanh khiết, thích hợp làm quà tặng trong ngày lễ và dịp đặc biệt. Hương thơm của thủy tiên rất dịu, dễ chịu cho không gian sống."
    },
    {
        id: 8,
        ten: "Hoa bất tử",
        gia: "100.000đ/bó",
        hinh_anh: "../assets/images/hoa-bat-tu.jpg",
        lien_ket: "https://dalat.flowers/302/10651_hoa-bat-tu-1kg.html",
        description: "Hoa bất tử bền đẹp, giữ được lâu dài. Là lựa chọn tốt cho trang trí nhà cửa và làm quà lưu niệm. Dễ dàng bảo quản, phù hợp với những ai muốn lưu giữ kỷ niệm lâu dài."
    },
    {
        id: 9,
        ten: "Hoa lan",
        gia: "63.000đ/bó",
        hinh_anh: "../assets/images/hoa-lan.png",
        lien_ket: "https://dalat.flowers/298/6516_lan-phuong-vy-10-canh.html",
        description: "Hoa lan sang trọng và quý phái. Phù hợp làm quà tặng cho đối tác, khách hàng và những dịp trang trọng. Lan có nhiều chủng loại, mỗi loại lại mang vẻ đẹp riêng."
    },
    {
        id: 10,
        ten: "Hoa cẩm chướng",
        gia: "77.000đ/bó",
        hinh_anh: "../assets/images/hoa-cam-chuong.png",
        lien_ket: "https://dalat.flowers/269/15796_cam-chuong-don-cam-nhat-20-canh.html",
        description: "Hoa cẩm chướng tươi vui, thể hiện tình cảm chân thành. Thích hợp dùng trong các dịp kỷ niệm và tặng người thân. Cẩm chướng có độ bền cao khi được chăm sóc đúng cách."
    }
];

// --- helper ---
function truncateText(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

// --- cart helpers ---
function getCart() {
    try {
        return JSON.parse(localStorage.getItem('cart') || '{}');
    } catch (e) {
        return {};
    }
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(id, qty = 1) {
    const cart = getCart();
    const key = String(id);
    cart[key] = (cart[key] || 0) + Number(qty);
    if (cart[key] <= 0) delete cart[key];
    saveCart(cart);
    showNotification('Đã thêm sản phẩm vào giỏ hàng');
    updateCartBadge();
}

function updateCartItem(id, qty) {
    const cart = getCart();
    const key = String(id);
    if (qty <= 0) {
        delete cart[key];
    } else {
        cart[key] = Number(qty);
    }
    saveCart(cart);
    renderCartPage();
    updateCartBadge();
}

function removeFromCart(id) {
    const cart = getCart();
    delete cart[String(id)];
    saveCart(cart);
    renderCartPage();
    updateCartBadge();
}

function getCartCount() {
    const cart = getCart();
    return Object.values(cart).reduce((s, v) => s + Number(v), 0);
}

function updateCartBadge() {
    const badge = document.getElementById('cart-count-badge');
    if (!badge) return;
    const count = getCartCount();
    badge.innerText = count;
}

function showNotification(msg) {
    let box = document.getElementById('app-notification');
    if (!box) {
        box = document.createElement('div');
        box.id = 'app-notification';
        box.style.position = 'fixed';
        box.style.right = '20px';
        box.style.bottom = '20px';
        box.style.zIndex = 9999;
        document.body.appendChild(box);
    }
    const alert = document.createElement('div');
    alert.className = 'alert alert-success';
    alert.style.minWidth = '200px';
    alert.innerText = msg;
    box.appendChild(alert);
    setTimeout(() => { alert.remove(); }, 2200);
}

// --- page7 render ---
function initPage7() {
    const productList = document.getElementById("product-list");
    if (!productList) return; // not on page7

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.className = "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-custom";

        const card = document.createElement("div");
        card.className = "card h-100 shadow-sm";

        const img = document.createElement("img");
        img.src = product.hinh_anh;
        img.alt = product.ten;
        img.className = "card-img-top";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex flex-column text-center";

        const productName = document.createElement("h5");
        productName.className = "card-title fw-bold";
        productName.innerText = product.ten;

        const productPrice = document.createElement("p");
        productPrice.className = "text-danger mb-2";
        productPrice.innerText = product.gia;

        const btnGroup = document.createElement('div');
        btnGroup.className = 'd-flex gap-2 mt-auto justify-content-center';

        const detailLink = document.createElement("a");
        detailLink.className = "btn btn-primary";
        detailLink.href = `product-detail.html?id=${product.id}`;
        detailLink.innerText = "Xem chi tiết";

        const addBtn = document.createElement('button');
        addBtn.className = 'btn btn-outline-success';
        addBtn.innerText = 'Thêm vào giỏ';
        addBtn.addEventListener('click', () => addToCart(product.id, 1));

        btnGroup.appendChild(detailLink);
        btnGroup.appendChild(addBtn);

        cardBody.appendChild(productName);
        cardBody.appendChild(productPrice);
        cardBody.appendChild(btnGroup);

        card.appendChild(img);
        card.appendChild(cardBody);
        productItem.appendChild(card);
        productList.appendChild(productItem);
    });

    updateCartBadge();
}

// --- product detail ---
function initDetail() {
    const productImage = document.getElementById("product-image");
    if (!productImage) return; // not on detail page

    const params = new URLSearchParams(window.location.search);
    const productId = Number(params.get("id"));
    const product = products.find(p => p.id === productId);

    const productName = document.getElementById("product-name");
    const productPrice = document.getElementById("product-price");
    const productDescription = document.getElementById("product-description");
    const officialLink = document.getElementById("official-link");
    const productMessage = document.getElementById("product-message");
    const qtyInput = document.getElementById('detail-quantity');
    const addToCartBtn = document.getElementById('add-to-cart-btn');

    if (product) {
        productImage.src = product.hinh_anh;
        productImage.alt = product.ten;
        productName.innerText = product.ten;
        productPrice.innerText = product.gia;
        productDescription.innerText = product.description;
        officialLink.href = product.lien_ket;
        if (productMessage) productMessage.classList.add("d-none");
        if (addToCartBtn && qtyInput) {
            addToCartBtn.addEventListener('click', () => {
                const q = Number(qtyInput.value) || 1;
                addToCart(product.id, q);
            });
        }
    } else {
        if (productMessage) {
            productMessage.classList.remove("d-none");
            productMessage.innerText = "Sản phẩm không tồn tại. Vui lòng quay lại trang danh sách sản phẩm.";
        }
        if (productName) productName.innerText = "Sản phẩm không tìm thấy";
        if (productPrice) productPrice.innerText = "";
        if (productDescription) productDescription.innerText = "";
        if (officialLink) {
            officialLink.href = "#";
            officialLink.innerText = "Không có sản phẩm";
        }
    }
    updateCartBadge();
}

// --- cart page render ---
function parsePriceToNumber(priceStr) {
    if (!priceStr) return 0;
    // lấy các chữ số liên tiếp, loại bỏ chấm, chữ cái, ký tự khác
    const digits = String(priceStr).replace(/[^0-9]/g, '');
    return digits ? parseInt(digits, 10) : 0;
}

function formatCurrency(num) {
    if (isNaN(num)) return '';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' đ';
}

function generateInvoice() {
    const cart = getCart();
    const keys = Object.keys(cart);
    const rows = [];
    let total = 0;

    keys.forEach(k => {
        const id = Number(k);
        const qty = Number(cart[k]);
        const product = products.find(p => p.id === id);
        if (!product) return;
        const unit = parsePriceToNumber(product.gia);
        const line = unit * qty;
        total += line;
        rows.push({product, qty, unit, line});
    });

    const now = new Date();
    const orderId = 'HD' + now.getTime();

    let html = `<!doctype html><html><head><meta charset="utf-8"><title>Hóa đơn ${orderId}</title>`;
    html += '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">';
    html += `</head><body><div class="container py-4"><h2>Hóa đơn bán hàng</h2><p>Mã hóa đơn: <strong>${orderId}</strong><br>Ngày: ${now.toLocaleString()}</p>`;
    html += '<table class="table table-bordered"><thead><tr><th>#</th><th>Sản phẩm</th><th>Đơn giá</th><th>Số lượng</th><th>Thành tiền</th></tr></thead><tbody>';
    rows.forEach((r, i) => {
        html += `<tr><td>${i+1}</td><td>${r.product.ten}</td><td>${formatCurrency(r.unit)}</td><td>${r.qty}</td><td>${formatCurrency(r.line)}</td></tr>`;
    });
    html += `</tbody></table><h4 class="text-end">Tổng: ${formatCurrency(total)}</h4>`;
    html += '<div class="mt-4"><button onclick="window.print()" class="btn btn-primary">In hóa đơn</button> <a class="btn btn-secondary" href="page7.html">Quay lại</a></div>';
    html += '</div></body></html>';

    const w = window.open('', '_blank');
    w.document.write(html);
    w.document.close();
}

function renderCartPage() {
    const cartRoot = document.getElementById('cart-root');
    if (!cartRoot) return;
    const cart = getCart();
    cartRoot.innerHTML = '';

    const keys = Object.keys(cart);
    if (keys.length === 0) {
        cartRoot.innerHTML = '<div class="text-center py-5"><h4>Giỏ hàng của bạn đang trống</h4><a class="btn btn-primary mt-3" href="page7.html">Tiếp tục mua sắm</a></div>';
        updateCartBadge();
        return;
    }

    const table = document.createElement('table');
    table.className = 'table';
    const thead = document.createElement('thead');
    thead.innerHTML = '<tr><th></th><th>Sản phẩm</th><th>Đơn giá</th><th>Số lượng</th><th>Thành tiền</th><th></th></tr>';
    table.appendChild(thead);
    const tbody = document.createElement('tbody');

    let total = 0;

    keys.forEach(key => {
        const id = Number(key);
        const qty = Number(cart[key]);
        const product = products.find(p => p.id === id);
        if (!product) return;
        const row = document.createElement('tr');

        const imgTd = document.createElement('td');
        imgTd.innerHTML = `<img src="${product.hinh_anh}" style="width:80px;height:60px;object-fit:cover;border-radius:6px">`;

        const nameTd = document.createElement('td');
        nameTd.innerText = product.ten;

        const unitPrice = parsePriceToNumber(product.gia);
        const priceTd = document.createElement('td');
        priceTd.innerText = formatCurrency(unitPrice);

        const qtyTd = document.createElement('td');
        const qtyInput = document.createElement('input');
        qtyInput.type = 'number';
        qtyInput.min = 1;
        qtyInput.value = qty;
        qtyInput.className = 'form-control quantity-box';
        qtyInput.style.width = '100px';
        qtyInput.addEventListener('change', () => updateCartItem(id, Number(qtyInput.value)));
        qtyTd.appendChild(qtyInput);

        const sub = unitPrice * qty;
        const subTd = document.createElement('td');
        subTd.innerText = formatCurrency(sub);

        const removeTd = document.createElement('td');
        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn btn-sm btn-outline-danger';
        removeBtn.innerText = 'Xóa';
        removeBtn.addEventListener('click', () => removeFromCart(id));
        removeTd.appendChild(removeBtn);

        row.appendChild(imgTd);
        row.appendChild(nameTd);
        row.appendChild(priceTd);
        row.appendChild(qtyTd);
        row.appendChild(subTd);
        row.appendChild(removeTd);

        tbody.appendChild(row);

        total += sub;
    });

    table.appendChild(tbody);
    cartRoot.appendChild(table);
    const footer = document.createElement('div');
    footer.className = 'd-flex justify-content-between align-items-center';
    const left = document.createElement('div');
    left.innerHTML = '<a href="page7.html" class="btn btn-outline-primary">Tiếp tục mua sắm</a>';
    const right = document.createElement('div');
    right.innerHTML = `<div class="text-end"><h5>Tổng: <strong>${formatCurrency(total)}</strong></h5><div class="d-flex gap-2"><button id="export-invoice" class="btn btn-success">Xuất hóa đơn</button><a href="page7.html" class="btn btn-secondary">Quay lại</a></div></div>`;
    footer.appendChild(left);
    footer.appendChild(right);
    cartRoot.appendChild(footer);

    const exportBtn = document.getElementById('export-invoice');
    if (exportBtn) exportBtn.addEventListener('click', generateInvoice);

    updateCartBadge();
}

// Init on DOM ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        initPage7();
        initDetail();
        renderCartPage();
    });
} else {
    initPage7();
    initDetail();
    renderCartPage();
}
