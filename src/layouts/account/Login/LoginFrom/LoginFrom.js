import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Button from '~/components/Button/Button.js'; 
import classNames from 'classnames/bind';
import styles from './LoginFrom.module.scss';

const cx = classNames.bind(styles);

const LoginFrom = () => {
    const navigate = useNavigate(); // Tạo instance của useNavigate
    const [formData, setFormData] = useState({
        phoneNumber: '',
        Address: '',
    });

    // Hàm xử lý khi người dùng thay đổi giá trị trường nhập
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Hàm xử lý khi người dùng gửi form
    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý gửi form
        console.log('Form data submitted:', formData);

        // Chuyển hướng đến trang home
        navigate('/home');
    };

    // Hàm xử lý khi người dùng nhấn hủy
    const handleCancel = () => {
        // Xử lý khi nhấn hủy
        console.log('Form submission cancelled');
    };

    return (
        <form onSubmit={handleSubmit} className={cx('Infor')}>
            <div>
                <h2 style={{ textAlign: 'center' }}> Đăng nhập vào TikTok</h2>
            </div>
            <div>
                <label htmlFor="phoneNumber">
                    <strong>Số điện thoại:</strong>
                </label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="Address">
                    <strong>Mật khẩu:</strong>
                </label>
                <input
                    type="text"
                    id="Address"
                    name="Address"
                    value={formData.Address}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={{ textAlign: 'center' }}>
                <Button primary={handleCancel}>Hủy</Button>
                <Button primary="submit">Đăng nhập</Button>
            </div>
        </form>
    );
};

export default LoginFrom;
