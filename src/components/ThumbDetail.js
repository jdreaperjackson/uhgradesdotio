import React from 'react'

function ThumbDetail({ courseDescription, instructorLast, instructorFirst, term, subject, catalogNbr, aCount, bCount, cCount, dCount, fCount, satisfactory, dropCount, percentA}) {
    return (
        <div className="container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4">
            {/*<img src={image_url} className="h-1/2 w-full rounded-tl-lg rounded-tr-lg" alt={title} />*/}
            <div className="p-4">
                <h3 className="font-bold mb-4">{courseDescription}</h3>
                {/*<p className="text-xs">Course Description: <span className="text-gray-700 dark:text-gray-300">{courseDescription}</span></p>*/}
                <p className="text-xs">Term: <span className="text-gray-700 dark:text-gray-300">{term}</span></p>
                <p className="text-xs">Subject: <span className="text-gray-700 dark:text-gray-300">{subject}</span></p>
                <p className="text-xs">Catalog Number: <span className="text-gray-700 dark:text-gray-300">{catalogNbr}</span></p>
                <p className="text-xs">Instructor Last: <span className="text-gray-700 dark:text-gray-300">{instructorLast}</span></p>
                <p className="text-xs">Instructor First: <span className="text-gray-700 dark:text-gray-300">{instructorFirst}</span></p>
                <p className="text-xs">A Percentage: <span className="text-gray-700 dark:text-gray-300">{percentA}</span></p>
                <p className="text-xs">A: <span className="text-gray-700 dark:text-gray-300">{aCount}</span></p>
                <p className="text-xs">B: <span className="text-gray-700 dark:text-gray-300">{bCount}</span></p>
                <p className="text-xs">C: <span className="text-gray-700 dark:text-gray-300">{cCount}</span></p>
                <p className="text-xs">D: <span className="text-gray-700 dark:text-gray-300">{dCount}</span></p>
                <p className="text-xs">F: <span className="text-gray-700 dark:text-gray-300">{fCount}</span></p>
                <p className="text-xs">S: <span className="text-gray-700 dark:text-gray-300">{satisfactory}</span></p>
                <p className="text-xs">Dropped: <span className="text-gray-700 dark:text-gray-300">{dropCount}</span></p>
            </div>
        </div>
    )
}

export default ThumbDetail
