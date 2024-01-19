import React from 'react'
import Styles from './Home.module.css'
import { Link } from 'react-router-dom'
import insta_img from '../../assets/instagram.svg';
import linkedin_img from '../../assets/linkedin.svg';
import twitter_img from '../../assets/twitter.svg';
import youtube_img from '../../assets/youtube.svg'
function Home() {
    function updateTextBasedOnWidth() {
        const dynamicText = document.getElementById('dynamicText');
        if (dynamicText) {
            const screenWidth = window.innerWidth;
            dynamicText.textContent = screenWidth <= 840 ? "TaskVault is your essential task management solution, offering a secure platform for streamlined organization. With a user-friendly interface, collaborative features, and goal tracking, TaskVault empowers you to efficiently prioritize and achieve objectives. More than a to-do list app, it's your key to enhanced productivity" : "TaskVault is your all-in-one task management solution, offering a secure and intuitive platform for seamless organization. With a user-friendly interface, smart task sorting, and cross-platform accessibility, TaskVault empowers you to effortlessly prioritize and accomplish your goals. Collaborate with others, track your progress, and gain valuable insights into your productivity. TaskVault is not just a todo list app; it's your personal fortress for productivity, helping you conquer tasks and unlock your full potential. Welcome to a smarter way of managing your tasks with TaskVault!";
        }
    }

    updateTextBasedOnWidth();

    window.addEventListener('resize', updateTextBasedOnWidth);
    return (
        <div className={Styles.container}>
            <div className={Styles.navbar}>
                <header className={Styles.header} >
                    <Link to="/">TaskVault</Link>
                </header>
                <div>
                    <button className={Styles.noti_btn}>
                        <svg viewBox="0 0 448 512" className={Styles.bell}><path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path></svg>
                    </button>
                </div>
            </div>
            <center className={Styles.center}>
                <div className={Styles.left}>
                    <h1>Task Vault</h1>
                    <p id='dynamicText'>
                       TaskVault is your essential task management solution, offering a secure platform for streamlined organization. With a user-friendly interface, collaborative features, and goal tracking, TaskVault empowers you to efficiently prioritize and achieve objectives. More than a to-do list app, it's your key to enhanced productivity</p>
                    <Link className={Styles.button} to='/addtodo' >
                        <span className={Styles.buttonContent}>Click here</span>
                    </Link>
                </div>
            </center>
            <footer className={Styles.background}>
                <span className={Styles.socialMediaButtons}>
                    <span className={Styles.socialMediaButton}>
                        <Link to="/">
                            <img
                                alt="Instagram"
                                src={insta_img}
                            />
                        </Link>
                    </span>
                    <span className={Styles.socialMediaButton}>
                        <Link to="/">
                            <img
                                alt="Twitter"
                                src={twitter_img}
                            />
                        </Link>
                    </span>
                    <span className={Styles.socialMediaButton}>
                        <Link to="/">
                            <img
                                alt="Youtube"
                                src={youtube_img}
                            />
                        </Link>
                    </span>
                    <span className={Styles.socialMediaButton}>
                        <Link to="https://www.linkedin.com/in/mriganka-sarma-987317231" target='_blank'> <img
                            alt="LinkedIn"
                            src={linkedin_img}
                        /></Link>

                    </span>
                </span>
            </footer>

        </div>
    )
}

export default Home
