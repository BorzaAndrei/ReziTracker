import React from 'react';
import {StyleSheet, View} from 'react-native';

import StyledText from './StyleText';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  const timerComponents = Object.keys(timeLeft).map(interval => {
    if (interval !== 'seconds') {
      return (
        <View id={interval} style={styles.timeComponent}>
          <View style={styles.timeIntervalAndTextView}>
            <StyledText style={styles.timeTextNumber}>
              {timeLeft[interval]}
            </StyledText>
            <StyledText style={styles.timeTextInterval}>{interval}</StyledText>
          </View>
          <View>
            <StyledText style={styles.timeDotSeparator}>:</StyledText>
          </View>
        </View>
      );
    } else {
      return (
        <View id={interval} style={styles.timeIntervalAndTextView}>
          <StyledText style={styles.timeTextNumber}>
            {timeLeft[interval]}
          </StyledText>
          <StyledText style={styles.timeTextInterval}>{interval}</StyledText>
        </View>
      );
    }
  });

  return (
    <View>
      <View style={styles.countdownContainer}>
        {timerComponents.length ? timerComponents : "Time's up!"}
      </View>
      <View>
        <StyledText style={styles.untilText}>
          until...
        </StyledText>
        <StyledText style={styles.targetDate}>
          09:00 19th November 2023
        </StyledText>
      </View>
    </View>
    
  );
};

function calculateTimeLeft() {
  const targetDate = +new Date(2023, 10, 19, 9, 0);
  const difference = targetDate - +new Date();

  let timeLeft: {[key: string]: number} = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

const styles = StyleSheet.create({
  untilText: {
    fontSize: 15,
    textAlign: 'center',
    paddingTop: '3%'
  },
  targetDate: {
    textAlign: 'center',
    paddingTop: '2%',
    fontSize: 25
  },
  timeDotSeparator: {
    height: '100%',
    textAlignVertical: 'center',
  },
  timeTextNumber: {
    textAlign: 'center',
  },
  timeTextInterval: {
    textAlign: 'center',
  },
  timeIntervalAndTextView: {
    flex: 1,
  },
  timeComponent: {
    flex: 1,
    flexDirection: 'row',
  },
  countdownContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '5%',
  },
});

export default Countdown;
