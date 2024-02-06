<!-- TEMPLATE -->
<template>

  <ion-page>
    
    <ion-header class="shadow-none">
      <ion-toolbar>

        <ion-buttons slot="start" class="bg-none">
          <ion-menu-button>
            <img src="../img/side_bar.svg" class="scale-150" />
            <span v-if="STORE_NOTIFICATIONS.count > 0" class="box-content w-[10px] h-[10px] rounded-full bg-yellow-500 p-[1px] absolute right-0 top-[12px] z-50"></span>
          </ion-menu-button>
        </ion-buttons>

        <ion-title class="text-red-500">STORE LOCATOR</ion-title>

      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> 
      
      THIS IS STORE LOCATOR
    
      <span class="text-red-500" id="dal">SHEEEEEEEEEEEEEESH!</span>

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

  // STORE
  import storeNotifications from "../pinia/store-notifications.js";
  const STORE_NOTIFICATIONS = storeNotifications( );

</script>

