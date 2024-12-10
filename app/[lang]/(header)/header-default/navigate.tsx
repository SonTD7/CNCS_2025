"use client"
import { useState, useEffect } from "react"
import { getMenu } from "@/app/[lang]/utils/get-menu"
import Hot from "@/app/[lang]/components/(menu)/Hot"
import Grid from "@/app/[lang]/components/(menu)/Grid"
import Simple from "@/app/[lang]/components/(menu)/Simple"

export function Navigate() {
  const [menuList, setMenuList] = useState([])
  useEffect(() => {
    async function fetchMenu() {
      let res = await getMenu('main-menu', 'vi')
      if (res.data.length !== 0) {
        setMenuList(res.data[0].items)
      }
    }
    fetchMenu()
  }, [])
  return (
    <>
      {
        menuList.map((data, index) => {
          const { layout } = data
          return layout == "hot" ? (<Hot data={data}  key={index}/>) :
            (layout == "grid" ? (<Grid data={data} key={index}/>) : (<Simple data={data} key={index}/>))
        })
      }
    </>
  )

}
