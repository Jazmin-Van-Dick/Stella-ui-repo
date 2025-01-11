import * as React from 'react';
import { Easing, Animated, View, StyleSheet } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface DonutProps {
  percentage?: number;
  radius?: number;
  strokeWidth?: number;
  duration?: number;
  color?: string;
  delay?: number;
}

export default function Donut({
  percentage = 75,
  radius = 40,
  strokeWidth = 10,
  duration = 500,
  color = "tomato",
  delay = 0,
}: DonutProps) {
  const animated = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef<Circle>(null);
  const circumference = 2 * Math.PI * radius;

  const animation = (toValue: number) => {
    return Animated.timing(animated, {
      delay,
      toValue,
      duration,
      useNativeDriver: false, // Non-transform properties
      easing: Easing.out(Easing.ease),
    }).start();
  };

  React.useEffect(() => {
    animation(-percentage);

    const listenerId = animated.addListener((v) => {
      const strokeDashoffset = circumference - (circumference * v.value) / 100;

      if (circleRef.current) {
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });

    return () => {
      animated.removeListener(listenerId);
    };
  }, [percentage]);

  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${(radius + strokeWidth) * 2} ${(radius + strokeWidth) * 2}`}
      >
        <G
          rotation="-90"
          origin={`${radius + strokeWidth}, ${radius + strokeWidth}`} // Rotate around the center
        >
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            ref={circleRef}
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeOpacity=".2"
          />
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontWeight: '900', textAlign: 'center' },
});