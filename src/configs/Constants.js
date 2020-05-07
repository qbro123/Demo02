const VALUE = {
    font: {
        bold: "bold",
        italic: "italic",
        medium: "medium",
        regular: "regular",
        bolditalic: "bolditalic",
        mediumitalic: "mediumitalic",
        semibold: "semibold",
        semibolditalic: "semibolditalic"
    },
    colors: {
        color_text: '#c9c9c9',
        bg_start: '#676767',
        bg_end: '#3d3e3e',
        bg_button_start: '#555555',
        bg_button_end: 'rgba(51,51,51,0.65)',
        line_input_text: '#68989898',
        color_forget: '#fcb368',
        color_white: '#fff',
        color_black: '#000'
    },
    string: {
        value_text: 'Ngân hàng thuốc Việt cho mọi nhà',
        value_text_title: 'DRUGBANK',
        value_text_title_login: 'Đăng nhập',
        value_text_title_register: 'Đăng ký',
        value_text_fullname: 'Họ và tên',
        value_text_home: 'Trang chủ',
        value_title_pill_new: 'Thuốc mới lưu hành',
        value_title_pill_change: 'Thuốc mới thay đổi/bổ sung',
        value_title_pill_end: 'Thuốc mới rút sổ đăng ký',
        value_text_pill: 'Danh sách thuốc',
        value_text_category: 'Danh mục',
        value_text_account: 'Tài khoản',
        value_text_repass: 'Nhập lại mật khẩu',
        value_text_login: 'Ngân hàng thuốc Việt',
        value_input_user: 'Tên tài khoản',
        value_input_pwd: 'Mật khẩu',
        value_forget_pwd: 'Quên mật khẩu',
        value_string_register: ' tài khoản miễn phí',
        value_more: 'Xem thêm',
        value_string_login: 'Nếu đã có tài khoản? ',
        value_news: 'Tin mới nhất',
        value_details_pill: 'Giá bán buôn không được cao hơn với giá bán buôn kê khai. Thặng dư giá bán lẻ không được cao hơn thặng thư tối đa với từng loại thuốc theo quy định'
    },
    size: {
        button_width: 150,
        button_height: 40,
        button_text: 18,
        match_parent: '100%',
    },
    position: {
        center: 'center',
        top: 'top',
        left: 'left',
        right: 'right',
        justify: 'justify'
    },
    api: {
        api_new_product: 'https://drugbank-vn.herokuapp.com/api/product/new-edit',
        api_notification: 'https://drugbank-vn.herokuapp.com/api/notification',
        api_product: 'https://drugbank-vn.herokuapp.com/api/product/all',
        url_upload: 'https://drugbank-vn.herokuapp.com/uploads/'

    }


}
export default VALUE;
