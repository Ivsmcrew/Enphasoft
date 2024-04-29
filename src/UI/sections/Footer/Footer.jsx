import React from 'react'
import styles from './Footer.module.css'
import { SlSocialVkontakte } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { SlSocialSkype } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineSummarize } from "react-icons/md";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a 
        className={styles.link}
        target="_blank" 
        rel='noreferrer' 
        href="https://vk.com/son_of_korzh"
      >
        <SlSocialVkontakte size="1.4rem" />
      </a>
      <a
        className={styles.link}
        target="_blank" 
        rel='noreferrer' 
        href="https://github.com/Ivsmcrew"
      >
        <FaGithub size="1.4rem" />
      </a>
      <a
        className={styles.link} 
        target="_blank" 
        rel='noreferrer' 
        href="https://join.skype.com/invite/AbNXcgkv5eP6"
      >
        <SlSocialSkype size="1.4rem" />
      </a>
      <a
        className={styles.link} 
        target="_blank" 
        rel='noreferrer' 
        href="https://t.me/IVS_M"
      >
        <FaTelegramPlane size="1.4rem" />
      </a>
      <a
        className={styles.link} 
        target="_blank" 
        rel='noreferrer' 
        href="https://hh.ru/resume/0e69f8ffff0d1d230d0039ed1f4e4f6a5a6551"
      >
        <MdOutlineSummarize size="1.4rem" />
      </a>
    </footer>
  )
}

export default Footer