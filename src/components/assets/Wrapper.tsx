import React from 'react';

// * Types

interface FlexProps {
  left?: boolean;
  right?: boolean;
  center?: boolean;
  up?: boolean;
  down?: boolean;
  selfStart?: boolean;
  selfEnd?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  flex?: number | string;
  horizontal?: boolean;
  vertical?: boolean;
  fit?: boolean;
  onClick?: ReactTypes.onClick<HTMLDivElement>;
  height?: string;
  width?: string;
  fitParent?: boolean;
  className?: string;
}

interface FlexSpacerProps {
  flex?: number | string;
}

interface FlexHorizontalProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

// * Middleware functions

const justifyDirection = (props: FlexProps) => {
  // eslint-disable-next-line prefer-const
  let v: Record<string, string> = {};

  if (props.vertical) {
    v.flexDirection = 'column';
    if (props.center) {
      v.justifyContent = 'center';
      v.alignItems = 'center';
    }

    if (props.left) {
      v.alignItems = 'flex-start';
    }

    if (props.right) {
      v.alignItems = 'flex-end';
    }

    if (props.up) {
      v.justifyContent = 'flex-start';
    }

    if (props.down) {
      v.justifyContent = 'flex-end';
    }
  } else {
    v.flexDirection = 'row';

    if (props.center) {
      v.justifyContent = 'center';
      v.flexDirection = 'center';
    }

    if (props.left) {
      v.justifyContent = 'flex-start';
    }

    if (props.right) {
      v.justifyContent = 'flex-end';
    }
    if (props.up) {
      v.alignItems = 'flex-start';
    }

    if (props.down) {
      v.alignItems = 'flex-end';
    }
  }

  if (props.selfStart) {
    v.alignSelf = 'flex-start';
  }

  if (props.selfEnd) {
    v.alignSelf = 'flex-end';
  }

  return v;
};

// * Components

export const Flex = (props: FlexProps) => {
  const FlexStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    flex: props.flex,
    height: props.height,
    width: props.width,
    ...props.style,
    ...justifyDirection(props),
  };

  if (props.fit) {
    FlexStyle.height = '100vh';
  }

  if (props.fitParent) {
    FlexStyle.width = '100%';
    FlexStyle.height = '100%';
  }

  return (
    <div style={FlexStyle} onClick={props.onClick} className={props.className}>
      {props.children}
    </div>
  );
};

export const FlexSpacer = (props: FlexSpacerProps) => {
  return <div style={{ flex: props.flex || 1 }} />;
};

export const FlexHorizontal = (props: FlexHorizontalProps) => {
  const FlexHorizontalStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    ...props.style,
  };
  return <div style={FlexHorizontalStyle}>{props.children}</div>;
};

export default { Flex, FlexSpacer, FlexHorizontal };
