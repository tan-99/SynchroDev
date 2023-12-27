import React, {useEffect} from 'react';
import Blob2 from "./Blob2";
import {type} from "@testing-library/user-event/dist/type";

function TextImage2() {

    useEffect(() => {
        const dynamicText = document.querySelector(('h3 span'));
        const words = ["NodeJS", "ReactJS", "Python", "MongoDB","Everyone <3"]
        const colors = ["#37ab32", "#157acc", "#ffea02", "#5cde13","#ff0050"]
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeEffect = () =>{
            const currentWord = words[wordIndex];
            const currentColor = colors[wordIndex];
            const currentChar = currentWord.substring(0, charIndex);
            dynamicText.textContent = currentChar;
            dynamicText.style.color = currentColor;
            dynamicText.classList.add('stop-blinking')

            if(!isDeleting && charIndex < currentWord.length){
                charIndex++
                setTimeout((typeEffect), 100)

            }else if(isDeleting && charIndex>0){
                charIndex--
                setTimeout(typeEffect, 100)
            }else{
                isDeleting = !isDeleting
                dynamicText.classList.remove('stop-blinking')
                wordIndex = !isDeleting ? (wordIndex +1) % words.length : wordIndex
                setTimeout(typeEffect, 500)
            }

        }
        typeEffect()
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                console.log(entry)
                if(entry.isIntersecting){
                    entry.target.classList.add('show');
                }else{
                    entry.target.classList.remove('show');
                }
            })
        })

        const domain = document.querySelectorAll('.inner');
        domain.forEach((element)=> observer.observe(element))


    }, []);

    return (
        <div className="outer outer-2 " >

            <img src="https://www.spec-india.com/wp-content/uploads/2022/10/Hire-Dedicated-Developer-Banner.png"/>
            <div className="inner inner-2">
                <h2>Programming is for Everyone. SynchroDev is for Everyone.</h2>
                <h3>Made for <span></span> Devs</h3>
                <button className="button-29">Our Mission</button>

            </div>

        </div>
    );
}

export default TextImage2;