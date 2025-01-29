import Header from './components/1-header/header'
import Hero from './components/2-hero/hero'
import Main from './components/3-main/main'
import Contact from './components/4-contact/contact'
import Footer from './components/5-footer/footer'

function App() {

  return (
    <div className='container'>
      <Header />
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />
    </div>
  )
}

export default App
