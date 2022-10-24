import React from "react"

import MiniAboutUs from "../../components/MiniAboutUs"
import MiniContactUs from "../../components/MiniContactUs"
import MiniServices from "../../components/MiniServices"

const Home = () => {
  return (
    <section>
      <MiniServices />
      <MiniAboutUs />
      <MiniContactUs />
    </section>
  )
}

export default Home
