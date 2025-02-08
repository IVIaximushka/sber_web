import * as React from 'react';

const QuestionPicture = ({ questionText }) => {
    const num = (questionText.length % 6) + 1;
    const src = `${__webpack_public_path__}/remote-assets/images/question` + num + `.jpg`;
    return <img src={src} alt={'Фото вопроса'} width={340} height={200} />;
};

export default QuestionPicture;
