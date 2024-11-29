import React from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'

const JobListings = () => {
    return (
        <main className="container mx-auto px-6 py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
                Jobs List
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                        <JobListing job={job} />
                    </div>
                ))}
            </div>
        </main>
    )
}

export default JobListings