import React from 'react';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import ContentPicture from '../../../../../../components/QuestionContentPicture';

const CardContentHover = ({ fullText }): React.ReactElement => {
    return (
        <>
            <Grow in={true}>
                <div>
                    <ContentPicture />
                </div>
            </Grow>
            <Fade in={true} timeout={1000}>
                <div>{fullText}</div>
            </Fade>
        </>
    );
};

export default CardContentHover;
