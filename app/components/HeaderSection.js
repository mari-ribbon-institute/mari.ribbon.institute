'use client'

import React from 'react'
import styles from './HeaderSection.module.css';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const HeaderSection = () => {
  const pathname = usePathname();
  return (
    <main>
      <div className={styles.header}>
        <div className={styles.logo_wrapper}>
          <Image
            className={styles.logo}
            src='/logo.png'
            width={350}
            height={350}
          />
          <div className={styles.ribbon_wrapper}>
            <Image
              className={styles.ribbon}
              src='/ribbon.png'
              width={30}
              height={80}
            />
          </div>
        </div>
        <div className={styles.header_wrapper}>
          <h1 className={styles.mari}>Mari</h1>
          <p>
            a software company
          </p>
        </div>
      </div>

      <hr />

      <div className={styles.nav_wrapper}>
        <ul>
          <Link
            href="/"
          >
            <li style={pathname === "/" ? { backgroundColor: 'var(--primary-rgb)', borderRadius: 'var(--border-radius)' } : {}}>

              About
            </li>
          </Link>

          <Link
            href="/applications"
          >
            <li style={pathname === "/applications" ? { backgroundColor: 'var(--primary-rgb)', borderRadius: 'var(--border-radius)' } : {}}>

              Applications
            </li>
          </Link>

          <Link
            href='/websites'
          >
            <li style={pathname === "/websites" ? { backgroundColor: 'var(--primary-rgb)', borderRadius: 'var(--border-radius)' } : {}}>

              Websites
            </li>
          </Link>

          <Link
            href='/guidelines'
          >
            <li style={pathname === "/guidelines" ? { backgroundColor: 'var(--primary-rgb)', borderRadius: 'var(--border-radius)' } : {}}>

              Guidelines
            </li>
          </Link>

          <Link
            href='/team'
          >
            <li style={pathname === "/team" ? { backgroundColor: 'var(--primary-rgb)', borderRadius: 'var(--border-radius)' } : {}}>

              Team
            </li>
          </Link>

        </ul>
      </div>

      <hr />

      <div className={styles.contents_wrapper}>


      </div>

    </main>
  )
}

export default HeaderSection
