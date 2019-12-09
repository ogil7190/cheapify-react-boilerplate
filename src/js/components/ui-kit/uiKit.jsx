import React from 'react';
import { Card } from 'views/generic/card';
import { Button } from 'views/generic/button';
import { CircularPreloader } from 'views/generic/circularPreloader';
import { InputField } from 'views/generic/inputField';
import { Text } from 'views/generic/text';
import { FaFacebook } from 'react-icons/fa';
import { FaAddressCard } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import { dataFetcherHoc } from 'hoc/generic/dataFetcher';
import { NetworkRoutes } from 'router/networkRoutes';
class _UIKit extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            buttonLoading: false,
        };
    }

    render() {
        return( this.props.loading ?
            <div className={'ui-kit ui-kit--loading'}>
                <CircularPreloader size='large' theme='dark' amount = {50} />
            </div>
            : <div className={'ui-kit'} >
                <Card>
                    <div className='ui-kit__title'>Button with variable sizes and action </div>
                    <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Dummy Button' bodyType='lined' loading={this.state.buttonLoading} size='small' />
                    <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Dummy Button' disabled = {true} bodyType='filled' loading={this.state.buttonLoading} size='small' />

                    <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Dummy Button' bodyType='lined' loading={this.state.buttonLoading} size='medium' />
                    <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Dummy Button' disabled = {false} bodyType='filled' loading={this.state.buttonLoading} size='medium' />

                    <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Dummy Button' bodyType='lined' loading={this.state.buttonLoading} size='large' />
                    <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Dummy Button' changeOnHover={true} disabled = {false} bodyType='filled' loading={this.state.buttonLoading} size='large' />

                    <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Continue with Facebook' icon = {FaFacebook} iconPosition = 'left' disabled = {false} bodyType='lined' loading={this.state.buttonLoading} size='small' />
                    <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Continue with Facebook' icon = {FaFacebook} iconPosition = 'right' disabled = {false} bodyType='lined' loading={this.state.buttonLoading} size='medium' />
                    <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='JeevanSathi Dhundo' changeOnHover={true} icon = {GoSearch} disabled = {false} bodyType='lined' loading={this.state.buttonLoading} size='large' />
                </Card>
                
                <Card>
                    <div className='ui-kit__title'>Preloader with variable sizes </div>
                    <CircularPreloader size='small' theme='dark' />
                    <CircularPreloader size='medium' theme='dark' />
                    <CircularPreloader size='large' theme='dark' />
                    <CircularPreloader size='large' theme='dark' amount = {50} />
                </Card>

                <Card>
                    <InputField type='text' placeholder="Enter your E-mail Id" label = "Email Id" disabled = { false } icon={ GoSearch }></InputField>
                    <InputField type='number' placeholder="Enter your Phone Number" label="Phone Number"></InputField>
                    <InputField type='text' placeholder="Enter your Address" label = "Address" icon={GoSearch} renderIcon = { () => <FaAddressCard size={50} color='red' /> }></InputField>
                </Card>

                <Card>
                    <Text label = 'Demo text' color='blue' large= {true} centerAligned = { true } />
                </Card>
            </div>
        );
    }
}

export const UIKit = _UIKit;
export const UIKitWithDataFetcher = dataFetcherHoc( UIKit, { path: NetworkRoutes.FETCH_SAMPLE } );
