<template>
    <div class="container">
        <header> 
            <h1>Personal Profile Webpage</h1>  
        </header>
        <main>
          <section class="main-content">
            <div>
            <h2>About Me</h2>
            <p>Hello! My username is MarielleKloie, this is my personal profile web page.<br><br>I aspire to be an Information Technology Specialist, a position that can hone me into the best employee I can be, versatile and efficient enough to be showcased in the industry today. Being in a working environment will encourage me to be confident and true to myself.</p>
    
            </div>
            <div>
            <h2>Education / Achievements</h2>
            <ul class="a">
            <li>
              <h3>Asia Pacific College</h3>
              <p class="paragraph">College</p>
              <p class="paragraph">BS on Information Technology</p>
              <p class="paragraph">August 2023 – Current.</p>
              <p class="paragraph">Magallanes, Makati</p>
            </li>
            <li>
              <h3>Asia Pacific College</h3>
              <p class="paragraph">Senior High School</p>
              <p class="paragraph">August 2021 – June 2023.</p>
              <p class="paragraph">Magallanes, Makati</p>
            </li>
            <li>
              <h3>St. Theodore School Inc.</h3>
              <p class="paragraph">Junior High School</p>
              <p class="paragraph">June 2017 – March 2021</p>
              <p class="paragraph">Lower Bicutan, Taguig City</p>
            </li>
            </ul>
            </div>
    
            <div>
            <h2>Course</h2>
            <p>BSIT-MI, Bachelor of Science in Information Technology with specialization in Mobile and Internet Technologies</p>
            </div>  
    
            <div>
            <h2>IT Experience</h2>
            <ul class="a">
              <li>Knowledgeable in Mobile Programming in Android Studio</li>
              <li>Experience in developing User Interface</li>
            </ul>
            </div>
    
            <div>
            <h2>Hobbies & Interests</h2>
            <ul>
              <li>Reading manhuas, mangas, etc</li>
              <li>Watching different kinds of shows and movies</li>
              <li>Solving puzzles</li>
              <li>Digital and traditional drawing</li>
              <li>Travel and spend quality time with my family</li>
            </ul>
            </div>
            
            <div>
            <h2>Goals In Life / Dream</h2>
            <p>My goal in life is to finish and graduate college. I also aim to find a stable job to support myself and my family. I wish to have sufficient resources to build my own house and travel abroad in the future.</p>
            </div>  
            
            <div>
            <h4>Picture Gallery</h4>
            <figure class="gallery">
            <img style="display: block; -webkit-user-select: none; margin: auto; cursor: zoom-in; background-color: hsl(0, 0%, 90%); transition: background-color 300ms;" 
            src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/434020930_1612143012920404_5536001369734743984_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFpusV_6JVyaxws8ggG0-Bo624VRVXpZdTrbhVFVell1FAC2D5aeBtw1O23QgywZeUtoMXCJaY3s_SQZh7xXhes&_nc_ohc=x_KTkJh0awsQ7kNvgHRlQDm&_nc_oc=AdhDnpaYtuX8gIy1jm_LnOFCi5UXA7FBvBlSCeF0deNtC-M45UUnUoW4s3d0BqdOsNE&_nc_zt=23&_nc_ht=scontent.fmnl30-2.fna&_nc_gid=AMxW7YQ9KcK7FyQ3kcpE7NA&oh=00_AYC1OAbxZoRtAUhBr7Ahewf_FmENBQV7n9TeGyulTfo3vw&oe=678053FE" 
            width="533" height="300" alt="Gallery Image">
            </figure>
            </div>
          </section>
          <aside class="sidebar">
            </aside>
        </main>
      </div>
    </template>
    
    <script>
    export default {
        name: 'App',
    };
    </script>
    
    <style>
    body {
      background: linear-gradient(to bottom, #DEC6FF, #AE74FF);
      margin: 0;
      font-family: "Baskerville", serif;
      min-height: 100vh;
      padding: 0;
    }
    
    h1, h2, h3, h4, p, li, .a, .b {
      font-family: "Baskerville", serif;
    }    
    
    h1 {
      border-radius: 2px;
      text-align: center;
      padding: 40px;
      margin: 30px 0 0 40px;
      font-size: 26px;
      background: #4a2a80;
      color: #e2caff;
      margin: 0;
      font-size: 2em;
    }
    
    h2 {
      border-radius: 2px;
      margin: 30px 0 0 100px;
      text-align: left;
      font-size: 26px;
      color: #4a2a80;
    }
    
    h3 {
      padding: 5px;
      margin: 10px 0 0;
      text-align: left;
      font-size: 20px;
      color: #4a2a80;
    }
    
    h4 {
      border-radius: 2px;
      padding: 15px;
      text-align: center;
      font-size: 26px;
      color: #4a2a80;
    }
    
    p {
      font-size: 20px;
      text-align: justify;
      margin: 20px 125px 15px 140px;
      line-height: 1.5;
      color: #4a2a80;
    }

    .c{
        font-family: "Baskerville", serif;
    }
    
    .paragraph {
      font-family: "Baskerville", serif;
      font-size: 20px;
      text-align: left;
      margin: 4px 15px 12px;
      line-height: 15px;
      color: #4a2a80;
    }
    
    ul{
      list-style-type: square;
    }
    
    li {
      margin: 10px 0px 15px 140px;
      font-size: 20px;
      text-align: left;
      color: #4a2a80;
    }
    
    .gallery-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      padding: 18px;
    }
    
    .gallery {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
      border-radius: 10px;
      overflow: hidden;
      color: #4a2a80;
      margin-bottom: 100px;
    }
    
    .gallery img {
      object-fit: cover;
      border-radius: 20px;
    }
    </style>