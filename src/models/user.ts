export class User {

  id: number | null;
  username: string | null;
  password: string | null;
  firstName: string | null;
  lastName: string | null;
  birthDate: string | null;
  email: string | null;
  avatar: string | null;
  isActive: boolean | null;

  constructor(obj?: User) {
    this.id = obj ? obj.id : null;
    this.username = obj ? obj.username : null;
    this.password = obj ? obj.password : null;
    this.firstName = obj ? obj.firstName : null;
    this.lastName = obj ? obj.lastName : null;
    this.birthDate = obj ? this.trimDate(obj.birthDate) : null;
    this.email = obj ? obj.email : null;
    this.avatar = obj ? obj.avatar : null;
    this.isActive = obj ? obj.isActive : null;
  }

  private trimDate(date: string | null): string | null {
    return date ? date.substr(0, 10) : null;
  }

}
