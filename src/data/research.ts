export interface RelatedProject {
  title: string;
  description: string;
  link: string;
}

export interface ResearchArea {
  slug: string;
  title: string;
  summary: string;
  overview: string[];
  myFocus: string[];
  currentWork: string[];
  relatedProjects: RelatedProject[];
  currentProgress: string[];
  researchQuestions: string[];
  futureDirection: string[];
}

export interface ResearchArticle {
  slug: string;
  title: string;
  summary: string;
  content: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    slug: 'intelligent-virtual-agents',
    title: 'Intelligent Virtual Agents and Human–AI Interaction',
    summary:
      'AI-driven virtual agents that interact with humans using speech, perception, and contextual understanding inside digital or augmented environments.',
    overview: [
      'Intelligent virtual agents are AI-driven digital characters capable of interacting with humans through speech, perception, and contextual understanding. Unlike traditional chatbots, these agents operate within spatial environments such as virtual or augmented reality, enabling more natural human–AI interaction.',
    ],
    myFocus: [
      'Exploring how intelligent agents can perceive user context in real time.',
      'Studying how agents can maintain memory across interactions instead of treating every request in isolation.',
      'Designing agents that operate naturally within immersive digital environments rather than only in text chat windows.',
    ],
    currentWork: [
      'Developing interactive virtual AI assistants capable of real-time dialogue.',
      'Integrating perception systems to detect and react to user engagement.',
      'Studying multi-agent interaction patterns in immersive environments.',
    ],
    relatedProjects: [
      {
        title: 'SOFIA – 3D Intelligent Virtual Agent',
        description:
          'Virtual AI assistant capable of interacting with users through speech, vision, and contextual memory.',
        link: '/projects/SOFIA',
      },
    ],
    currentProgress: [
      'Prototype virtual AI assistants tested in controlled environments.',
      'Early experiments with contextual memory in agents.',
      'Initial testing of interaction patterns in augmented or simulated environments.',
    ],
    researchQuestions: [
      'How can intelligent agents maintain consistent behavior across long interactions?',
      'How can multiple agents coordinate actions within the same environment?',
      'How can agents understand and respond to human engagement in real time?',
    ],
    futureDirection: [
      'Future work will explore large-scale environments where multiple intelligent agents and humans interact within shared digital spaces such as digital twins.',
    ],
  },
  {
    slug: 'immersive-digital-environments',
    title: 'Immersive Digital Environments and Digital Twins',
    summary:
      'Research on reconstructing real-world environments as immersive digital twins for simulation, analysis, and AI-supported interaction.',
    overview: [
      'Immersive digital environments are interactive virtual spaces where users can explore, interact, and collaborate within simulated or reconstructed worlds.',
      'Advances in computer vision and machine learning have made it possible to recreate real-world locations as detailed digital environments using visual data such as images and videos. These digital representations are often referred to as digital twins, which act as virtual counterparts of physical environments.',
      'Digital twins allow real-world locations to be explored, simulated, and analysed in a virtual space and are increasingly used in scenarios such as training simulations, virtual tourism, urban planning, and collaborative digital workspaces.',
    ],
    myFocus: [
      'Transforming real-world environments into interactive digital spaces that can support human interaction and intelligent agents.',
      'Processing and reconstructing visual data so that environments remain stable, coherent, and suitable for simulation and AI-driven interaction.',
      'Developing scene-preparation workflows that reduce artefacts such as moving objects or visual noise that would otherwise harm the quality of reconstructed environments.',
    ],
    currentWork: [
      'Exploring methods for reconstructing real-world locations as immersive digital environments using computer vision and neural scene reconstruction techniques.',
      'Capturing and preparing large collections of images from physical environments in order to generate interactive three-dimensional scenes.',
      'Focusing on scene preprocessing, including the removal of dynamic elements and reduction of visual noise, to produce cleaner environments for simulation.',
      'Investigating how the resulting digital environments can act as shared spaces for humans and intelligent agents.',
    ],
    relatedProjects: [],
    currentProgress: [
      'Conducted experiments on reconstructing real-world environments using visual datasets.',
      'Continuing to develop preprocessing methods for removing dynamic objects and visual noise from captured scenes.',
      'Currently generating and refining prototype digital environments that can be explored interactively.',
      'Began investigating how such environments can support intelligent virtual agents.',
    ],
    researchQuestions: [
      'How can real-world environments be reconstructed accurately using visual data?',
      'How can dynamic objects and environmental noise be removed or reduced during scene reconstruction?',
      'How can reconstructed environments support interaction between humans and intelligent agents?',
      'How can digital twins be used as platforms for simulation and AI interaction?',
    ],
    futureDirection: [
      'Developing digital environments that can act as shared interaction spaces for both humans and intelligent systems.',
      'Combining digital twins with intelligent agents to support applications in education, simulation, training, and collaborative digital experiences.',
      'Moving toward interactive digital environments where AI systems and humans can operate together in a coherent and responsive virtual space.',
    ],
  },
  {
    slug: 'generative-ai-for-engineering-systems',
    title: 'Generative AI for Engineering Systems',
    summary: 'This research area is planned but not yet written up.',
    overview: [
      'This research area will focus on how generative AI can support engineering analysis, design exploration, and decision-making.',
      'The detailed write-up for this area is not yet available.',
    ],
    myFocus: ['To be updated.'],
    currentWork: ['To be updated.'],
    relatedProjects: [],
    currentProgress: ['To be updated.'],
    researchQuestions: ['To be updated.'],
    futureDirection: ['To be updated.'],
  },
];

export const researchArticles: ResearchArticle[] = [];

export const getResearchAreaBySlug = (slug: string): ResearchArea | undefined =>
  researchAreas.find(area => area.slug === slug);

export const getArticleBySlug = (slug: string): ResearchArticle | undefined =>
  researchArticles.find(article => article.slug === slug);
