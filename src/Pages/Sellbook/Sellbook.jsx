
const Sellbook = () => {
  return (
     <div className='flex items-center justify-center mt-[50px]'>
        <div className='w-[420px] border rounded bg-white px-7 py-10 hover:border-black hover:bg-slate-100 '>
          
          <div className='text-blue-500 text-3xl'>Upload Book Details</div>
          <div className='text-red-500 text-sm'>All the fields are mandatory !</div>
          <br />
          <hr className='bg-black font-xl' />
            <form action="">
                <p className='mt-3'>Upload Book Photo :
                <input 
                type="file" 
                placeholder='Upload photo'
                className='ml-2 border-slate-500'
                required
                />
                </p>
                <p className='mt-3'>Genre :
                <input 
                type="text" 
                placeholder='Genre'
                className='ml-2 border-slate-500'
                required
                />
                </p>
                <p className='mt-3'>Name of Book :
                 <input 
                 type='text'
                 placeholder='Name of book'
                 className='ml-2 border-slate-500'
                 required
                />
                </p>

                <p className='mt-3'>Name of author :
                 <input 
                 type='text'
                 placeholder='Name of author'
                 className='ml-2 border-slate-500'
                />
                </p>

                <p className='mt-3'>Province :
                 <input 
                 type='text'
                 placeholder='Province'
                 className='ml-2 border-slate-500'
                 required
                />
                </p>

                <p className='mt-3'>District :
                 <input 
                 type='text'
                 placeholder='District'
                 className='ml-2 border-slate-500'
                 required
                />
                </p>

                <p className='mt-3'>Address :
                 <input 
                 type='text'
                 placeholder='Address'
                 className='ml-2 border-slate-500'
                />
                </p>

                <p className='mt-3'>Contact no :
                 <input 
                 type='number'
                 placeholder='Contact No'
                 className='ml-2 border-slate-500'
                 required
                />
                </p>

                <p className='mt-3'>Price in Rs. :
                 <input 
                 type='number'
                 placeholder='Price'
                 className='ml-2 border-slate-500'
                 required
                />
                </p>
                 <p className='mt-3'>Choose Delivery :
                <select id="options" name="options" className='ml-2'>
                <option value="option1">Anywhere</option>
                <option value="option2">In my area</option>
                <option value="option3">Inside my District</option>
                <option value="option4">Inside my Province</option>
                </select> 
                </p>
             <button 
                  className='ml-20 mt-5 p-2 bg-blue-400 text-m text-white rounded-md hover:bg-blue-600'
               >
               Upload Book
             </button>
            </form>
        </div>
     </div>
  );
}

export default Sellbook;