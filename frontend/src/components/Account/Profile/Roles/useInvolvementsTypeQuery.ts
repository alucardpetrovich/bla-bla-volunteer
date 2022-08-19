import { useQuery } from '@tanstack/react-query';

import { Involvements } from '../../../common/services/api/auth';
import { getInvolvements } from './api/involvements';

const parseInvolvementsType = (data: Involvements[]): { id: Involvements }[] => {
  return data.map(item => ({
    id: item,
  }));
};

export const useInvolvementsTypeQuery = () => {
  return useQuery([getInvolvements.name], getInvolvements, { staleTime: Infinity, select: parseInvolvementsType });
};
