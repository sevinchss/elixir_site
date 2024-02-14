import React from 'react'
import { Hero } from './hero/hero'
import { Welcome } from './welcome/welcome'
import { Video } from './video_bar/video'
import { Services } from './services/service'
import { Reason } from './reasons/reason'
import { Contacts } from './contacts/contacts'
import { Things } from './things/things'
import { MyForm } from './forms/myform'
import { Leadership } from './Leadership/leadership'
import { MySteps } from './steps/steps'
import { Reviews } from './reviews/reviews'
import { Brands } from './brands/brands'
import { News } from './news/news'
import { SignForm } from './signs/sign'
export const Main = () => {
    return (
        <>
            <main className='overflow-x-hidden'>
                <Hero />
            <Welcome />
            <Video />
            <Services />
            <Reason />
            <Contacts />
            <Things />
            <MyForm />
            <Leadership />
            <MySteps />
            <Reviews />
            <Brands />
            <News />
            <SignForm />

            </main></>
    )
}
