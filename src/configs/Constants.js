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
        line_input_text: 'rgba(104,152,152,0.6)',
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
        value_change_information: 'Thay đổi thông tin',
        value_history_favorite: 'Lịch sử đã xem',
        value_text_repass: 'Nhập lại mật khẩu',
        value_support: 'Liên hệ hỗ trợ',
        value_introduce: 'Giới thiệu',
        value_text_login: 'Ngân hàng thuốc Việt',
        value_input_user: 'Tên tài khoản',
        value_change_pass: 'Đổi mật khẩu',
        value_username_demo: 'Tuan Tran',
        value_input_pwd: 'Mật khẩu',
        value_version_app: 'Phiên bản',
        value_version_app_demo: 'v1.0.0',
        value_information_app: 'Thông tin ứng dụng',
        value_email_demo: 'makuru9x@gmail.com',
        value_login_out: 'Đăng xuất',
        value_phone_demo: '+84386161113',
        value_phone: 'Số điện thoại',
        value_name_account_demo: 'qbro123',
        value_name_account: 'Tên tài khoản',
        value_forget_pwd: 'Quên mật khẩu',
        value_string_register: ' tài khoản miễn phí',
        value_more: 'Xem thêm',
        value_category_hot: 'Các loại hàng đầu',
        value_category_all: 'Toàn bộ danh mục',
        value_string_login: 'Nếu đã có tài khoản? ',
        value_news: 'Tin mới nhất',
        value_details_pill: 'Giá bán buôn không được cao hơn với giá bán buôn kê khai. Thặng dư giá bán lẻ không được cao hơn thặng thư tối đa với từng loại thuốc theo quy định'
    },
    size: {
        button_width: 150,
        button_height: 40,
        button_text: 18,
        match_parent: '100%',
        height_line: 1,
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
        url_upload: 'https://drugbank-vn.herokuapp.com/uploads/',
        user_profile_demo: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-9/89905452_1577593915734134_2826323857860722688_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=wAJlsaP7f44AX8x0MrN&_nc_ht=scontent.fdad3-3.fna&oh=85a8e1340b946a8e88049fc90bfbfc89&oe=5EDC5568',
    },
    category_object: [
        {
            name: 'Xem nhiều',
            icon: 'play-circle',
            status: true
        },
        {
            name: 'Mới nhất',
            icon: 'archive',
            status: true
        },
        {
            name: 'Dạng bệnh',
            icon: 'briefcase',
            status: true
        },
        {
            name: 'Sổ đăng ký',
            icon: 'scissors',
            status: false
        },
        {
            name: 'Thuốc kê đơn',
            icon: 'file-plus',
            status: true
        },
        {
            name: 'Thuốc Không kê đơn',
            icon: 'file-minus',
            status: true
        },
        {
            name: 'Dạng bào chế',
            icon: 'aperture',
            status: false
        },
        {
            name: 'Cty sản xuất',
            icon: 'server',
            status: false
        },
        {
            name: 'Cty đăng ký',
            icon: 'sun',
            status: false
        },
        {
            name: 'Dạng thuốc',
            icon: 'slack',
            status: true
        },
    ]


}
export default VALUE;
