import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
  Resume
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [showResume, setShowResume] = useState<boolean>(false);

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    const handleShowResume = (show: boolean) => {
        setShowResume(show);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    };

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        
        // Listen for the showResume custom event
        const handleShowResumeEvent = () => {
            handleShowResume(true);
        };
        
        window.addEventListener('showResume', handleShowResumeEvent);
        
        return () => {
            window.removeEventListener('showResume', handleShowResumeEvent);
        };
    }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode, showResume}} modeChange={handleModeChange} toggleResume={handleShowResume}/>
        {showResume ? (
            <Resume />
        ) : (
            <FadeIn transitionDuration={700}>
                <Main/>
                <Expertise/>
                <Timeline/>
                <Project/>
                {/* <Contact/> */}
            </FadeIn>
        )}
        <Footer />
    </div>
    );
}

export default App;