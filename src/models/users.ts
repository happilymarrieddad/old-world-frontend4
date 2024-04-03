interface CreateUser {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirm: string;
}

interface User {
    id:string;
    first_name: string;
    last_name: string;
    email: string;
}

export type { User, CreateUser };
