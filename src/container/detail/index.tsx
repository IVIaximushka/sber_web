import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetQuestionQuery } from '../../store/api';
import { DetailPageStyled } from './index.style';
import AnswerSlide from './AnswerSlide';
import AnswerPicture from './AnswerPicture';
import { getNavigationValue } from '@brojs/cli';

const DetailPage = (): React.ReactElement => {
    const { id } = useParams();
    const { data, isLoading } = useGetQuestionQuery(id);

    return (
        <DetailPageStyled>
            {isLoading ? (
                <div>Loading...</div>
            ) : data ? (
                <>
                    <h2>Страница детальных данных</h2>
                    <p>{data.question}</p>
                    <AnswerSlide answer={data.answer} comment={data.comments} author={data.authors} />
                </>
            ) : (
                <>
                    <h3>
                        Чтобы увидеть дополнительную информацию по какому-либо вопросу, нужно выбрать карточку.
                        Перейдите на <a href={getNavigationValue('sber_web.main')}>главную.</a>
                    </h3>
                    <AnswerPicture name={'loading_owl'} />
                </>
            )}
        </DetailPageStyled>
    );
};

export default DetailPage;
