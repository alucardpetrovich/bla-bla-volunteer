interface ErrorResponse {
  response: {
    data: {
      message: string;
      statusCode: number;
    };
  };
}

export const isErrorResponse = (error: unknown): error is ErrorResponse => {
  return error instanceof Error && 'response' in error;
};
