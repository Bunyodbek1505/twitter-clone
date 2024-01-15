import Auth from "@/components/auth";
// import React, { use } from 'react'

const page = () => {
    const user = false;

  if ( !user ) return (
    <div className="container h-screen mx-auto max-w-7xl">
      <Auth />
    </div>
  );
  
  return <div>page</div>
  
}

export default page