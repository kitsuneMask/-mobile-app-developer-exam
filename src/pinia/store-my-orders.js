// PINIA
import { defineStore } from "pinia";


const storeMyOrders = defineStore( {

    id : "storeMyOrders",

    state : ( ) => ( {

        toReceive : [ ],
        purchaseHistory : [ ]

    } ),

    actions : {

        newOrder ( order ) { this.toReceive.unshift( order ); },

        newPurchaseHistory ( purchase ) { this.purchaseHistory.unshift( purchase ) },

    }

} );


export default storeMyOrders;