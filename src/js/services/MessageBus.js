const _MessageBus = () => {
    const events = {};

    const on = ( event, callback ) => {
        let _events = events[ event ];
        if ( _events ) {
            _events.push( callback );
        } else {
            _events = [];
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

    /*  Execute all the functions that are contained in events [event] */
    const trigger = ( event, payload ) => {
        const _events = events[ event ];
        const length = _events.length;
        if( _events && 0 <  length ) {
            _events.map( ( _event ) => {
                _event( payload );
            } );
        }
    };
    return {
        on,
        off,
        trigger
    };
};

export const MessageBus = _MessageBus();
