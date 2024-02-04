// PINIA
import { defineStore } from "pinia";


const storeLoyaltyPoints = defineStore( {

    id : "storeLoyaltyPoints",

    state : ( ) => ( {

        points : 100,

        

    } ),

} );


export default storeLoyaltyPoints;