<!-- TEMPLATE -->
<template>

  <ion-app>

    <!-- SIDE BAR -->
    <ion-menu content-id="main-content">

      <!-- CONTENT -->
      <ion-content class="ion-padding">

        <ProfieSideBar />

        <!-- NAV1 -->
        <ul>

          <li data-navigation="home" data-path="/home" @click="NAVIGATE" class="nav-buttons" :class="{ active : STORE_NAVIGATION.activeNavigation === 'home'}">
            <ion-menu-toggle class="flex items-center">
                <span class="nav-buttons-icons bg-[url('../img/burger_logo.png')]"></span>Home
            </ion-menu-toggle>
          </li>
          <li data-navigation="order-now" data-path="/order-now" @click="NAVIGATE" class="group nav-buttons" :class="{ active : STORE_NAVIGATION.activeNavigation === 'order-now'}">
            <ion-menu-toggle class="flex items-center">
                <span class="nav-buttons-icons bg-[url('../img/order_now.svg')] group-[.active]:bg-[url('../img/order_now_active.svg')]"></span>Order Now!
            </ion-menu-toggle>
          </li>
          <li data-navigation="notifications" data-path="/notifications" @click="NAVIGATE" class="group nav-buttons" :class="{ active : STORE_NAVIGATION.activeNavigation === 'notifications'}">
            <ion-menu-toggle class="flex items-center">
                <span class="nav-buttons-icons bg-[url('../img/notifications.svg')] group-[.active]:bg-[url('../img/notifications_active.svg')]"></span>Notifications
            </ion-menu-toggle>
          </li>
          <li data-navigation="store-locator" data-path="/store-locator" @click="NAVIGATE" class="group nav-buttons" :class="{ active : STORE_NAVIGATION.activeNavigation === 'store-locator'}">
            <ion-menu-toggle class="flex items-center">
                <span class="nav-buttons-icons bg-[url('../img/store_locator.svg')] group-[.active]:bg-[url('../img/store_locator_active.svg')]"></span>Store Locator
            </ion-menu-toggle>
          </li>
          <li data-navigation="faqs" data-path="/faqs" @click="NAVIGATE" class="group nav-buttons" :class="{ active : STORE_NAVIGATION.activeNavigation === 'faqs'}">
            <ion-menu-toggle class="flex items-center">
                <span class="nav-buttons-icons bg-[url('../img/FAQs.svg')] group-[.active]:bg-[url('../img/FAQs_active.svg')]"></span>FAQ's
            </ion-menu-toggle>
          </li>

        </ul>

        <!-- divider -->
        <span class="block w-full border-t-2 border-gray-300 my-5"></span>

        <!-- NAV2 -->
        <ul>

          <li data-navigation="my-orders" data-path="/my-orders" @click="NAVIGATE" class="group nav-buttons" :class="{ active : STORE_NAVIGATION.activeNavigation === 'my-orders'}">
            <ion-menu-toggle class="flex items-center">
                <span class="nav-buttons-icons bg-[url('../img/my_orders.svg')] group-[.active]:bg-[url('../img/my_orders_active.svg')]"></span>My Orders
            </ion-menu-toggle>
          </li>
          <li data-navigation="my-account" data-path="/my-account" @click="NAVIGATE" class="group nav-buttons" :class="{ active : STORE_NAVIGATION.activeNavigation === 'my-account'}">
            <ion-menu-toggle class="flex items-center">
                <span class="nav-buttons-icons bg-[url('../img/my_account.svg')] group-[.active]:bg-[url('../img/my_account_active.svg')]"></span>My Account
            </ion-menu-toggle>
          </li>
          <li data-navigation="my-favorites" data-path="/my-favorites" @click="NAVIGATE" class="group nav-buttons" :class="{ active : STORE_NAVIGATION.activeNavigation === 'my-favorites'}">
            <ion-menu-toggle class="flex items-center">
                <span class="nav-buttons-icons bg-[url('../img/my_favorites.svg')] group-[.active]:bg-[url('../img/my_favorites_active.svg')]"></span>My Favorites
            </ion-menu-toggle>
          </li>
          <li data-navigation="order-tracker" data-path="/order-tracker" @click="NAVIGATE" class="group nav-buttons" :class="{ active : STORE_NAVIGATION.activeNavigation === 'order-tracker'}">
            <ion-menu-toggle class="flex items-center">
                <span class="nav-buttons-icons bg-[url('../img/order_tracker.svg')] group-[.active]:bg-[url('../img/order_tracker_active.svg')]"></span>Order Tracker
            </ion-menu-toggle>
          </li>
          <li data-navigation="order-history" data-path="/order-history" @click="NAVIGATE" class="group nav-buttons" :class="{ active : STORE_NAVIGATION.activeNavigation === 'order-history'}">
            <ion-menu-toggle class="flex items-center">
                <span class="nav-buttons-icons bg-[url('../img/order_history.svg')] group-[.active]:bg-[url('../img/order_history_active.svg')]"></span>Order History
            </ion-menu-toggle>
          </li>

        </ul>

        <!-- logout -->
        <ion-button color="danger" class="mt-[30px]">Logout</ion-button>

      </ion-content>

    </ion-menu>

    <!-- ACTIVE COMPONENT -->
    <ion-page id="main-content">

      <ion-router-outlet />

    </ion-page>

  </ion-app>

</template>


<!-- SCRIPT -->
<script setup>

  // IONIC
  import { 
    
    IonApp, 
    IonRouterOutlet, 
    IonContent, 
    IonMenu, 
    IonMenuToggle,
    IonPage, 
    IonButton
  
  } from '@ionic/vue';

  // VUE
  import { reactive, computed, watch } from "vue";

  // VUE ROUTER
  import { useRouter, useRoute } from "vue-router";
  const USE_ROUTER = useRouter( );
  const USE_ROUTE = useRoute( );

  // COMPONENTS
  import ProfieSideBar from "./components/ProfileSideBar.vue";

  // STORE
  import storeNavigation from "./pinia/store-navigation.js";
  const STORE_NAVIGATION = storeNavigation( );


  const NAVIGATE = ( ev ) => {

    STORE_NAVIGATION.changeActivePath( ev.currentTarget.dataset.path );
    STORE_NAVIGATION.changeActiveNavigation( ev.currentTarget.dataset.navigation );

    USE_ROUTER.push( STORE_NAVIGATION.activePath );

  };

</script>
