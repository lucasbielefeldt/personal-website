import styles from './Home.module.css';

export function Home(){
    return (
        <section className={styles.section}>
            <div className="container">
                <div className="row">
                    <div className="homeInfo">
                        <h2>Hello, my name is <span className='name'>Lucas Bielefeldt</span></h2>
                        <h2>I´m a <span className={styles.typing}>WEB Developer</span></h2>
                        <p>ABOUT ME</p>
                        <a href='#contact' className={styles.btnHireMe}>Hire Me</a>
                    </div>
                    <div className="homeImg">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}