import { useEffect, useRef } from "react";

export function useWhyDidYouUpdate(name, props) {
  const prevProps = useRef();

  useEffect(() => {
    if (prevProps.current) {
      const keys = Object.keys({ ...prevProps.current, ...props });

      const changeObj = {};

      keys.forEach((key) => {
        if (typeof props[key] === "object" && typeof prevProps.current[key] === 'object') {
          if (JSON.stringify(props[key]) !== JSON.stringify(prevProps.current[key])) {
            changeObj[key] = {
              from: prevProps.current[key],
              to: props[key]
            }
          }
        }
        else {
          if (prevProps.current[key] !== props[key]) {
            changeObj[key] = {
              from: prevProps.current[key],
              to: props[key]
            }
          }
        }
      })

      if (Object.keys(changeObj).length) {
        console.log("This is causing re-renders", name, changeObj);
      }
    }

    prevProps.current = props;
  })
} 