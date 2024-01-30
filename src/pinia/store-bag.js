// PINIA
import { defineStore } from "pinia";


const storeBag = defineStore( {

    id : "storeBag",

    state : ( ( ) => ( {

        bag : [ ]

    } )),

    actions : {

        addToBag ( order ) {

            this.bag.push( order );

        },

        priceUpdate ( id ) {

            const ORDER = this.bag.filter( order => order.id === id )[ 0 ];

            ORDER.burger.price = ( ORDER.burger.price * ORDER.burger.quantity);

        }

    },

    getters : {

        totalPrice : state => {

            let total = 0;

            state.bag.forEach( order => { 
                
                total += order.burger.price * order.burger.quantity; 
                    
            } );

            return total.toFixed( 2 );

        }

    }

} );


export default storeBag;