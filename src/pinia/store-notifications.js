// PINIA
import { defineStore } from "pinia";


const storeNotifications = defineStore( {

    id : "storeNotifications",

    state : ( ) => ( {

        notifications : 2,
        myOrders : 1

    } ),

    getters : {

        count : state => state.notifications + state.myOrders,

    }


} );


export default storeNotifications;