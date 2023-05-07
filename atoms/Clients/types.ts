export enum Gender {
  FEMALE = 1,
  MALE = 2,
  CHILD = 3,
}

export type Client = {
  id: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  phone: string;
  email: string;
  gender: Gender;
  birthday: string;
  isSMS: boolean;
  isMarketing: boolean;
  info: string;
};
