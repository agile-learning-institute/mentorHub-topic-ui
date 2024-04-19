export const mockCategories = [
  "Foundations of ITSM",
  "Design and Development",
  "Infrastructure and Operations",
  "Networking and Security",
  "Development Tools and Practices",
  "Data Management",
  "Continuous Integration and Deployment",
  "Monitoring and Performance",
];

export const mockPaths = [
  "Odin",
  "EngineerKit",
  "SRE Speciality",
  "Data Specialty",
  "AWS Cloud Hosting",
  "Salesforce",
];

export const mockMastery = [
  "Candidate",
  "Apprentice",
  "Resident",
  "Master",
  "Distinguished",
];

export const mockSpecialty = [
  "Generalist",
  "UI/UX Engineer",
  "API Engineer",
  "Data Engineer",
  "SRE Engineer",
];

export const mockSkills = [
  "Generalist",
  "UI/UX Engineer",
  "API Engineer",
  "Data Engineer",
  "SRE Engineer",
];

export const odinSubpaths = [
  "Foundations",
  "Full Stack Ruby on Rails",
  "Full Stack JavaScript",
];

export const engineerKitSubpaths = [
  "Architecture",
  "Automated Testing",
  "Clean Code",
  "Computing",
  "Craftsmanship",
  "Data",
  "Human Experience",
  "Infrastructure",
  "Internet",
  "Monitoring",
  "Operations",
  "Product Life Cycle",
  "Programming Languages",
  "Security",
  "Tooling",
];
export const mockSegments = [odinSubpaths, engineerKitSubpaths];

const mockTopics = [
  {
    Id: "1",
    Name: "Service Strategy",
    Status: "Active",
    Description:
      "Service strategy is a fundamental concept in ITSM that involves defining the approach and direction for delivering IT services to meet business goals.",
    Category: "Foundations of ITSM",
    Path: "EngineerKit",
    Subpath: ["Product Life Cycle", "Operations"],
    Sequence: "1",
    Skills: [
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-1",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-2",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-3",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
    ],
    Resources: [
      {
        Name: "Master of Project Academy",
        Status: "Active",
        Description:
          "ITSM Foundation Exams & ITSM Overview training from Master of Project Academy is designed to ensure that you clear the ITSM Foundation exams in the first attempt.",
        Duration: 60,
        Link: "https://masterofproject.com/p/itsm-foundation-exams",
        Skills: [{
            id: "BBBB00000000000000000002",
            name: "Skill-1",
        }],
        Tags: [],
      },
    ],
  },
  {
    Id: "2",
    Name: "ITIL Fundamentals",
    Status: "Active",
    Description:
      "An introduction to the ITIL framework and its core principles for effective IT service management.",
    Category: "Foundations of ITSM",
    Path: "EngineerKit",
    Subpath: ["Product Life Cycle", "Operations"],
    Sequence: "2",
    Skills: [
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-1",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
    ],
    Resources: [
      {
        Name: "ITIL 4 Foundation",
        Status: "Active",
        Description:
          "A comprehensive video course covering the fundamentals of ITIL 4 and preparing for the ITIL 4 Foundation certification exam.",
        Duration: 120,
        Link: "https://www.udemy.com/course/itil-4-foundation/",
        Skills: [],

        Tags: ["Video"],
      },
    ],
  },
  {
    Id: "3",
    Name: "Service Design Methodologies",
    Status: "Active",
    Description:
      "Explore various methodologies and approaches for designing and developing effective IT services aligned with business requirements.",
    Category: "Design and Development",
    Path: "EngineerKit",
    Subpath: ["Product Life Cycle"],
    Sequence: "3",
    Skills: [
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-1",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
    ],
    Resources: [
      {
        Name: "Service Design Best Practices",
        Status: "Active",
        Description:
          "A practical guide to implementing best practices for effective service design and development.",
        Duration: 240,
        Link: "https://www.oreilly.com/library/view/service-design-best/9780137058235/",
        Skills: [],

        Tags: ["Book"],
      },
    ],
  },
  {
    Id: "4",
    Name: "Network Fundamentals",
    Status: "Active",
    Description:
      "Learn the basics of computer networking, including protocols, topologies, and network components.",
    Category: "Networking and Security",
    Path: "EngineerKit",
    Subpath: ["Internet", "Monitoring", "Security"],
    Sequence: "4",
    Skills: [
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-1",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
    ],
    Resources: [
      {
        Name: "Computer Networks",
        Status: "Active",
        Description:
          "A comprehensive textbook covering the fundamentals of computer networks and data communication.",
        Duration: 480,
        Link: "https://www.amazon.com/Computer-Networks-Andrew-S-Tanenbaum/dp/0132126958",
        Skills: [],

        Tags: ["Book"],
      },
    ],
  },
  {
    Id: "5",
    Name: "Cyber Security Essentials",
    Status: "Active",
    Description:
      "Explore the fundamental concepts and practices of cyber security to ensure the protection of IT systems and data.",
    Category: "Networking and Security",
    Path: "EngineerKit",
    Subpath: ["Security"],
    Sequence: "5",
    Skills: [
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-1",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
    ],
    Resources: [
      {
        Name: "Cybersecurity for Beginners",
        Status: "Active",
        Description:
          "A beginner-friendly course introducing the fundamentals of cybersecurity and best practices.",
        Duration: 120,
        Link: "https://www.edx.org/course/cybersecurity-for-beginners",
        Skills: [],

        Tags: ["Video", "Interactive"],
      },
    ],
  },
  {
    Id: "6",
    Name: "Virtualization Technologies",
    Status: "Active",
    Description:
      "Explore virtualization technologies that allow for efficient resource utilization and flexibility in IT operations.",
    Category: "Infrastructure and Operations",
    Path: "EngineerKit",
    Subpath: ["Computing"],
    Sequence: "6",
    Skills: [
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-1",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
    ],
    Resources: [
      {
        Name: "VMware vSphere Essentials",
        Status: "Active",
        Description:
          "A comprehensive guide to VMware's virtualization platform, covering installation, configuration, and management.",
        Duration: 360,
        Link: "https://www.vmware.com/education-services/vmware-vsphere-icm.html",
        Skills: [],

        Tags: ["Video", "Interactive"],
      },
    ],
  },
  {
    Id: "7",
    Name: "Cloud Computing Essentials",
    Status: "Active",
    Description:
      "Understand the fundamentals of cloud computing, including cloud deployment models, services, and best practices.",
    Category: "Infrastructure and Operations",
    Path: "EngineerKit",
    Subpath: ["Architecture"],
    Sequence: "7",
    Skills: [
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-1",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
    ],
    Resources: [
      {
        Name: "AWS Certified Cloud Practitioner",
        Status: "Active",
        Description:
          "A foundational course covering the basics of AWS Cloud services and the AWS Cloud Practitioner certification.",
        Duration: 180,
        Link: "https://www.aws.training/Details/Curriculum?id=27076",
        Skills: [],

        Tags: ["Video", "Exam"],
      },
    ],
  },
  {
    Id: "8",
    Name: "Containerization with Docker",
    Status: "Active",
    Description:
      "Learn how to containerize applications using Docker for portability, scalability, and efficient resource utilization.",
    Category: "Infrastructure and Operations",
    Path: "EngineerKit",
    Subpath: ["Architecture"],
    Sequence: "8",
    Skills: [
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-1",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
    ],
    Resources: [
      {
        Name: "Docker Mastery",
        Status: "Active",
        Description:
          "A comprehensive course covering Docker from the ground up, including swarm mode and Docker Compose.",
        Duration: 240,
        Link: "https://www.udemy.com/course/docker-mastery/",
        Skills: [],

        Tags: ["Video", "Interactive"],
      },
    ],
  },
  {
    Id: "9",
    Name: "Git and Version Control",
    Status: "Active",
    Description:
      "Learn how to effectively manage and collaborate on code using Git and version control systems.",
    Category: "Development Tools and Practices",
    Path: "Odin",
    Subpath: ["Foundations", "Full Stack JavaScript"],
    Sequence: "9",
    Skills: [
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-1",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
    ],
    Resources: [
      {
        Name: "Pro Git",
        Status: "Active",
        Description:
          "A comprehensive book on Git, covering both the fundamentals and advanced topics.",
        Duration: 480,
        Link: "https://git-scm.com/book/en/v2",
        Skills: [],

        Tags: ["Book", "Reference"],
      },
    ],
  },
  {
    Id: "10",
    Name: "SQL and Query Optimization",
    Status: "Active",
    Description:
      "Develop proficiency in writing efficient SQL queries and optimizing database performance.",
    Category: "Data Management",
    Path: "EngineerKit",
    Subpath: ["Data"],
    Sequence: "10",
    Skills: [
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-1",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
    ],
    Resources: [
      {
        Name: "SQL Performance Explained",
        Status: "Active",
        Description:
          "A comprehensive guide to SQL performance optimization, covering indexing, execution plans, and more.",
        Duration: 360,
        Link: "https://www.amazon.com/SQL-Performance-Explained-Everything-Developers/dp/3950307825",
        Skills: [],

        Tags: ["Book"],
      },
    ],
  },
  {
    Id: "11",
    Name: "Automated Testing Frameworks",
    Status: "Active",
    Description:
      "Explore various automated testing frameworks and techniques for ensuring software quality and reliability.",
    Category: "Development Tools and Practices",
    Path: "Odin",
    Subpath: ["Full Stack JavaScript"],
    Sequence: "11",
    Skills: [
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-1",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
    ],
    Resources: [
      {
        Name: "JavaScript Fundamentals",
        Status: "Active",
        Description:
          "A hands-on course covering the fundamentals of JUnit 5 for writing and running unit tests in Java.",
        Duration: 180,
        Link: "https://www.pluralsight.com/courses/junit-5-fundamentals",
        Skills: [],

        Tags: ["Video", "Interactive"],
      },
    ],
  },
  {
    Id: "12",
    Name: "Continuous Integration Strategies",
    Status: "Active",
    Description:
      "Learn best practices and strategies for implementing effective continuous integration pipelines.",
    Category: "Continuous Integration and Deployment",
    Path: "Odin",
    Subpath: ["Full Stack JavaScript"],
    Sequence: "12",
    Skills: [
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-1",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
    ],
    Resources: [
      {
        Name: "Continuous Integration with Jenkins",
        Status: "Active",
        Description:
          "A practical guide to setting up and using Jenkins for implementing continuous integration pipelines.",
        Duration: 240,
        Link: "https://www.packtpub.com/product/continuous-integration-with-jenkins/9781789138955",
        Skills: [],

        Tags: ["Book"],
      },
    ],
  },
  {
    Id: "13",
    Name: "Agile Development Practices",
    Status: "Active",
    Description:
      "Explore the principles and practices of Agile software development for delivering high-quality software efficiently.",
    Category: "Design and Development",
    Path: "EngineerKit",
    Subpath: ["Architecture"],
    Sequence: "13",
    Skills: [
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-1",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
    ],
    Resources: [
      {
        Name: "Agile Principles, Patterns, and Practices in C#",
        Status: "Active",
        Description:
          "A comprehensive guide to applying Agile principles, patterns, and practices in C# development.",
        Duration: 480,
        Link: "https://www.amazon.com/Agile-Principles-Patterns-Practices-Object-Oriented/dp/0131857258",
        Skills: [],

        Tags: ["Book"],
      },
    ],
  },
  {
    Id: "14",
    Name: "User Experience Design",
    Status: "Active",
    Description:
      "Learn principles and techniques for designing intuitive and engaging user experiences across different platforms and devices.",
    Category: "Design and Development",
    Path: "EngineerKit",
    Subpath: ["Human Experience"],
    Sequence: "14",
    Skills: [
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-1",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
    ],
    Resources: [
      {
        Name: "The Design of Everyday Things",
        Status: "Active",
        Description:
          "A seminal work on user-centered design principles and the psychology of how people interact with everyday objects and interfaces.",
        Duration: 360,
        Link: "https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654",
        Skills: [],

        Tags: ["Book"],
      },
    ],
  },
  {
    Id: "15",
    Name: "Data Warehousing and Business Intelligence",
    Status: "Active",
    Description:
      "Explore data warehousing concepts and business intelligence tools for transforming data into actionable insights.",
    Category: "Data Management",
    Path: "EngineerKit",
    Subpath: ["Data"],
    Sequence: "15",
    Skills: [
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-1",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
    ],
    Resources: [
      {
        Name: "Data Warehousing Fundamentals",
        Status: "Active",
        Description:
          "A comprehensive course covering the fundamentals of data warehousing, including architecture, design, and implementation.",
        Duration: 240,
        Link: "https://www.pluralsight.com/courses/data-warehousing-fundamentals",
        Skills: [],

        Tags: ["Video", "Interactive"],
      },
    ],
  },
  {
    Id: "16",
    Name: "Big Data Technologies",
    Status: "Active",
    Description:
      "Explore various big data technologies and frameworks for processing and analyzing large-scale data sets.",
    Category: "Data Management",
    Path: "EngineerKit",
    Subpath: ["Data"],
    Sequence: "16",
    Skills: [
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-1",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
    ],
    Resources: [
      {
        Name: "Learning Spark",
        Status: "Active",
        Description:
          "A hands-on guide to mastering Apache Spark for large-scale data processing and machine learning.",
        Duration: 480,
        Link: "https://www.oreilly.com/library/view/learning-spark/9781785889899/",
        Skills: [],

        Tags: ["Book", "Interactive"],
      },
    ],
  },
  {
    Id: "17",
    Name: "NodeJS",
    Status: "Active",
    Description:
      "Learn Node.js, a JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable and high-performance server-side applications.",
    Category: "Design and Development",
    Path: "Odin",
    Subpath: ["Foundations", "Full Stack JavaScript"],
    Sequence: "",
    Skills: [
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-1",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
    ],
    Resources: [],
  },
  {
    Id: "18",
    Name: "React",
    Status: "Active",
    Description:
      "Explore React, a popular JavaScript library for building user interfaces and creating reusable UI components.",
    Category: "Design and Development",
    Path: "Odin",
    Subpath: ["Full Stack JavaScript"],
    Sequence: "",
    Skills: [
      {
        _id: {
          $oid: "BBBB00000000000000000002",
        },
        name: "Skill-1",
        status: "Active",
        description: "A Generalist skill for a Candidate Engineer",
        mastery: "Candidate",
        speciality: "Generalist",
        lastSaved: {
          atTime: { $date: "2/26/2024 18:17:58" },
          byUser: { $oid: 1 },
          fromIp: "192.168.1.2",
          correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
        },
      },
    ],
    Resources: [],
  },
];

export default mockTopics;
