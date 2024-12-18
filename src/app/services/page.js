"use client"
import Solution from '@/Components/About/Solution'
import Breadcrumb from '@/Components/Common/Breadcrumb'
import Footer from '@/Section/Footer'
import Header from '@/Section/Header'
import Skill from '@/Section/Skill'
import Heads from '@/Utilis/Heads'
import { Container } from '@mui/material'
import React from 'react'
const page = () => {
  return (
    <>
      <Heads />
      <Header />
      <Breadcrumb
        title="SERVICES"
        subtitle="Nextwave Services"
        backgroundImage={'/avatars/company/commonbanner.jpg'}
        breadcrumbLinks={[
          { name: "Home", href: "/" },
          { name: "Services" },
        ]}
      />
      <Container maxWidth={false} disableGutters as="section">

        <Solution />
      </Container>
      {/* <Portfolio /> */}
      <Skill />
      <Footer />
    </>
  )
}

export default page
