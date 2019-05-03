import React from 'react'
import { cn } from '@bem-react/classname'
import './HeroSection.css'

const cnHeroSection = cn('Hero')
const cnParallax = cn('Parallax')

const HeroSection: React.FC = () => (
  <section className={cnHeroSection('', {}, [cnParallax()])}>
    <div
      className={cnParallax('Layer', { back: true })}
      style={{
        backgroundImage: `url(https://crimeaz.ru/images/raznie_prirodnie/gora_echki_dag/2.jpg)`
      }}
    />
    <div className={cnParallax('Layer', { base: true })}>
      <h1 className={cnHeroSection('Header')}>Галерея 853</h1>
    </div>
  </section>
)

export default HeroSection
