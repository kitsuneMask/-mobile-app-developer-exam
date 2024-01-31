<!-- TEMPLATE -->
<template>

  <ion-page>
    
    <ion-header class="shadow-none">
      <ion-toolbar>

        <ion-buttons slot="start" class="bg-none">
          <ion-menu-button>
            <img src="../img/side_bar.svg" class="scale-150" />
          </ion-menu-button>
        </ion-buttons>

        <!-- TITLE AND MY BAG BUTTON -->
        <div class="flex justify-between items-center">

          <ion-title class="font-bold">Our Burgers</ion-title>

          <!-- my bag -->
          <img src="../img/my_orders_active.svg" @click="USE_ROUTER.push( '/my-bag' )" class="w-[24px] mr-5">

        </div>

      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> 
      
      <!-- SEARCH BAR -->
      <div class="flex items-center h-[60px] rounded-xl border-2 border-gray-200 bg-white" @click="SEARCHBAR.focus">

        <img src="../img/search.svg" class="w-[28px] h-[28px] ml-2.5" />
        <input type="search" placeholder="try our new Monsta Burger!" class="basis-full border-none outline-none bg-transparent ml-5">
        <img src="../img/option.svg" class="w-[24px] h-[24px] mr-2.5" />

      </div>

      <!-- QUICK FILTER -->
      <div class="flex flex-nowrap gap-x-2.5 mt-2.5 overflow-x-scroll">

        <button @click="QUICK_FILTER.filter = 'All'" class="quick-filter-buttons" :class="{ active : QUICK_FILTER.filter === 'All'}">All</button>
        <button @click="QUICK_FILTER.filter = 'Affordable'" class="quick-filter-buttons" :class="{ active : QUICK_FILTER.filter === 'Affordable'}">Affordable</button>
        <button @click="QUICK_FILTER.filter = 'Luxurious'" class="quick-filter-buttons" :class="{ active : QUICK_FILTER.filter === 'Luxurious'}">Luxurious</button>
        <button class="quick-filter-buttons">Special Offers</button>
        <button class="quick-filter-buttons">Popular</button>
        <button class="quick-filter-buttons">New</button>

      </div>

      <!-- CATEGORY -->
      <section class="flex flex-col mt-5 mb-5">

        <!-- CONTENT -->
        <div class="flex">

          <ul class="flex flex-wrap justify-center gap-[5px]">

            <li

              v-for="burger in QUICK_FILTER.burgers"
              @click="USE_ROUTER.push( `/add-burger/${ burger.id }` )"

              class="
              
                flex
                flex-col
                min-w-[160px]
                max-w-[150px]
                h-[250px]
                max
                p-[5px]
                border-2
                border-gray-200
                rounded-xl

              "
            >

              <img :src="burger.images[ 0 ].sm" class="self-center w-[120px]">

              <!-- name -->
              <h4 class="max-h-10 mt-5 text-base font-bold leading-5 overflow-hidden">{{ burger.name }}</h4>

              <!-- category -->
              <span class="mt-[5px] text-sm text-red-500 leading-4">{{ burger.price > 9 ? "LUXURIOUS" : "AFFORDABLE" }}</span>

              <!-- PRICE & RATING -->
              <div class="flex justify-between mt-2.5">

                <span class="text-lg text-red-500 font-bold">${{ burger.price.toFixed( 2 ) }}</span>

                <img src="../img/star_rating.png" class="w-[70px] h-auto object-contain">

              </div>
          
            </li>

          </ul>

        </div>

      </section>

    </ion-content>

  </ion-page>

</template>


<!-- SCRIPT -->
<script setup>

  // IONIC VUE
  import { 
    
    IonPage,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonButtons,
    IonMenuButton,
  
  } from '@ionic/vue';

  // VUE
  import { reactive, computed } from "vue";

  // VUE ROUTER
  import { useRouter } from "vue-router";
  const USE_ROUTER = useRouter( );

  // STORES
  import storeBurgers from "../pinia/store-burgers.js";
  const STORE_BURGERS = storeBurgers( );


  // SEARCHBAR
  const SEARCHBAR = {

    focus ( ) {

      document.querySelector( "input[type='search']" ).focus( );

    }

  };

  // QUICK FILTER
  const QUICK_FILTER = reactive( {

    filter : "All",

    burgers : computed( ( ) => {

      // all
      if ( QUICK_FILTER.filter === "All" ) return STORE_BURGERS.burgers;

      // affordable
      else if ( QUICK_FILTER.filter === "Affordable" ) return STORE_BURGERS.affordable;

      // luxurious
      else if ( QUICK_FILTER.filter === "Luxurious" ) return STORE_BURGERS.luxurious;

    } )

  } );

</script>


<!-- STYLE -->
<style scoped>


</style>
