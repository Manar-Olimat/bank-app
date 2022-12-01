import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const Home = () => {
  return (
    <section>

<Header/>
 {/* add account form */}
<section className='mb-10'>
<div class="w-full max-w-md p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
    <h1 class="text-3xl font-semibold text-center text-gray-700 dark:text-white">Add New Account</h1>

    <form class="mt-6">
        <div className='grid md:grid-cols-3 md:gap-6'>
        <div>
            <label for="username" class="block text-sm text-gray-800 dark:text-gray-200">Account Number</label>
            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div>
            <label for="username" class="block text-sm text-gray-800 dark:text-gray-200">Account name</label>
            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

          <div>
            <label for="username" class="block text-sm text-gray-800 dark:text-gray-200">Account Type</label>
            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div> 
        </div>
       

        

        <div class="mt-6">
            <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Add
            </button>
        </div>
    </form>



    

</div>
</section>
{/* display table */}
<Main/>
<Footer/>
    </section>
  )
}

export default Home





