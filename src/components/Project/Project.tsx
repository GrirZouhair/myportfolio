import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/seg-fault0/minishell" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                </div>
            </header>
            <div className="body">
              <h3>Minishell</h3>
              <p>
                A minimalist Unix shell implementation featuring command execution, built-in commands (echo, cd, pwd, export, unset, env, exit), pipes, redirections, environment variables, and signal handling.
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>C</li> <li>Unix</li> <li>Shell</li> <li>Process Management</li> </ul> </footer>
          </div>
        </ScrollAnimation>


      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/GrirZouhair/cub3d" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                </div>
            </header>
            <div className="body">
              <h3>Cub3D</h3>
              <p>
                A raycasting game engine inspired by Wolfenstein 3D. Renders a first-person 3D maze from a 2D map using the DDA algorithm, featuring textured walls, player movement, and collision detection.
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>C</li> <li>Raycasting</li> <li>MiniLibX</li> <li>3D Graphics</li> </ul> </footer>
          </div>
        </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/GrirZouhair/Philosophers" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                </div>
            </header>
            <div className="body">
              <h3>Philosophers</h3>
              <p>
                A multithreading simulation of the classic Dining Philosophers Problem. Implements thread management, mutex locks for resource protection, and deadlock prevention strategies to keep philosophers eating without starvation.
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>C</li> <li>Threads</li> <li>Mutex</li> <li>Concurrency</li> </ul> </footer>
          </div>
        </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/GrirZouhair/so_long" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                </div>
            </header>
            <div className="body">
              <h3>So_long</h3>
              <p>
                A 2D game built with the MiniLibX graphics library. The player must collect all items on the map and reach the exit while avoiding obstacles. Features sprite rendering, event handling, and map parsing.
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>C</li> <li>MiniLibX</li> <li>Game Dev</li> <li>Graphics</li> </ul> </footer>
          </div>
        </ScrollAnimation>


      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/GrirZouhair/push_swap" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                </div>
            </header>
            <div className="body">
              <h3>Push_swap</h3>
              <p>
                A sorting algorithm project that sorts a stack of integers using two stacks and a limited set of operations. 
                The challenge is to achieve the lowest number of moves possible using optimized algorithms like Turk or Radix sort.
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>C</li> <li>Algorithms</li> <li>Data Structures</li> <li>Sorting</li> </ul> </footer>
          </div>
        </ScrollAnimation>







      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/GrirZouhair/minitalk" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                {/* <a href="https://be-more-organized.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>  */}
                </div>
            </header>
            <div className="body">
              <h3>Minitalk</h3>
              <p>
                
              Implemented a client-server communication program in C using UNIX
        signals. The client sends messages bit by bit using SIGUSR1 and SIGUSR2,
        while the server decodes and displays the message in real time. This
        project strengthened my understanding of inter-process communication,
        signal handling, and low-level programming.
                </p>
            </div>
            <footer> <ul className="tech-list"> <li>ReactJs</li> <li>Typescript</li> <li>Vite</li> <li>Laravel</li> </ul> </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/GrirZouhair/TaskManager" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://be-more-organized.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Task Manager Web App</h3>
              <p>
                Developed a task manager web app with a collaborator using ReactJS, Laravel, TypeScript, and Vite. The app features task creation, editing, and deletion with real-time updates and a responsive, user-friendly interface. Leveraged TypeScript for type safety and Vite for optimized performance.</p>
            </div>
            <footer> <ul className="tech-list"> <li>ReactJs</li> <li>Typescript</li> <li>Vite</li> <li>Laravel</li> </ul> </footer>
          </div>
        </ScrollAnimation>
      

      </div>
    </Container>
  );
}