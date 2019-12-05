import React from 'react';
import { Button } from 'views/generic/button';

export class UIKit extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            buttonLoading: false
        };
    }

    render() {
        return(
            <>
                <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Dummy Button' bodyType='lined' loading={this.state.buttonLoading} size='small' />
                <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Dummy Button' bodyType='filled' loading={this.state.buttonLoading} size='small' />

                <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Dummy Button' bodyType='lined' loading={this.state.buttonLoading} size='medium' />
                <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Dummy Button' bodyType='filled' loading={this.state.buttonLoading} size='medium' />

                <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Dummy Button' bodyType='lined' loading={this.state.buttonLoading} size='large' />
                <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Dummy Button' bodyType='filled' loading={this.state.buttonLoading} size='large' />
                
            </>
        );
    }
}
