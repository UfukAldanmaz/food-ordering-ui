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
            state.orders = state.orders.map(order => {
                if (order.orderId === payload.orderId) {
                    order.productCount += 1;
                }
                return order;
            });
        },
        DECREASE_ORDER(state, payload) {
            state.orders = state.orders.map(order => {
                if (order.orderId === payload.orderId) {
                    order.productCount -= 1;
                }
                return order;
            });
        },
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
        },
        increaseOrder(context, payload) {
            context.commit('INCREASE_ORDER', payload)
        },
        decreaseOrder(context, payload) {
            context.commit('DECREASE_ORDER', payload)
        },
    },
    getters: {
        totalPrice: function ({ orders }) {
            let result = 0;

            for (let i = 0; i < orders.length; i++) {
                const order = orders[i];
                result += order.product.price * order.productCount;
                for (let j = 0; j < order.ingeridents.length; j++) {
                    const ingerident = order.ingeridents[j];
                    result += ingerident.ingerident.price * ingerident.count * order.productCount;
                }
            }

            return result;
        },
        getOrders: function ({ orders }) {
            return orders;
        },
        getMaxOrderId: function ({ orders }) {
            let max = 0;
            for (let i = 0; i < orders.length; i++) {
                const order = orders[i];
                if (max < order.orderId) {
                    max = order.orderId;
                }
            }

            return max;
        }
    }
}