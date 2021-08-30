import React from 'react';
import { createClient, Entry } from 'contentful';

const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE, // ID of a Compose-compatible space to be used \
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TK, // delivery API key for the space \
    product: process.env.NEXT_PUBLIC_PRODUCT
});

export function ContentDelivery() {
    
    // function getEntries() {
    //   return this.client.getEntries(Object.assign({
    //     content_type: environment.CONFIG.product
    //   }, query))
    //   .then(res => res.items);
    // }
     

     
    
}
export async function getEntries () {
  const res = await client.getEntries(Object.assign({
    content_type: process.env.NEXT_PUBLIC_PRODUCT
  }));
  return res; 
}

export function getEntry(post) {

  return this.client.getEntry(post);
}
  
//   ContentDelivery.propTypes = {}; // for type checking
  
//   ContentDelivery.defaultProps = {}; // for when no val is present
  
  export default ContentDelivery;