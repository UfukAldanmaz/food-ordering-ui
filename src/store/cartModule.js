export default {
    namespaced: true,
    state: {
        orders: []
    },
    mutations: {
        ADD_TO_CART(state, payload) {
            state.orders = payload
        },
        EMPTY_CART(state) {
            state.orders = []
        },
        REMOVE_ORDER(state, payload) {
            state.orders = payload
        },
        INCREASE_ORDER(state, payload) {
            state.orders = payload
        }

    },
    actions: {
        addToCart(context, payload) {
            const orders = context.state.orders
            orders.push(payload)
            context.commit('ADD_TO_CART', orders)
        },
        emptyCart(context) {
            context.commit('EMPTY_CART')
        },
        removeOrder(context, payload) {
            const orders = context.state.orders.filter(
                order => order !== payload
            )
            context.commit('REMOVE_ORDER', orders)
        }

    },
    getters: {
        totalPrice: function ({ orders }) {
            let result = 0;

            for (let i = 0; i < orders.length; i++) {
                const order = orders[i];
                result += order.product.price * order.productCount;
                for (let j = 0; j < order.ingeridents.length; j++) {
                    const ingerident = order.ingeridents[j];
                    result += ingerident.ingerident.price * ingerident.count;
                }
            }

            return result;
        },
        getOrders: function ({ orders }) {
            console.log("orders", orders);
            return orders;
        }
    }
}