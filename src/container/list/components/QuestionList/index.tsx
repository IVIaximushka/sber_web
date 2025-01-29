import QuestionCard from '../QuestionCard';
import React from 'react';
import { QuestionListStyled } from './index.style';
import { useGetListQuery } from '../../../../store/api';
import { validateText } from './questionTextValidation';
import { truncateText } from './questionTextTruncation';
import { Link } from 'react-router-dom';
import { getNavigationValue } from '@brojs/cli';

const QuestionList = () => {
    const { data, isLoading, error } = useGetListQuery({});
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Произошла ошибка</div>}
            <QuestionListStyled columns={3} spacing={2}>
                {data?.map((item) => (
                    <Link to={getNavigationValue("sber_web.detail").replace(":id", item.id)}>
                        <QuestionCard fullText={validateText(item.question)}>
                            {truncateText(validateText(item.question))}
                        </QuestionCard>
                    </Link>
                ))}
            </QuestionListStyled>
        </>
    );
};

export default QuestionList;
