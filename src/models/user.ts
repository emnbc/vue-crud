export class User {

  id: number | null;
  username: string | null;
  firstName: string | null;
  lastName: string | null;

  constructor({
    id = null,
    username = null,
    firstName = null,
    lastName = null,
  }) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
  }

}