import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

const StyledText = ({
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
    <Text {...props} style={newStyle}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultTextStyle: {
    color: 'rgba(83,157,241,1)',
    fontSize: 20,
  },
});

StyledText.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

StyledText.defaultProps = {
  style: {},
};

export default StyledText;
