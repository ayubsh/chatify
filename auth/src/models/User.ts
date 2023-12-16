import {Model} from "objection"

interface User {
  id: number;
  Username: string;
  Password: string;
  Email?: string;
}

class User extends Model {
  static get tableName(){
    return 'users'
  }
}

export default User;
