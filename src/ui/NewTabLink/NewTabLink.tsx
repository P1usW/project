import { FC, ReactNode } from "react";

interface NewTabLink {
  href: string,
  className: string,
  children: ReactNode,
  [key: string]: unknown
}

const NewTabLink: FC<NewTabLink> = (props) => {
  return (
    <a
      target='_blank'
      rel='noreferrer'
      {...props}
    />
  );
};

export default NewTabLink;