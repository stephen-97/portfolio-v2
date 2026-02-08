// organisms/Header/Header.tsx
import styles from "./linkHeader.module.scss";
import React from "react";
import Link from 'next/link'

type LinkHeaderProps = React.ComponentProps<typeof Link>;

export const LinkHeader = (props: LinkHeaderProps) => {

    return <Link className={styles.link} {...props} ></Link>
}
