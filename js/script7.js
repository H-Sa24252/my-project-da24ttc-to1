const productList = [
    { 
        id: "01", 
        name: "Hoa sen", 
        price: 50000, 
        image: "../assets/images/hoa-sen.jpg",  
        productLink: "product-detail.html",
        desc: "Hoa sen, mang đến cho không gian vườn nhà bạn hương thơm quyến rũ và vẻ đẹp sang trọng đặc trưng của châu Âu. Giống hoa này nổi tiếng với khả năng thích nghi tốt với khí hậu nhiệt đới, cánh hoa dày, mịn, xếp lớp tinh tế và màu sắc rực rỡ. Để trồng thành công, bạn cần chọn nơi có ánh sáng mặt trời đầy đủ, đất tơi xốp, thoát nước tốt và cung cấp độ ẩm hợp lý. Chỉ sau khoảng 60-70 ngày chăm sóc, bạn sẽ được ngắm nhìn những đóa hồng rực rỡ, hương thơm nồng nàn dịu nhẹ, thích hợp để trang trí ban công, sân thượng hoặc sân vườn. Đây là lựa chọn lý tưởng cho những người đam mê làm vườn, muốn tạo điểm nhấn lãng mạn cho ngôi nhà."
    },
    { 
        id: "02", 
        name: "Hoa hồng đỏ", 
        price: 21000, 
        image: "../assets/images/hoa-hong.jpg", 
        productLink: "product-detail.html",
        desc: "Hoa hồng đỏ rực rỡ, loài hoa luôn hướng về phía mặt trời, tượng trưng cho niềm tin, sự sống và tình yêu bất diệt. Sản phẩm hạt giống hoa hướng dương của chúng tôi đảm bảo tỷ lệ nảy mầm cao, cây khỏe mạnh, chiều cao lý tưởng từ 1m đến 1.5m. Với sắc vàng rực rỡ, hoa hướng dương không chỉ làm đẹp không gian sống mà còn mang lại năng lượng tích cực cho gia đình. Cây rất dễ trồng, ưa nắng, chịu nhiệt tốt và không kén đất, phù hợp cho cả người mới bắt đầu làm vườn. Thời gian từ lúc gieo hạt đến khi ra hoa khá nhanh, khoảng 55-60 ngày. Bạn có thể trồng trong chậu cảnh, ban công hoặc ngoài vườn, hoa bền màu, có thể cắm lọ trang trí trong nhà. Đem lại không gian tươi mới, rực rỡ mỗi ngày."
    },
    { 
        id: "03", 
        name: "Hoa ly", 
        price: 24000, 
        image: "../assets/images/hoa-ly.jpg", 
        productLink: "product-detail.html",
        desc: "Hoa ly - biểu tượng của tình yêu hoàn hảo và sự sang trọng, hiện đã có thể trồng dễ dàng tại nhà với bộ củ giống cao cấp. Loài hoa này đặc trưng với dáng hình chuông úp ngược, cánh hoa mịn màng như nhung với nhiều màu sắc rực rỡ như đỏ, vàng, trắng, tím. Tulip thích hợp với khí hậu mát mẻ, thích ánh sáng nhẹ và đất ẩm, thoát nước tốt. Thời gian trồng thích hợp nhất là vào mùa đông hoặc xuân. Những bông tulip sẽ mang lại không gian đẳng cấp, tinh tế cho ngôi nhà của bạn. Với hướng dẫn chi tiết đi kèm, bạn hoàn toàn có thể tự tay trồng những chậu tulip tuyệt đẹp ngay tại ban công hay cửa sổ, tạo nên không gian lãng mạn như châu Âu. Hoa bền, lâu tàn khi được chăm sóc đúng cách, là món quà tuyệt vời cho người thân."
    },
    { 
        id: "04", 
        name: "Hoa hướng dương", 
        price: 25000, 
        image: "../assets/images/hoa-huong-duong.jpg", 
        productLink: "product-detail.html",
        desc: "Hoa hướng dương, loài hoa mang nét đẹp dịu dàng, kiêu sa với những cụm hoa hình cầu lớn, màu sắc thay đổi tùy thuộc vào độ pH của đất (xanh, tím, hồng, trắng). Đây là lựa chọn hoàn hảo để tạo điểm nhấn nhẹ nhàng nhưng không kém phần thu hút cho góc vườn hay ban công râm mát. Cẩm tú cầu ưa bóng râm bán phần, cần độ ẩm cao và đất tơi xốp, giàu dinh dưỡng. Loài hoa này tượng trưng cho sự biết ơn và cảm xúc chân thành, thường được dùng để trang trí không gian sang trọng. Cây có thể phát triển thành bụi lớn, ra hoa quanh năm nếu được chăm sóc tốt, mang đến cảm giác yên bình, thơ mộng. Sản phẩm hạt giống chất lượng cao sẽ cho ra những cây con khỏe mạnh, khả năng kháng sâu bệnh tốt, phù hợp cho những ai yêu thích vẻ đẹp kiêu sa và lãng mạn."
    },
    { 
        id: "05", 
        name: "Hoa cúc", 
        price: 18000, 
        image: "../assets/images/hoa-cuc.jpg", 
        productLink: "product-detail.html",
        desc: "Hoa cúc là loài hoa nổi tiếng với hương thơm quyến rũ, thư giãn và màu tím thủy chung đặc trưng. Hạt giống oải hương nhập khẩu của chúng tôi cho tỷ lệ nảy mầm cao, cây phát triển dạng bụi, chịu hạn tốt và thích hợp trồng ở nơi ánh sáng mặt trời trực tiếp. Màu tím của lavender không chỉ làm đẹp sân vườn mà còn có tác dụng xua đuổi côn trùng, mùi hương giúp giảm căng thẳng, lo âu. Bạn có thể thu hoạch hoa để làm hoa khô treo trong nhà, làm túi thơm hoặc pha trà. Loài hoa này đặc biệt phù hợp trồng trong chậu, đặt ở ban công hoặc lối đi. Chăm sóc oải hương không quá khó, chỉ cần lưu ý không tưới quá nhiều nước và chọn loại đất tơi xốp, thoát nước tốt để cây phát triển khỏe mạnh, thơm ngát."
    },
    { 
        id: "06", 
        name: "Hoa sao xanh", 
        price: 15000, 
        image: "../assets/images/hoa-sao.jpg", 
        productLink: "product-detail.html",
        desc: "Hoa sao xanh, vẻ đẹp mộc mạc, thuần khiết, nhỏ nhắn với cánh hoa trắng ngần bao quanh nhụy vàng rực rỡ, là biểu tượng của mùa đông Hà Nội. Loài hoa này rất dễ trồng, khả năng thích nghi cao, cây khỏe và ra hoa nhanh. Cúc họa mi thích hợp trồng thành bụi ngoài vườn, ban công hoặc trong chậu. Cây ưa sáng, cần đất ẩm, thoát nước tốt và không cần chăm sóc quá cầu kỳ. Những bông cúc họa mi xinh xắn sẽ mang lại cảm giác bình yên, tươi mới cho không gian sống của bạn. Hạt giống chất lượng cao, nảy mầm đồng đều, đảm bảo bạn sẽ có những khóm hoa xinh đẹp chỉ sau thời gian ngắn. Rất thích hợp để cắm lọ trang trí bàn làm việc, phòng khách, tạo điểm nhấn nhẹ nhàng và tinh tế. Một lựa chọn tuyệt vời cho người yêu nét đẹp tự nhiên, mộc mạc."
    },
    { 
        id: "07", 
        name: "Hoa thủy tiên trắng", 
        price: 100000, 
        image: "../assets/images/thuy-tien-trang.jpg", 
        productLink: "product-detail.html",
        desc: "Hoa thủy tiên - loài cây mọng nước nhỏ nhắn nhưng vô cùng kiên cường, tượng trưng cho tình yêu bền vững và sự kiên trì. Với hàng trăm loài, hình dáng và màu sắc đa dạng, sen đá là lựa chọn hoàn hảo để trang trí bàn làm việc, cửa sổ hay góc học tập. Chúng rất dễ trồng, chịu hạn tốt, ít cần chăm sóc, chỉ cần ánh sáng nhẹ và không tưới quá nhiều nước. Sen đá giúp thanh lọc không khí, giảm bức xạ từ thiết bị điện tử. Hạt giống hoặc cây con của chúng tôi khỏe mạnh, đa dạng chủng loại. Đây không chỉ là cây cảnh mà còn mang ý nghĩa phong thủy tốt lành, đem lại tài lộc và may mắn. Phù hợp cho cả những người bận rộn, không có nhiều thời gian chăm sóc cây cảnh nhưng vẫn muốn có một không gian xanh nhỏ xinh."
    },
    { 
        id: "08", 
        name: "Hoa bất tử", 
        price: 35000, 
        image: "../assets/images/hoa-bat-tu.jpg", 
        productLink: "product-detail.html",
        desc: "Hoa bất tử, mang vẻ đẹp sang trọng, quý phái và kiêu sa với những bông hoa to, cánh dày, bền màu. Sản phẩm lan hồ điệp của chúng tôi được nuôi cấy mô chất lượng cao, cho ra những cây con khỏe mạnh, phát triển tốt. Loài hoa này tượng trưng cho sự thịnh vượng, may mắn và hạnh phúc, thích hợp trang trí không gian cao cấp, bàn làm việc hoặc làm quà tặng ý nghĩa. Lan hồ điệp ưa khí hậu mát mẻ, ánh sáng khuếch tán, không trực tiếp, cần độ ẩm vừa phải. Thời gian ra hoa lâu, bền, mang đến vẻ đẹp rực rỡ trong thời gian dài. Chăm sóc lan hồ điệp đòi hỏi sự tỉ mỉ nhưng thành quả sẽ khiến bạn mãn nguyện. Sự góp mặt của lan hồ điệp chắc chắn sẽ nâng tầm không gian sống của bạn lên một đẳng cấp mới."
    },
    { 
        id: "09", 
        name: "Hoa lan", 
        price: 28000, 
        image: "../assets/images/hoa-lan.png", 
        productLink: "product-detail.html",
        desc: "Hoa lan - loài hoa của sự vương giả, quý phái và tình yêu nồng cháy. Sản phẩm hạt giống/củ giống hoa mẫu đơn chất lượng cao, cho ra những bông hoa to, cánh kép, hương thơm quyến rũ đặc trưng. Mẫu đơn ưa ánh sáng, đất giàu dinh dưỡng và thoát nước tốt, thích hợp trồng thành bụi lớn trong sân vườn. Loài hoa này tượng trưng cho sự giàu sang, thịnh vượng và hạnh phúc trong hôn nhân. Mẫu đơn có nhiều màu sắc từ trắng, hồng đến đỏ thẫm. Cây có sức sống bền bỉ, ra hoa rực rỡ vào mùa xuân. Trồng mẫu đơn trong nhà không chỉ làm đẹp không gian mà còn mang lại năng lượng tích cực, sự may mắn. Sự hiện diện của mẫu đơn sẽ biến khu vườn của bạn thành một bức tranh tuyệt đẹp, đầy sức sống và sang trọng."
    },
    { 
        id: "10", 
        name: "Hoa cẩm chướng", 
        price: 19000, 
        image: "../assets/images/hoa-cam-chuong.jpg", 
        productLink: "product-detail.html",
        desc: "Hoa cẩm chướng, loài hoa xinh xắn với những cánh hoa viền răng cưa độc đáo, mang vẻ đẹp vừa cổ điển vừa hiện đại. Hạt giống cẩm chướng dễ trồng, thích hợp cả trồng chậu và ngoài vườn. Loài hoa này có nhiều màu sắc, hương thơm dịu nhẹ, tượng trưng cho tình yêu chân thành và sự kính trọng. Cẩm chướng ưa nắng, đất tơi xốp, cần tưới nước đều đặn. Cây ra hoa quanh năm, đặc biệt rực rỡ khi được chăm sóc tốt. Những đóa cẩm chướng xinh xắn là lựa chọn tuyệt vời để trang trí ban công, cửa sổ hoặc cắm lọ trang trí. Sản phẩm đảm bảo tỷ lệ nảy mầm cao, cây khỏe mạnh, kháng bệnh tốt. Bạn sẽ dễ dàng sở hữu một không gian rực rỡ và thơ mộng với những chậu cẩm chướng đầy màu sắc ngay tại nhà mình."
    }
];


function loadProduct(products)
{
    for(let i = 0; i<products.length; i++)
    {
        addProduct_v2(products[i]);
    }
}

function addProduct_v2(product)
{
    //Tạo thẻ div khung chứa 1 sản phẩm  - product item
            const productItem = document.createElement("div");

            //Thêm thuộc tinh cho thẻ div
            productItem.setAttribute("class", "product-item");

            //Tạo khung số 1 - chứa ảnh - product image
            const productImage = document.createElement("div");

            //Thêm thuộc tinh cho thẻ div
            productImage.setAttribute("class", "product-image h-75");

            //Thêm ảnh vào khung chứa
            const myImage = document.createElement("img");
            myImage.setAttribute("src", product.image);
            myImage.setAttribute("alt", product.name);
            myImage.setAttribute("class", "img-fluid h-100 object-fit-cover");
           // myImage.style.height="250px";
            //myImage.style.width="250px";

            //Gắn hình vào khung chứa product image
            productImage.appendChild(myImage);


            //Tạo khung số 2 - chứa thông tin sản phẩm - product info
            const productInfo = document.createElement("div");

            //Thêm thuộc tinh cho thẻ div
            productInfo.setAttribute("class", "product-info text-center h-25");

            //Thêm đối tượng p, a cho khung chứa product info
            const productName = document.createElement("p");
            const productNameText = document.createTextNode(product.name);
            productName.appendChild(productNameText);

            //gắn vào khung chứa
            productInfo.appendChild(productName);

            //Thêm đối tượng p, a cho khung chứa product info
            const productPrice = document.createElement("p");
            const productPriceText = document.createTextNode(product.price+"vnđ");
            productPrice.setAttribute("class","text-danger fw-bold");
            productPrice.appendChild(productPriceText);

            //gắn vào khung chứa
             productInfo.appendChild(productPrice);


            const productLink = document.createElement("a");
            const productLinkText = document.createTextNode("Xem chi tiết");
            productLink.setAttribute("href",product.productLink+"?id="+product.id);
            productLink.appendChild(productLinkText);
            productLink.setAttribute("class", "btn btn-info");

            //Gắn link cho product Info
            productInfo.appendChild(productLink);

            //Gắn 2 khung chứa image và info vào product item
            productItem.appendChild(productImage);
            productItem.appendChild(productInfo);

            //Gắn product item vào product list
            document.getElementById("product-list").appendChild(productItem);
}

//function addProduct(id, name, price, image, hyperLink)
//Tạo thẻ div khung chứa 1 sản phẩm  - product item