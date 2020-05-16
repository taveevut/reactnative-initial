import React, { Component } from 'react';
import { Text } from 'react-native';
import Navigator from './Navigator';
import 'react-native-gesture-handler';

const setCustomText = customProps => {
  const TextRender = Text.render;
  const initialDefaultProps = Text.defaultProps;
  Text.defaultProps = {
    ...initialDefaultProps,
    ...{ customProps },
  };
  Text.render = function render(props) {
    const oldProps = props;
    props = { ...props, style: [customProps.style, props.style] };
    try {
      return TextRender.apply(this, arguments);
    } finally {
      props = oldProps;
    }
  };
};

const customTextProps = {
  style: {
    fontSize: 16,
    fontFamily: 'NotoSansThai-Regular',
  },
};

setCustomText(customTextProps);

export default class App extends Component {
  render() {
    return <Navigator />;
  }
}
