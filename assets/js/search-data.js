// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A collection of cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-the-website-is-online-sparkles-smile",
          title: 'The website is online :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-new-optica-paper-on-modeling-off-axis-diffraction-with-the-least-sampling-angular-spectrum-method-is-online",
          title: 'New Optica paper on “Modeling Off-Axis Diffraction with the Least-Sampling Angular Spectrum Method”...',
          description: "",
          section: "News",},{id: "news-i-am-presenting-in-cosi-2023-boston-on-learned-large-fov-imaging-with-efficient-shift-variant-wave-optics-modeling",
          title: 'I am presenting in COSI 2023, Boston, on “Learned Large FoV Imaging with...',
          description: "",
          section: "News",},{id: "news-i-am-presenting-in-aopc-2024-beijing-on-modeling-off-axis-diffraction-with-least-sampling-angular-spectrum-method",
          title: 'I am presenting in AOPC 2024, Beijing, on “Modeling off-axis diffraction with least...',
          description: "",
          section: "News",},{id: "news-i-will-present-our-new-paper-in-iccp-21-23-jul-2025-toronto-on-learned-off-aperture-encoding-for-wide-field-of-view-rgbd-imaging",
          title: 'I will present our new paper in ICCP 21-23 Jul 2025, Toronto, on...',
          description: "",
          section: "News",},{id: "projects-light-field-rendering-on-3d-looking-glass-device-a-tutorial",
          title: 'Light Field Rendering on 3D Looking Glass Device - A Tutorial',
          description: "An end-to-end system taking as input pictures of holograms captured from different positions using a handheld device such as a mobile phone and display the reconstructed hologram video on a 3D looking glass holographic display device.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-physically-based-animation-amp-particle-systems",
          title: 'Physically Based Animation &amp;amp; Particle Systems',
          description: "Simulated tornatos, boid flocking behavior, spring mass system, and different ODE solvers based on WebGL.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-ray-tracing-amp-ray-marching",
          title: 'Ray Tracing &amp;amp; Ray Marching',
          description: "3D ray tracing and marching algorithms implemented with complex lighting, shapes and material settings based on WebGL.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-probe-data-analysis-for-road-slopes",
          title: 'Probe Data Analysis for Road Slopes',
          description: "Matching 3 million GPS points collected from different routes of driving to 0.2 million road links by Viterbi algorithm. Then calculate road slopes using matched data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-lane-marking-detection-from-3d-point-cloud",
          title: 'Lane Marking Detection from 3D Point Cloud',
          description: "Detecting the boundaries of Lane Markings from 430 thousand GPS points cloud.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-smear-detection",
          title: 'Smear Detection',
          description: "Detecting smear regions from tens of thousands of real industry images with lots of noise.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%61%6F%79%75.%77%65%69%39%37@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/whywww", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/haoyu-wei-b2781b138", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=yicaazkAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
