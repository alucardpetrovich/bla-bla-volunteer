import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useParams } from 'react-router';
import axios from 'src/components/common/utils/axios';

export const patchVerificationConfirm = async (verificationToken: string | undefined) => {
  const response = await axios.patch(`/v1/auth/verify/${verificationToken}`);
  return response.data;
};

export const useVerificationConfirm = () => {
  const { token } = useParams();
  return useQuery([patchVerificationConfirm.name], () => patchVerificationConfirm(token), {
    onError: (error: Error | AxiosError) => {
      console.error(error.message);
    },
    staleTime: Infinity,
    retry: false,
  });
};
