<!-- TEMPLATE -->
<template>

  <ion-page>
    
    <!-- HEADER -->
    <ion-header class="shadow-none">
      <ion-toolbar>

        <ion-buttons slot="start" class="bg-none">
          <ion-menu-button>
            <img src="../img/side_bar.svg" class="scale-150" />
          </ion-menu-button>
        </ion-buttons>

        <!-- PROFILE IMAGE, TIER & LOYALTY POINTS -->
        <div class="flex justify-between">

          <!-- TIER & LOYALTY POINTS -->
          <div data-navigation="loyalty-points" data-path="/loyalty-points" @click="NAVIGATE" class="flex items-center">

            <img src="../img/crown.webp" class="w-[32px] h-auto object-contain ml-5" >

            <span class="ml-5 font-bold">0 Points</span>

            <img src="../img/chevron_right.svg" />

          </div>

          <img src="../img/Passport Size Formal Attire PH Final.jpg" 
            
            class="

                size-[40px]
                aspect-square
                rounded-full 
                border-2
                border-gray-200 
                mr-5
                object-cover 
                
            "
            
          >

        </div>

      </ion-toolbar>
    </ion-header>

    <!-- CONTENT -->
    <ion-content class="ion-padding"> 
      
      <!-- LOGO & TAGLINE -->
      <div class="flex">

        <img src="../img/burger_logo.png" class="w-[90px] aspect-square object-contain" >

        <!-- TAG LINE -->
        <div class="ml-5">

          <span class="text-xl text-gray-500">Konnichiwa!</span>
          <h2 class="text-[40px] font-bold">What's the beef?</h2>

        </div>

      </div>

      <!-- SEARCH BAR -->
      <div class="flex items-center h-[60px] rounded-xl border-2 border-gray-200 bg-white mt-5" @click="SEARCHBAR.focus">

        <img src="../img/search.svg" class="w-[28px] h-[28px] ml-2.5" />
        <input type="search" placeholder="try our new Mount Burgerest!" v-model="SEARCHBAR.value" @input="console.log( SEARCHBAR.value )" class="basis-full border-none outline-none bg-transparent ml-5">

      </div>

      <!-- SPECIAL OFFERS -->
      <section v-if="SEARCHBAR.value.length > 0 ? STORE_BURGERS.specialOffers.filter( burger => burger.name.toLowerCase( ).includes( SEARCHBAR.value.toLowerCase( ) ) ).length > 0 ? true : false : true" class="flex flex-col mt-5">

        <!-- HEAD -->
        <div class="flex justify-between">

          <h3 class="text-xl font-bold">Special Offers</h3>

          <!-- VIEW ALL -->
          <button class="flex items-center text-red-500">
            
            View All<img src="../img/chevron_right.svg" />
            
          </button>
            
        </div>
          
        <!-- CONTENT -->
        <div class="flex mt-2.5 overflow-x-scroll">

          <!-- BURGERS -->
          <ul class="flex flex-nowrap gap-x-5">

            <!-- BURGER -->
            <li 

              v-for="burger in ( SEARCHBAR.value.length > 0 ? STORE_BURGERS.specialOffers.filter( burger => burger.name.toLowerCase( ).includes( SEARCHBAR.value.toLowerCase( ) ) ) : STORE_BURGERS.specialOffers )"
            
              class="

                flex
                flex-col
                w-[300px] 
                h-[150px] 
                bg-[url('../img/special_offers.svg')]
                bg-no-repeat
                bg-cotain
                bg-center
                relative
                
              "
            >

              <!-- offer -->
              <span class="text-xl text-red-500 font-bold ml-5 mt-2.5">20% OFF!!!</span>

              <!-- image -->
              <img :src="burger.images[ 0 ].sm" class="w-[80px] h-auto ml-5">

              <!-- NAME -->
              <div class="w-[200px] absolute top-[30px] left-[100px]">

                <span class="text-2xl text-gray-100 font-bold leading-5 uppercase absolute opacity-50">{{ burger.name }}</span>
                <span class="text-2xl font-bold leading-5 uppercase absolute translate-x-[10px] translate-y-[10px]">{{ burger.name }}</span>

              </div>

              <!-- PRICE -->
              <div class="flex flex-col items-end absolute right-2.5 bottom-2.5">

                <span class="text-white">${{ burger.price }}</span>
                <span class="text-xl text-white font-bold leading-5">${{ ( burger.price * .80 ).toFixed( 2 ) }}</span>

                <!-- price cut -->
                <img src="../img/special_offers_price_cut.svg" class="absolute top-[10px] right-0">

              </div>

            </li>
            
          </ul>

        </div>

      </section>

      <!-- CATEGORY -->
      <section v-if="!SEARCHBAR.value.length > 0" class="flex flex-col mt-5">

        <h3 class="text-xl font-bold">Category</h3>

        <!-- CONTENT -->
        <div class="flex flex-nowrap gap-2.5 mt-2.5 overflow-x-scroll">

          <!-- AFFORDABLE -->
          <div class="flex flex-col justify-end min-w-[200px] h-[300px] border-2 border-gray-200 rounded-2xl bg-[url('../img/Affordable_Burgers.png')] bg-no-repeat relative">

            <!-- cover -->
            <span class="w-full h-full rounded-2xl bg-black absolute top-0 left-0 opacity-10"></span>

            <h3 class="ml-2.5 text-2xl text-red-500 font-bold leading-[26px] drop-shadow-lg relative">AFFORDABLE</h3>
            <span class="ml-2.5 mb-2.5 text-lg text-white leading-5 relative">{{ STORE_BURGERS.affordable.length }} Burgers Available</span>

          </div>

          <!-- LUXURIOUS -->
          <div class="flex flex-col justify-end min-w-[200px] h-[300px] border-2 border-gray-200 rounded-2xl bg-[url('../img/Luxurious_Burgers.png')] bg-no-repeat relative">

            <!-- cover -->
            <span class="w-full h-full rounded-2xl bg-black absolute top-0 left-0 opacity-10"></span>

            <h3 class="ml-2.5 text-2xl text-red-500 font-bold leading-[26px] drop-shadow-lg relative">LUXURIOUS</h3>
            <span class="ml-2.5 mb-2.5 text-lg text-white leading-5 relative">{{ STORE_BURGERS.luxurious.length }} Burgers Available</span>

          </div>

        </div>

      </section>

      <!-- WHAT'S NEW -->
      <section v-if="SEARCHBAR.value.length > 0 ? ( 'burgerest'.includes( SEARCHBAR.value.toLowerCase( ) ) || 'monsta burger'.includes( SEARCHBAR.value.toLowerCase( ) ) ) ? true : false : true" class="flex flex-col mt-5">

        <h3 class="text-xl font-bold">What's New?</h3>

        <!-- CONTENT -->
        <div class="flex flex-nowrap gap-2.5 mt-2.5 overflow-x-scroll">

          <div v-if="SEARCHBAR.value.length > 0 ? 'burgerest'.includes( SEARCHBAR.value.toLowerCase( ) ) ? true : false : true" class="min-w-[300px] h-[150px] border-2 border-gray-200 rounded-xl bg-[url('../img/Mount_Burgerest.png')] bg-no-repeat bg-center bg-cover"></div>
          <div v-if="SEARCHBAR.value.length > 0 ? 'monsta burger'.includes( SEARCHBAR.value.toLowerCase( ) ) ? true : false : true" class="min-w-[300px] h-[150px] border-2 border-gray-200 rounded-xl bg-[url('../img/Monsta_Burger.png')] bg-no-repeat bg-center bg-cover"></div>

        </div>

      </section>

      <!-- MOST POPULAR -->
      <section v-if="SEARCHBAR.value.length > 0 ? STORE_BURGERS.popular.filter( burger => burger.name.toLowerCase( ).includes( SEARCHBAR.value.toLowerCase( ) ) ).length > 0 ? true : false : true" class="flex flex-col mt-5 mb-10">

        <h3 class="text-xl font-bold">Most Popular</h3>

        <!-- CONTENT -->
        <div class="flex mt-2.5">

          <ul class="flex flex-wrap justify-center gap-[5px]">

            <li

              data-navigation="order-now"
              :data-path="`/add-burger/${ burger.id }`"

              v-for="burger in ( SEARCHBAR.value.length > 0 ? STORE_BURGERS.popular.filter( burger => burger.name.toLowerCase( ).includes( SEARCHBAR.value.toLowerCase( ) ) ) : STORE_BURGERS.popular )"
              @click="NAVIGATE"

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

      <!-- order now -->
      <button data-navigation="order-now" data-path="/order-now" @click="NAVIGATE" class="rounded-lg py-[15px] px-10 bg-red-500/95 text-white shadow-lg fixed right-5 bottom-5">Order Now!</button>

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
    IonToolbar,
    IonButtons,
    IonMenuButton,
  
  } from '@ionic/vue';

  // VUE ROUTER
  import { useRouter } from "vue-router";
  const USE_ROUTER = useRouter( );

  // VUE
  import { reactive } from "vue";

  // STORE
  import storeNavigation from "../pinia/store-navigation.js";
  import storeBurgers from "../pinia/store-burgers.js";
  const STORE_NAVIGATION = storeNavigation( );
  const STORE_BURGERS = storeBurgers( );

  // NAVIGATE
  const NAVIGATE = ( ev ) => {

    STORE_NAVIGATION.changeActivePath( ev.currentTarget.dataset.path );
    STORE_NAVIGATION.changeActiveNavigation( ev.currentTarget.dataset.navigation );

    USE_ROUTER.push( STORE_NAVIGATION.activePath );

  };

  // SEARCHBAR
  const SEARCHBAR = reactive( {

    value : '',

    focus ( ) {

      document.querySelector( "input[type='search']" ).focus( );

    }

  } );

</script>


<!-- STYLE -->
<style scoped>

 

</style>
