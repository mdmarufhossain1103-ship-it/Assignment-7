import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
            <div className='text-center'>
                <h1 className='text-9xl font-bold text-gray-200'>404</h1>
                <div>
                    <h2 className='text-3xl font-bold text-gray-900 mb-2'>Page not found</h2>
                    <p className='text-gray-600 mb-8'>Sorry, we could not find the you are looking for.</p>
                </div>
                <div className='flex flex-col sm:flex-row justify-center gap-4'>
                    <button onClick={() => window.history.back()} className='px-6 py-3 text-xl font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors'>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;