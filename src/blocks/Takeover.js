import React from "react"
import { Helmet } from "react-helmet"
import { BlockListItem } from '../components'

import { genericFields } from '../helpers/misc'

const blockLabel = "Takeover"

export function Takeover({ data }) {
  const { text } = data
  const scriptSrc = text

  function remove() {
    const metaTag = document.querySelector(`#takeoverScript`);
    console.log("remove takeover")
    if (metaTag) {
      metaTag.remove();
      window.location.reload();
    }
  }

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
    return remove
  }, []);

  if (!hasMounted) {
    return null;
  }

  // continue here if mounted

  return (
    <Helmet>
      {scriptSrc && <script id="takeoverScript" src={ scriptSrc } />}
    </Helmet>
  );
};

export const TakeoverBlock = {
  label: blockLabel,
  name: "Takeover",
  itemProps: (item) => ({
    label: <BlockListItem label={blockLabel} preview={item.text} />,
  }),
  defaultItem: {
    text: "https://space-time.tv/embed2038.js",
  },
  fields: [
    { name: "text", label: "Text", component: "text" },
  ],
}
