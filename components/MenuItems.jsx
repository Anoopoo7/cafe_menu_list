"use client"

import Image from 'next/image'
import BeforeCart from './buttons/BeforeCart';
import AfterCart from './buttons/AfterCart';
import { useSelector } from 'react-redux';

const MenuItems = () => {
    const { cartCount } = useSelector((state) => state.cart)
    return (
        <section className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right">
                <tbody>
                    <tr>
                        <td className="p-4 md:w-1/2">
                            <h1 className='font-bold text-gray-900 dark:text-white text-lg'>Apple Watch</h1>
                            <p>SAR 7.95</p>
                            <p>Fresh spinach, mushrooms, and hard-boiled egg served with warm bacon vinaigrette</p>
                            <br />
                            <div className="flex items-center">
                                {cartCount > 0 ? <AfterCart /> : <BeforeCart />}
                            </div>
                            <br />
                            {cartCount > 0 ? <p className='text-red-600 font-semibold'>Customizations available</p> : ""}
                        </td>
                        <td className="hidden md:table-cell p-4">
                        </td>
                        <td className="p-4 md:w-1/4 font-semibold text-gray-900 dark:text-white text-base">
                            15 Calories
                        </td>
                        <td className="p-4 md:w-1/4">
                            <div className="w-full max-w-full overflow-hidden">
                                <Image src='/menu.jpeg' className='w-full h-auto' width={300} height={300} alt='menu' />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default MenuItems;