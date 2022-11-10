import { defineStore, createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

export const globalStore = defineStore({
  id: 'global-store',
  state: () => ({
    name: 'Admin',
    theme: ''
  }),
  getters: {},
  actions: {
    setName(name: string) {
      this.name = name
    },
    setTheme(dark: boolean) {
      if (dark) {
        this.theme = 'dark';
        window.setAttribute('arco-theme', 'dark');
      } else {
        this.theme = '';
        document.body.removeAttribute('arco-theme');
      }
    },
  },
  persist: {
    enabled: true,
  }
})

const store = createPinia()
store.use(piniaPluginPersist)

export default store;