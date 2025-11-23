import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

useEffect(() => {
        ScrollReveal().reveal("#info", {
          duration: 1500,
          distance: "100px",
          origin: "bottom",
          reset: false
        });
      }, []); // run once on mount