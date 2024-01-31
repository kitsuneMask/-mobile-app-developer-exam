<!-- TEMPLATE -->
<template>

    <ion-page>

        <!-- HEADER -->
        <ion-header class="shadow-none">
            <ion-toolbar>

                <!-- TITLE AND MY ORDERS BUTTON -->
                <div class="flex justify-between items-center ion-padding">

                    <button @click="USE_ROUTER.push( '/order-now' )" class="flex justify-center items-center w-[30px] h-[30px] rounded-lg bg-gray-200">

                        <img src="../img/chevron_left.svg" />

                    </button>

                    <ion-title class="font-bold">My Bag</ion-title>

                </div>


            </ion-toolbar>
        </ion-header>

        <!-- CONTENT -->
        <ion-content class="ion-padding">

            <!-- ORDERS -->
           <ul class="flex flex-col mb-20">

                <!-- ORDER -->
                <li v-for="order in STORE_BAG.bag" class="flex items-center mt-2.5">

                    <!-- WRAPPER -->
                    <div class="flex flex-col basis-full border-2 border-gray-200 rounded-xl p-2.5 bg-white">

                        <!-- CONTENT -->
                        <div class="flex items-center">

                            <!-- image -->
                            <img :src="Burgers.filter( burger => burger.id === order.burger.id )[ 0 ].images[ 0 ].sm" class="w-[100px] " />
                            
                            <!-- CONTENT -->
                            <div class="flex flex-col ml-2.5">

                                <!-- name -->
                                <h3 class="text-red-500 font-bold leading-5">{{ Burgers.filter( burger => burger.id === order.burger.id )[ 0 ].name }}</h3>
                                <span class="mt-[5px] leading-4">{{ order.burger.quantity }}x {{ order.beverages.value }} - {{ order.beverages.size }}</span>
                                <span v-if="order.addOns.fries" class="mt-[5px] leading-4">{{ order.burger.quantity }}x Fries</span>
                                <span v-if="order.addOns.iceCream" class="mt-[5px] leading-4">{{ order.burger.quantity }}x Ice-cream</span>

                            </div>

                        </div>

                      
                        <!-- PRICE AND QUANTITY -->
                        <div class="flex justify-between items-center mt-5">

                            <!-- price -->
                            <span class="text-xl text-red-500 font-bold">${{ ( order.burger.price * order.burger.quantity ).toFixed( 2 ) }}</span>

                            <!-- QUANTITY -->
                            <div class="flex items-center">

                                <button @click="order.burger.quantity++" class="quantity-buttons">+</button>

                                <span class="mx-5 text-xl font-bold">{{ order.burger.quantity }}</span>

                                <button @click="order.burger.quantity === 1 ? 1 : order.burger.quantity--" class="quantity-buttons">-</button>

                            </div>

                        </div>

                    </div>

                    <!-- option -->
                    <button class="w-[20px] h-[30px] ml-2.5 bg-[url('../img/option_2.svg')] bg-no-repeat bg-center bg-cover"></button>

                </li>

           </ul>

           <!-- SUB TOTAL & CHECKOUT -->
           <div class="flex justify-between items-center w-full border-t-2 border-gray-200 p-2.5 bg-white fixed bottom-0 left-0">

                <!-- SUB TOTAL -->
                <div class="flex flex-col">

                    <span class="text-gray-500">Sub Total: </span>
                    <span class="text-xl text-black font-bold">${{ STORE_BAG.totalPrice }}</span>

                </div>

                <button @click="USE_ROUTER.push( '/checkout' )" class="h-[40px] rounded-lg bg-red-500 px-10 text-white">Check Out</button>

           </div>

        </ion-content>

    </ion-page>

</template>


<!-- SCRIPT -->
<script setup>

    // IONIC
    import {

        IonPage,
        IonHeader,
        IonContent,
        IonToolbar,
        IonTitle

    } from "@ionic/vue";

    // VUE
    import { ref, reactive, computed } from "vue";

    // VUE ROUTER
    import { useRouter, useRoute } from "vue-router";
    const USE_ROUTER = useRouter( );
    const USE_ROUTE = useRoute( );

    // STORE
    import storeBag from "../pinia/store-bag.js";
    const STORE_BAG = storeBag( );

    // JSON
    import Burgers from "../json/burgers.json";


    const QUANTITY_UPDATE = {

        increment ( ) {


        },

        decrement ( ) {


        }

    };


</script>

