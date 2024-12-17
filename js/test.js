$(document).ready(function() {
    $('#btnDatHang').click(function(e) {
        $('span').text('');

        // Retrieve values from the form
        const hoTen = $('txtHoTen').val().trim();
        const sdt = $('txtSdt').val().trim();
        const ngayDat = $('txtNgayDat').val();
        const email = $('txtEmail').val().trim();
        const loaiHoa = $('txtLoaiHoa)').val();
        const thanhToan = $('input[name="httt"]:checked').val();

        const regexhoTen = /^[A-Z][a-z]*(\s[A-z][a-z]$)/;
        const regexSDT = /^0\d{3}\.?d{3}\.?{3}/
        const regexEmail = /^[a-zA-z0-9]+@iuh\.edu\.vn/;
        const regexNgayDat = /^d{4}-\d{2}-\d{2}/
        let isValid = true;






    });
});