import React from 'react';

var Button = function Button() {
  return React.createElement("div", null, React.createElement("button", {
    style: {
      backgroundColor: 'blue'
    }
  }, "Test"));
};

export { Button };
