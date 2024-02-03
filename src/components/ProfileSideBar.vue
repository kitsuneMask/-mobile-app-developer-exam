<!-- TEMPLATE -->
<template>

    <!-- CONTAINER -->
    <div class="flex flex-col">

        <!-- PROFILE IMAGE, TIER & LOYALTY POINTS -->
        <div class="flex">

            <img src="../img/Passport Size Formal Attire PH Final.jpg" 
            
                class="

                    size-[70px]
                    aspect-square
                    rounded-full 
                    object-cover 
                    border-2
                    border-gray-200 
                    
                "
                
            >

            <!-- TIER & LOYALTY POINTS -->
            <div data-navigation="loyalty-points" data-path="/loyalty-points" @click="NAVIGATE" class="flex items-center">

                <img src="../img/crown.webp" class="w-[32px] h-auto object-contain ml-5" />

                <ion-menu-toggle class="group" :class="{ active : STORE_NAVIGATION.activeNavigation === 'loyalty-points' }">

                    <span class="ml-5 group-[.active]:text-red-500 font-bold">0 Points</span>

                </ion-menu-toggle>

                <img src="../img/chevron_right.svg" />

            </div>

        </div>

        <!-- name -->
        <div class="mt-[5px] text-[28px]">Ryan Estabillo</div>

        <!-- contact # -->
        <div class="text-sm text-gray-400">+63 914 314 3143</div>

    </div>

</template>


<!-- SCRIPT -->
<script setup>

    // IONIC
    import { IonMenuToggle } from "@ionic/vue";

    // VUE ROUTER
    import { useRouter } from 'vue-router';
    const USE_ROUTER = useRouter( );

    // STORE
    import storeNavigation from '../pinia/store-navigation';
    const STORE_NAVIGATION = storeNavigation( );


    const NAVIGATE = ( ev ) => {

        STORE_NAVIGATION.changeActivePath( ev.currentTarget.dataset.path );
        STORE_NAVIGATION.changeActiveNavigation( ev.currentTarget.dataset.navigation );

        USE_ROUTER.push( STORE_NAVIGATION.activePath );

    };

</script>