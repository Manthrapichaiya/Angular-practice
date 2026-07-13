interface UsersResponse {
  limit: number;
  skip: number;
  total: number;
  users: User[]; // Replace 'any' with your User interface
}

interface User {
  id: number;
  firstName: string;
  age: number;
  gender: string;
  email: string;
  username: string;
}