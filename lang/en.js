// ---------- Navbar titles
const enNavbarData = {
  title: " Anna Gaw ",
  Home: "Home",
  experience: "Experience",
  research: "Research",
  portfolio: "Portfolio",
  contact: "Contact",
};

// ---------- Home page data
const enHomePageData = {
  name: " Anna Gaw ",
  jobTitle: " Research Technician ",
  home_title: "Home",
  home_content: `
  <div>
    <p> I am a research assistant at the University of Colorado in an evolutionary ecology lab focused on the impacts of a changing climate on plants. I am working on projects in vernal pools in California and alpine ecosystems in Colorado, studying (endangered) plants through seed bank, germination, and reciprocal transplant experiments. I am also working towards a certificate in Geographic Information Systems. I appreciate interdisciplinary work approaching ecology and conservation from multiple angles involving people and the planet.
    </p>
    <h2 class='title'> Main works </h2>
    <p> Areas of interest:  </p>
    <ul>
      <li> Research </li>
      <li> Geographic Information Systems </li>
      <li> Conservation </li>
    </ul>
  </div>
  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Experience",

  type_one_items: [
    {
      title: `Endangered Plants Research Technician`,
      company: `University of Colorado, Boulder`,
      abstract: `Conducted field work- collecting soil samples and seeds of two endangered vernal pool plant species; carry out seedbank and germination experiments including planning, troubleshooting, and managing students`,
      date: "September 2024 - present",
    },
    {
      title: `Farmers Market Employee`,
      company: `Ela Family Farms`,
      abstract: `Served customers; unload, organize, and sell 40+ varieties of fruit from a sustainable farm; worked well with team members`,
      date: "seasonal: 2024- present",
    },
    {
      title: `Wildlife Habitat Biologist`,
      company: `Bird Conservancy of the Rockies`,
      abstract: `- Created conservation plans and provided technical assistance for conservation of 28,000 acres of grassland habitat
- Conducted vegetation surveys, soil health assessments, habitat assessments, and learned to identify 75+ plant species
- Managed multiple projects and deadlines; maintained inventory records
- Engaged in community outreach such as event tables, planning and leading workshops, guest teaching classes
- Sustained partnerships with non-profi t, federal, state, private organizations, and individuals
- Provided excellent customer service, protected confi dential client information
- Served as a member of the Diversity, Equity, Inclusion, and Accessibility Committee`,
      date: "April 2023 - August 2024",
    },
  ],

  type_two_title: "Education",
  type_two_items: [
    {
      title: `Master of Science: Biodiversity and Global Change`,
      school: `University College London`,
      date: "2023",
    },
    {
      title: `Graduate Certificate: Geographic Information Systems`,
      school: `University of Colorado, Denver`,
      date: "2025",
    },
    {
      title: `Bachelor of Arts: Ecology and Evolutionary Biology`,
      school: `University of Colorado, Boulder, (transferred from Colorado College)`,
      date: "2021",
    },  
  ],

};

// ---------- Research page data
const enResearchPageData = {
  title: "Research",
  content: `
    <div class='research_content'>
        <p> My research goal is to combine the three major sub-fields of the Computational Social Science, including Social Media Data Analysis, Network Analysis, and Agent-based Modeling, to study various social science problems. Below you can find a summary of my past and current projects.</p>
        <br />
        <h4 style="font-size: 1.1rem "> Identifying and Characterizing US Domestic Ideological Extremists </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
        <img src='../files/images/research.png' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat <br /> imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet <br /> lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
    </div>
  `,
};

// ---------- Jobs page data
const enJobsPageData = {
  title: "Jobs",
  items: [
    {
      title: `Job title`,
      company: "Company name",
      startData: "20 April 2019",
      endDate: "20 April 2022",
      location: "Berlin",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.",
      achievements: ["achievement 1", "achievement 2", "achievement 3"],
    },
    {
      title: `Job title`,
      company: "Company name",
      startData: "20 April 2019",
      endDate: "",
      location: "Berlin",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.",
      achievements: ["achievement 1", "achievement 2"],
    },
  ],
};
