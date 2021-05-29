import { getModule, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
import request from '@/utils/request';
import { User } from '@/models/user';

export interface IAuthState {
  token: string;
  user: User;
}

@Module({dynamic: true, store, name: 'auth'})
class Auth extends VuexModule implements IAuthState {

  token = '';
  user = new User({});

  @Mutation
  SET_TOKEN(token: string) {
    this.token = token;
  }

  get isAuthenticated() {
    return this.user.id !== null;
  }

  @MutationAction({mutate: ['user']})
  async FETCH_USER_DATA() {
    const response = await request({ url: '/auth/me', method: 'get' });
    return { user: new User(response.data) };
  }

  @Mutation
  CLEAR_AUTH() {
    this.token = '';
    this.user = new User({});
  }
}

export const AuthModule = getModule(Auth);
