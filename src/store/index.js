import { createStore } from 'vuex'
import cartModule from './cartModule';

export default createStore({
    modules: {
        cart: cartModule
    }
});