import type { PageLoad } from './$types';

/*
export function load() {
    return {
      post: {
        title: `Title for  goes here`,
        content: `Content for  goes here`
      }
    };
  }
  
*/



export const load = (async () => {


    
    const user = getUser();
    console.log(user);

    return {user};
}) satisfies PageLoad;


async function getUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const user = await response.json();
        return user;

      } catch(err) {
        alert(err); // TypeError: failed to fetch
      }
}