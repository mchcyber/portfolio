import React from 'react';

export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;


  if (!Component || typeof Component !== 'function') {
    console.error("Invalid component passed to TechIcon:", Component);
    return <div>Error: Invalid component</div>; // Fallback UI for invalid component
  }

  return <Component className="size-10" />;
};
