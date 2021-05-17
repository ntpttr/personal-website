import React from "react"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Nate Potter</title>
          <link rel="canonical" href="http://ntpttr.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200,800&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="body">
        <h1>Hi, I'm <strong>Nate Potter</strong>. I'm a Seattle-based software developer, musician, and baseball enjoyer.</h1>
        <p>Currently, I'm a full-stack (but focused mainly on the backend) engineer at Duolingo building <a href="https://duolingo.com/abc">Duolingo ABC</a>, an app to teach children to read.</p>
        <p>Previously, I've worked at Microsoft helping to empower collaboration via <a href="https://support.microsoft.com/en-us/topic/learn-about-microsoft-365-groups-b565caa1-5c40-40ef-9915-60fdb2d97fa2">Microsoft 365 Groups</a>, and at 
            Intel contributing to cloud computing-related open source projects including <a href="https://www.openstack.org/">OpenStack</a>.</p>
      </div>
      <div className="footer">
        <a href="https://twitter.com/ntpttr"><svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
        <a href="https://www.linkedin.com/in/nate-potter/"><svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></a>
        <a href="mailto:ntpttr@outlook.com"><svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></a>
      </div>
    </div>
  )
}
