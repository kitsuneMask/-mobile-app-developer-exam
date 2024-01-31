// IONIC
import { createRouter, createWebHistory } from '@ionic/vue-router';

// COMPONENTS
import HomePage from '../views/HomePage.vue';
import OrderNow from "../views/OrderNow.vue";
import Notifications from "../views/Notifications.vue";
import StoreLocator from "../views/StoreLocator.vue";
import FAQs from "../views/FAQs.vue";
import MyOrders from "../views/MyOrders.vue";
import MyAccount from "../views/MyAccount.vue";
import MyFavorites from "../views/MyFavorites.vue";
import OrderTracker from "../views/OrderTracker.vue";
import OrderHistory from "../views/OrderHistory.vue";
import AddBurger from "../components/AddBurger.vue";
import MyBag from "../components/MyBag.vue";
import Checkout from "../components/Checkout.vue";

const routes = [

  {

    path: '/',
    redirect: '/home'

  },

  {

    path: '/home',
    name: 'Home',
    component: HomePage

  },

  {

    path : "/order-now",
    name : "Order Now",
    component : OrderNow,

  },

  {

    path : "/notifications",
    name : "Notifications",
    component : Notifications

  },

  {

    path : "/store-locator",
    name : "Store Locator",
    component : StoreLocator

  },

  {

    path : "/faqs",
    name : "FAQ's",
    component : FAQs

  },

  {

    path : "/my-orders",
    name : "My Orders",
    component : MyOrders

  },

  {

    path : "/my-account",
    name : "My Account",
    component : MyAccount

  },

  {

    path : "/my-favorites",
    name : "My Favorites",
    component : MyFavorites

  },

  {

    path : "/order-tracker",
    name : "Order Tracker",
    component : OrderTracker

  },

  {

    path : "/order-history",
    name : "Order History",
    component : OrderHistory

  },

  {

    path : "/add-burger/:id",
    name : "Add Burger",
    component : AddBurger

  },

  {

    path : "/my-bag",
    name : "My Bag",
    component : MyBag

  },

  {

    path : "/checkout",
    name : "Checkout",
    component : Checkout

  }

];

const router = createRouter( {

  history: createWebHistory(import.meta.env.BASE_URL),
  routes

} );

export default router;
