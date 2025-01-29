import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetQuestionQuery } from '../../store/api';

const DetailPage = (): React.ReactElement => {
    const { id } = useParams();
    const { data, isLoading, error } = useGetQuestionQuery(id);
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Произошла ошибка</div>}
            <h1>Страница детальных данных {id}</h1>
            {data && <div>{data.question}</div>}
        </>
    );
};

export default DetailPage;
