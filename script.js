const skills = [
    "Python",
    "SQL",
    "PyTorch",
    "TensorFlow",
    "XGBoost",
    "CatBoost",
    "LightGBM",
    "RAG",
    "Fine-Tuning",
    "LangGraph",
    "Google ADK",
    "DuckDB",
    "ChromaDB",
    "OpenCV",
    "Docker",
    "AWS",
    "Tableau",
];

const experiences = [
    {
        period: "Oct 2024 - Present",
        role: "Data Science Researcher",
        company: "University of Illinois Urbana-Champaign",
        summary:
            "Built admissions and research workflows with Python and LLMs. Result: 10x faster review, 30% shorter timelines, and 40% lower operating cost.",
        stack: ["Python", "LLMs", "Google ADK", "Workflow Automation", "Analytics"],
    },
    {
        period: "Sep 2024 - May 2025",
        role: "Data Scientist",
        company: "CNeutral",
        summary:
            "Built ESG extraction and retrieval systems for a $3T sovereign-fund workflow. Result: 90% better data quality and 40% faster analysis.",
        stack: ["Python", "RAG", "PyMuPDF", "ChromaDB", "FAISS"],
    },
    {
        period: "Jun 2020 - Jul 2023",
        role: "Machine Learning Engineer",
        company: "Technokart Consultancy Services",
        summary:
            "Shipped document AI for compliance at scale. Result: 92% recall, 40% lower latency, 60% less audit work, and 96% uptime.",
        stack: ["YOLO", "OCR", "Whisper", "DistilBERT", "CI/CD", "AWS"],
    },
];

const education = [
    {
        period: "August 2024 - May 2025",
        school: "University of Illinois Urbana-Champaign",
        degree: "Master of Science in Business Analytics",
        detail: "Data Science Track",
        tags: ["Business Analytics", "Data Science", "UIUC"],
    },
    {
        period: "July 2017 - August 2021",
        school: "NMIMS University",
        degree: "Bachelor of Technology in Data Science",
        detail: "",
        tags: ["Data Science", "Engineering"],
    },
];

const projects = [
    {
        title: "Lineage",
        category: "Applied AI",
        status: "Flagship",
        subtitle: "Narrative AI workspace for grounded character reasoning",
        about:
            "A screenplay-aware RAG product that remembers time, context, and relationships.",
        impact:
            "Characters answer from what they know, when they know it.",
        tags: ["RAG", "FastAPI", "ChromaDB", "Retrieval"],
        thumb: "forum",
        links: [{ label: "Live Demo", url: "https://lineage-sooty.vercel.app" }],
    },
    {
        title: "LocalPsych",
        category: "Applied AI",
        status: "Research",
        subtitle: "Privacy-first local mental health assistant",
        about:
            "Gemma 4 fine-tuned for empathetic, on-device guidance.",
        impact:
            "Private by default. Useful without the cloud.",
        tags: ["QLoRA", "Gemma 4", "PEFT", "Privacy"],
        thumb: "psychology",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/LocalPsych" }],
    },
    {
        title: "MedPrompt",
        category: "Applied AI",
        status: "Shipped POC",
        subtitle: "Zero-shot pathology segmentation POC",
        about:
            "A pathology POC that pairs prompt-guided VLM reasoning with foundation segmentation.",
        impact:
            "Zero-shot region proposals. Faster review.",
        tags: ["Medical Imaging", "Segmentation", "VLM", "PyTorch"],
        thumb: "health_and_safety",
        links: [],
    },
    {
        title: "Trash Lyrics",
        category: "Applied AI",
        status: "NLP",
        subtitle: "Artist-style lyric generation with LSTMs",
        about:
            "An early LSTM project for artist-style lyric generation.",
        impact:
            "Proof that model behavior can feel like product behavior.",
        tags: ["LSTM", "NLP", "Text Generation"],
        thumb: "music_note",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/Trash_Lyrics" }],
    },
    {
        title: "Synchrony Credit Intelligence",
        category: "Forecasting & Risk",
        status: "Datathon",
        subtitle: "Forecasting, segmentation, fraud scoring, and credit recommendations",
        about:
            "A credit decision engine across forecasting, fraud, segmentation, and limit recommendations.",
        impact:
            "R² 0.9906 on spend forecasting. +$7.03M in upside.",
        tags: ["XGBoost", "DuckDB", "SHAP", "Risk"],
        thumb: "account_balance",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/CreditRiskManagement" }],
    },
    {
        title: "Contact Center Forecasting",
        category: "Forecasting & Risk",
        status: "Top-7",
        subtitle: "Hybrid interval-level staffing forecast system",
        about:
            "Daily totals with XGBoost. Intraday shape by design.",
        impact:
            "Top-7 finish. Better accuracy from cleaner data.",
        tags: ["XGBoost", "Forecasting", "Operations"],
        thumb: "trending_up",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/WorkforcePlanning" }],
    },
    {
        title: "Railway Wheel Failure Prediction",
        category: "Forecasting & Risk",
        status: "Competition",
        subtitle: "30-day-ahead predictive maintenance for rail wheels",
        about:
            "Predictive maintenance for rail wheels, 30 days out.",
        impact:
            "Log-loss cut from 0.037 to 0.0299.",
        tags: ["CatBoost", "LightGBM", "XGBoost", "Sensors"],
        thumb: "train",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/RailwayWheelFailurePrediction" }],
    },
    {
        title: "Chicago Crime Analytics",
        category: "Analytics & Product",
        status: "Dashboard",
        subtitle: "Serverless crime analytics at city scale",
        about:
            "City-scale crime analytics without a heavy backend.",
        impact:
            "8M+ records. Under 10 MB.",
        tags: ["Dash", "Plotly", "SoQL", "Visualization"],
        thumb: "location_city",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/Chicago-Crime-Analysis" }],
    },
    {
        title: "CUMTD Live Dashboard",
        category: "Analytics & Product",
        status: "Transit UX",
        subtitle: "Mini Metro-inspired real-time transit map for Champaign-Urbana MTD",
        about:
            "A live CUMTD transit dashboard that combines GTFS, GTFS-Realtime, and MapLibre into a minimal rider-facing map experience.",
        impact:
            "Turns raw bus telemetry into clearer boarding, crowding, and route context.",
        tags: ["JavaScript", "MapLibre", "GTFS-Realtime", "Transit"],
        thumb: "directions_bus",
        links: [],
    },
    {
        title: "MCU Actor Causal Impact Analysis",
        category: "Analytics & Product",
        status: "Causal",
        subtitle: "Difference-in-differences study on MCU career impact",
        about:
            "A difference-in-differences study on how Marvel changes careers.",
        impact:
            "+1.91 log-point treatment effect.",
        tags: ["Causal Inference", "DiD", "Panel Data"],
        thumb: "movie",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/Causal-Analysis-Marvel" }],
    },
    {
        title: "State Farm Fellowship Microsites",
        category: "Analytics & Product",
        status: "Product Storytelling",
        subtitle: "Branded speaker pages for UIUC and State Farm collaboration",
        about:
            "Speaker microsites that turn technical talks into polished web narratives.",
        impact:
            "Clearer storytelling for data science, GenAI, and digital transformation.",
        tags: ["HTML", "CSS", "Content Design"],
        thumb: "language",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/StateFarm_Fellowship_2025" }],
    },
    {
        title: "Reddit Redesign",
        category: "Analytics & Product",
        status: "UX Strategy",
        subtitle: "Course project centered on platform and interface redesign",
        about:
            "A product rethink, not a paint job.",
        impact:
            "Useful proof of UX judgment alongside ML work.",
        tags: ["Product Design", "UX", "Strategy"],
        thumb: "palette",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/Reddit_Redesign_BADM390" }],
    },
    {
        title: "OCR Automation for Logistics Invoices",
        category: "Vision & Automation",
        status: "Freelance",
        subtitle: "Document AI pipeline for invoice and customs paperwork",
        about:
            "Document AI for invoices and customs paperwork.",
        impact:
            "Built for messy PDFs, not ideal demos.",
        tags: ["Flask", "PyMuPDF", "OCR", "Automation"],
        thumb: "receipt_long",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/ocr_automation_siddhartha" }],
    },
    {
        title: "Finger Anti-Spoof",
        category: "Vision & Automation",
        status: "Capstone",
        subtitle: "Challenge-response liveness verification with gesture recognition",
        about:
            "Gesture-based liveness verification.",
        impact:
            "Challenge-response, not just static classification.",
        tags: ["Computer Vision", "CNN", "OpenCV", "Biometrics"],
        thumb: "fingerprint",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/finger-anti-spoof" }],
    },
    {
        title: "Transformer-Core",
        category: "Foundations",
        status: "Engineering",
        subtitle: "Attention implementations from pedagogy to production",
        about:
            "Attention, rebuilt from first principles to production form.",
        impact:
            "Parity-tested against PyTorch.",
        tags: ["PyTorch", "Transformers", "Attention", "Testing"],
        thumb: "memory",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/transformers" }],
    },
    {
        title: "GitHub Organization Scraper",
        category: "Foundations",
        status: "Automation",
        subtitle: "Open-source org intelligence via the GitHub API",
        about:
            "Organization discovery and repo intelligence from the GitHub API.",
        impact:
            "Rejects fake orgs before collection starts.",
        tags: ["GitHub API", "Python", "Data Collection"],
        thumb: "code",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/GitHub_Innovation" }],
    },
    {
        title: "ML Concepts",
        category: "Foundations",
        status: "Teaching",
        subtitle: "Notebook series on machine learning foundations",
        about:
            "A teaching series for the math behind ML.",
        impact:
            "Shows fluency in explanation, not just implementation.",
        tags: ["Machine Learning", "Education", "Notebooks"],
        thumb: "school",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/ML_Concepts" }],
    },
];

const categoryOrder = [
    "Applied AI",
    "Forecasting & Risk",
    "Analytics & Product",
    "Vision & Automation",
    "Foundations",
];

let carouselResizeObserver;

function updateCarouselAffordance(carousel) {
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const isScrollable = maxScrollLeft > 4;

    carousel.classList.toggle("is-scrollable", isScrollable);

    if (!isScrollable) {
        carousel.classList.remove("show-left-fade", "show-right-fade");
        return;
    }

    carousel.classList.toggle("show-left-fade", carousel.scrollLeft > 4);
    carousel.classList.toggle("show-right-fade", carousel.scrollLeft < maxScrollLeft - 4);
}

function setupCarouselAffordances() {
    const carousels = document.querySelectorAll(".carousel");

    if (carouselResizeObserver) {
        carouselResizeObserver.disconnect();
    }

    carouselResizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => updateCarouselAffordance(entry.target));
    });

    carousels.forEach((carousel) => {
        updateCarouselAffordance(carousel);
        carousel.addEventListener("scroll", () => updateCarouselAffordance(carousel), { passive: true });
        carouselResizeObserver.observe(carousel);
    });
}

function renderSkills() {
    const primary = document.getElementById("skills-rail-primary");
    const secondary = document.getElementById("skills-rail-secondary");
    const markup = skills.map((skill) => `<span class="pill">${skill}</span>`).join("");

    primary.innerHTML = markup;
    secondary.innerHTML = markup;
}

function renderExperiences() {
    const container = document.getElementById("experience-list");
    container.innerHTML = experiences
        .map(
            (experience) => `
                <article class="experience-card reveal">
                    <div class="experience-top">
                        <div class="experience-meta">
                            <div class="experience-role">${experience.role}</div>
                            <div class="experience-company">${experience.company}</div>
                        </div>
                        <div class="experience-period">${experience.period}</div>
                    </div>
                    <p>${experience.summary}</p>
                    <div class="tag-row">
                        ${experience.stack.map((item) => `<span class="tag">${item}</span>`).join("")}
                    </div>
                </article>
            `,
        )
        .join("");
}

function renderEducation() {
    const container = document.getElementById("education-list");
    container.innerHTML = education
        .map(
            (item) => `
                <article class="education-card reveal">
                    <div class="education-top">
                        <div class="education-meta">
                            <div class="education-degree">${item.degree}</div>
                            <div class="education-school">${item.school}</div>
                        </div>
                        <div class="education-period">${item.period}</div>
                    </div>
                    ${item.detail ? `<p>${item.detail}</p>` : ""}
                    <div class="tag-row">
                        ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                    </div>
                </article>
            `,
        )
        .join("");
}

function renderProjectThumb(project) {
    return `
        <div class="project-thumb-frame" aria-hidden="true">
            <span class="material-symbols-outlined project-thumb-icon">${project.thumb}</span>
        </div>
    `;
}

function renderProjectSections() {
    const container = document.getElementById("project-sections");

    container.innerHTML = categoryOrder
        .map((category) => {
            const group = projects.filter((project) => project.category === category);
            if (!group.length) {
                return "";
            }

            return `
                <section class="project-group reveal">
                    <div class="project-group-head">
                        <h3>${category}</h3>
                        <span>${group.length} project${group.length > 1 ? "s" : ""}</span>
                    </div>
                    <div class="carousel">
                        ${group
                    .map(
                        (project) => `
                                    <article class="project-card">
                                        <div class="project-top">
                                            <div>
                                                <h3>${project.title}</h3>
                                                <div class="project-subtitle">${project.subtitle}</div>
                                            </div>
                                            <span class="project-status">${project.status}</span>
                                        </div>
                                        <p>${project.about}</p>
                                        <p class="project-impact">${project.impact}</p>
                                        <div class="tag-row">
                                            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                                        </div>
                                        ${renderProjectThumb(project)}
                                        ${project.links.length
                                ? `<div class="project-links">
                                                    ${project.links
                                    .map(
                                        (link) =>
                                            `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`,
                                    )
                                    .join("")}
                                                </div>`
                                : ""
                            }
                                    </article>
                                `,
                    )
                    .join("")}
                    </div>
                </section>
            `;
        })
        .join("");
}

let revealObserver;

function activateRevealObserver() {
    const nodes = document.querySelectorAll(".reveal");

    if (revealObserver) {
        revealObserver.disconnect();
    }

    revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        },
        { threshold: 0.12 },
    );

    nodes.forEach((node) => revealObserver.observe(node));
}

renderSkills();
renderExperiences();
renderEducation();
renderProjectSections();
activateRevealObserver();
setupCarouselAffordances();
