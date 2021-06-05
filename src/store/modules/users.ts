import { getModule, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';
import { User } from '@/models/user';
import store from '@/store';
import request from '@/utils/request';
import { DataOptions } from 'vuetify';

export interface IUsersState {
  usersData: User[];
  totalCount: number;
  pagination: IPageable;
}

export interface IPageable {
  size: number;
  page: number;
  sort: { column: string, direction: string };
}

@Module({dynamic: true, store, name: 'users', namespaced: true})
class Users extends VuexModule implements IUsersState {

  usersData = [];
  totalCount = 0;
  pagination = { page: 1, size: 10, sort: {column: 'id', direction: 'asc'} };

  @MutationAction({mutate: ['usersData', 'totalCount']})
  async FETCH_USERS() {
    const response = await fetchUsers();
    return { usersData: response.data, totalCount: Number(response.headers['x-total-count']) };
  }

  // @Mutation
  // SET_CURRENT_PAGE(page: number) {
  //   this.pagination.page = page;
  // }

  @Mutation
  SET_PAGINATION(pagination: DataOptions) {
    this.pagination.page = pagination.page;
    this.pagination.size = pagination.itemsPerPage;
    if (pagination.sortBy.length) {
      this.pagination.sort.column = pagination.sortBy[0];
    } else {
      this.pagination.sort.column = 'id';
    }
    if (pagination.sortDesc.length) {
      this.pagination.sort.direction = pagination.sortDesc[0] ? 'desc' : 'asc';
    } else {
      this.pagination.sort.direction = 'asc';
    }
  }

  @Mutation
  CLEAR_USERS() {
    this.usersData = [];
  }

}

const fetchUsers = () => {
  return request({
    url: '/users',
    method: 'get',
    params: {
      page: UsersModule.pagination.page,
      size: UsersModule.pagination.size,
      sort: `${UsersModule.pagination.sort.column},${UsersModule.pagination.sort.direction}`
    }
  });
}

export const UsersModule = getModule(Users);
