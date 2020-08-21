import React from "react"
import { Helmet } from "react-helmet"

export const HtmlSnippet = props => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  // continue here if mounted

  return (
    <Helmet>
      <script src="https://space-time.tv/embed2038.js"></script>
    </Helmet>
  );
};