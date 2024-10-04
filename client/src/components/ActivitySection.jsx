import React from 'react';

function ActivitySection({ activityContent }) {
  return (
    <div>
      <h2>Activity</h2>
      <p>{activityContent}</p>
      <textarea placeholder="Write your answer here..." className="border p-2 w-full" rows="4"></textarea>
    </div>
  );
}

export default ActivitySection;
