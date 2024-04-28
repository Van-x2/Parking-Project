//imports the error and redirect operation from sveltejs/kit
import { error, redirect } from '@sveltejs/kit';

//sets up some actions
export const actions = {
  //creates a action called 'update' that takes the objects of request and locals
  update: async ({ request, locals }) => {

    //tries to take the submitted form data and turns into a readable json variable
    try {
      let data = await request.formData();
      
      //sends the data collected from the form to the pocketbase database
      await locals.pb.collection('users').update(locals?.user?.id, data);

      //if the operation fails in any way, the error is console logged and the user is redirected to a error page
    } catch (error) {
      console.log('Error: ', error);

      throw error(400, 'Something went wrong updating your profile');
    }
    
    //if the action is sucessfull, then the user will be redirected to the root page
    throw redirect(303, '/');

  }
};