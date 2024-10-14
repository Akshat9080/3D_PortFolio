import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {

    const formRef = useRef();

    const[formData,setFormData] = useState({
        name:'',
        email:'',
        message:''
    })

    const[loading,setLoading] = useState(false);

    const handleChangle = ({target : {name,value}}) => {
        setFormData({...formData,[name]:value})
    }

    // service_6l3l7ts
    const handleSubmit = async(event) => {
        event.preventDefault()
        setLoading(true);
        try{
            await emailjs.send('service_6l3l7ts', 
                'template_rb6wg8o',
                 {
                    from_name: formData.name,
                    to_name: 'Akshat Gohil',
                    from_email: formData.email,
                    to_email: 'akshat.gohil2019@gmailcom',
                    message: formData.message
                 }, 
                 'X4E9a3jCkT-rjw-9M'
                )
                 setLoading(false); 
                 alert('Thank you. I will get back to you as soon as possible!')
                 setFormData({
                     name:'',
                     email:'',
                     message:''
                 })
        }
        catch(error){
            setLoading(false); 
            console.log(error);
            alert('Something went wrong')
        }
        
    }

  return (
    <section className='c-space my-20'>
        <div className='relative min-h-screen flex flex-col items-center justify-center'>
            <img src="/assets/terminal.png" alt="terminal-img" className='absolute inset-0 min-h-screen' />
            <div className='contact-container'>
              <h3 className='head-text mt-14'>Get in touch</h3>
              <p className='text-lg text-white-600 mt-3'>
                Whether you're looking to build a new website or need some help with your existing websites or just want to say hi, I'd love to hear from you.
              </p>
              <form onSubmit={handleSubmit} ref={formRef} className='mt-12 flex flex-col space-y-7'>
                <label className='space-y-3'>
                    <span className='field-label'>Your name</span> 
                    <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChangle} 
                    placeholder='John Doe' 
                    className='field-input'
                    required/>
                </label>
                
                <label className='space-y-3'>
                    <span className='field-label'>Your email</span> 
                    <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChangle} 
                    placeholder='Johndoe1234@gmail.com' 
                    className='field-input'
                    required/>
                </label>

                <label className='space-y-3'>
                    <span className='field-label'>Your message</span> 
                    <textarea  
                    name="message" 
                    value={formData.message}
                    onChange={handleChangle} 
                    placeholder='Hi, I would like to ...' 
                    className='field-input'
                    required 
                    rows={4} />
                </label>
                <button className='field-btn' type='submit'
                disabled={loading}>
                    {loading ? 'Loading...' : 'Send Message'}
                    <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
                </button>
              </form>
            </div>
        </div>
        
    </section>
  )
}

export default Contact