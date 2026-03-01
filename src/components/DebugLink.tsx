"use client";

import NextLink, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

interface Props extends LinkProps {
    children?: ReactNode;
}

function DebugLinkComponent({ children, href, ...rest }: Props) {
    if (href === undefined || href === null) {
        // eslint-disable-next-line no-console
        console.error('DebugLink: href is undefined or null', { href, stack: new Error().stack });
    }

    return (
        <NextLink href={href} {...rest}>
            {children}
        </NextLink>
    );
}

export default DebugLinkComponent;
