// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
console.log("Resend API Key:", process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req:any , res:any) {

  const {subject , email , message} = await req.json();
  try {
    if (fromEmail) {
      const data = await resend.emails.send({
        from: 'Hamza  <onboarding@resend.dev>',
        to: [fromEmail , email] , // Replace with a valid recipient email
        subject: 'Hi Friend',
        react: <>
        <p>{subject}</p>
        <p>ThankYou for Contacting us!</p>
        <p>New Message Submitted</p>
        <p>{message}</p>
        </>,
      });

      return Response.json(data);
    } else {
      return Response.json({ error: 'FROM_EMAIL is not defined' });
    }
  } catch (error) {
    return Response.json({ error });
  }
}