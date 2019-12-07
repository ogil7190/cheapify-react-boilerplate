import React from 'react';
import { Card } from 'views/generic/card';
import { Button } from 'views/generic/button';
import { CircularPreloader } from 'views/generic/circularPreloader';
import { InputField } from 'views/generic/inputField';
import { Text } from 'views/generic/text';
import { noop } from 'lodash';


export class UIKit extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            buttonLoading: false
        };
    }

    render() {
        return(
            <div className={'ui-kit'} >
                <Card>
                    <div className='ui-kit__title'>Button with variable sizes and action </div>
                    <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Dummy Button' bodyType='lined' loading={this.state.buttonLoading} size='small' />
                    <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Dummy Button' disabled = {true} bodyType='filled' loading={this.state.buttonLoading} size='small' />

                    <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Dummy Button' bodyType='lined' loading={this.state.buttonLoading} size='medium' />
                    <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Dummy Button' disabled = {false} bodyType='filled' loading={this.state.buttonLoading} size='medium' />

                    <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Dummy Button' bodyType='lined' loading={this.state.buttonLoading} size='large' />
                    <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Dummy Button' disabled = {false} bodyType='filled' loading={this.state.buttonLoading} size='large' />

                    <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Continue with Facebook' icon = {true} iconPosition = 'left' disabled = {false} bodyType='lined' loading={this.state.buttonLoading} size='small' />
                    <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Continue with Facebook' icon = {true} iconPosition = 'right' disabled = {false} bodyType='lined' loading={this.state.buttonLoading} size='medium' />
                    <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Continue with Facebook' icon = {true} iconPosition = 'left' disabled = {false} bodyType='lined' loading={this.state.buttonLoading} size='large' />
                
                </Card>
                
                <Card>
                    <div className='ui-kit__title'>Preloader with variable sizes </div>
                    <CircularPreloader size='small' theme='dark' />
                    <CircularPreloader size='medium' theme='dark' />
                    <CircularPreloader size='large' theme='dark' />
                    <CircularPreloader size='large' theme='dark' amount = {50} />
                </Card>

                <Card>
                    <InputField type='text' placeholder="Enter your E-mail Id" label = "Email Id" required = {false} disabled = { false } icon={ true } onIconClick = { noop }></InputField>
                </Card>

                <Card>
                    <Text label = 'Demo text' color='blue' large= {true} centerAligned = { true } />
                </Card>
            </div>
        );
    }
}
