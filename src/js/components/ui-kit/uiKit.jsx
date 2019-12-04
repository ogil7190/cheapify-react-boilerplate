import React from 'react';
import { Button } from 'views/generic/button';

export class UIKit extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {};
    }

    render() {
        return(
            <>
            {
                'Button Sample'
            }
            <Button label='Dummy Button' bodyType='lined' size='small' />
            </>
        );
    }
}
