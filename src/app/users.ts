export interface User {
  userId: number;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const Users: User[] = [
  { userId: 1, userName: 'admin', password: 'admin123', firstName: 'Admin', lastName: 'User' }
];
