import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import axios from 'src/components/common/utils/axios';

export const patchVerificationConfirm = async (verificationToken: string | undefined) => {
  const response = await axios.patch(`/v1/auth/verify/${verificationToken}`);
  return response.data;
};

export const useVerificationConfirm = () => {
  const { isSuccess, isLoading, isError, mutate } = useMutation(patchVerificationConfirm, {
    onError: (error: Error | AxiosError) => {
      console.log(error.message);
    },
  });

  return { isSuccess, isLoading, isError, mutate };
};
