// Import the Pagination component from its correct location
import Pagination from '../Pagination/Pagination';

// Your Testimonial component where you want to use Pagination
import React from 'react';

const Testimonial = () => {
  return (
    <div>
      {/* Use the Pagination component */}
      <Pagination />
      {/* Other content of your Testimonial component */}
    </div>
  );
}

export default Testimonial;
