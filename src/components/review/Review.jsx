import React from 'react'
import RatingStart from '../ratingstart/RatingStart'

const Review = ({ reviews }) => {
  return (
    <div>
      <div className='px=2'>
        <h1 className='text-2xl font-semibold mb-2'>Reviews</h1>
        <div className='space-y-2'>
          {reviews?.map(({ reviewername, rating, comment }) => (
            <div key={reviewername} className='leading-4'>
              <h3 className='font-semibold text-md'>{reviewername}</h3>
              <RatingStart rating={rating} />
              <p className='text-sm leading-4'>{comment}</p>
              {/* 1:00:52 */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Review
