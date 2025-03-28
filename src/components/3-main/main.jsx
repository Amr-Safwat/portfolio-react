import './main.css'

export default function main() {
  return (
    <main className='flex'>
      <section className='left-section'>
        <ul>
          <li className='active'>All projects</li>
          <li>HTML&CSS</li>
          <li>JaveScript</li>
          <li>React</li>
        </ul>
      </section>
      <section className='right-section'>
        <article className='card'>
          <img src="/public/work2.png" alt="" />
          <div className="box">
            <div className="title">landing Page</div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam vel officiis provident dicta sit</p>
            <div className="links">
              <i className="fa-brands fa-github"></i>
              <a href="">more</a>
            </div>
          </div>
        </article>
        <article className='card'>
          <img src="/public/work2.png" alt="" />
          <div className="box">
            <div className="title">landing Page</div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam vel officiis provident dicta sit</p>
            <div className="links">
              <i className="fa-brands fa-github"></i>
              <a href="">more</a>
            </div>
          </div>
        </article>
        <article className='card'>
          <img src="/public/work2.png" alt="" />
          <div className="box">
            <div className="title">landing Page</div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam vel officiis provident dicta sit</p>
            <div className="links">
              <i className="fa-brands fa-github"></i>
              <a href="">more</a>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
