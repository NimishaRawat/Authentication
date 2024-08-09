// src/app/models/user.model.ts
export interface User {
  email: string;
  phoneNumber?: string;
  password: string;
  fullName?: string;
  organizationId?: string;
  designation?: string;
  birthDate?: Date | null; // You might need to adjust the type based on your implementation
  city?: string;
  pincode?: string;
  }
  
  // src/app/models/organization.model.ts
  
  