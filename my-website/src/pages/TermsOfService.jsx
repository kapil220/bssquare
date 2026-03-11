import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20 px-4">
      <Helmet>
        <title>Terms of Service | B Square Global FZE</title>
        <meta name="description" content="Review the terms of service for B Square Global FZE. Understand the conditions governing the use of our website and professional services." />
        <meta property="og:title" content="Terms of Service | B Square Global FZE" />
        <meta property="og:url" content="https://www.bsquareglobalfze.com/terms-of-service" />
        <link rel="canonical" href="https://www.bsquareglobalfze.com/terms-of-service" />
      </Helmet>
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          {/* Add your terms of service content here */}
          <p>Your terms of service content goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;