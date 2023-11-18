// Mảng kỹ năng cho Phát triển Phần mềm
const skillsSoftwareDevelopment: string[] = [
  'HTML5',
  'CSS3',
  'Javascript',
  'Typescript',
  'React',
  'Angular',
  'Vuejs',
  'Nuxtjs',
  'Nestjs',
  'Quản lý Phiên bản: Git',
  'MongoDB',
  'Mysql',
  'Sql server',
  'PostgreSQL',
  'RESTful APIs',
  'Kiểm thử: Jest, Mocha, Selenium',
  'Trình quản lý Dự án và Gói phần mềm: npm, Yarn',
  'Biên dịch và Đóng gói: Webpack, Babel',
  'Kiến thức về An toàn Thông tin',
];

// Mảng công cụ cho Phát triển Phần mềm
const toolsSoftwareDevelopment: string[] = [
  'Trello',
  'Jira',
  'Slack',
  'Postman',
  'DevTools',
  'Git',
  'GitHub',
  'GitLab',
  'Figma',
  'MongoDB Compass',
  'MySQL Workbench',
  'Bitbucket',
  'Travis CI',
  'Công cụ Phân tích Mã nguồn: SonarQube',
  'Quản lý Gói phần mềm: npm, yarn',
];

// Mảng kỹ năng cho Quản lý Hệ thống
const skillsSystemAdministration: string[] = [
  'Hệ điều hành: Linux (Ubuntu, CentOS), Windows Server',
  'Công nghệ Đám mây: AWS, Azure, Google Cloud',
  'Docker và Containers: Docker, Kubernetes',
  'Công cụ Tự động hóa và Quản lý Cấu hình: Ansible, Puppet, Chef',
  'Quản lý Dự án và Điều phối: Agile, Scrum',
  'Kiểm thử và Giả lập Hệ thống: Selenium, JMeter',
  'Overseeing Công nghệ Thông tin',
  'Kiến thức về Bảo mật Hệ thống',
];

// Mảng công cụ cho Quản lý Hệ thống
const toolsSystemAdministration: string[] = [
  'Công cụ Đám mây và Quản lý Hạ tầng: AWS Console, Azure Portal, Google Cloud Console',
  'Công cụ Tự động hóa: Ansible, Puppet, Chef',
  'Containers và Orchestration: Docker, Kubernetes',
  'Công cụ Giám sát và Log: Prometheus, Grafana, ELK Stack',
  'Quản lý Phiên bản và Tự động Hóa: Git, Jenkins, Travis CI',
  'Công cụ Bảo mật: Nessus, Wireshark, Security Onion',
  'Công cụ Quản lý Cấu hình: Terraform',
  'Trình Quản lý Container: Kubernetes Dashboard',
];


export const skills: string[] = [
  ...skillsSoftwareDevelopment,
  ...skillsSystemAdministration
];

export const tools: string[] = [
  ...toolsSoftwareDevelopment,
  ...toolsSystemAdministration
];

