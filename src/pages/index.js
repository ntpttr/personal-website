import React from "react"

export default function Home() {
  return (
    <div>
      <div className="body">
        <h1>Hi, I'm <strong>Nate Potter</strong>. I'm a Seattle-based software developer, musician, and baseball enjoyer.</h1>
        <p>Currently, I'm a backend-focused full-stack engineer at Duolingo building out new subjects like <a href="https://blog.duolingo.com/music-course/">Music</a>, <a href="https://blog.duolingo.com/duolingo-launches-math-app/">Math</a>, and <a href="https://duolingo.com/abc">Duolingo ABC</a> — an app to teach children to read.</p>
        <p>Previously, I worked at Microsoft on <a href="https://support.microsoft.com/en-us/office/learn-about-groups-in-outlook-b565caa1-5c40-40ef-9915-60fdb2d97fa2">Microsoft 365 Groups</a>, and at Intel contributing to cloud computing open source projects including <a href="https://www.openstack.org/">OpenStack</a>.</p>
      </div>
      <div className="footer">
        <a href="https://www.linkedin.com/in/nate-potter/"><svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></a>
        <a href="mailto:ntpttr@outlook.com"><svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></a>
      </div>
    </div>
  )
}

export function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Nate Potter</title>
      <link rel="canonical" href="http://ntpttr.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200,800&display=swap" rel="stylesheet" />
    </>
  )
}
