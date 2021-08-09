import * as React from "react";

interface Props {
    name: string;
};

function makeCopyright() {
  var today = new Date();
  return today.getFullYear();
}
  
const CopyrightNotice = ({ name }: Props): JSX.Element => (
  <small className="c-copyright-notice"
    >© {name} <time className="c-copyright-notice__year">{makeCopyright()}</time>
  </small>
);
  
export default CopyrightNotice;