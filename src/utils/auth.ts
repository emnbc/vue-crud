import { AuthModule } from '@/store/modules/auth';
import store from '@/store';
import router from '@/router';
import { NavigationGuardNext, Route } from 'vue-router';

const TOKEN = 'vue-crud-token';

export const setToken = (token: string) => {
  store.commit('SET_TOKEN', token);
  localStorage.setItem(TOKEN, token);
}

export const getToken = (): string | null => {
  if (AuthModule.token) {
    return AuthModule.token;
  } else {
    return localStorage.getItem(TOKEN);
  }
}

export const removeToken = () => {
  store.commit('CLEAR_AUTH');
  localStorage.removeItem(TOKEN);
}

export const logOut = () => {
  removeToken();
  router.replace('/sign-in');
}

export const securityGuard = async (to: Route, from: Route, next: NavigationGuardNext) => {

  const authRequired = to.matched.some((route) => route.meta.authRequired);

  if (authRequired) {
    if (AuthModule.isAuthenticated) {
      next({replace: true});
    } else {
      const token = getToken();

      if (token) {
        await store.dispatch('FETCH_USER_DATA');

        if (AuthModule.isAuthenticated) {
          next({replace: true});
        } else {
          next({path: '/sign-in', replace: true});
        }

      } else {
        next({path: '/sign-in', replace: true});
      }
    }
  } else {
    next({replace: true});
  }
}
