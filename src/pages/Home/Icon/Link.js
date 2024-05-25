import React from 'react';
import Button from '~/components/Button';

const style = {
    position: 'fixed',
    right: '50px',
    bottom: '20px',
};

function YourComponent() {
    const googlePlayURL = 'https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically&hl=en_US';

    return (
        <a href={googlePlayURL} target="_blank" rel="noopener noreferrer" style={style}>
            <Button rounded>Tải ứng dụng</Button>
        </a>
    );
}

export default YourComponent;
