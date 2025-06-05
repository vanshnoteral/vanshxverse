import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all elements with animation class
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    // Add staggered animation delay to project cards
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card, index) => {
      (card as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
}
