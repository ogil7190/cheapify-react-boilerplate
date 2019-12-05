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
                <Button label='Dummy Button hhuhuhuhuhuhh' bodyType='lined' size='small' disabled={true} />
                <Button label='Dummy Button' bodyType='filled'  disable={true} />
                <Button label='Dummy Button' bodyType='filled' size='large' disable={true} />
                <Button label='Dummy Button' bodyType='filled' size='large' disable={true} />
                <Button label='Dummy Button' bodyType='filled' size='large' loading={true} />
            </>
        );
    }
}
