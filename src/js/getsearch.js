'use server'
import { redirect } from 'next/navigation'

export async function SubmitHandler(formData){
    const query = formData.get('query');
    redirect(`/explore?phrase=${query}`);
}