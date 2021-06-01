import { getModule, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
import request from '@/utils/request';
import { User } from '@/models/user';

export interface IUsersState {
  users: User[];
}

@Module({dynamic: true, store, name: 'users'})
class Users extends VuexModule implements IUsersState {

  users = [];

  @MutationAction({mutate: ['users']})
  async FETCH_USERS() {
    const response = await request({ url: '/users', method: 'get' });
    return { users: response.data };
  }

  @Mutation
  CLEAR_USERS() {
    this.users = [];
  }
  
}

export const UsersModule = getModule(Users);
