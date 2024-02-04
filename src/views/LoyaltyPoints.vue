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
        
                <ion-title class="font-bold">Loyalty Points</ion-title>
    
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding"> 
       
        <!-- TIER -->
        <div class="flex justify-between">

            <!-- TIER -->
            <div class="flex items-center">

                <img src="../img/crown.webp" class="w-[50px]" />
                <span class="ml-2.5 text-lg font-bold">Beginner Tier</span>

            </div>

            <!-- view all -->
            <button class="bg-[url('../img/chevron_right.svg')] bg-no-repeat bg-right pr-[30px] text-red-500">View All</button>

        </div>

        <!-- description -->
        <p class="mt-5 text-gray-500">Earn points by purchasing from our store. So what are you waiting for, order now!</p>

        <!-- POINTS -->
        <div class="flex justify-center my-5 py-2.5">

            <!-- CIRCLE -->
            <div class="flex justify-center items-center w-[150px] h-[150px] rounded-full bg-red-500/50">

                <!-- VALUE -->
                <div class="flex justify-center items-center w-[75%] h-[75%] shadow-lg drop-shadow-lg rounded-full bg-white text-2xl font-bold">

                    <span>{{ STORE_LOYALTY_POINTS.points }}</span> / <span>160</span>

                </div>

                <!-- value indicator -->
                <canvas width="150" height="150" ref="LOYALTY_POINTS_INDICATOR" class="rounded-full absolute"></canvas>

            </div>

        </div>

        <!-- REWARDS -->
        <div class="flex justify-between mt-5">

            <span class="text-xl font-bold">Rewards</span>

            <!-- view all -->
            <button class="bg-[url('../img/chevron_right.svg')] bg-no-repeat bg-right pr-[30px] text-red-500">How it Works</button>

        </div>

        <!-- REWARDS TYPE -->
        <div class="flex flex-nowrap gap-x-2.5 mt-2.5 overflow-x-scroll">

            <button class="quick-filter-buttons active">All</button>
            <button class="quick-filter-buttons">Beginner</button>
            <button class="quick-filter-buttons">Intermediate</button>
            <button class="quick-filter-buttons">Loyal</button>

        </div>

        <!-- AVAILABLE REWARDS -->
        <div class="flex flex-col gap-y-2.5 mt-5">

            <!-- REWARD 1 -->
            <div class="flex items-center h-[100px] rounded-xl border-2 border-gray-200">

                <img :src="Burgers.filter( burger => burger.id === 1 )[ 0 ].images[ 0 ].sm" class="w-20 ml-2.5 object-contain">

                <!-- DETAILS -->
                <div class="flex flex-col justify-center basis-full ml-2.5">

                    <span class="text-lg font-bold leading-[18px]">{{ Burgers.filter( burger => burger.id === 1 )[ 0 ].name }}</span>
                    <span class="bg-[url('../img/crown.webp')] bg-no-repeat bg-left bg-contain mt-2.5 pl-10 text-red-500 font-bold">20 points</span>

                </div>

            </div>

            <!-- REWARD 2 -->
            <div class="flex items-center h-[100px] rounded-xl border-2 border-gray-200">

                <img :src="Burgers.filter( burger => burger.id === 4 )[ 0 ].images[ 0 ].sm" class="w-20 ml-2.5 object-contain">

                <!-- DETAILS -->
                <div class="flex flex-col justify-center basis-full ml-2.5">

                    <span class="text-lg font-bold leading-[18px]">{{ Burgers.filter( burger => burger.id === 4 )[ 0 ].name }}</span>
                    <span class="bg-[url('../img/crown.webp')] bg-no-repeat bg-left bg-contain mt-2.5 pl-10 text-red-500 font-bold">20 points</span>

                </div>

            </div>

        </div>

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
    import { onMounted, ref } from "vue";
  
    // VUE ROUTER
    import { useRouter } from "vue-router";
    const USE_ROUTER = useRouter( );

    // STORE
    import storeLoyaltyPoints from "../pinia/store-loyalty-points";
    const STORE_LOYALTY_POINTS = storeLoyaltyPoints( );
  
    // JSON
    import Burgers from "../json/burgers.json";

    // REFS
    const LOYALTY_POINTS_INDICATOR = ref( null );

    // VARIABLE
    const LPI_CONTEXT = ref( null );


    // DISPLAY LPI
    const LPI_DISPLAY = ( ) => {

        requestAnimationFrame( LPI_DISPLAY );

        LPI_CONTEXT.value.clearRect( 0, 0, LOYALTY_POINTS_INDICATOR.value.width, LOYALTY_POINTS_INDICATOR.value.height );

        const CONVERTED_VALUE = ( ( STORE_LOYALTY_POINTS.points / 160 ) * ( Math.PI * 2 ) ) - ( Math.PI * .5 ) ;

        LPI_CONTEXT.value.beginPath( );
        LPI_CONTEXT.value.arc( LOYALTY_POINTS_INDICATOR.value.width / 2, LOYALTY_POINTS_INDICATOR.value.height /2, 150 / 2, 0 - ( Math.PI * .5 ), CONVERTED_VALUE );
        LPI_CONTEXT.value.lineWidth = 37;
        LPI_CONTEXT.value.strokeStyle = "rgba( 239, 68, 68, .8 )";
        LPI_CONTEXT.value.stroke( );

    };
  

    onMounted( ( ) => {

        // update lpi context
        LPI_CONTEXT.value = LOYALTY_POINTS_INDICATOR.value.getContext( "2d" );

        //  display lpi
        LPI_DISPLAY( );

    } );

  </script>
  
  
  <!-- STYLE -->
  <style scoped>
  
  
  </style>
  