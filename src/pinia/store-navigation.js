// PINIA
import { defineStore } from "pinia";


const storeNavigation = defineStore( {

    id : "storeNavigation",

    state : ( ) => ( {

        activePath : "/home",
        activeNavigation : "home",

    } ),

    actions : {

        changeActivePath ( newActive ) {

            this.activePath = newActive;
            console.log( 123 );

        },

        changeActiveNavigation ( newActive ) {

            this.activeNavigation = newActive;
            console.log( 456 );

        }

    }

} );

export default storeNavigation;