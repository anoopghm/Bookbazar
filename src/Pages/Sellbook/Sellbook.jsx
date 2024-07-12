import React from 'react'

const Sellbook = () => {
  return (
     <div className='flex items-center justify-center mt-28'>
        <div className=''>
            <form action="">
                <p>Upload Book Photo</p>
                <input 
                type="file" 
                placeholder='Upload photo'
                />

                <p>Name of Book
                 <input 
                 type='text'
                 placeholder='Name of book'
                 className='border-indigo-700'
                />
                </p>

                <p>Name of author
                 <input 
                 type='text'
                 placeholder='Name of author'
                />
                </p>

                <p>Province
                 <input 
                 type='text'
                 placeholder='Province'
                />
                </p>

                <p>District
                 <input 
                 type='text'
                 placeholder='District'
                />
                </p>

                <p>Address
                 <input 
                 type='text'
                 placeholder='Address'
                />
                </p>

                <p>Contact no
                 <input 
                 type='number'
                 placeholder='Contact No'
                />
                </p>

                <p>Price in Rs.
                 <input 
                 type='number'
                 placeholder='Price'
                />
                </p>

            </form>
        </div>
     </div>
  );
}

export default Sellbook;