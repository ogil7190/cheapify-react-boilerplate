const mbEvents = {};
const _MessageBus = () => {
    const on = ( event, callback ) => {
        console.log( 'MESSAGE_BUS', `on:${event}` );
        let _events = mbEvents[ event ];
        if ( _events ) {
            _events.push( callback );
        } else {
            _events = [];
            _events.push( callback );
            mbEvents[ [ event ] ] = _events;
        }
    };

    const off = ( event, callback ) => {
        console.log( 'MESSAGE_BUS', `off:${event}` );
        const _events = mbEvents[ event ];    // if event exists in the events array
        if( _events ) {
            const _index = _events.findIndexOf( callback );     // if callback exists in the given event
            if( -1 !== _index ) {
                _events.splice( _index, 1 );    // remove the function from the event list in case of unsubscribe
            }
        }
    };

    /*  Execute all the functions that are contained in events [event] */
    const trigger = ( event, payload ) => {
        console.log( 'MESSAGE_BUS', `trigger:${event}`, mbEvents );
        const _events = mbEvents[ event ];
        if( _events ) {
            const length = _events.length;
            if( 0 <  length ) {
                _events.map( ( _event ) => {
                    _event( payload );
                } );
            }
        }
    };
    return {
        on,
        off,
        trigger
    };
};

export const MessageBus = _MessageBus();
