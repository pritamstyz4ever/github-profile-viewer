import React, { Component } from 'react';
import { StyleSheet, WebView, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6EF',
        flexDirection: 'column'
    }
});

class WebViewPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <WebView url={this.props.url} />
                </View>        
        );
    }
}

export default WebViewPage;

WebViewPage.propTypes = {
    url: PropTypes.string.isRequired
}