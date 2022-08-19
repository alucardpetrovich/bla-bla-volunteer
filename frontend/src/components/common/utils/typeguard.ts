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

interface ErrorRequest {
  request: {
    status: number;
  };
}

export const isErrorRequest = (error: unknown): error is ErrorRequest => {
  return error instanceof Error && 'request' in error;
};
