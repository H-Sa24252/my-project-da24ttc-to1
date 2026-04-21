<script>
    const donGia = document.getElementsByClassName('dg');
    const soLuong = document.getElementsByClassName('sl');
    const thanhTien = document.getElementsByClassName('tt');
    let tongThanhToan = 0;
    for (let i = 0; i < donGia.length; i++) {
        thanhTien[i].innerHTML=soLuong[i].innerHTML * donGia[i].innerHTML;
        tongThanhToan += parseInt(thanhTien[i].innerHTML)
    }
    document.getElementById('TongThanhToan').innerHTML = tongThanhToan;
  </script>