// app/some-route/error.tsx
"use client"

import React from 'react';

interface ErrorProps {
    error: Error;
    reset: () => void;
}

const SomeRouteError: React.FC<ErrorProps> = ({ error, reset }) => {
    return (
        <div>
            <h1>Error in Some Route</h1>
            <p>{error.message}</p>
            <button onClick={() => window.history.back()}>Try again</button>
        </div>
    );
};

export default SomeRouteError;
