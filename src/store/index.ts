import Vue from 'vue'
import Vuex from 'vuex'
import { IAuthState } from './modules/auth'

Vue.use(Vuex)

export interface IRootState {
  auth: IAuthState;
}

export default new Vuex.Store<IRootState>({});
