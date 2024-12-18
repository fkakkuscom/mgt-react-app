export type User = {
  id: number;
  email: string;
  password: string;
  fullName: string | null;
  createdAt: string;
  updatedAt: string | null;
  profile: Profile;
  posts?: Post[];
};

export type Profile = {
  id: number;
  userId: number;
  avatarUri: string | null;
  bio: string | null;
  createdAt: string;
  updatedAt: string;
};

export type PostType = "post" | "page";

export type Post = {
  id: number;
  type: PostType;
  uri: string;
  title: string;
  description: string | null;
  content: string;
  userId: number | null;
  createdAt: string;
  updatedAt: string;
  user?: User;
  categories?: Category[];
  attachments?: Attachment[];
};

export type Category = {
  id: number;
  uri: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  posts?: Post[];
};

export type Attachment = {
  id: number;
  ext: string;
  path: string;
  size: number;
  title: string | null;
  createdAt: string;
  updatedAt: string;
  posts?: Post[];
};

export type ProcessEntityError = {
  message: string;
  rule: string;
  field: string;
};
