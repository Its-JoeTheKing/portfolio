import { useState } from "react";
import styles from "./page.module.css";
import {data} from "./projects";
import Image from "next/image";

export default function Musem() {
    const [currentImg, setImg] = useState(0);
    return (
        <div className={styles.meusem}>
            <div className={styles.m1}>
                <h1 className={styles.back}>{currentImg}</h1>
                <h1 className={styles.title}>{data[currentImg].name}</h1>
                <p className={styles.descm}>{data[currentImg].desc}</p>
            </div>
            <div className={styles.m2}>
                <a href={data[currentImg].link} target="_blank" className={styles.link}>
                    <i className="fas fa-external-link-square"></i>
                </a>
                <ul>
                    <i href="#" className="fas fa-forward-step"></i>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <i href="#" className="fas fa-arrow-down-long"></i>
                </ul>
            </div>
            <Image src={data[currentImg].img} width="480" height="280" />
            <div className={styles.medias}>
                <a href="https://www.facebook.com/Joeboy.Root/" target="_blank" className={styles.icons}>
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/joe_san_king/" target="_blank" className={styles.icons}>
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://github.com/Its-JoeTheKing" target="_blank" className={styles.icons}>
                    <i className="fab fa-github"></i>
                </a>
                <a href="#" className={styles.icons}>
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    );
}
