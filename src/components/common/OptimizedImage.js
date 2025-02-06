import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const OptimizedImage = ({ src, alt, className, width = 800, height = 400 }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Function to add size parameters to URLs
  const getOptimizedImageUrl = (url) => {
    try {
      const urlObj = new URL(url);
      
      // Handle Unsplash images
      if (urlObj.hostname === 'images.unsplash.com') {
        // Add quality and size parameters
        // w=${width} - sets the width
        // q=80 - sets quality to 80%
        // fm=webp - converts to WebP format
        return `${url}?w=${width}&q=80&fm=webp&fit=crop`;
      }
      
      // Handle Pexels images
      if (urlObj.hostname === 'images.pexels.com') {
        // Add size parameter
        // h=${height} - sets the height
        // w=${width} - sets the width
        return `${url}?auto=compress&cs=tinysrgb&w=${width}&h=${height}`;
      }
      
      return url;
    } catch (error) {
      console.error('Error optimizing image URL:', error);
      return src;
    }
  };

  return (
    <LazyLoad
      height={height}
      offset={200}
      once
      placeholder={
        <Skeleton
          height={height}
          width="100%"
          baseColor="rgba(255, 255, 255, 0.1)"
          highlightColor="rgba(255, 255, 255, 0.2)"
        />
      }
    >
      <div className="relative" style={{ height: isLoading ? height : 'auto' }}>
        {isLoading && (
          <div className="absolute inset-0">
            <Skeleton
              height="100%"
              baseColor="rgba(255, 255, 255, 0.1)"
              highlightColor="rgba(255, 255, 255, 0.2)"
            />
          </div>
        )}
        <img
          src={getOptimizedImageUrl(src)}
          alt={alt}
          className={`${className} ${isLoading ? 'invisible' : 'visible'}`}
          onLoad={() => setIsLoading(false)}
          loading="lazy"
        />
      </div>
    </LazyLoad>
  );
};

export default OptimizedImage;
