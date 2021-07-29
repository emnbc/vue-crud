export class User {

  id: number | null;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  birthDate: string | null;
  email: string | null;
  avatar: string | null;
  isActive: boolean | null;

  constructor({
    id = null,
    username = null,
    firstName = null,
    lastName = null,
    birthDate = null,
    email = null,
    avatar = null,
    isActive = null,
  }) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.email = email;
    this.avatar = avatar;
    this.isActive = isActive;
  }

}
