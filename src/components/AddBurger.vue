<!-- TEMPLATE -->
<template>

    <ion-page>

        <!-- HEADER -->
        <ion-header class="shadow-none">
            <ion-toolbar>

                <!-- TITLE AND MY ORDERS BUTTON -->
                <div class="flex justify-between items-center ion-padding">

                    <button @click="USE_ROUTER.push( '/order-now' )" class="flex justify-center items-center w-[30px] h-[30px] rounded-lg bg-gray-200">

                        <ion-icon name="chevron-back" class="text-lg font-bold"></ion-icon>

                    </button>

                    <ion-title class="font-bold">Add Burger</ion-title>

                    <!-- my orders -->
                    <img src="../img/my_orders_active.svg" @click="USE_ROUTER.push( '/my-orders' )" class="w-[24px] mr-5">

                </div>


            </ion-toolbar>
        </ion-header>

        <!-- CONTENT -->
        <ion-content class="ion-padding">

            <!-- WRAPPER -->
            <div class="relative">

                <!-- BURGER IMAGE -->
                <div class="flex justify-center items-center h-[200px] border-2 border-gray-200 rounded-3xl relative">

                    <img :src="BURGER.images[ 0 ].sm" class="h-[180px] object-contain">

                    <!-- add to favorites -->
                    <button class="box-content w-[32px] h-[32px] rounded-lg p-[2.5px] bg-gray-100 bg-[url('../img/heart.svg')] bg-no-repeat bg-[length:50%_50%] bg-center absolute bottom-0 right-10 translate-y-[50%]"></button>

                </div>

                <!-- DETAILS -->
                <div class="flex flex-col mt-5">

                    <!-- name -->
                    <h2 class="text-lg font-bold leading-5">{{ BURGER.name }}</h2>

                    <!-- rating -->
                    <img src="../img/star_rating.png" class="w-[80px] mt-2.5" >

                    <!-- description -->
                    <p class="mt-2.5 text-sm text-gray-500 text-justify">{{ BURGER.desc }}</p>

                </div>

                <!-- PRICE AND QUANTITY -->
                <div class="flex justify-between items-center mt-5">

                    <!-- price -->
                    <span class="text-2xl text-red-500 font-bold">${{ PRICE.toFixed( 2 ) }}</span>

                    <!-- QUANTITY -->
                    <div class="flex items-center">

                        <button @click="QUANTITY++" class="quantity-buttons">+</button>

                        <span class="mx-5 text-xl font-bold">{{ QUANTITY }}</span>

                        <button @click="QUANTITY === 1 ? 1 : QUANTITY--" class="quantity-buttons">-</button>

                    </div>

                </div>

                <!-- BEVERAGES -->
                <div class="mt-5">

                    <h3 class="text-xl font-bold">Beverages</h3>
                
                    <ion-select label="Choose your drinks!" label-placement="floating" interface="popover" :value="BEVERAGES.value" @update:modelValue="BEVERAGES.update" class="mt-2.5 p-2.5 rounded-xl bg-gray-200">

                        <ion-select-option value="Coke">Coke</ion-select-option>
                        <ion-select-option value="Royal">Royal</ion-select-option>
                        <ion-select-option value="Sprite">Sprite</ion-select-option>

                    </ion-select>

                    <!-- SIZE -->
                    <div class="flex gap-2.5 mt-2.5">

                        <button @click="BEVERAGES.changeSize" class="beverages-size-buttons active">Regular</button>
                        <button @click="BEVERAGES.changeSize" class="beverages-size-buttons">Large</button>
                        <button @click="BEVERAGES.changeSize" class="beverages-size-buttons">X-Large</button>

                    </div>

                </div>

                <!-- ADD-ONS -->
                <div class="mt-5">

                    <h3 class="text-xl font-bold">Add-Ons</h3>

                    <!-- fries -->
                    <div class="flex items-center h-[100px] mt-2.5 rounded-xl bg-gray-200">

                        <img src="../img/fries.png" class="w-20 ml-2.5 object-contain">

                        <!-- DETAILS -->
                        <div class="flex flex-col justify-center basis-full">

                            <span class="text-lg font-bold">Fries</span>
                            <span class="text-lg text-red-500">$1.00</span>

                        </div>

                        <ion-checkbox v-model="ADD_ONS.fries" class="pr-5"></ion-checkbox>

                    </div>

                    <!-- icecream -->
                    <div class="flex items-center h-[100px]  mt-2.5 mb-20 rounded-xl bg-gray-200">

                        <img src="../img/ice-cream.png" class="w-20 ml-2.5 object-contain">

                        <!-- DETAILS -->
                        <div class="flex flex-col justify-center basis-full">

                            <span class="text-lg font-bold">Ice-cream</span>
                            <span class="text-lg text-red-500">$1.00</span>

                        </div>

                        <ion-checkbox v-model="ADD_ONS.iceCream" class="pr-5"></ion-checkbox>

                    </div>

                </div>

                <!-- ADD TO BAG -->
                <button @click="ADD_TO_BAG" class="box-content w-[calc(100%-112.5px)] ring-2 ring-gray-200 rounded-xl bg-red-500/95 py-5 px-10  text-lg text-white font-bold fixed bottom-2.5 z-50">Add to Bag</button>

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
        IonTitle,
        IonIcon,
        IonSelect,
        IonSelectOption,
        IonCheckbox

    } from "@ionic/vue";

    // VUE
    import { ref, reactive, computed } from "vue";

    // VUE ROUTER
    import { useRouter, useRoute } from "vue-router";
    const USE_ROUTER = useRouter( );
    const USE_ROUTE = useRoute( );

    // JSON
    import Burgers from "../json/burgers.json";

    // burger
    const BURGER = Burgers.filter( burger => burger.id == USE_ROUTE.params.id )[ 0 ];

    // quantity
    const QUANTITY = ref( 1 );

    // price
    const PRICE = computed( ( ) => {
        
        return BURGER.price * QUANTITY.value;
    
    } );

    // BEVERAGES
    const BEVERAGES = reactive( {

        value : "Coke",
        size : "Regular",

        update ( value ) {

            BEVERAGES.value = value;

        },

        changeSize ( ev ) {

            // deactivate previou button
            document.querySelector( ".beverages-size-buttons.active" ).classList.remove( "active" );
            
            // activate new button
            ev.currentTarget.classList.add( "active" );

            BEVERAGES.size = ev.currentTarget.innerHTML;
            
        }

    } );

    // ADD-ONS
    const ADD_ONS = reactive( {

        fries : false,
        iceCream : false

    } );

    const ADD_TO_BAG = ( ) => {

        const DATA = {

            data

        };

    };

</script>


<!-- STYLE -->
<style scoped>

    ion-checkbox {

        --size: 24px;
        --checkbox-background-checked: theme( "colors.red.500" );

    }

    ion-checkbox::part(container) {

        border-radius: 6px;
        border: 1px solid theme( "colors.gray.200" );

    }

</style>