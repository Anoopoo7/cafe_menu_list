import Categories from '@/components/Categories'
import MenuItems from '@/components/MenuItems'
import React from 'react'

const page = () => {
  return (
    <section className="flexStart flex-col paddings mb-16">
      <Categories />
      <MenuItems />
    </section>
  )
}

export default page