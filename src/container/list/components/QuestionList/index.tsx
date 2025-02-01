import QuestionCard from '../QuestionCard';
import React from 'react';
import { QuestionListStyled } from './index.style';
import { useGetListQuery } from '../../../../store/api';
import { validateText } from './questionTextValidation';
import { truncateText } from './questionTextTruncation';
import { getNavigationValue } from '@brojs/cli';
import { LinkStyled } from './LinkStyled/index.style';
import Loading from '../../../../components/Loading';

const QuestionList = () => {
    const { data, isLoading, error } = useGetListQuery(undefined);
    return (
        <>
            {isLoading && <Loading />}
            {error && <div>Произошла ошибка</div>}
            {data &&
                <QuestionListStyled columns={3} spacing={2}>
                    {data?.map((item) => (
                        <LinkStyled to={getNavigationValue("sber_web.detail").replace(":id", item.id)}>
                            <QuestionCard fullText={validateText(item.question)}>
                                {truncateText(validateText(item.question))}
                            </QuestionCard>
                        </LinkStyled>
                    ))}
                </QuestionListStyled>
            }
        </>
    );
};

export default QuestionList;
