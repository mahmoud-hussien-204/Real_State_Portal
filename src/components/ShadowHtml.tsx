"use client";

import React, {useEffect, useRef} from "react";

interface ShadowHtmlProps {
  html: string;
}

const ShadowHtml: React.FC<ShadowHtmlProps> = ({html}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      // Reuse the shadowRoot if already created
      let shadow = container.shadowRoot;
      if (!shadow) {
        shadow = container.attachShadow({mode: "open"});
      }
      shadow.innerHTML = html;
    }
  }, [html]);

  return <div ref={containerRef} />;
};

export default ShadowHtml;
