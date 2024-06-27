import React from 'react';

export type TypographyProps = {
  tag: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({
  tag,
  className,
  style,
  children,
}) => {
  const Tag = tag;

  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
};

export default Typography;
