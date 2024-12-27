import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const GoogleLogo = () => {
  return (
    <View style={styles.container}>
      <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <Path d="M9.50195 7.4132V10.793H14.1988C13.9926 11.88 13.3736 12.8003 12.4454 13.4192L15.2778 15.6169C16.928 14.0936 17.8801 11.8563 17.8801 9.19841C17.8801 8.57958 17.8246 7.98448 17.7214 7.4133L9.50195 7.4132Z" fill="#4285F4"/>
        <Path d="M4.61094 10.6611L3.97213 11.1501L1.71094 12.9114C3.14697 15.7596 6.09022 17.7273 9.50176 17.7273C11.8581 17.7273 13.8336 16.9497 15.2776 15.6169L12.4452 13.4192C11.6677 13.9428 10.6759 14.2602 9.50176 14.2602C7.23268 14.2602 5.30481 12.729 4.61451 10.6661L4.61094 10.6611Z" fill="#34A853"/>
        <Path d="M1.71103 5.08859C1.11602 6.26276 0.774902 7.58774 0.774902 8.99994C0.774902 10.4121 1.11602 11.7371 1.71103 12.9113C1.71103 12.9192 4.61488 10.6581 4.61488 10.6581C4.44034 10.1344 4.33717 9.5791 4.33717 8.99985C4.33717 8.4206 4.44034 7.86527 4.61488 7.34163L1.71103 5.08859Z" fill="#FBBC05"/>
        <Path d="M9.50194 3.74777C10.7872 3.74777 11.9297 4.19205 12.8421 5.04892L15.3413 2.54978C13.8259 1.13758 11.8583 0.272728 9.50194 0.272728C6.0904 0.272728 3.14697 2.23239 1.71094 5.0886L4.6147 7.34183C5.30491 5.27899 7.23286 3.74777 9.50194 3.74777Z" fill="#EA4335"/>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 32,
    minHeight: 32,
    display: 'flex',
    padding: 7.273,
    alignItems: 'flex-start',
    borderRadius: 16,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.16,
    shadowRadius: 12,
    elevation: 12,
    marginRight: 16,
  },
});

export default GoogleLogo;