import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Sử dụng useNavigate để điều hướng
import Header from '~/layouts/components/Header';
import styles from './Logout.module.scss'; // Import CSS module nếu cần

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Thực hiện đăng xuất
        localStorage.removeItem('token'); // Xóa token hoặc thông tin đăng nhập khỏi localStorage
        // Thực hiện các hành động khác nếu cần, ví dụ: gọi API để thông báo đăng xuất

        // Chuyển hướng người dùng đến trang đăng nhập hoặc trang chủ sau một khoảng thời gian
        setTimeout(() => {
            navigate('/login'); // Chuyển hướng người dùng đến trang đăng nhập
        }, 3000); // Đợi 3 giây trước khi chuyển hướng
    }, [navigate]);

    return (
        <div className={styles.logoutContainer}>
            <Header />
            <div className={styles.logoutContent}>
                <h2>Đăng xuất thành công</h2>
                <p>Bạn sẽ được chuyển hướng đến trang đăng nhập trong giây lát...</p>
            </div>
        </div>
    );
};

export default Logout;
