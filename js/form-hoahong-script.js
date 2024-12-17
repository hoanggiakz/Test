$(document).ready(function() {
    $('#btnDatHang').click(function() {
        // Clear any previous error messages
        $('span').text('');

        // Retrieve values from the form
        const hoTen = $('#txtHoTen').val().trim();
        const sdt = $('#txtSDT').val().trim();
        const ngayDat = $('#txtNgayDat').val();
        const email = $('#txtEmail').val().trim();
        const loaiHoa = $('#txtLoaiHoa').val();
        const thanhToan = $('input[name="htth"]:checked').val(); // kiểm tra  payment method

        // Regular expressions for validation
        const regexHoTen = /^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/;
        const regexSDT = /^0\d{3}\.?\d{3}\.?\d{3}$/;
        const regexNgayDat = /^\d{4}-\d{2}-\d{2}$/;
        const regexEmail = /^[a-zA-Z0-9._%+-]+@iuh\.edu\.vn$/;

        let isValid = true;

        // Validate Name
        if (!hoTen || !regexHoTen.test(hoTen)) {
            $('#spanHoTen').text('Tên không hợp lệ (Ví dụ: Nguyen Hoang Gia)');
            isValid = false;
        }

        // Validate Phone
        if (!sdt || !regexSDT.test(sdt)) {
            $('#spanSDT').text('Số điện thoại không hợp lệ (Ví dụ: 0123456789 hoặc 0xxx.xxx.xxx)');
            isValid = false;
        }

        // Validate Date
        if (!ngayDat || !regexNgayDat.test(ngayDat)) {
            $('#spanNgayDat').text('Ngày đặt không hợp lệ');
            isValid = false;
        }

        // Validate Email
        if (!email || !regexEmail.test(email)) {
            $('#spanEmail').text('Email không hợp lệ (Phải theo định dạng name_email@iuh.edu.vn)');
            isValid = false;
        }

        // Validate Flower Type
        if (!loaiHoa) {
            alert('Bạn phải chọn loại hoa');
            isValid = false;
        }

        // Validate Payment Method
        // Validate Payment Method
        const selectedPayments = $('input[name="htth"]:checked');
        if (selectedPayments.length > 1) {
            alert('Chỉ được chọn một loại thanh toán');
            isValid = false;
        } else if (selectedPayments.length === 0) {
            alert('Bạn phải chọn loại thanh toán');
            isValid = false;
        }


        // If all validations pass
        if (isValid) {
            // Get the payment method (Tiền mặt or Chuyển khoản)
            const paymentText = thanhToan === 'TM' ? 'Tiền mặt' : 'Chuyển khoản';

            // Add data to the table
            const rowCount = $('table tbody tr').length + 1;
            const newRow = `<tr>
                                <td>${rowCount}</td>
                                <td>${hoTen}</td>
                                <td>${sdt}</td>
                                <td>${ngayDat}</td>
                                <td>${email}</td>
                                <td>${loaiHoa}</td>
                                <td>${paymentText}</td>
                            </tr>`;
            $('table tbody').append(newRow);

            // Close the modal
            $('#modalId').modal('hide');

            // Clear form fields after submission
            $('#txtHoTen, #txtSDT, #txtNgayDat, #txtEmail').val('');
            $('input[name="htth"]').prop('checked', false);
            $('#txtLoaiHoa').prop('selectedIndex', 0);
        }
    });
});