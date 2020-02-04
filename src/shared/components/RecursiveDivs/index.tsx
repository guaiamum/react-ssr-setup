import React from 'react';

type Props = {
    depth: number;
    breadth: number;
};

export default function RecursiveDivs({ depth, breadth }: Props) {
    if (depth <= 0) {
        return <div>abcdefghij</div>;
    }

    const children = [];
    for (let i = 0; i < breadth; i++) {
        children.push(<RecursiveDivs key={i} depth={depth - 1} breadth={breadth - 1} />);
    }

    return <div>{children}</div>;
}
