import React from 'react';
import {Link, useParams} from "react-router";

export const meta = () => ([
    { title: 'Resumind | Review' },
    { name: 'description', content: 'Detailed overview of your resume' },
])

const resume = () => {
    const { id } = useParams();
    return (
        <main className="!pt-0">
            <nav className="resume-nav">
                <Link to ="/" className="">

                </Link>
            </nav>
        </main>
    );
};

export default resume;
