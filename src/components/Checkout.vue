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

                    <ion-title class="font-bold">Order Summary</ion-title>

                </div>


            </ion-toolbar>
        </ion-header>

        <!-- CONTENT -->
        <ion-content class="ion-padding">

            <!-- USER DETAILS -->
            <div class="flex items-center">

                <!-- DETAILS -->
                <div class="flex flex-col basis-full rounded-xl bg-gray-100 px-2.5 py-5">

                    <span class="font-bold">Ryan Estabillo</span>
                    <span class="mt-2.5 text-gray-500">+63 914 314 3143</span>
                    <span class="text-gray-500">ryanestabillo@gmail.com</span>

                </div>

                <!-- option -->
                <button class="w-[20px] h-[30px] ml-2.5 bg-[url('../img/option_2.svg')] bg-no-repeat bg-center bg-cover"></button>

            </div>

            <!-- HOME ADDRESS -->
            <div class="flex items-center mt-2.5">

                <!-- DETAILS -->
                <div class="flex basis-full rounded-xl bg-gray-100 px-2.5 py-5">

                    <!-- WRAPPER -->
                    <div class="flex flex-col basis-full">

                        <span class="font-bold">My Home Address</span>
                        <span class="mt-2.5 text-gray-500">1234 Random Street Barangay Exampleville Quezon City, 1100 Philippines</span>

                    </div>

                    <!-- use home address radio -->
                    <ion-radio color="danger" :checked="ADDRESS === 'Home'" @click="ADDRESS = 'Home'"></ion-radio>

                </div>

                <!-- option -->
                <button class="w-[20px] h-[30px] ml-2.5 bg-[url('../img/option_2.svg')] bg-no-repeat bg-center bg-cover"></button>

            </div>

            <!-- WORK/OFFICE ADDRESS -->
            <div class="flex items-center mt-2.5">

                <!-- DETAILS -->
                <div class="flex basis-full rounded-xl bg-gray-100 px-2.5 py-5">

                    <!-- WRAPPER -->
                    <div class="flex flex-col basis-full">

                        <span class="font-bold">Work/Office</span>
                        <span class="mt-2.5 text-gray-500">456 Work Street Barangay Businessville Quezon City, 1100 Philippines</span>

                    </div>

                    <!-- work/office radio -->
                    <ion-radio color="danger" :checked="ADDRESS === 'Work/Office'" @click="ADDRESS = 'Work/Office'"></ion-radio>

                </div>

                <!-- option -->
                <button class="w-[20px] h-[30px] ml-2.5 bg-[url('../img/option_2.svg')] bg-no-repeat bg-center bg-cover"></button>

            </div>

            <!-- ORDERS -->
            <div class="mt-5">

                <h3 class="text-xl font-bold">Orders</h3>

                <!-- ORDERS -->
                <ul class="flex flex-col">

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

            </div>

            <!-- PAYMENT OPTION -->
            <div class="mt-5">

                <h3 class="text-xl font-bold">Payment Option</h3>

                <!-- WRAPPER -->
                <div class="flex flex-col gap-y-2.5 mt-2.5">

                    <!-- CASH ON DELIVERY -->
                    <div class="flex rounded-xl bg-gray-100 px-2.5 py-5">

                        <!-- DETAILS -->
                        <div class="flex flex-col basis-full">

                            <span class="font-bold">Cash on Delivery</span>
                            <span class="mt-2.5 text-gray-500">Pay when you received the order</span>

                        </div>

                        <!-- work/office radio -->
                        <ion-radio color="danger" :checked="PAYMENT === 'COD'" @click="PAYMENT = 'COD'"></ion-radio>

                    </div>

                    <!-- LOYALTY POINTS -->
                    <div class="flex rounded-xl bg-gray-100 px-2.5 py-5">

                        <!-- DETAILS -->
                        <div class="flex flex-col basis-full">

                            <span class="font-bold">Loyalty Points <span class="text-red-500">( 0 Points )</span></span>
                            <span class="mt-2.5 text-gray-500">Pay using your earned Loyalty Points</span>

                        </div>

                        <!-- work/office radio -->
                        <ion-radio color="danger" :checked="PAYMENT === 'Loyalty Poinrs'" @click="PAYMENT = 'Loyalty Poinrs'"></ion-radio>

                    </div>

                    <!-- PAYPAL -->
                    <div class="flex rounded-xl bg-gray-100 px-2.5 py-5">

                        <!-- DETAILS -->
                        <div class="flex flex-col basis-full">

                            <span class="grow-0 h-[40px] w-[100px] bg-[url('../img/paypal.svg')] bg-no-repeat bg-center bg-cover"></span>
                            <span class="mt-2.5 text-gray-500">A new tab will open to access your account</span>

                        </div>

                        <!-- work/office radio -->
                        <ion-radio color="danger" :checked="PAYMENT === 'PayPal'" @click="PAYMENT = 'PayPal'"></ion-radio>

                    </div>

                    <!-- PAYNAMICS -->
                    <div class="flex rounded-xl bg-gray-100 px-2.5 py-5">

                        <!-- DETAILS -->
                        <div class="flex flex-col basis-full">

                            <span class="grow-0 h-[40px] w-[100px] bg-[url('../img/paynamics.png')] bg-no-repeat bg-center bg-contain"></span>
                            <span class="mt-2.5 text-gray-500">Choose paynamics services available from you</span>

                        </div>

                        <!-- work/office radio -->
                        <ion-radio color="danger" :checked="PAYMENT === 'Paynamics'" @click="PAYMENT = 'Paynamics'"></ion-radio>

                    </div>

                </div>

                <!-- SUBTOTAL & DELIVERY CHARGE -->
                <div class="flex flex-col gap-y-2.5 mt-5 mb-20">

                    <!-- SUBTOTAL -->
                    <div class="flex justify-between">

                        <span class="font-bold">Sub Total:</span>
                        <span class="font-bold">${{ STORE_BAG.totalPrice }}</span>

                    </div>

                    
                    <!-- DELIVERY CHARGE -->
                    <div class="flex justify-between">

                        <span class="font-bold">Delivery Charge:</span>
                        <span class="font-bold">$1.50</span>

                    </div>

                </div>

            </div>

            <!-- GRAND TOTAL & CHECKOUT -->
           <div class="flex justify-between items-center w-full border-t-2 border-gray-200 p-2.5 bg-white fixed bottom-0 left-0 z-50">

                <!-- GRAND TOTAL -->
                <div class="flex flex-col">

                    <span class="text-gray-500">Grand Total: </span>
                    <span class="text-xl text-black font-bold">${{ ( parseInt( STORE_BAG.totalPrice ) + 1.50 ).toFixed( 2 ) }}</span>

                </div>

                <button class="h-[40px] rounded-lg bg-red-500 px-10 text-white">Place Order</button>

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
        IonRadio

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


    const ADDRESS = ref( "Home" );
    const PAYMENT = ref( "COD" );

</script>


<!-- STYLE -->
<style scoped>



</style>