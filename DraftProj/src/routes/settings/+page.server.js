import { error, redirect } from '@sveltejs/kit';

export const actions = {
  update: async ({ request, locals }) => {
    try {
      let data = await request.formData();

      await locals.pb.collection('users').update(locals?.user?.id, data);

    } catch (err) {
      console.log('Error: ', err);

      throw error(400, 'Something went wrong updating your profile');
    }
    
    throw redirect(303, '/');

  }
};