import React from 'react';

const Contact = () => {
  return (
    <div className="md:container flex md:gap-3 md:max-w-[43rem] flex-col mx-auto md:px-4 py-5 mb-36 md:mb-48">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
      <p className="text-gray-600 mb-4">
        If you have any questions or just want to chat, feel free to reach out to me directly on{' '}
        <a href="https://twitter.com/mdsiaofficial" className="text-blue-500 hover:underline">
          Twitter
        </a> or <a href="https://linkedin.com/in/mdsiaofficial" className="text-blue-500 hover:underline">
          LinkedIn
        </a>. I&apos;ll do my best to respond as soon as possible.
      </p>
    </div>
  );
};

export default Contact;