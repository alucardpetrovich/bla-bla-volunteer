export interface IInvolvement {
  type: string;
  verified: boolean;
}
export interface IUser {
  involvements: IInvolvement[];
  id: string;
  status: string;
  nickname: string;
}
