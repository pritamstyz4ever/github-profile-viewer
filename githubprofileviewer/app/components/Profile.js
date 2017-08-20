import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    ScrollView
 } from 'react-native';
 import PropTypes from 'prop-types';

 import Badge from './Badge';
 import Separator from './Separator';

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
      },
      rowContainer: {
        padding: 10
      },
      rowTitle: {
        color: '#48BBEC',
        fontSize: 16
      },
      rowContent: {
        fontSize: 19
      }
})

class Profile extends Component {
    getRowTitle(user, item) {
        console.log(item)
        item = (item === 'public_repos') ? item.replace('_', ' '): item;
        return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
    }
    render() {
        const userInfo = this.props.userInfo;
        console.log(userInfo)
        const topics = ['company', 'location', 'followers', 'following',
                        'email', 'bio', 'public_repos']
        const list = topics.map((item, index) => {
            if(!userInfo[item]){
                return <View key={index} />
            } else {
                return (
                    <View key={index}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.rowTitle}> {this.getRowTitle(userInfo, item)}  </Text>
                            <Text style={styles.rowContent}> {userInfo[item]}   </Text>
                        </View>
                        <Separator/>
                    </View>
                )
            }
        });
        return (
        <View style={styles.container}>
          <ScrollView>
                <Badge userInfo = {userInfo} />
                {list}
          </ScrollView>
        </View> 
        );
    }
}
Profile.propTypes = {
    userInfo: PropTypes.object.isRequired
  };

export default Profile;