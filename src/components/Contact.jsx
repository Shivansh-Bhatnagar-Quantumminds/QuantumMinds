import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import emailjs from 'emailjs-com'

const schema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Too short'),
  email: yup.string().required('Email is required').email('Invalid email'),
  message: yup.string().required('Message is required').min(10, 'Message too short')
}).required()

export default function Contact(){
  const { register, handleSubmit, formState:{errors, isSubmitting, isSubmitSuccessful}, reset } = useForm({resolver: yupResolver(schema)})

  async function onSubmit(values){
    // EmailJS client-side call - replace SERVICE_ID, TEMPLATE_ID and USER_ID with your EmailJS values
    const serviceID = 'service_xphybcz'
    const templateID = 'template_0usi88m'
    const userID = 'TmNReh3wr-A7CM89S'

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
      to_email: 'info.quantumminds@gmail.com',
      to_name: 'Quantum Minds'
    }

    try{
      // send email both to owner and an automatic reply to client can be configured in EmailJS templates
      await emailjs.send(serviceID, templateID, templateParams, userID)
      reset()
      alert('Message sent — a confirmation email has been sent to you.')
    }catch(err){
      console.error(err)
      alert('There was an error sending your message. Please try again later.')
    }
  }

  return (
    <section id="contact" className="section bg-[#f0f4f8] px-20">
      <h2 className="text-2xl font-semibold text-[#323d58]">Contact</h2>
      <p className="mt-2 text-gray-700">Have a project or question? Fill the form and we will get back to you soon.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        <div>
          <label className="block text-sm">Name</label>
          <input {...register('name')} className="mt-1 w-full border rounded px-3 py-2" />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm">Email</label>
          <input {...register('email')} className="mt-1 w-full border rounded px-3 py-2" />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm">Message</label>
          <textarea {...register('message')} rows={6} className="mt-1 w-full border rounded px-3 py-2" />
          {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
        </div>

        <div className="md:col-span-2">
          <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-[#323d58] text-white rounded hover:scale-105">{isSubmitting ? 'Sending...' : 'Send Message'}</button>
          {isSubmitSuccessful && <p className="text-sm text-green-600 mt-2">Thank you — your message was sent.</p>}
        </div>
      </form>

      <div className="mt-6 text-sm text-gray-600">Or email us directly at <a href="mailto:info.quantumminds@gmail.com" className="underline text-blue-500">info.quantumminds@gmail.com</a></div>
    </section>
  )
}
