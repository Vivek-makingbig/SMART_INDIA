function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
gsap.registerPlugin(ScrollTrigger);
Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.makeMagnet(".disaster-card");
Shery.makeMagnet(".Mvp");
Shery.hoverWithMediaCircle(".hvr", { videos: ["./2.mp4"],});
