const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.product-panel');

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navigations');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu if the window is resized to desktop width
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('open');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');

        // Hide all panels
        panels.forEach(panel => panel.classList.remove('active'));

        // Show the target panel
        const targetId = tab.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// ===== TRANSLATION DICTIONARY =====
// Add your translations here. You can add more languages by adding new objects.
const translations = {
    en: {
        // Example keys – replace with your actual keys and text
        name: "Serene Phoon",
        introdes: "Financial Planner with over 20 years of experience helping individuals, families, and business owners protect what they have built and plan confidently for the future.",
        introdes2: "20+ Years Experience | MDRT • COT • TOT | Wealth & Legacy Planning",
        contactbtn: 'Contact Me',
        learnmorebtn: 'Learn More',
        myachivement: 'My Achivement',
        myachivement1: 'Years of Experience',
        myachivement2: '20+ Years',
        myachivement3: 'Num. of Customers',
        myachivement4: '2k+',
        myachivement5: '9 times MDRT',
        myachivement6: '4 times COT',
        myachivement7: '1 times TOT',
        myachivement8: 'Award Holder',
        aboutme: 'About Me',
        aboutme2: 'Determination is Key',
        aboutme3: 'I started my career in banking industry and later moved into insurance and financial planning.',
        aboutme4: 'Throughout my career, I have worked with clients from different stages of life — from young adults starting their careers, to families building their wealth, business owners, and high-net-worth clients planning for retirement and legacy.',
        aboutme5: 'One thing I have learned over the past 20 years is this:',
        aboutme6: 'Financial planning is not just about how much money you have. It is about making sure your money is in the right place, for the right purpose, at the right time.',
        myphil: 'My Team',
        myphil2: 'Mentality, Lifestyle, Consistency',
        myphil3: 'Of Course, I am not working alone.',
        myphil4: 'We believe that a good financial planner should not only be there when a policy is purchased. We should be there throughout the client’s different life stages — from planning and reviewing to claims and eventually wealth distribution.',
        myphil5: 'Our goal is not simply to build a sales team. We want to build a team of trusted financial professionals.',
        myphil6: 'I lead and work together with a team of financial consultants who share the same belief — to provide responsible, professional, and long-term financial planning to our clients.',
        quote: 'United minds form a fortress.',
        getintouch: 'Get In Touch',
        getintouch2: "I'd love to hear from you",
        getintouch3: "Any Questions? I'm always ready and happy to help.",
        getintouch4: 'Contact Me',
            // Story section
        story_title: "MY STORY",
        story_subtitle: "Why I'd Chose to Commit",
        story_para1: "Interestingly, insurance was not my first career choice.",
        story_para2: "When I was first introduced to this industry, I had many doubts. I worried about whether I could succeed, whether I could earn a stable income, and even whether selling insurance might affect my relationships with friends.",
        story_para3: "But I decided to give myself a chance.",
        story_para4: "I started learning, meeting people, and building my business step by step. Along the way, I realised something important:",
        story_para5: "Insurance is not really about selling a policy. It is about being there when someone’s life does not go according to plan.",
        story_para6: "That understanding changed the way I looked at this career — and it is one of the reasons I have stayed for more than 20 years.",

        // Achievements section
        achieve_title: "My ACHIVEMENTS",
        achieve_subtitle: "My Motivation",
        achieve_para1: "My journey was never about becoming successful overnight.",
        achieve_para2: "I started from zero, learning through rejection, mistakes, and experience. Every stage of my career taught me something different.",
        achieve_para3: "Over the years, I have achieved multiple MDRT, COT and TOT recognitions.",
        achieve_para4: "But what matters most to me is not the award itself.",
        achieve_para5: "Every recognition represents the trust of many clients, many conversations, many financial plans, and many years of consistency.",
        achieve_para6: "Awards recognise performance, but trust is the achievement I value most.",

        // Claim story section
        claim_title: "Claim Story",
        claim_subtitle: "Providing Service, not chasing Sales",
        claim_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas consectetur rerum obcaecati molestiae aliquid nam architecto labore, error odio. Excepturi non quibusdam labore quo illo? Ut a esse dolorum?",
        homenav: 'Home',
        aboutnav: 'About',
        servicesnav: 'Services',
        contactnav: 'Contact Me',
        mctitle: 'Get in Touch',
        mctitle2: 'Contact Me',
        mcdes: "Interested? I'd like to hear from you.",
        mymission: "Our Mission",
        mymission1: "Protect Families",
        mymission2: "Develop People",
        mymission3: "Build Leaders",
        mymission4: "Create Legacy",
        whatido: "WHAT I DO",
        myservices: "My Services",
        servicepro: "Service Provided",
        product1: "Life Insurance",
        product2: "Medical Card",
        product3: "Critical Illness",
        product4: "Legacy",
        knowmore: "Know More",
        lifeinsurance: "Secure your legacy and give your loved ones the gift of financial security. Prudential's plans are designed to fit your budget and provide a safety net when your family needs it most.",
        medcard: "Protect your health and your wallet. Prudential's medical card helps cover eligible hospitalisation, surgery, and treatment expenses—so you can access quality care when you need it most.",
        ci: "Protect your income and savings from the unexpected. Prudential's plan pays a lump sum upon diagnosis of a covered critical illness, giving you financial breathing room when it matters most.",
        legacy: "Secure your family’s future with a legacy that lasts generations.Prudential's plan allows flexible legacy planning to ensure your legacy is passed on smoothly, according to your wishes.",
    },
    zh: {
        name: "Serene 潘宛盈",
        introdes: "我是 Serene Phoon 潘宛盈，拥有超过 20年经验 的财务规划顾问，协助个人、家庭及企业家做好保障、财富规划及家族传承。",
        introdes2: "守护财富 · 规划未来 · 传承价值",
        contactbtn: '联系',
        learnmorebtn: '知道更多',
        myachivement: '我的荣誉',
        myachivement1: '已在保险职场',
        myachivement2: '20+ 年',
        myachivement3: '满意客户数量',
        myachivement4: '2千+',
        myachivement5: '9次MDRT',
        myachivement6: '4次COT',
        myachivement7: '1次TOT',
        myachivement8: '获奖者',
        aboutme: '关于我',
        aboutme2: '成事在坚',
        aboutme3: '我最初从金融行业开始自己的事业，后来进入保险及财务规划领域。',
        aboutme4: '这些年来，我接触过不同人生阶段的客户——从刚踏入社会的年轻人、正在建立家庭与累积财富的父母，到企业家及需要规划退休与财富传承的高资产客户。',
        aboutme5: '20多年的经验让我越来越相信：',
        aboutme6: '财务规划不只是看你有多少钱，而是要确保你的钱，在对的时间、放在对的位置、完成对的目的。',
        myphil: '我的团队',
        myphil2: '心理，生活，持之以恒',
        myphil3: '今天的我，并不是一个人在做这份事业。',
        myphil4: '我们相信，一个好的财务顾问，不应该只出现在客户购买保单的时候。从最初的规划、定期检视，到需要理赔的时候，甚至未来的财富分配与传承，我们都希望可以长期陪伴客户。',
        myphil5: '我们的目标，不只是建立一支销售团队，而是培养一群真正值得客户信任的专业财务顾问',
        myphil6: '我带领并与一群拥有共同理念的财务顾问一起工作，为客户提供负责任、专业及长期的财务规划服务。',
        quote:'众志成城',
        getintouch: '来联系吧',
        getintouch2: '想听听你的意见',
        getintouch3: '有什么问题吗？ 在此乐意给予帮助',
        getintouch4: '联系我',
        story_title: "我的故事",
        story_subtitle: "为什么我愿意投入",
        story_para1: "其实一开始，保险并不是我原本规划的事业。",
        story_para2: "刚接触这一行时，我也有很多担心。我会想自己到底能不能做得到、收入会不会稳定，甚至担心做保险会不会影响自己和朋友之间的关系。",
        story_para3: "但最后，我决定给自己一个机会。",
        story_para4: "从学习、见客户、被拒绝，到一步一步建立自己的客户群，我慢慢发现：",
        story_para5: "保险真正的价值，并不是卖出一张保单，而是当一个人的人生没有按照计划走的时候，我们还有能力帮他守住生活。",
        story_para6: "这个体会，也让我在这一行坚持了20多年。",

        achieve_title: "我的荣誉",
        achieve_subtitle: "我的动力来源",
        achieve_para1: "我的事业并不是一开始就很顺利，也不是一夜之间就有成绩。",
        achieve_para2: "我也是从零开始，经历拒绝、犯错、学习，再不断累积经验。",
        achieve_para3: "这些年来，我获得过多次 MDRT、COT以及TOT 的国际业界荣誉。",
        achieve_para4: "但对我来说，奖项本身并不是最重要的。",
        achieve_para5: "因为每一个奖项背后，其实代表着很多客户的信任、很多次的沟通、很多份财务规划，以及很多年的坚持。",
        achieve_para6: "奖项代表的是成绩，但客户长期的信任，才是我最珍惜的成就。",

        claim_title: "",
        claim_subtitle: "",
        claim_desc: "",
        homenav: '首页',
        aboutnav: '关于',
        servicesnav: '服务/产品',
        contactnav: '联络',
        mctitle: '来联系吧',
        mctitle2: '联络方式',
        mcdes: "有兴趣吗，想听听你的意见",
        mymission: "我们的使命",
        mymission1: "保护家庭",
        mymission2: "创造人才",
        mymission3: "打造领导",
        mymission4: "建立印记",
        whatido: "我做的事",
        myservices: "我的服務",
        servicepro: "提供的服務",
        product1: "人寿保险",
        product2: "医药卡",
        product3: "疾病赔偿",
        product4: "遗产",
        knowmore: "了解更多",
        lifeinsurance: "守护传承，为挚爱送上财务保障。保诚方案贴合您的预算，在家人最需要时提供保障。",
        medcard: "保障您的健康，也守护您的钱包。保诚医药卡协助支付符合资格的住院、手术及治疗费用——让您在最有需要的时候，获得优质的医疗服务。",
        ci: "保障您的收入与储蓄，免受突发状况影响。保诚的计划在确诊受保危疾时，将一次性支付一笔赔偿金，让您在最需要的时刻拥有财务缓冲空间。",
        legacy: "以世代相传的传承，守护您家人的未来。保诚的计划提供灵活的传承规划，确保您的传承能按照您的意愿顺利延续。",
    }
    // Add more languages as needed, e.g. 'ms' for Malay
};

// ===== LANGUAGE STATE =====
let currentLang = 'en';   // default language

// ===== SWITCH LANGUAGE FUNCTION =====
function switchLanguage(lang) {
    if (!translations[lang]) return;   // safety check

    currentLang = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
        // Optional: if you also need to translate placeholder or title attributes, add here
        // Example:
        // if (el.hasAttribute('data-i18n-placeholder')) {
        //     const phKey = el.getAttribute('data-i18n-placeholder');
        //     if (translations[lang][phKey]) el.setAttribute('placeholder', translations[lang][phKey]);
        // }
    });

    // Save user preference
    localStorage.setItem('preferredLang', lang);

    // Optional: update the toggle button text (or leave as is)
    // document.getElementById('langToggle').textContent = lang === 'en' ? '中文' : 'EN';
}

// ===== TOGGLE BUTTON =====
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'zh' : 'en'; // change as needed
            switchLanguage(newLang);
        });
    }

    // Load saved language on page load
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && translations[savedLang]) {
        switchLanguage(savedLang);
    } else {
        // Apply default language (ensures all elements get correct initial text)
        switchLanguage(currentLang);
    }
});

