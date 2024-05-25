import React, { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={cx('back-to-top')}>
            {isVisible && (
                <div onClick={scrollToTop}>
                    <i className="fas fa-arrow-up"></i>
                </div>
            )}
        </div>
    );
}

export default BackToTopButton;
