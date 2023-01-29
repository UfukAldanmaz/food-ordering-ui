<template>
  <div class="cart">
    <!-- <span class="cart-sticky">Cart</span> -->
    <div class="cart-header-container">
      <div class="cart-header">
        <span><b>Мой заказ</b></span>
        <button @click="emptyCart">🗑️</button>

      </div>
      <div class="cart-address">
        <p>Адрес самовывоза</p>
        <p>The Adress prop</p>
      </div>
    </div>
    <OrderItem v-for="item in $store.getters['cart/getOrders']" :key="item.product.id" :order="item" />

    <div class="text-center">
      <v-dialog width="400px" v-model="dialog">
        <template v-slot:activator="{ props }">
          <div class="total-price">
            <p>К оплате</p>
            <p>{{ $store.getters['cart/totalPrice'] }}</p>
          </div>
          <button v-bind="props" class="check-out-btn">Оформить заказ</button>
        </template>

        <v-card>
          <v-card-text>
            <img />
            <p>Title prop</p>
            <p>Detail prop</p>
            <p>Price prop</p>
            <CounterItem />
            <p> Добавить к заказу?</p>
            <p>Промокод
              Ввести промокод</p>
            <p>Promotion input</p>
            <p>Укажите количество персон</p>
            <p>A Counter</p>
            <p>Итого</p>
            <p>total prop</p>
            <template>
              <div class="text-center">
                <v-dialog width="400px" v-model="dialog2">
                  <template v-slot:activator="{ props }">

                    <button v-bind="props" class="check-out-btn">Далее</button>

                  </template>

                  <v-card>
                    <v-card-text>
                      <!-- <p>Самовывоз</p>
                      <p>ADRESS</p>
                      <input placeholder="Ваше имя" />
                      <input placeholder="Ваш номер телефона" type="number" />
                      <select>
                        <option>15 minutes</option>
                      </select>
                      <input placeholder="Комментарий к заказу" />
                      <p>Итого</p>
                      <p>Total prop</p>
                      <button class="check-out-btn">Далее</button> -->
                    </v-card-text>
                    <v-card-actions>
                      <!-- <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn> -->
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </template>
          </v-card-text>
          <v-card-actions>
            <!-- <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
import OrderItem from './OrderItem.vue';



export default {
  components: {
    OrderItem
  },
  data() {
    return {
      dialog: false,
      dialog2: false,

    };
  },
  methods: {
    emptyCart: function () {
      console.log('str');
      this.$store.dispatch('cart/emptyCart')
    }
  }
}</script>
<style>
.check-out-btn {
  width: 250px;
  height: 40px;
  background-color: #1DBF73;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  color: white;
}

.cart-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 100px;

}


.cart-header-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-left: 25px;
  padding-right: 25px;
}

.cart-address {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
}

/* .cart-sticky {
  position: sticky;
  height: 500px;
  background-color: rgb(216, 215, 215);
  top: 520px;
  right: 50px;
  overflow-x: hidden;
  padding-top: 20px;
  border-radius: 8px;
  float: right;
  width: 21%;
} */

.cart {
  /* width: 200px; */
  /* position: fixed; */
  /* 
  width: 160px; */
  align-items: center;
  padding-bottom: 25px;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  /* z-index: 1; */
  height: auto;
  top: 620px;
  /* bottom: auto; */
  right: 50px;
  /* overflow-x: hidden; */
  /* padding-top: 20px; */
  border-radius: 8px;
  /* margin-top: 6px; */
  height: 100%;
  max-height: 200%;
  background-color: rgb(246, 241, 241);
  float: right;
  width: 21%;
  overflow: scroll;
}

.total-price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 130px;
  margin-bottom: 10px;
}
</style>