import React from 'react';
import ProgressBar from 'ee-kitchen-sink/ProgressBar';

/** Progress bar with 100 percent, width 150px and height 20px. */
export default function Example100Percent() {
    return <ProgressBar percent={100} width={150} height={20} />
}