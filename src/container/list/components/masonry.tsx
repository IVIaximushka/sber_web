import QuestionCard from './item';
import React from 'react';
import { Box } from '@mui/material';
import { MasonryStyled } from './masonry.style';
import { Masonry } from '@mui/lab';

const heights = [400, 500, 600, 400, 400];

export default function CardsMasonry() {
    return (
        <MasonryStyled>
            <Box sx={{ width: 700, minHeight: 393, borderRadius: '100px' }}>
                <Masonry columns={2} spacing={2}>
                    {heights.map((height, index) => (
                        <QuestionCard key={index} cardHeight={height} cardNum={index + 1}></QuestionCard>
                    ))}
                </Masonry>
            </Box>
        </MasonryStyled>
    );
}
