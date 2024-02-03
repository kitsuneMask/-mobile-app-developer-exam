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

        },

        changeActiveNavigation ( newActive ) {

            this.activeNavigation = newActive;

        }

    }

} );

export default storeNavigation;