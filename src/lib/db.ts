
export type user = {
  email: string;
  password: string;
};


export class DB {
  private users: user[] | null = [];

  constructor() {
    console.log("db created");
  }

  public createUser(email: string, password: string) {
    const user = { email, password };
    this.users?.push(user);
    return user;
  }

  public getUsers() {
    return this.users;
  }
}