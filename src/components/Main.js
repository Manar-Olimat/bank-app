import React from 'react'
import {useSelector,useDispatch, connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Connect } from 'react-redux'

const Home = (props) => {

console.log(props.accounts);
  return (
    <div className='tableInfo'>
{
    
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="py-3 px-6">
                Account Number
                </th>
                
                <th scope="col" class="py-3 px-6">
                    Account name
                </th>
                
                <th scope="col" class="py-3 px-6">
                Account Type
                </th>
               
                <th scope="col" class="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>

     {   props.accounts.map(account=>{
        return( 
            <tr key={account.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {account.accountNumber}
                            </th>
            <td class="py-4 px-6">
            {account.customerName}
            </td>
            <td class="py-4 px-6">
            {account.accountType}
            </td>
            
            <td class="py-4 px-6">
            <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
            </td>
        </tr>
        
        )
    })}

      
        </tbody>
    </table>
</div>
}
    </div>
  )
}

const readStateFromStore=(state)=>{
    return{
        accounts:state.accounts
    }
}

export default connect(readStateFromStore)(Home);



