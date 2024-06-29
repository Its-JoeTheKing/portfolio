"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import Musem from "./musem";

export default function Home() {
	return (
		<body className={styles.body}>
    <header className={styles.header}>
        <div className={styles.circle}>
            <div className={styles.circ}></div>
        </div>
        <button className={styles.consult}>Free Consultation</button>
    </header>
    <section className={styles.s1}>
        <h1>Full Stack Web Developer</h1>
    </section>
    <section className={styles.s2}>
        <motion.div initial={{scale: 0.8}} animate={{scale: 1}} className={styles['s2-1']}>
            <h1 className={styles.skill}>HTML CSS JS</h1>
            <p className={styles.prog}>90%</p>
            <div className={styles.flip}>
                <p>
                    I can make stores, blogs, professional websites responsive on any device for you or your business ..
                </p>
            </div>
        </motion.div>
        <div className={styles['s2-2']}>
            <div className={styles['s2-21']}>
                <motion.div initial={{scale: 0.8}} animate={{scale: 1}} className={styles['s2-212']}>
                    <p className={styles.prog}>80%</p>
                    <h1 className={styles.skill}>UI / UX</h1>
                </motion.div>
                <motion.div initial={{scale: 0.8}} animate={{scale: 1}} className={styles['s2-211']}>
                    <h1 className={styles.skill}>PYTHON</h1>
                    <p className={styles.prog}>80%</p>
                    <div className={styles.flip}>
                        <p>Web scraping, Flask,</p>
                    </div>
                </motion.div>
            </div>
            <motion.div initial={{scale: 0.8}} animate={{scale: 1}} className={styles['s2-22']}>
                <h1 className={styles.skill}>PHP / MYSQL</h1>
                <p className={styles.prog}>80%</p>
                <div className={styles.flip}>
                    <p>
                        I have successfully developed several websites using PHP and MySQL native code, and I am confident in my proficiency with this technique.
                    </p>
                </div>
            </motion.div>
        </div>

        <div className={styles['s2-3']}>
            <motion.div initial={{scale: 0.8}} animate={{scale: 1}} className={styles['s2-321']}>
                <h1 className={styles.skill}>MERN STACK</h1>
                <p className={styles.prog}>85%</p>
                <div className={styles.flip}>
                    <p>
                        I made many projects using this stack and, and I am confident in my familiarity with these techniques.
                    </p>
                </div>
            </motion.div>
            <motion.div drag initial={{scale: 0.8}} animate={{scale: 1}} className={styles['s2-322']}>
                <h1 className={styles.skill}>CYBER SECURITY</h1>
                <p className={styles.prog}>68%</p>
                <div className={styles.flip}>
                    Not Proficient but studied several vulnerabilities and threats to prevent when developing a website
                </div>
            </motion.div>
        </div>
    </section>
    <section className={styles.s3}>
        <div className={styles.imag}>
            <div className={styles.img}>
                <Image src="/imgs/profile.jpg" width="280" height="280" />
            </div>
        </div>
        <div className={styles.desc}>
            <h1>RESUME</h1>
            <p>
                Hello! I'm Errfig Aymen, an 18-year-old aspiring <b>Junior Full Stack Web Developer</b> and <b>Intermediate in Pentesting</b>. I'm passionate about expanding my knowledge to create secure, responsive, and optimized websites and applications. Over the past few years, I have gained proficiency in <b>HTML, CSS, JavaScript, PHP, Python, and MySQL</b>. Additionally, I have experience with frameworks such as <b>React and Node.js (MERN Stack)</b>. Furthermore, I have little experience in building <b>mobile apps</b> with <b>react native</b>.
            </p>
            <p>
                I'm Interested in: Game Development, Artificial Intelligence
            </p>
            <button>Free Consultation</button>
        </div>
    </section>
    <section className={styles.s4}>
        <h1 className={styles.tit}>Last Works</h1>
        <Musem />
    </section>
    <div className={styles.s4m} id="projects"></div>
    <div className={styles.projects}>
        <div className={styles.contain}>
            <i className="fas fa-close" id="close"></i>
            {/* <Image src="./imgs/projects/1.PNG" id="imageM" alt=""/> */}
            <h1 id="titleM">Old Portfolio</h1>
            <p id="descM">my old portfolio responsive on all devices</p>
            <div className={styles.buttons}>
                {/* "border-right: 5px solid white;" */}
                <button style={{}} id="left">
                    <i className="fas fa-angle-left"></i>
                </button>
                <button> <a href="" target="_blank" id="linkM">View</a> </button>
                {/* "border-left: 5px solid white;" */}
                <button style={{}} id="right">
                    <i className="fas fa-angle-right"></i>
                </button>
            </div>
        </div>
    </div>
    <section className={styles.s5}>
        <h1>You Can Find Me Here</h1>
        <div className={styles['icons-zone']}>
            <a href="https://www.facebook.com/Joeboy.Root" target="_blank" className={styles.icons}>
                <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/joe_san_king/" target="_blank" className={styles.icons}>
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/Its-JoeTheKing" target="_blank" className={styles.icons}>
                <i className="fab fa-github"></i>
            </a>
            <a href="" target="_blank" className={styles.icons}>
                <i className="fab fa-whatsapp"></i>
            </a>
        </div>
    </section>
</body>

	);
}