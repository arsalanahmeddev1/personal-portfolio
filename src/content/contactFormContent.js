export const contactFormTitle =  'Contact Me';
export const submitBtn = 'Submit'

export const formFields = [
  {type: 'text', name: 'name', placeholder: 'Your Name', class: 'w-full bg-transparent px-[10px] py-[20px] h-[65px] mb-[40px] text-white border-b border-white placeholder:text-white focus-within:outline-none text-[14px] '},
  {type: 'email', name: 'email', placeholder: 'Your Email', class: 'w-full bg-transparent px-[10px] py-[20px] h-[65px] mb-[40px] text-white border-b border-white placeholder:text-white focus-within:outline-none text-[14px] focus:border-color-red'},
  {type: 'number', name: 'phone',  placeholder: 'Your Email', class: 'w-full bg-transparent px-[10px] py-[20px] h-[65px] mb-[40px] text-white border-b border-white placeholder:text-white focus-within:outline-none text-[14px] focus:border-color-red'},
  {type: 'textarea', name: 'message', placeholder: 'Your Message', class: 'w-full bg-transparent px-[10px] py-[20px] h-[65px] mb-[40px] text-white border-b border-white placeholder:text-white focus-within:outline-none text-[14px] focus:border-color-red resize-none'},
  {type: 'submit', name: 'submit', text: 'submit', class: 'bg-theme-gradiant max-w-[max-content] flex justify-center mx-auto text-white py-[12px] px-[70px] rounded-[60px]'}
]