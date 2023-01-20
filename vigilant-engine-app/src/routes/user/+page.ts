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

    const user = await getUser();

    console.log(user);

    return user;
}) satisfies PageLoad;


async function getUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const user = await response.json();
        
        console.log(user.results.length);

        if (user.results.length != 1) {
          return null;
        }

        const oneUser = user.results[0];
        //console.log("USER : " + {user});
        return oneUser;

      } catch(err) {
        alert(err); // TypeError: failed to fetch
      }
}