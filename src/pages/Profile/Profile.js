import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faShare } from '@fortawesome/free-solid-svg-icons';
import YourComponent from '~/pages/Home/Icon/Link.js';

import Myvideos from '~/Videos/video.js';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import AccountPreview from '~/components/SuggestedAccounts/AccountPreview/AccountPreview';
import Button from '~/components/Button';
import PersonalInfoForm from '~/layouts/components/PersonalInfoForm/PersonalInfoForm.js'; // Import PersonalInfoForm
const cx = classNames.bind(styles);

function Profile() {
    const [showForm, setShowForm] = useState(false);
    const [isInfoVisible, setIsInfoVisible] = useState(false);

    const handleEditProfile = () => {
        setShowForm(true);
        setIsInfoVisible(true); // Đặt biến trạng thái thành true khi hiển thị bảng thông tin cá nhân
    };

    const handleCancelEdit = () => {
        setShowForm(false);
    };

    const handleSubmitForm = (formData) => {
        console.log('Thông tin cá nhân:', formData);
        setShowForm(false);
        setIsInfoVisible(false); // Ẩn thông tin cá nhân khi đã lưu
    };

    return (
        <div>
            <div className={styles.wrapper}>
                <AccountPreview avatarSize={150} showFollowButton={false} showHeart={true} />
                <FontAwesomeIcon className={styles.share} icon={faShare} />
            </div>
            <div className={styles.profileWrapper}>
                {showForm && <PersonalInfoForm onSubmit={handleSubmitForm} onCancel={handleCancelEdit} />}
                {!showForm && (
                    <Button rounded className={styles.EditProfile} onClick={handleEditProfile}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                        Sửa hồ sơ
                    </Button>
                )}
            </div>

            <ul>
                <li>
                    <a href="#video">Video</a>
                </li>
                <li>
                    <a href="#yeuthich">Yêu thích </a>
                </li>
                <li>
                    <a href="#dathich">Đã thích </a>
                </li>
            </ul>
            <Myvideos />
            <Myvideos />

            <YourComponent />
        </div>
    );
}
export default Profile;
