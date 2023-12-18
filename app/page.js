"use client"
import Categories from '@/components/Categories'
import MenuItems from '@/components/MenuItems'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const page = () => {
  const [cat, setCat] = useState("");
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://run.mocky.io/v3/5822e230-edcd-4328-b794-54018d0cf95e");
    const [restaurant] = response?.data || []
    setProducts(restaurant?.table_menu_list);
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className="flexStart flex-col paddings mb-16">
      <Categories
        setCat={setCat}
      />
      {
        cat === "All" ?
          products?.map(each => {
            return each?.category_dishes?.map(product => <MenuItems {...product} />)
          }) :
          products?.filter(each => cat === each?.menu_category).map(each => {
            return each?.category_dishes?.map(product => <MenuItems {...product} />)
          })
      }
    </section>
  )
}

export default page