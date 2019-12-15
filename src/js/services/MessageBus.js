import { isEmpty } from 'lodash';
const events = {};

const on = ( event, callback ) => {
    const _events = events[ event ];
    if ( _events ) {
        _events.push( callback );
    } else {
        const _events = [];
        _events.push( callback );
        events.event = _events;
    }
};

const off = ( event, callback ) => {
    const _events = events[ event ];    // if event exists in the events array
    if( _events ) {
        const _index = _events.findIndexOf( callback );     // if callback exists in the given event
        if( -1 !== _index ) {
            _events.splice( _index, 1 );    // remove the function from the event list in case of unsubscribe
        }
    }
};

/*  I guess we will have to use a 3rd parameter also to remove trigger a respective function only inside the array of events[event] remove this if read */
const trigger = ( event, payload ) => {
    const _events = events[ event ];
        if( !isEmpty( _events ) ) {
            _events.callback( payload );    //execute the callback of given event with its payload.
        }
};

export const MessageBus ={};   // expose on, off and trigger functions of MessageBus
MessageBus.on = ( event, callback ) => {
    on( { event, callback } );
};
MessageBus.off = ( event, callback ) => {
    off( { event, callback} );
};
MessageBus.trigger = ( event, payload ) => {
    trigger( { event, payload} );
};


