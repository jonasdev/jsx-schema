import React from "react";

export default function JSXSchema(props) {
  if (Object.keys(props).length === 0) return null;

  const context = {
    context: props.context || "https://schema.org/",
    ...props,
  };

  const schema = JSON.stringify(context)
    .replace(/"context"/g, '"@context"')
    .replace(/"type"/g, '"@type"')
    .replace(/"id"/g, '"@id"');

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: schema,
      }}
    />
  );
};
