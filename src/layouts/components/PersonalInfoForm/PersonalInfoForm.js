import React, { useState } from 'react';
import Button from '~/components/Button'; 
import classNames from 'classnames/bind';
import styles from './PersonalInfoForm.module.scss';

const cx = classNames.bind(styles);

const PersonalInfoForm = ({ onSubmit, onCancel }) => {
    // State để lưu trữ thông tin người dùng nhập
    const [formData, setFormData] = useState({
        name: '',
        id: '',
        phoneNumber: '',
        Address: '',
        // Thêm các trường thông tin khác nếu cần
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
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={cx('Infor')}>
            <div>
                <h2 style={{ textAlign: 'center' }}> Thông tin cá nhân</h2>
                <label htmlFor="name">
                    <strong>Tên: </strong>{' '}
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className={cx('txtcmt')}>
                <p>Bạn chỉ có thể thay đổi biệt danh 7 ngày một lần.</p>
            </div>
            <div>
                <label htmlFor="id">
                    <strong>TikTok ID:</strong>
                </label>
                <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} required />
            </div>
            <div className={cx('txtcmt')}>
                <p>www.tiktok.com/@btpm203</p>
                <p>
                    {' '}
                    TikTok ID chỉ có thể bao gồm chữ cái, chữ số, dấu gạch dưới và dấu chấm. Khi thay đổi TikTok ID,
                    liên kết hồ sơ của bạn cũng sẽ thay đổi.
                </p>
            </div>
            <div>
                <label htmlFor="phoneNumber">
                    <strong>phoneNumber:</strong>
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
            <div className={cx('txtcmt')}>
                <p>Phải bao gồm 10 chữ số</p>
            </div>
            <div>
                <label htmlFor="Address">
                    <strong>Address:</strong>
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
                <Button onClick={onCancel}>Hủy</Button>
                <Button type="submit">Lưu</Button>
            </div>
        </form>
    );
};

export default PersonalInfoForm;
