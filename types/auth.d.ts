declare namespace Auth {
  export interface LoginInputs {
    email: string;
    password: string;
    check: boolean;
  }

  export type LoginArgs = Pick<LoginInputs, "email" | "password">;

  export type EmailInput = Pick<LoginInputs, "email">;

  export type UserState = {
    _id: string;
    role: string;
    email: string;
    last_name: string;
    first_name: string;
    is_block: boolean;
    is_verified: boolean;
    profile_img: string;
    login_at: string;
    created_at: string;
    updated_at: string;
    [key: string]: any;
  };

  export type AuthState = { user: UserState };
}
