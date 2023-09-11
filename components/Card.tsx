import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const Card = ({
  style,
  children,
  ...props
}: {
  style: any;
  children: any;
}) => {
  let newStyle;
  if (Array.isArray(style)) {
    newStyle = [styles.defaultTextStyle, ...style];
  } else {
    newStyle = [styles.defaultTextStyle, style];
  }

  return (
    <View {...props} style={newStyle}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  defaultTextStyle: {
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'rgba(228,236,255,1)',
    marginBottom: 10
  },
});

Card.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

Card.defaultProps = {
  style: {},
};

export default Card;
