interface Account {
  id: number;
  email: string;
  name: string;
  avatarUrl?: string;
  premium: boolean;
  options?: string;
  deleteRequest?: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface PublicAccount {
  email: string;
  name: string;
  avatarUrl?: string;
  premium: boolean;
}
