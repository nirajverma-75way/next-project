import { useState, useEffect } from 'react';

const breakpoints = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
} as const;

const useBreakpoint = (size: keyof typeof breakpoints) => {
    const [breakpoint, setBreakpoint] = useState(() => window.innerWidth <= breakpoints[size]);

    useEffect(() => {
        const handleResize = () => {
            setBreakpoint(window.innerWidth <= breakpoints[size]);
        };

        // Run once on mount
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [size]); // Added `size` as a dependency

    return breakpoint;
};

export default useBreakpoint;
