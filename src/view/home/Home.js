import React from 'react'
import './home.css'


import Hero from '../../components/hero/index.js'
import FeatureItem from '../../components/featureItem/index.js'
import IconChat from "../../assets/img/icon-chat.png"
import IconMoney from "../../assets/img/icon-money.png"
import IconSecurity from "../../assets/img/icon-security.png"

export default function Home() {

  


  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureItem
          icon={IconChat}
          alt="Chat Icon"
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
          icon={IconMoney}
          alt="money Icon"
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <FeatureItem
          icon={IconSecurity}
          alt="security Icon"
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </main>
  )
}