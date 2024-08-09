import { User } from '../model.ts';

export const usersMock: User[] = [
  {
    email: 'test@example.com',
    password: 'password123',
    fullName: 'Test User',
    organizationId: 'org1',
    designation: 'Developer',
    birthDate: new Date('1990-01-01'),
    city: 'Test City',
    pincode: '123456'
  }
];
