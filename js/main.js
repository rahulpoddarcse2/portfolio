const CONTENT = {
  profile: {
    tagline:
      "I build the pipelines that ship code — from a git push to a running container, with nothing manual in between."
  },
  about: {
    paragraphs: [
      "I'm a BCA graduate specializing in Cloud Data Engineering, currently working as a DevOps Consultant where I work daily with AWS, Docker, Jenkins, GitHub Actions, Terraform, Prometheus and Grafana under senior engineers.",
      "What pulled me into this field was watching a deployment go from a 20-step checklist to a single git push. I like the discipline of infrastructure-as-code and the immediate feedback loop of CI/CD — you know within minutes whether a change works.",
      "This site is a static build — the pipeline demo above runs entirely in your browser to illustrate the flow. The real, backend-driven version of that pipeline lives in the CI/CD project below."
    ]
  },
  skills: [
    { category: "Cloud Platforms", items: ["AWS (EC2, S3)", "Azure", "GCP"] },
    { category: "Containers & Orchestration", items: ["Docker", "Docker Compose", "Kubernetes"] },
    { category: "CI/CD & Infrastructure", items: ["GitHub Actions", "Jenkins", "Terraform"] },
    { category: "Monitoring", items: ["Prometheus", "Grafana"] },
    { category: "Languages", items: ["Python", "Node.js", "Shell scripting"] }
  ],
  experience: [
    {
      role: "DevOps Consultant",
      org: "DevOps Insider",
      period: "May 2026 — Present",
      points: [
        "Work with AWS EC2 and S3, Docker, Jenkins, GitHub Actions, Terraform, Prometheus and Grafana under senior engineer guidance.",
        "Support day-to-day pipeline maintenance and infrastructure tasks across the team's projects."
      ]
    }
  ],
  projects: [
    {
      id: "cicd-pipeline",
      name: "CI/CD Pipeline for a Node.js App",
      featured: true,
      stack: ["Node.js", "Docker", "GitHub Actions", "AWS EC2"],
      summary: "A complete push-to-deploy pipeline: every commit is linted, tested, containerized and shipped to an EC2 instance with no manual steps.",
      details: "GitHub Actions runs the test suite on every push, builds a Docker image, and deploys it to an EC2 host. Built to understand the full path code takes from a laptop to production."
    },
    {
      id: "pr-preview-envs",
      name: "Automated PR Preview Environments",
      featured: false,
      stack: ["Terraform", "GitHub Actions", "AWS", "Azure"],
      summary: "Every open pull request gets its own short-lived preview environment, provisioned automatically and torn down on merge.",
      details: "Terraform provisions the infrastructure and GitHub Actions triggers it on PR open/close, so reviewers can click into a live environment instead of reading a diff."
    },
    {
      id: "docker-task-manager",
      name: "Dockerized Task Manager",
      featured: false,
      stack: ["Docker Compose", "Nginx"],
      summary: "A multi-container task manager — app, reverse proxy and networking all defined and orchestrated with Docker Compose.",
      details: "Nginx sits in front as a reverse proxy, routing to the app container. Used this to get comfortable with multi-container networking before doing it at work."
    }
  ],
  certifications: [
    "Azure Data Fundamentals",
    "React",
    "IBM SkillsBuild AI Fundamentals",
    "Docker (Coursera)",
    "Kubernetes (Coursera)",
    "Jenkins (Coursera)",
    "Terraform Specialist (Udemy)"
  ],
  contact: {
    email: "rahulpoddarcse2@gmail.com",
    linkedin: "https://www.linkedin.com/in/rahul-poddar-devops",
    github: "https://github.com/rahulpoddarcse2"
  },
  pipelineStages: [
    { id: "lint", label: "Lint & unit tests", durationMs: 700 },
    { id: "build", label: "Build Docker image", durationMs: 1000 },
    { id: "push", label: "Push to registry", durationMs: 600 },
    { id: "deploy", label: "Deploy to EC2", durationMs: 850 },
    { id: "health", label: "Health check", durationMs: 500 }
  ]
};

/* ---------- Mobile nav ---------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

/* ---------- Scroll-spy active nav link ---------- */
const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");
const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navAnchors.forEach((a) => a.classList.toggle("active", a.dataset.section === id));
    });
  },
  { rootMargin: "-40% 0px -50% 0px" }
);
sections.forEach((s) => spyObserver.observe(s));

/* ---------- Render from local content (stands in for the real /api/content call) ---------- */
function renderAll() {
  document.getElementById("heroTagline").textContent = CONTENT.profile.tagline;
  renderAbout(CONTENT.about.paragraphs);
  renderSkills(CONTENT.skills);
  renderExperience(CONTENT.experience);
  renderProjects(CONTENT.projects);
  renderCerts(CONTENT.certifications);
  renderContactLinks(CONTENT.contact);
  setupPipeline(CONTENT.pipelineStages);
}

function renderContactLinks(contact) {
  const icons = {
    email: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="m4 6 8 7 8-7"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M8 11v5M8 8v.01M12 16v-5m0 0c0-1.5 1-2 2.5-2S17 9.5 17 11v5"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>`
  };
  const items = [
    { key: "email", label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { key: "linkedin", label: "LinkedIn", value: contact.linkedin.replace(/^https?:\/\//, ""), href: contact.linkedin },
    { key: "github", label: "GitHub", value: contact.github.replace(/^https?:\/\//, ""), href: contact.github }
  ];
  document.getElementById("contactLinks").innerHTML = items
    .map(
      (item) => `
      <a class="contact-link glass" href="${item.href}" target="_blank" rel="noopener noreferrer">
        <span class="contact-link-icon">${icons[item.key]}</span>
        <span class="contact-link-text">
          <span class="contact-link-label">${item.label}</span>
          <span class="contact-link-value">${escapeHtml(item.value)}</span>
        </span>
      </a>`
    )
    .join("");
}

function renderAbout(paragraphs) {
  document.getElementById("aboutParagraphs").innerHTML = paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
}

function renderSkills(skillGroups) {
  document.getElementById("skillsGrid").innerHTML = skillGroups
    .map(
      (group) => `
      <div class="skill-card glass">
        <h3>${escapeHtml(group.category)}</h3>
        <div class="skill-chip-list">
          ${group.items.map((item) => `<span class="skill-chip">${escapeHtml(item)}</span>`).join("")}
        </div>
      </div>`
    )
    .join("");
}

function renderExperience(entries) {
  document.getElementById("experienceList").innerHTML = entries
    .map(
      (e) => `
      <div class="exp-card glass">
        <div class="exp-role">${escapeHtml(e.role)}</div>
        <div class="exp-org">${escapeHtml(e.org)}</div>
        <div class="exp-period">${escapeHtml(e.period)}</div>
        <ul class="exp-points">${e.points.map((p) => `<li>${escapeHtml(p)}</li>`).join("")}</ul>
      </div>`
    )
    .join("");
}

function renderProjects(projects) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const featuredHtml = featured
    .map(
      (p) => `
      <div class="project-card featured glass">
        <div>
          <span class="featured-badge">Featured</span>
          <div class="project-name">${escapeHtml(p.name)}</div>
          <p class="project-summary">${escapeHtml(p.summary)}</p>
          <p class="project-details">${escapeHtml(p.details)}</p>
          <div class="project-stack">${p.stack.map((s) => `<span>${escapeHtml(s)}</span>`).join("")}</div>
        </div>
        ${miniPipelineSvg()}
      </div>`
    )
    .join("");

  const restHtml = `
    <div class="project-row">
      ${rest
        .map(
          (p) => `
        <div class="project-card glass">
          <div class="project-name">${escapeHtml(p.name)}</div>
          <p class="project-summary">${escapeHtml(p.summary)}</p>
          <p class="project-details">${escapeHtml(p.details)}</p>
          <div class="project-stack">${p.stack.map((s) => `<span>${escapeHtml(s)}</span>`).join("")}</div>
        </div>`
        )
        .join("")}
    </div>`;

  document.getElementById("projectsWrap").innerHTML = featuredHtml + restHtml;
}

function miniPipelineSvg() {
  const nodes = ["git", "test", "build", "deploy"];
  return `
    <div class="mini-pipeline">
      ${nodes
        .map((n, i) => `<div class="mini-node">${n}</div>` + (i < nodes.length - 1 ? `<div class="mini-line"></div>` : ""))
        .join("")}
    </div>`;
}

function renderCerts(certs) {
  document.getElementById("certBadges").innerHTML = certs
    .map((c) => `<span class="cert-badge glass">${escapeHtml(c)}</span>`)
    .join("");
}

/* ---------- Pipeline demo (simulated locally, same timing as the real backend) ---------- */
function setupPipeline(stages) {
  const list = document.getElementById("pipelineStages");
  const runBtn = document.getElementById("runPipelineBtn");

  function renderStages() {
    list.innerHTML = stages
      .map(
        (s) => `
        <li class="stage" data-id="${s.id}">
          <span class="stage-dot"></span>
          <span class="stage-label">${escapeHtml(s.label)}</span>
        </li>`
      )
      .join("");
  }
  renderStages();

  async function runPipeline() {
    runBtn.disabled = true;
    renderStages();
    const items = [...list.querySelectorAll(".stage")];
    for (let i = 0; i < items.length; i++) {
      items[i].classList.add("active");
      await wait(stages[i]?.durationMs ?? 700);
      items[i].classList.remove("active");
      items[i].classList.add("done");
    }
    runBtn.disabled = false;
  }

  runBtn.addEventListener("click", runPipeline);
  setTimeout(runPipeline, 500);
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function updateVisitBadge() {
  document.getElementById("visitBadge").textContent =
    `Thanks for stopping by. This pipeline demo runs in your browser — the full working backend version is in the project repo.`;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- Init ---------- */
renderAll();
updateVisitBadge();
document.getElementById("apiStatus").textContent = "static build";
document.getElementById("apiStatus").className = "api-status";
