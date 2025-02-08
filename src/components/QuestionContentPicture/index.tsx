import * as React from 'react';

const ContentPicture = () => {
    return (
        <img
            src={`${__webpack_public_path__}/remote-assets/images/content.png`}
            alt={'Фото вопроса'}
            width={310}
            height={200}
            style={{ borderRadius: '50%' }}
        />
    );
};

export default ContentPicture;
