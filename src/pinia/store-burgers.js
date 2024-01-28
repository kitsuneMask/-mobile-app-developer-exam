// PINIA
import { defineStore } from "pinia";

// JSON
import Burgers from "../json/burgers.json";

const burgerStore = defineStore( {

    id : "burgerStore",

    state : ( ) => ( {

        burgers : Burgers

    } ),

    getters : {

        affordable : state => {
            
            return state.burgers.filter( burger => burger.price <= 9 );
            
        },

        luxurious : state => {

            return state.burgers.filter( burger => burger.price > 9 );
        
        },

        specialOffers : state => {

            return state.burgers.filter( burger => burger.id <= 5 );
        
        },

        popular : state => {

            return state.burgers.filter( burger => burger.id > 5 && burger.id <= 9 );
        
        }

    }

} );

export default burgerStore;