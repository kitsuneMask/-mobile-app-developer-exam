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
            <div class="flex items-center">

                <img src="../img/crown.webp" class="w-[32px] h-auto object-contain ml-5" >

                <span class="ml-5 font-bold">0 Points</span>

                <ion-icon class="ml-2.5 text-lg text-red-500 font-semibold" name="chevron-forward-outline"></ion-icon>

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
    import { IonIcon } from "@ionic/vue";

</script>