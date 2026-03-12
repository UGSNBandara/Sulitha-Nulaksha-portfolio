import type { ProjectDetail } from '@/data/projects';

const project: ProjectDetail = {
  slug: 'QuickRef',
  title: 'QuickRef URL PDF Referencer',
  description:
    'A streamlined tool to quickly upload PDFs or URLs, process them, and query their content effortlessly using advanced NLP and vector embeddings.',
  coverImage: '/projects/QuickRef/cover.png',
  tags: ['LangChain', 'Streamlit', 'Python', 'NVIDIA', 'FAISS'],
  links: [
    { type: 'github',    url: 'https://github.com/UGSNBandara/QuickRef' },
    { type: 'streamlit', url: 'https://quick-ref-aaoebeidu562vm8t6nruyx.streamlit.app/' },
  ],
  sections: [
    {
      emoji: '✨',
      title: 'Key Features',
      content: [
        {
          title: 'Document Processing',
          color: 'orange',
          points: ['Support for PDF documents and URLs', 'Efficient text extraction and processing'],
        },
        {
          title: 'Advanced NLP Pipeline',
          color: 'orange',
          points: [
            'NVIDIA BGE-M3 Embeddings for high-quality vector representations',
            'FAISS vector database for efficient similarity search',
            'NVIDIA Falcon-7B-Instruct model for accurate responses',
          ],
        },
        {
          title: 'Enhanced Usability',
          color: 'orange',
          points: [
            'Real-time query processing with smart handling of multiple input sources',
            'Clear display of responses with source citations',
          ],
        },
      ],
    },
    {
      emoji: '💻',
      title: 'Tech Stack',
      content: [
        {
          title: 'LangChain & Python',
          color: 'blue',
          points: [
            'UnstructuredURLLoader for web content extraction',
            'PyPDFLoader for PDF document processing',
            'RecursiveCharacterTextSplitter for intelligent text chunking',
            'RetrievalQAWithSourcesChain for context-aware responses',
          ],
        },
        {
          title: 'Streamlit Interface',
          color: 'blue',
          points: [
            'User-friendly web interface',
            'Easy document upload and URL input',
            'Real-time query processing and response display',
          ],
        },
      ],
    },
    {
      emoji: '🚀',
      title: 'Future Plans',
      items: [
        '📱 Mobile App: Creating a cross-platform mobile application for on-the-go document referencing',
      ],
    },
  ],
  gradient: { from: 'from-orange-500', to: 'to-red-600' },
  featured: true,
};

export default project;
