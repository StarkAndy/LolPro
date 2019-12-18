import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Input, Button } from '../../components/common';


class SignupPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            verifyOtp: false
        }

    }

    _onSignup = () => {
        this.setState({ verifyOtp: true })
    }

    _onVerifyOtp = () => {
        alert("Verify Otp pressed !");
    }

    renderOtpPage() {
        return (
            <View>
                <Text
                    style={{ alignSelf: 'center', marginTop: 30 }}
                >
                    LOL Pro
                </Text>
                <Input
                    inputStyle={{ marginTop: 100 }}
                    label="Enter Otp"
                    placeholder="Enter your otp"
                />
                <Button
                    label="Verify Now"
                    onPress={this._onVerifyOtp}

                />
            </View>
        );

    }

    renderSignupPage() {
        return (
            <View>
                <Text
                    style={{ alignSelf: 'center', marginTop: 30 }}
                >
                    LOL Pro
                </Text>
                <Input
                    inputStyle={{ marginTop: 10 }}
                    label="Username"
                    placeholder="Enter your name"
                />
                <Input
                    inputStyle={{ marginTop: 15 }}
                    label="Phone"
                    placeholder="Enter your phone number"
                />
                <Input
                    label="User Type"
                />
                <Input
                    label="Password"
                    placeholder="Enter your password"
                />
                <Input
                    label="Retype Password"
                    placeholder="Retype your password"
                />

                <Button
                    onPress={this._onSignup}
                    label="Signup"
                />
            </View>
        )
    }

    //renders otp page if otpPage is true
    render() {
        const signupPage = this.renderSignupPage();
        const otpPage = this.renderOtpPage();
        if (this.state.verifyOtp) {
            return (
                <View>
                    {otpPage}
                </View>
            )
        }
        return (
            <View>
                {signupPage}
            </View>
        )
    }
}

export default SignupPage;