import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FC, useState } from 'react';
import { useIntl } from 'react-intl';

import HorizontalBar from './HorizontalBar';
import {
  Box,
  Category1,
  Category2,
  Category3,
  CategoryTitle,
  Container,
  StatisticBox,
  StatisticText,
  StatisticWrapper,
  TitleStyled,
  Wrapper,
} from './Statistic.styled';
import VerticalBar from './VerticalBar';

const Statistic: FC = () => {
  const [age, setAge] = useState('3');
  const { formatMessage } = useIntl();

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div style={{ display: 'flex', maxWidth: '1000px' }}>
      <Container>
        <TitleStyled>{formatMessage({ defaultMessage: 'Статистика', description: 'statistic title' })}</TitleStyled>
        <Wrapper>
          <StatisticText>{formatMessage({ defaultMessage: 'Проекти', description: 'statistic text' })}</StatisticText>

          <FormControl>
            <Select variant="standard" value={age} onChange={handleChange} displayEmpty>
              <MenuItem value={3}>
                {formatMessage({ defaultMessage: '3 тиж.', description: 'statistic week' })}
              </MenuItem>
              <MenuItem value={2}>
                {formatMessage({ defaultMessage: '2 тиж.', description: 'statistic week' })}
              </MenuItem>
              <MenuItem value={1}>
                {formatMessage({ defaultMessage: '1 тиж.', description: 'statistic week' })}
              </MenuItem>
            </Select>
          </FormControl>
        </Wrapper>
        <StatisticBox>
          <VerticalBar />
        </StatisticBox>

        <Box>
          <CategoryTitle>
            {formatMessage({ defaultMessage: 'Популярні категорії', description: 'statistic category title' })}
          </CategoryTitle>
          <StatisticWrapper>
            <Category1>{formatMessage({ defaultMessage: 'Вода', description: 'statistic category text' })}</Category1>
            <Category2>
              {formatMessage({ defaultMessage: 'Медикаменти', description: 'statistic category text' })}
            </Category2>
            <Category3>
              {formatMessage({ defaultMessage: 'Продукти харчування', description: 'statistic category text' })}
            </Category3>
            <HorizontalBar />
          </StatisticWrapper>
        </Box>
      </Container>
    </div>
  );
};

export default Statistic;
