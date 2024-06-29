import { useState } from "react";
import styles from "./page.module.css";
import {data} from "./projects";
import Image from "next/image";
import Icon from '@mdi/react';
import {mdiArrowLeftCircleOutline, mdiArrowRightCircleOutline} from '@mdi/js'
import { motion } from "framer-motion";

export default function Musem() {
    const [currentImg, setImg] = useState(0);
    const [direction, setDir] = useState('right');
    return (
        <div className={styles.meusem}>
            <div className={styles.m1}>
                <motion.h1 className={styles.back}>{currentImg}</motion.h1>
                <motion.h1 className={styles.title}>{data[currentImg].name}</motion.h1>
                <motion.p className={styles.descm}>{data[currentImg].desc}</motion.p>
            </div>
            <div className={styles.m2} style={{position: "relative"}}>
                <Icon
                    path={mdiArrowRightCircleOutline}
                    size={2}
                    className={styles.arrowBtn}
                    style={{color: "white", left: 0}}
                    onClick={()=>{setImg(currentImg + (currentImg < 6));setDir('right')}}
                />
                <Icon
                    path={mdiArrowLeftCircleOutline}
                    size={2}
                    className={styles.arrowBtn}
                    style={{color: "black", left: -60}}
                    onClick={()=>{setImg(currentImg - (currentImg > 0));setDir('left')}}
                />
            </div>
            <motion.img
                src={data[currentImg].img}
                key={currentImg}
                initial={{scale: 0.8}}
                animate={{scale: 1}}
                width="480"
                height="280"
            />
        </div>
    );
}
