import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20 px-4">
      <Helmet>
        <title>Privacy Policy | B Square Global FZE</title>
        <meta name="description" content="Read the privacy policy of B Square Global FZE. We are committed to protecting your personal data in compliance with applicable data protection laws." />
        <meta property="og:title" content="Privacy Policy | B Square Global FZE" />
        <meta property="og:url" content="https://www.bsquareglobalfze.com/privacy-policy" />
        <link rel="canonical" href="https://www.bsquareglobalfze.com/privacy-policy" />
      </Helmet>
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          {/* Add your privacy policy content here */}
          <p>Your privacy policy content goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;