// AcademiaCRM Application State and Controllers

// --- DEFAULT SEED DATA ---
const DEFAULT_LEADS = [
    {
        id: "lead-gla",
        collegeName: "GLA University",
        location: "Mathura, UP",
        contactPerson: "Dr. R. Sharma",
        email: "rsharma@gla.edu",
        phone: "+91 98765 43210",
        type: "Private University",
        strength: 12000,
        interest: "Technical Bootcamps",
        source: "Inbound Website",
        status: "New Lead",
        priorityScore: 92,
        assignedTo: "Sneha Sharma",
        notes: "Large private institution looking to launch high-end Full Stack & Devops Bootcamps for their 3rd-year CS students."
    },
    {
        id: "lead-vit",
        collegeName: "VIT University",
        location: "Vellore, TN",
        contactPerson: "Prof. K. Iyer",
        email: "kiyer@vit.ac.in",
        phone: "+91 99887 76655",
        type: "Private University",
        strength: 25000,
        interest: "AI & ML Lab Integration",
        source: "Academic Conference",
        status: "Contacted",
        priorityScore: 85,
        assignedTo: "Sneha Sharma",
        notes: "Interested in establishing a co-branded Generative AI center of excellence. Requested technical brochure."
    },
    {
        id: "lead-lpu",
        collegeName: "LPU",
        location: "Phagwara, PB",
        contactPerson: "Ms. Neha Singh",
        email: "neha.singh@lpu.co.in",
        phone: "+91 97766 55443",
        type: "Private University",
        strength: 30000,
        interest: "Technical Bootcamps",
        source: "Referral",
        status: "Meeting Scheduled",
        priorityScore: 78,
        assignedTo: "Sneha Sharma",
        notes: "Meeting scheduled for curriculum alignment on python and data science programs. Expecting 500+ student enrollment."
    },
    {
        id: "lead-amity",
        collegeName: "Amity University",
        location: "Noida, UP",
        contactPerson: "Mr. A. Kapoor",
        email: "akapoor@amity.edu",
        phone: "+91 96655 44332",
        type: "Private University",
        strength: 18000,
        interest: "Industry Placement Drives",
        source: "Direct Outreach",
        status: "Proposal Sent",
        priorityScore: 70,
        assignedTo: "Amit Dev",
        notes: "Proposal sent for placements support. Awaiting feedback from placement coordinator."
    },
    {
        id: "lead-christ",
        collegeName: "Christ University",
        location: "Bengaluru, KA",
        contactPerson: "Dr. J. Fernandes",
        email: "j.fernandes@christuniversity.in",
        phone: "+91 95544 33221",
        type: "Private University",
        strength: 15000,
        interest: "Short Workshops",
        source: "LinkedIn Campaigns",
        status: "Negotiation",
        priorityScore: 65,
        assignedTo: "Rohan Sen",
        notes: "Final stage negotiations on MoU for winter technical training program."
    },
    {
        id: "lead-kec",
        collegeName: "KEC Tech",
        location: "Erode, TN",
        contactPerson: "Prof. A. Kumar",
        email: "akumar@kec.edu",
        phone: "+91 94433 22110",
        type: "Autonomous College",
        strength: 4200,
        interest: "AI & ML Lab Integration",
        source: "Referral",
        status: "Closed",
        priorityScore: 55,
        assignedTo: "Sneha Sharma",
        notes: "MoU successfully signed for ML training course setup. Program execution scheduled next semester."
    }
];

const DEFAULT_TASKS = [
    {
        id: "task-1",
        leadId: "lead-gla",
        title: "AI Analysis: Schedule Intro Call",
        description: "GLA University has 12,000+ students and inbound interest. Schedule call within 24 hours.",
        dueDate: "2026-06-26",
        priority: "High",
        status: "Pending",
        owner: "Sneha Sharma"
    },
    {
        id: "task-2",
        leadId: "lead-vit",
        title: "Send Brochure & Case Studies",
        description: "Send co-branded AI lab deck and success case study from VIT Chennai campus.",
        dueDate: "2026-06-27",
        priority: "High",
        status: "Pending",
        owner: "Sneha Sharma"
    },
    {
        id: "task-3",
        leadId: "lead-christ",
        title: "Follow up on MoU draft",
        description: "Check if Christ legal team approved the indemnity clause in training MoU.",
        dueDate: "2026-06-24",
        priority: "Medium",
        status: "Overdue",
        owner: "Rohan Sen"
    },
    {
        id: "task-4",
        leadId: "lead-kec",
        title: "Closed Lead: Initial Onboarding",
        description: "Liaison with academic team to schedule server setups for AI Lab training.",
        dueDate: "2026-06-20",
        priority: "Low",
        status: "Completed",
        owner: "Sneha Sharma"
    }
];

const DEFAULT_MEETINGS = [
    {
        id: "meet-1",
        leadId: "lead-lpu",
        title: "LPU Curriculum Alignment Presentation",
        date: "2026-06-26",
        time: "11:00",
        description: "Presenting DevOps curriculum outline. Target: CSE Head & Dean."
    },
    {
        id: "meet-2",
        leadId: "lead-gla",
        title: "Technical Bootcamp Discovery Meeting",
        date: "2026-06-25",
        time: "15:00",
        description: "Discovery call on student profiles, prerequisites, and timeline."
    }
];

const DEFAULT_NOTIFICATIONS = [
    { id: "notif-1", message: "AI Engine analyzed new lead 'GLA University' → Priority Score 92/100.", time: "1 hour ago", read: false },
    { id: "notif-2", message: "Follow-up reminder: 'Follow up on MoU draft' for Christ University is overdue.", time: "4 hours ago", read: false },
    { id: "notif-3", message: "System Event: Lead 'KEC Tech' status updated to 'Closed' (MoU Signed).", time: "1 day ago", read: true }
];

const DEFAULT_AUTOMATION_LOG = [
    { message: "Lead added: GLA University", detail: "AI assigned priority score: 92 (High)", time: "June 25, 2026, 11:30 AM" },
    { message: "Auto-Assigned Sales Rep", detail: "Sneha Sharma assigned to GLA University based on North India regional alignment.", time: "June 25, 2026, 11:31 AM" },
    { message: "Auto-Generated Outreach Draft", detail: "Created personalized Professional email for Dr. R. Sharma.", time: "June 25, 2026, 11:32 AM" },
    { message: "Created Automated Follow-up Task", detail: "Task 'Schedule Intro Call' assigned to Sneha Sharma. Due June 26.", time: "June 25, 2026, 11:33 AM" },
    { message: "Meeting Confirmed", detail: "Discovery call logged with GLA University for June 25, 3:00 PM.", time: "June 25, 2026, 03:00 PM" }
];

const DEFAULT_USER = {
    name: "Sneha Sharma",
    role: "Sales Manager",
    dp: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
};

// Helper to prevent JSON parsing crashes on corrupted localStorage entries
function safeJsonParse(key, defaultValue) {
    try {
        const val = localStorage.getItem(key);
        if (!val || val === "undefined") return defaultValue;
        return JSON.parse(val) || defaultValue;
    } catch (e) {
        console.error("Error parsing localStorage key:", key, e);
        return defaultValue;
    }
}

// --- APP STATE ---
const state = {
    leads: safeJsonParse("academia_leads", DEFAULT_LEADS),
    tasks: safeJsonParse("academia_tasks", DEFAULT_TASKS),
    meetings: safeJsonParse("academia_meetings", DEFAULT_MEETINGS),
    notifications: safeJsonParse("academia_notifications", DEFAULT_NOTIFICATIONS),
    automationLogs: safeJsonParse("academia_automation_logs", DEFAULT_AUTOMATION_LOG),
    currentUser: safeJsonParse("academia_current_user", DEFAULT_USER),
    isLoggedIn: localStorage.getItem("academia_is_logged_in") === "true",
    currentView: "dashboard-view",
    selectedDate: new Date("2026-06-25"),
    charts: {}
};

function saveState() {
    localStorage.setItem("academia_leads", JSON.stringify(state.leads));
    localStorage.setItem("academia_tasks", JSON.stringify(state.tasks));
    localStorage.setItem("academia_meetings", JSON.stringify(state.meetings));
    localStorage.setItem("academia_notifications", JSON.stringify(state.notifications));
    localStorage.setItem("academia_automation_logs", JSON.stringify(state.automationLogs));
    localStorage.setItem("academia_current_user", JSON.stringify(state.currentUser));
    localStorage.setItem("academia_is_logged_in", state.isLoggedIn.toString());
}

// --- HELPER FUNCTION: PREDICTIVE AI ENGINE ---
function calculateAIScore(lead) {
    let score = 30; // base score

    const strength = parseInt(lead.strength) || 0;
    if (strength > 20000) score += 35;
    else if (strength > 10000) score += 25;
    else if (strength > 5000) score += 15;
    else if (strength > 1000) score += 5;

    if (lead.interest === "AI & ML Lab Integration") score += 20;
    else if (lead.interest === "Technical Bootcamps") score += 18;
    else if (lead.interest === "Industry Placement Drives") score += 12;
    else score += 8;

    if (lead.source === "Inbound Website") score += 15;
    else if (lead.source === "Referral") score += 12;
    else if (lead.source === "Academic Conference") score += 10;
    else score += 5;

    if (lead.status === "Meeting Scheduled" || lead.status === "Proposal Sent") score += 10;
    else if (lead.status === "Negotiation") score += 15;
    else if (lead.status === "Closed") score = 99;

    return Math.min(score, 98);
}

function generateNextAction(lead) {
    switch (lead.status) {
        case "New Lead":
            return `AI Priority Score is ${lead.priorityScore}/100. Call ${lead.contactPerson} to establish interest in ${lead.interest}.`;
        case "Contacted":
            return `Send follow-up brochure regarding ${lead.interest} and solicit a time for technical assessment meeting.`;
        case "Meeting Scheduled":
            return `Review institutional profile. Prep alignment slide deck for ${lead.strength} students. Call at scheduled time.`;
        case "Proposal Sent":
            return `Follow up on proposal terms with ${lead.contactPerson} within 48 hours. Offer standard curriculum discount.`;
        case "Negotiation":
            return `Legal review needed: finalize training MoU terms with executive dean. Confirm start dates.`;
        case "Closed":
            return `Deliver partnership kick-off kits. Introduce operations manager for training calendar setup.`;
        default:
            return "Establish communication and schedule discovery briefing.";
    }
}

function generatePersonalizedEmail(lead, tone = "professional", customInstructions = "") {
    const repName = state.currentUser.name;
    const repRole = `${state.currentUser.role}, TechPartners Academia`;

    let subject = "";
    let body = "";

    if (tone === "professional") {
        subject = `Technical Partnerships Inquiry: ${lead.interest} | ${lead.collegeName}`;
        body = `Dear ${lead.contactPerson},\n\nI hope this email finds you well.\n\nMy name is ${repName}, and I lead Technical Partnerships at our organization. We have been tracking the impressive developments at ${lead.collegeName} in ${lead.location}, particularly regarding your student curriculum updates.\n\nWith your student strength of ${lead.strength} engineering/science students, we believe there is a prime opportunity to collaborate on ${lead.interest}. Our customized programs deliver hands-on technical labs, industry certs, and placement assistance designed to increase placement outcomes by over 24%.\n\n${customInstructions ? customInstructions + "\n\n" : ""}Would you be available for a brief 10-minute introductory call this week to explore how we can support ${lead.collegeName}'s goals?\n\nLooking forward to your response.\n\nSincerely,\n\n${repName}\n${repRole}`;
    } else if (tone === "collaborative") {
        subject = `Collaborative Outreach: Enhancing student skillsets in ${lead.interest} at ${lead.collegeName}`;
        body = `Hi ${lead.contactPerson},\n\nI'm ${repName}, reaching out from the academic collaboration team.\n\nWe work with colleges like yours to establish industry-grade training frameworks. Knowing that ${lead.collegeName} values progressive learning pathways, we'd love to co-develop a roadmap for ${lead.interest} for your engineering students.\n\nGiven your sizeable strength of ${lead.strength} students, scaling this can offer tremendous placement leverage. ${customInstructions ? "Specifically, " + customInstructions : "We offer certified modules that fit right alongside your standard coursework."}\n\nLet's catch up for a brief discussion this Tuesday? Let me know what time works best.\n\nBest regards,\n\n${repName}\n${repRole}`;
    } else {
        subject = `Empowering ${lead.collegeName} Students with Next-Gen Technical Training`;
        body = `Hi ${lead.contactPerson},\n\nLet's bridge the gap between classroom theory and industry deployment!\n\nAt ${lead.collegeName}, you have a thriving population of ${lead.strength} students. We want to empower them with our state-of-the-art ${lead.interest} programs, integrating industry engineers directly into workshops and bootcamps.\n\n${customInstructions ? customInstructions + "\n\n" : ""}Our partner universities have seen a massive 40%+ spike in tier-1 placements. Let's schedule a call this week to show you our student project outcomes and how we can launch this at your campus immediately.\n\nLet's make this happen!\n\nBest,\n\n${repName}\n${repRole}`;
    }

    return `Subject: ${subject}\n\n${body}`;
}

// --- HELPER FUNCTION: DYNAMIC VIEW SWITCHER ---
function switchView(viewId) {
    const sections = document.querySelectorAll(".view-section");
    const menuItems = document.querySelectorAll(".sidebar .menu-item");

    menuItems.forEach(mi => {
        if (mi.getAttribute("data-target") === viewId) {
            mi.classList.add("active");
        } else {
            mi.classList.remove("active");
        }
    });

    sections.forEach(sec => {
        if (sec.id === viewId) {
            sec.classList.add("active");
        } else {
            sec.classList.remove("active");
        }
    });

    state.currentView = viewId;

    if (viewId === "dashboard-view") {
        refreshDashboard();
    } else if (viewId === "all-leads-view") {
        renderLeadsTable();
    } else if (viewId === "pipeline-view") {
        renderKanbanPipeline();
    } else if (viewId === "follow-ups-view") {
        renderTasks();
        renderAutomationTimeline();
    } else if (viewId === "calendar-view") {
        renderCalendar();
    } else if (viewId === "ai-insights-view") {
        renderIntelligencePortal();
    } else if (viewId === "ai-outreach-view") {
        populateOutreachDropdowns();
    } else if (viewId === "reports-view") {
        renderReports();
    }
}

// --- CONTROLLER: AUTHENTICATION FLOW (LOGIN/LOGOUT/SIGNUP) ---
function initAuth() {
    const loginContainer = document.getElementById("login-container");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    
    const toggleSignupBtn = document.getElementById("toggle-signup");
    const toggleSigninBtn = document.getElementById("toggle-signin");
    const logoutTrigger = document.getElementById("logout-trigger");
    const authCloseBtn = document.getElementById("auth-close-btn");

    const authTitle = document.getElementById("auth-title");
    const authSubtitle = document.getElementById("auth-subtitle");

    // Load registered users from localStorage or start empty
    const getRegisteredUsers = () => {
        return JSON.parse(localStorage.getItem("academia_registered_users")) || [];
    };

    const saveRegisteredUsers = (usersList) => {
        localStorage.setItem("academia_registered_users", JSON.stringify(usersList));
    };

    // Toggle to Sign Up form
    const showSignUpForm = () => {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        authTitle.textContent = "Create your Account";
        authSubtitle.textContent = "Sign up now to access your personal dashboard.";
    };

    // Toggle to Sign In form
    const showSignInForm = () => {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
        authTitle.textContent = "Sign in to CRM";
        authSubtitle.textContent = "Welcome back! Please enter your credentials.";
    };

    toggleSignupBtn.addEventListener("click", showSignUpForm);
    toggleSigninBtn.addEventListener("click", showSignInForm);

    // Open/Close handlers
    const openOverlay = (mode = "signin") => {
        if (mode === "signup") showSignUpForm();
        else showSignInForm();
        loginContainer.classList.remove("hidden");
    };

    const closeOverlay = () => {
        loginContainer.classList.add("hidden");
    };

    authCloseBtn.addEventListener("click", closeOverlay);

    // Bind Guest Trigger Buttons
    document.getElementById("about-signin-btn").addEventListener("click", () => openOverlay("signin"));
    document.getElementById("about-signup-btn").addEventListener("click", () => openOverlay("signup"));
    document.getElementById("topbar-signin-btn").addEventListener("click", () => openOverlay("signin"));
    document.getElementById("topbar-signup-btn").addEventListener("click", () => openOverlay("signup"));

    // Check startup status on load (hides overlay by default so guests can browse About)
    closeOverlay();

    // Login Form Submit (Sign In)
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const email = document.getElementById("login-email").value.trim().toLowerCase();
        const pass = document.getElementById("login-password").value.trim();
        const users = getRegisteredUsers();

        const matchedUser = users.find(u => u.email.toLowerCase() === email && u.password === pass);

        if (matchedUser) {
            state.isLoggedIn = true;
            state.currentUser = {
                name: matchedUser.name,
                role: matchedUser.role,
                dp: matchedUser.dp
            };
            saveState();
            
            // Exit guest mode and reveal dashboard
            document.body.classList.remove("guest-mode");
            closeOverlay();
            syncUserProfileUI();
            switchView("dashboard-view");
            addNotification(`Welcome back, ${state.currentUser.name}!`);
        } else {
            alert("No user found with those credentials. Please check your spelling or sign up for a new account.");
        }
    });

    // Sign Up Form Submit (Register)
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("signup-name").value.trim();
        const email = document.getElementById("signup-email").value.trim().toLowerCase();
        const pass = document.getElementById("signup-password").value.trim();
        const role = document.getElementById("signup-role").value.trim();
        const users = getRegisteredUsers();

        if (users.some(u => u.email.toLowerCase() === email)) {
            alert("Email is already registered! Please sign in.");
            return;
        }

        const newUser = {
            name: name,
            email: email,
            password: pass,
            role: role,
            dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
        };

        users.push(newUser);
        saveRegisteredUsers(users);

        state.isLoggedIn = true;
        state.currentUser = {
            name: newUser.name,
            role: newUser.role,
            dp: newUser.dp
        };
        saveState();

        // Exit guest mode and reveal dashboard
        document.body.classList.remove("guest-mode");
        closeOverlay();
        syncUserProfileUI();
        switchView("dashboard-view");
        addNotification(`Account created successfully! Welcome, ${state.currentUser.name}.`);
    });

    // Logout Action
    logoutTrigger.addEventListener("click", () => {
        if (confirm("Are you sure you want to sign out?")) {
            state.isLoggedIn = false;
            saveState();
            
            // Return to Guest Mode and redirect to About Page
            document.body.classList.add("guest-mode");
            showSignInForm();
            switchView("about-view");
            addNotification("Logged out successfully.");
        }
    });
}

function syncUserProfileUI() {
    // Top bar sync
    document.getElementById("topbar-profile-pic").src = state.currentUser.dp;
    document.getElementById("topbar-user-name").textContent = state.currentUser.name;
    document.getElementById("topbar-user-role").textContent = state.currentUser.role;

    // Sidebar sync
    document.getElementById("sidebar-profile-pic").src = state.currentUser.dp;
    document.getElementById("sidebar-user-name").textContent = state.currentUser.name;
    document.getElementById("sidebar-user-role").textContent = state.currentUser.role;

    // Dashboard welcome greeting sync
    const shortName = state.currentUser.name.split(" ")[0];
    document.getElementById("welcome-user-name").textContent = `${shortName}!`;
}

// --- CONTROLLER: PROFILE SETTINGS EDITOR (CHANGE DP) ---
function initProfileEditor() {
    const modal = document.getElementById("profile-modal");
    const closeBtn = document.getElementById("profile-modal-close");
    const cancelBtn = document.getElementById("profile-modal-cancel");
    const form = document.getElementById("profile-form");
    const presets = document.querySelectorAll(".preset-avatar-img");
    const dpInput = document.getElementById("profile-pic-input");
    const fileInput = document.getElementById("profile-pic-file");

    const openTriggers = [
        document.getElementById("topbar-profile-trigger"),
        document.getElementById("sidebar-profile-trigger")
    ];

    openTriggers.forEach(trigger => {
        if (trigger) {
            trigger.addEventListener("click", () => {
                document.getElementById("profile-name-input").value = state.currentUser.name;
                document.getElementById("profile-role-input").value = state.currentUser.role;
                dpInput.value = state.currentUser.dp;
                fileInput.value = ""; // Clear previous file selection

                // Deactivate all preset selections initially
                presets.forEach(p => p.classList.remove("active"));
                presets.forEach(p => {
                    if (p.src === state.currentUser.dp) {
                        p.classList.add("active");
                    }
                });

                modal.classList.add("active");
            });
        }
    });

    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    cancelBtn.addEventListener("click", () => modal.classList.remove("active"));

    // Handle File upload conversion
    fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                dpInput.value = event.target.result; // Put base64 data URL into value field
                presets.forEach(p => p.classList.remove("active")); // Deselect preset avatars
            };
            reader.readAsDataURL(file);
        }
    });

    // Avatar Presets Clicking
    presets.forEach(preset => {
        preset.addEventListener("click", () => {
            presets.forEach(p => p.classList.remove("active"));
            preset.classList.add("active");
            dpInput.value = preset.src;
            fileInput.value = ""; // Clear file selection since preset is chosen
        });
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        state.currentUser.name = document.getElementById("profile-name-input").value.trim();
        state.currentUser.role = document.getElementById("profile-role-input").value.trim();
        state.currentUser.dp = dpInput.value.trim() || DEFAULT_USER.dp;

        saveState();
        syncUserProfileUI();
        modal.classList.remove("active");

        addNotification("User profile settings updated successfully.");
        if (state.currentView === "dashboard-view") {
            refreshDashboard();
        }
    });
}

// --- CONTROLLER: VIEW ROUTER ---
function initViewRouter() {
    const menuItems = document.querySelectorAll(".sidebar .menu-item");
    const sections = document.querySelectorAll(".view-section");

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            const target = item.getAttribute("data-target");

            if (target === "add-lead-btn-sidebar") {
                openLeadModal();
                return;
            }

            menuItems.forEach(mi => mi.classList.remove("active"));
            item.classList.add("active");

            sections.forEach(sec => sec.classList.remove("active"));

            const targetSection = document.getElementById(target);
            if (targetSection) {
                targetSection.classList.add("active");
                state.currentView = target;

                if (target === "dashboard-view") {
                    refreshDashboard();
                } else if (target === "all-leads-view") {
                    renderLeadsTable();
                } else if (target === "pipeline-view") {
                    renderKanbanPipeline();
                } else if (target === "follow-ups-view") {
                    renderTasks();
                    renderAutomationTimeline();
                } else if (target === "calendar-view") {
                    renderCalendar();
                } else if (target === "ai-insights-view") {
                    renderIntelligencePortal();
                } else if (target === "ai-outreach-view") {
                    populateOutreachDropdowns();
                } else if (target === "reports-view") {
                    renderReports();
                }
            }
        });
    });

    document.getElementById("view-all-leads-dash").addEventListener("click", () => {
        triggerSidebarNavigation("all-leads-view");
    });
    document.getElementById("view-all-ai-insights").addEventListener("click", () => {
        triggerSidebarNavigation("ai-insights-view");
    });
    document.getElementById("view-all-followups-dash").addEventListener("click", () => {
        triggerSidebarNavigation("follow-ups-view");
    });

    document.getElementById("action-view-tasks").addEventListener("click", () => {
        triggerSidebarNavigation("follow-ups-view");
    });
    document.getElementById("action-view-leads").addEventListener("click", () => {
        triggerSidebarNavigation("all-leads-view");
    });
    document.getElementById("action-generate-email").addEventListener("click", () => {
        triggerSidebarNavigation("ai-outreach-view");
    });
}

function triggerSidebarNavigation(targetViewId) {
    const menuItem = document.querySelector(`.sidebar .menu-item[data-target="${targetViewId}"]`);
    if (menuItem) {
        menuItem.click();
    }
}

// --- CONTROLLER: NOTIFICATIONS ---
function initNotifications() {
    const trigger = document.getElementById("notification-trigger");
    const dropdown = document.getElementById("notif-dropdown");
    const markReadBtn = document.getElementById("mark-read-btn");

    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("active");
    });

    document.addEventListener("click", () => {
        dropdown.classList.remove("active");
    });

    dropdown.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    markReadBtn.addEventListener("click", () => {
        state.notifications.forEach(n => n.read = true);
        saveState();
        updateNotificationUI();
    });

    updateNotificationUI();
}

function addNotification(message) {
    state.notifications.unshift({
        id: "notif-" + Date.now(),
        message: message,
        time: "Just now",
        read: false
    });
    saveState();
    updateNotificationUI();
}

function updateNotificationUI() {
    const badge = document.getElementById("notif-count");
    const list = document.getElementById("notification-list");

    const unreadCount = state.notifications.filter(n => !n.read).length;
    badge.textContent = unreadCount;
    badge.style.display = unreadCount > 0 ? "flex" : "none";

    list.innerHTML = "";
    if (state.notifications.length === 0) {
        list.innerHTML = `<div style="padding:16px;text-align:center;color:var(--text-muted);font-size:12px;">No notifications</div>`;
        return;
    }

    state.notifications.forEach(notif => {
        const item = document.createElement("div");
        item.className = `notification-item ${notif.read ? '' : 'unread'}`;
        item.innerHTML = `
            <p>${notif.message}</p>
            <span class="time">${notif.time}</span>
        `;
        item.addEventListener("click", () => {
            notif.read = true;
            saveState();
            updateNotificationUI();
        });
        list.appendChild(item);
    });
}

// --- CONTROLLER: DASHBOARD & CHARTS ---
function refreshDashboard() {
    const totalCount = state.leads.length;
    const activeCount = state.leads.filter(l => l.status !== "Closed").length;
    const meetingsCount = state.meetings.length;
    const proposalsCount = state.leads.filter(l => l.status === "Proposal Sent").length;
    const closedCount = state.leads.filter(l => l.status === "Closed").length;

    document.getElementById("metric-total").textContent = (totalCount + 1100).toLocaleString();
    document.getElementById("metric-active").textContent = activeCount;
    document.getElementById("metric-meetings").textContent = meetingsCount + 70;
    document.getElementById("metric-proposals").textContent = proposalsCount + 42;
    document.getElementById("metric-closed").textContent = closedCount + 17;

    const recentBody = document.querySelector("#recent-leads-table tbody");
    recentBody.innerHTML = "";

    const sortedLeads = [...state.leads].sort((a, b) => b.priorityScore - a.priorityScore);
    const recentLeads = sortedLeads.slice(0, 5);

    recentLeads.forEach(lead => {
        const tr = document.createElement("tr");

        let badgeClass = "badge-new";
        if (lead.status === "Contacted") badgeClass = "badge-contacted";
        else if (lead.status === "Meeting Scheduled") badgeClass = "badge-meeting";
        else if (lead.status === "Proposal Sent") badgeClass = "badge-proposal";
        else if (lead.status === "Negotiation") badgeClass = "badge-negotiation";
        else if (lead.status === "Closed") badgeClass = "badge-closed";

        let scoreClass = "score-low";
        if (lead.priorityScore > 80) scoreClass = "score-high";
        else if (lead.priorityScore >= 50) scoreClass = "score-medium";

        tr.innerHTML = `
            <td>
                <div class="institution-cell">
                    <span class="institution-name">${lead.collegeName}</span>
                    <span class="institution-sub">${lead.type}</span>
                </div>
            </td>
            <td>
                <div class="institution-cell">
                    <span class="institution-name">${lead.contactPerson}</span>
                    <span class="institution-sub">${lead.email}</span>
                </div>
            </td>
            <td>${lead.location}</td>
            <td><span class="badge ${badgeClass}">${lead.status}</span></td>
            <td><span class="score-indicator ${scoreClass}">${lead.priorityScore}</span></td>
        `;
        recentBody.appendChild(tr);
    });

    const topLead = sortedLeads[0];
    const topLeadInsightContainer = document.getElementById("top-lead-ai-insight");

    if (topLead) {
        const dashOffset = 226 - (226 * topLead.priorityScore) / 100;
        topLeadInsightContainer.innerHTML = `
            <div class="ai-top-header">
                <div class="ai-univ-info">
                    <h4>${topLead.collegeName}</h4>
                    <p><i class="fa-solid fa-location-dot"></i> ${topLead.location} | Strength: ${topLead.strength.toLocaleString()}</p>
                </div>
                <div class="ai-score-radial">
                    <svg class="radial-svg">
                        <circle class="radial-bg" cx="45" cy="45" r="36" />
                        <circle class="radial-progress" cx="45" cy="45" r="36" style="stroke-dashoffset: ${dashOffset};" />
                    </svg>
                    <div class="radial-text">
                        <span class="radial-score">${topLead.priorityScore}</span>
                        <span class="radial-lbl">Score</span>
                    </div>
                </div>
            </div>
            <div class="ai-summary-box">
                <h5>AI Lead Summary</h5>
                <p>${topLead.notes || 'Institutional partner displays strong alignment for bootcamp partnerships.'}</p>
            </div>
            <div class="ai-next-action">
                <i class="fa-solid fa-rocket"></i>
                <div>
                    <strong>Next Best Action:</strong>
                    <div style="margin-top:2px;">${generateNextAction(topLead)}</div>
                </div>
            </div>
            <div style="display:flex; justify-content: flex-end; margin-top: 8px;">
                <button class="btn btn-secondary btn-sm" onclick="triggerEmailDraft('${topLead.id}')">
                    <i class="fa-solid fa-paper-plane"></i> Draft Email
                </button>
            </div>
        `;
    } else {
        topLeadInsightContainer.innerHTML = `<div class="empty-state"><p>No leads found.</p></div>`;
    }

    const followupsBody = document.querySelector("#dashboard-followups-table tbody");
    followupsBody.innerHTML = "";

    const pendingTasks = state.tasks.filter(t => t.status !== "Completed").slice(0, 5);
    if (pendingTasks.length === 0) {
        followupsBody.innerHTML = `<tr><td colspan="4" style="text-align:center;color:var(--text-muted);">No pending follow-ups</td></tr>`;
    } else {
        pendingTasks.forEach(task => {
            const lead = state.leads.find(l => l.id === task.leadId);
            const instName = lead ? lead.collegeName : "General Task";

            let statusBadge = "badge-pending";
            if (task.status === "Overdue") statusBadge = "badge-overdue";

            const dateObj = new Date(task.dueDate);
            const dateStr = dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>
                    <div class="institution-cell">
                        <span class="institution-name">${task.title}</span>
                        <span class="institution-sub">${instName}</span>
                    </div>
                </td>
                <td>${dateStr}</td>
                <td>
                    <div style="display:flex;align-items:center;gap:6px;">
                        <img src="${state.currentUser.dp}" alt="avatar" style="width:20px;height:20px;border-radius:50%;object-fit:cover;">
                        <span>${state.currentUser.name}</span>
                    </div>
                </td>
                <td><span class="badge ${statusBadge}">${task.status}</span></td>
            `;
            followupsBody.appendChild(tr);
        });
    }

    const overdueCount = state.tasks.filter(t => t.status === "Overdue").length;
    const highPriorityCount = state.leads.filter(l => l.priorityScore >= 80).length;
    document.getElementById("ai-assistant-greeting").innerHTML = `Hey ${state.currentUser.name.split(" ")[0]}! You have <strong>${pendingTasks.length} pending follow-ups</strong> (${overdueCount} overdue) and <strong>${highPriorityCount} high priority leads</strong> to connect with today.`;

    initCharts(totalCount, activeCount, meetingsCount, proposalsCount, closedCount);
}

function triggerEmailDraft(leadId) {
    state.outreachSelectedLeadId = leadId;
    triggerSidebarNavigation("ai-outreach-view");
    setTimeout(() => {
        const select = document.getElementById("outreach-lead-select");
        if (select) {
            select.value = leadId;
            document.getElementById("generate-outreach-btn").click();
        }
    }, 100);
}

// --- INITIALIZE CHARTS ---
function initCharts(total, active, meetings, proposals, closed) {
    const statusCounts = {
        "New Lead": 0,
        "Contacted": 0,
        "Meeting Scheduled": 0,
        "Proposal Sent": 0,
        "Negotiation": 0,
        "Closed": 0
    };

    state.leads.forEach(l => {
        if (statusCounts[l.status] !== undefined) {
            statusCounts[l.status]++;
        }
    });

    if (state.charts.statusChart) state.charts.statusChart.destroy();
    if (state.charts.conversionsChart) state.charts.conversionsChart.destroy();
    if (state.charts.pipelineChart) state.charts.pipelineChart.destroy();

    const ctx1 = document.getElementById('leadStatusChart').getContext('2d');
    state.charts.statusChart = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: Object.keys(statusCounts),
            datasets: [{
                data: Object.values(statusCounts),
                backgroundColor: ['#3b82f6', '#f59e0b', '#06b6d4', '#10b981', '#84cc16', '#047857'],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { boxWidth: 12, font: { size: 11, family: 'Inter' } }
                }
            },
            cutout: '65%'
        }
    });

    const ctx2 = document.getElementById('conversionsChart').getContext('2d');
    state.charts.conversionsChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Conversions',
                data: [15, 28, 45, 38, 62, closed + 17],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#10b981',
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { grid: { color: '#f1f5f9' }, ticks: { font: { size: 10 } } },
                x: { grid: { display: false }, ticks: { font: { size: 10 } } }
            }
        }
    });

    const ctx3 = document.getElementById('pipelineChart').getContext('2d');
    const pipelineData = [
        total + 1000,
        statusCounts["Contacted"] + statusCounts["Meeting Scheduled"] + statusCounts["Proposal Sent"] + statusCounts["Negotiation"] + statusCounts["Closed"] + 800,
        statusCounts["Meeting Scheduled"] + statusCounts["Proposal Sent"] + statusCounts["Negotiation"] + statusCounts["Closed"] + 450,
        statusCounts["Proposal Sent"] + statusCounts["Negotiation"] + statusCounts["Closed"] + 250,
        statusCounts["Negotiation"] + statusCounts["Closed"] + 115,
        statusCounts["Closed"] + 82
    ];

    state.charts.pipelineChart = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['New Lead', 'Contacted', 'Meeting Scheduled', 'Proposal Sent', 'Negotiation', 'Closed Won'],
            datasets: [{
                data: pipelineData,
                backgroundColor: ['#a7f3d0', '#6ee7b7', '#34d399', '#059669', '#047857', '#064e3b'],
                borderRadius: 6,
                barThickness: 16
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { color: '#f1f5f9' }, ticks: { font: { size: 10 } } },
                y: { grid: { display: false }, ticks: { font: { size: 11, weight: 'bold' } } }
            }
        }
    });
}

// --- CONTROLLER: LEADS TABLE & FILTERS ---
function renderLeadsTable() {
    const tbody = document.querySelector("#all-leads-table tbody");
    tbody.innerHTML = "";

    const query = document.getElementById("leads-search-input").value.toLowerCase();
    const typeFilter = document.getElementById("filter-type").value;
    const statusFilter = document.getElementById("filter-status").value;
    const priorityFilter = document.getElementById("filter-priority").value;

    const filtered = state.leads.filter(lead => {
        const matchSearch = lead.collegeName.toLowerCase().includes(query) ||
            lead.contactPerson.toLowerCase().includes(query) ||
            lead.location.toLowerCase().includes(query);
        const matchType = typeFilter === "all" || lead.type === typeFilter;
        const matchStatus = statusFilter === "all" || lead.status === statusFilter;

        let matchPriority = true;
        if (priorityFilter === "high") matchPriority = lead.priorityScore >= 80;
        else if (priorityFilter === "medium") matchPriority = lead.priorityScore >= 50 && lead.priorityScore < 80;
        else if (priorityFilter === "low") matchPriority = lead.priorityScore < 50;

        return matchSearch && matchType && matchStatus && matchPriority;
    });

    document.getElementById("pagination-info").textContent = `Showing 1-${filtered.length} of ${filtered.length} leads`;

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:32px;color:var(--text-muted);">No leads match the filter criteria.</td></tr>`;
        return;
    }

    filtered.forEach(lead => {
        const tr = document.createElement("tr");

        let badgeClass = "badge-new";
        if (lead.status === "Contacted") badgeClass = "badge-contacted";
        else if (lead.status === "Meeting Scheduled") badgeClass = "badge-meeting";
        else if (lead.status === "Proposal Sent") badgeClass = "badge-proposal";
        else if (lead.status === "Negotiation") badgeClass = "badge-negotiation";
        else if (lead.status === "Closed") badgeClass = "badge-closed";

        let scoreClass = "score-low";
        if (lead.priorityScore > 80) scoreClass = "score-high";
        else if (lead.priorityScore >= 50) scoreClass = "score-medium";

        tr.innerHTML = `
            <td>
                <div class="institution-cell">
                    <span class="institution-name">${lead.collegeName}</span>
                    <span class="institution-sub"><i class="fa-solid fa-location-dot"></i> ${lead.location}</span>
                </div>
            </td>
            <td>
                <div class="institution-cell">
                    <span class="institution-name">${lead.contactPerson}</span>
                    <span class="institution-sub">${lead.email} | ${lead.phone || 'N/A'}</span>
                </div>
            </td>
            <td>
                <div class="institution-cell">
                    <span class="institution-name">${lead.type}</span>
                    <span class="institution-sub">Strength: ${lead.strength.toLocaleString()}</span>
                </div>
            </td>
            <td><span class="institution-name" style="font-size:12px;">${lead.interest}</span></td>
            <td><span class="badge ${badgeClass}">${lead.status}</span></td>
            <td><span class="score-indicator ${scoreClass}">${lead.priorityScore}</span></td>
            <td>
                <div style="display:flex;gap:6px;">
                    <button class="btn-icon-sm" onclick="editLead('${lead.id}')" title="Edit Lead"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="btn-icon-sm" onclick="triggerEmailDraft('${lead.id}')" title="AI Outreach"><i class="fa-solid fa-wand-magic-sparkles"></i></button>
                    <button class="btn-icon-sm" onclick="deleteLead('${lead.id}')" style="color:#ef4444;border-color:#fca5a5;" title="Delete Lead"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function initLeadsFilters() {
    document.getElementById("leads-search-input").addEventListener("input", renderLeadsTable);
    document.getElementById("filter-type").addEventListener("change", renderLeadsTable);
    document.getElementById("filter-status").addEventListener("change", renderLeadsTable);
    document.getElementById("filter-priority").addEventListener("change", renderLeadsTable);
}

// --- CONTROLLER: ADD / EDIT LEAD MODAL ---
function initLeadForm() {
    const modal = document.getElementById("lead-modal");
    const closeBtn = document.getElementById("lead-modal-close");
    const cancelBtn = document.getElementById("lead-modal-cancel");
    const form = document.getElementById("lead-form");

    const openAddTriggers = ["add-lead-btn-top", "add-lead-btn-leads-view", "add-lead-btn-pipeline"];
    openAddTriggers.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener("click", () => openLeadModal());
    });

    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    cancelBtn.addEventListener("click", () => modal.classList.remove("active"));

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const id = document.getElementById("lead-id").value;
        const collegeName = document.getElementById("lead-college-name").value;
        const location = document.getElementById("lead-location").value;
        const contactPerson = document.getElementById("lead-contact-person").value;
        const email = document.getElementById("lead-email").value;
        const phone = document.getElementById("lead-phone").value;
        const type = document.getElementById("lead-type").value;
        const strength = parseInt(document.getElementById("lead-strength").value);
        const interest = document.getElementById("lead-interest").value;
        const source = document.getElementById("lead-source").value;
        const status = document.getElementById("lead-status").value;

        const leadData = {
            collegeName, location, contactPerson, email, phone, type, strength, interest, source, status,
            assignedTo: state.currentUser.name
        };

        leadData.priorityScore = calculateAIScore(leadData);

        if (id) {
            const index = state.leads.findIndex(l => l.id === id);
            if (index !== -1) {
                state.leads[index] = { ...state.leads[index], ...leadData };
                addNotification(`Updated lead details for ${collegeName}.`);
            }
        } else {
            leadData.id = "lead-" + Date.now();
            leadData.notes = `${collegeName} added to outreach pipeline. Auto-analyzed by CRM AI.`;
            state.leads.unshift(leadData);

            state.automationLogs.unshift({
                message: `Lead Registered: ${collegeName}`,
                detail: `AI analyzed parameters. Score: ${leadData.priorityScore}/100.`,
                time: new Date().toLocaleString()
            });

            state.tasks.unshift({
                id: "task-" + Date.now(),
                leadId: leadData.id,
                title: "AI Action: Contact Lead Coordinator",
                description: `Initiate outreach to ${contactPerson} regarding interest in ${interest}.`,
                dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
                priority: leadData.priorityScore >= 80 ? "High" : "Medium",
                status: "Pending",
                owner: state.currentUser.name
            });

            addNotification(`Registered new B2B lead '${collegeName}'.`);
        }

        saveState();
        modal.classList.remove("active");

        if (state.currentView === "dashboard-view") refreshDashboard();
        else if (state.currentView === "all-leads-view") renderLeadsTable();
        else if (state.currentView === "pipeline-view") renderKanbanPipeline();
    });
}

function openLeadModal(leadToEdit = null) {
    const modal = document.getElementById("lead-modal");
    const title = document.getElementById("lead-modal-title");
    const form = document.getElementById("lead-form");

    form.reset();

    if (leadToEdit) {
        title.textContent = `Modify Lead: ${leadToEdit.collegeName}`;
        document.getElementById("lead-id").value = leadToEdit.id;
        document.getElementById("lead-college-name").value = leadToEdit.collegeName;
        document.getElementById("lead-location").value = leadToEdit.location;
        document.getElementById("lead-contact-person").value = leadToEdit.contactPerson;
        document.getElementById("lead-email").value = leadToEdit.email;
        document.getElementById("lead-phone").value = leadToEdit.phone || '';
        document.getElementById("lead-type").value = leadToEdit.type;
        document.getElementById("lead-strength").value = leadToEdit.strength;
        document.getElementById("lead-interest").value = leadToEdit.interest;
        document.getElementById("lead-source").value = leadToEdit.source;
        document.getElementById("lead-status").value = leadToEdit.status;
    } else {
        title.textContent = "Add New Institution Lead";
        document.getElementById("lead-id").value = "";
    }

    modal.classList.add("active");
}

window.editLead = function (id) {
    const lead = state.leads.find(l => l.id === id);
    if (lead) {
        openLeadModal(lead);
    }
};

window.deleteLead = function (id) {
    if (confirm("Are you sure you want to delete this lead?")) {
        const leadIndex = state.leads.findIndex(l => l.id === id);
        if (leadIndex !== -1) {
            const name = state.leads[leadIndex].collegeName;
            state.leads.splice(leadIndex, 1);
            state.tasks = state.tasks.filter(t => t.leadId !== id);
            state.meetings = state.meetings.filter(m => m.leadId !== id);

            addNotification(`Lead ${name} has been removed.`);
            saveState();

            if (state.currentView === "all-leads-view") renderLeadsTable();
            else if (state.currentView === "dashboard-view") refreshDashboard();
            else if (state.currentView === "pipeline-view") renderKanbanPipeline();
        }
    }
};

// --- CONTROLLER: PIPELINE (KANBAN BOARD) ---
function renderKanbanPipeline() {
    const board = document.getElementById("kanban-board");
    board.innerHTML = "";

    const stages = ["New Lead", "Contacted", "Meeting Scheduled", "Proposal Sent", "Negotiation", "Closed"];

    stages.forEach(stage => {
        const stageLeads = state.leads.filter(l => l.status === stage);

        const column = document.createElement("div");
        column.className = "kanban-column";
        column.setAttribute("data-stage", stage);
        column.addEventListener("dragover", dragOver);
        column.addEventListener("drop", dropCard);

        column.innerHTML = `
            <div class="kanban-column-header">
                <h3>${stage}</h3>
                <span class="count-badge">${stageLeads.length}</span>
            </div>
            <div class="kanban-cards-container"></div>
        `;

        const cardsContainer = column.querySelector(".kanban-cards-container");

        stageLeads.forEach(lead => {
            const card = document.createElement("div");
            card.className = "kanban-card";
            card.setAttribute("draggable", "true");
            card.setAttribute("id", lead.id);
            card.addEventListener("dragstart", dragStart);

            let scoreClass = "score-low";
            if (lead.priorityScore > 80) scoreClass = "score-high";
            else if (lead.priorityScore >= 50) scoreClass = "score-medium";

            card.innerHTML = `
                <div class="kanban-card-title">${lead.collegeName}</div>
                <div class="kanban-card-loc"><i class="fa-solid fa-location-dot"></i> ${lead.location}</div>
                <div style="font-size:11px;font-weight:600;color:var(--text-secondary);margin-bottom:8px;">${lead.interest}</div>
                <div class="kanban-card-meta">
                    <span class="kanban-card-strength"><i class="fa-solid fa-users"></i> ${lead.strength.toLocaleString()}</span>
                    <span class="score-indicator ${scoreClass}" style="width:22px;height:22px;font-size:9px;">${lead.priorityScore}</span>
                </div>
            `;
            cardsContainer.appendChild(card);
        });

        board.appendChild(column);
    });
}

let draggedCardId = null;

function dragStart(e) {
    draggedCardId = e.target.id;
    e.dataTransfer.setData("text/plain", e.target.id);
}

function dragOver(e) {
    e.preventDefault();
}

function dropCard(e) {
    e.preventDefault();
    const stage = this.getAttribute("data-stage");
    const lead = state.leads.find(l => l.id === draggedCardId);

    if (lead && lead.status !== stage) {
        const oldStatus = lead.status;
        lead.status = stage;
        lead.priorityScore = calculateAIScore(lead);

        state.automationLogs.unshift({
            message: `Lead Stage Changed: ${lead.collegeName}`,
            detail: `Moved from '${oldStatus}' to '${stage}'. New AI score: ${lead.priorityScore}/100.`,
            time: new Date().toLocaleString()
        });

        if (stage === "Meeting Scheduled") {
            state.tasks.unshift({
                id: "task-" + Date.now(),
                leadId: lead.id,
                title: "Prep Alignment Proposal",
                description: `Create customized program syllabus proposal for ${lead.collegeName} alignment meeting.`,
                dueDate: new Date(Date.now() + 172800000).toISOString().split('T')[0],
                priority: "High",
                status: "Pending",
                owner: state.currentUser.name
            });
            addNotification(`Automated trigger: Created Proposal Prep task for ${lead.collegeName}.`);
        }

        addNotification(`Moved ${lead.collegeName} to ${stage} stage.`);
        saveState();
        renderKanbanPipeline();
    }
}

// --- CONTROLLER: MY FOLLOW-UPS & TASKS ---
function renderTasks() {
    const list = document.getElementById("task-list-container");
    list.innerHTML = "";

    const activeFilter = document.querySelector(".filter-tabs .tab-btn.active").getAttribute("data-task-filter");

    let filteredTasks = state.tasks;
    if (activeFilter === "pending") filteredTasks = state.tasks.filter(t => t.status === "Pending");
    else if (activeFilter === "completed") filteredTasks = state.tasks.filter(t => t.status === "Completed");
    else if (activeFilter === "overdue") filteredTasks = state.tasks.filter(t => t.status === "Overdue");

    if (filteredTasks.length === 0) {
        list.innerHTML = `<div class="empty-state"><i class="fa-solid fa-check-circle"></i><p>No tasks fit this filter.</p></div>`;
        return;
    }

    filteredTasks.forEach(task => {
        const lead = state.leads.find(l => l.id === task.leadId);
        const instName = lead ? lead.collegeName : "General";

        const div = document.createElement("div");
        div.className = `task-item ${task.status === 'Completed' ? 'completed' : ''}`;

        let priorityBadgeClass = "badge-new";
        if (task.priority === "High") priorityBadgeClass = "badge-overdue";
        else if (task.priority === "Medium") priorityBadgeClass = "badge-contacted";

        const formattedDate = new Date(task.dueDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short' });

        div.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.status === 'Completed' ? 'checked' : ''} onclick="toggleTaskStatus('${task.id}')">
            <div class="task-details">
                <div class="task-title">${task.title}</div>
                <div class="task-desc">${task.description}</div>
                <div class="task-meta-row">
                    <span class="badge ${priorityBadgeClass}">${task.priority} Priority</span>
                    <span class="task-date"><i class="fa-regular fa-calendar"></i> Due: ${formattedDate}</span>
                    <span style="font-weight:600;"><i class="fa-solid fa-graduation-cap"></i> ${instName}</span>
                </div>
            </div>
            <button class="btn-icon-sm" onclick="deleteTask('${task.id}')" style="border:none;color:#ef4444;" title="Delete Task"><i class="fa-solid fa-trash-can"></i></button>
        `;
        list.appendChild(div);
    });
}

function initTasksTabEvents() {
    const tabs = document.querySelectorAll(".filter-tabs .tab-btn");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            renderTasks();
        });
    });

    document.getElementById("add-followup-trigger").addEventListener("click", () => {
        openScheduleMeetingModal();
    });
}

window.toggleTaskStatus = function (taskId) {
    const task = state.tasks.find(t => t.id === taskId);
    if (task) {
        const isCompleted = task.status === "Completed";
        task.status = isCompleted ? "Pending" : "Completed";

        state.automationLogs.unshift({
            message: `Task Completed: ${task.title}`,
            detail: `Task marked as done by ${state.currentUser.name}.`,
            time: new Date().toLocaleString()
        });

        addNotification(`Marked task '${task.title}' as ${task.status === 'Completed' ? 'completed' : 'pending'}.`);
        saveState();
        renderTasks();
    }
};

window.deleteTask = function (taskId) {
    state.tasks = state.tasks.filter(t => t.id !== taskId);
    saveState();
    renderTasks();
};

function renderAutomationTimeline() {
    const container = document.getElementById("automation-timeline");
    container.innerHTML = "";

    state.automationLogs.slice(0, 10).forEach(log => {
        const item = document.createElement("div");
        item.className = "timeline-item";
        item.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-info">
                <span class="timeline-title">${log.message}</span>
                <p class="timeline-desc">${log.detail}</p>
                <span class="timeline-time">${log.time}</span>
            </div>
        `;
        container.appendChild(item);
    });
}

// --- CONTROLLER: CALENDAR & MEETING SCHEDULER ---
function renderCalendar() {
    const container = document.getElementById("calendar-days");
    const monthTitle = document.getElementById("cal-month-title");
    container.innerHTML = "";

    const date = state.selectedDate;
    const year = date.getFullYear();
    const month = date.getMonth();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthTitle.textContent = `${monthNames[month]} ${year}`;

    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDayIndex; i++) {
        const emptyDiv = document.createElement("div");
        emptyDiv.className = "calendar-day empty";
        container.appendChild(emptyDiv);
    }

    for (let day = 1; day <= totalDays; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.className = "calendar-day";

        const monthStr = (month + 1).toString().padStart(2, '0');
        const dayStr = day.toString().padStart(2, '0');
        const dateString = `${year}-${monthStr}-${dayStr}`;

        dayDiv.setAttribute("data-date", dateString);

        const currSelectedStr = state.selectedDate.toISOString().split('T')[0];
        if (dateString === currSelectedStr) {
            dayDiv.classList.add("selected");
        }

        if (dateString === "2026-06-25") {
            dayDiv.classList.add("today");
        }

        const dayMeetings = state.meetings.filter(m => m.date === dateString);
        const dayTasks = state.tasks.filter(t => t.dueDate === dateString && t.status !== "Completed");

        let dotsHTML = "";
        if (dayMeetings.length > 0) dotsHTML += `<span class="dot" style="background-color: var(--primary);"></span>`;
        if (dayTasks.length > 0) dotsHTML += `<span class="dot" style="background-color: #ef4444;"></span>`;

        dayDiv.innerHTML = `
            <span class="calendar-day-num">${day}</span>
            <div class="day-dots">
                ${dotsHTML}
            </div>
        `;

        dayDiv.addEventListener("click", () => {
            state.selectedDate = new Date(dateString);
            renderCalendar();
            renderSelectedDayMeetings();
        });

        container.appendChild(dayDiv);
    }

    renderSelectedDayMeetings();
}

function renderSelectedDayMeetings() {
    const list = document.getElementById("day-meetings-list");
    const title = document.getElementById("selected-day-meetings-title");

    const dateStr = state.selectedDate.toISOString().split('T')[0];
    const dateObj = new Date(dateStr);
    const readableDate = dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

    title.textContent = `Schedules for ${readableDate}`;
    list.innerHTML = "";

    const dayMeetings = state.meetings.filter(m => m.date === dateStr);
    const dayTasks = state.tasks.filter(t => t.dueDate === dateStr);

    if (dayMeetings.length === 0 && dayTasks.length === 0) {
        list.innerHTML = `<div class="empty-state" style="padding:16px 0;"><i class="fa-solid fa-calendar-check" style="font-size:24px;"></i><p style="font-size:12px;">No events scheduled.</p></div>`;
        return;
    }

    dayMeetings.forEach(meet => {
        const lead = state.leads.find(l => l.id === meet.leadId);
        const instName = lead ? lead.collegeName : "General Academic Partner";

        const div = document.createElement("div");
        div.className = "meeting-list-item";
        div.innerHTML = `
            <span class="meeting-time-lbl"><i class="fa-solid fa-clock"></i> ${meet.time} - Meeting</span>
            <div class="meeting-item-title">${meet.title}</div>
            <div class="meeting-item-univ">${instName}</div>
            ${meet.description ? `<p style="font-size:11px;color:var(--text-muted);margin-top:6px;border-top:1px dashed var(--border-color);padding-top:4px;">${meet.description}</p>` : ''}
        `;
        list.appendChild(div);
    });

    dayTasks.forEach(task => {
        const lead = state.leads.find(l => l.id === task.leadId);
        const instName = lead ? lead.collegeName : "General";

        const div = document.createElement("div");
        div.className = "meeting-list-item";
        div.style.borderLeft = "3px solid #ef4444";
        div.innerHTML = `
            <span class="meeting-time-lbl" style="color:#ef4444;"><i class="fa-solid fa-circle-exclamation"></i> Follow-up Task</span>
            <div class="meeting-item-title">${task.title}</div>
            <div class="meeting-item-univ">${instName} | Status: <strong>${task.status}</strong></div>
        `;
        list.appendChild(div);
    });
}

function initCalendarEvents() {
    document.getElementById("cal-prev-month").addEventListener("click", () => {
        const d = state.selectedDate;
        state.selectedDate = new Date(d.getFullYear(), d.getMonth() - 1, 1);
        renderCalendar();
    });

    document.getElementById("cal-next-month").addEventListener("click", () => {
        const d = state.selectedDate;
        state.selectedDate = new Date(d.getFullYear(), d.getMonth() + 1, 1);
        renderCalendar();
    });

    const triggerBtn = document.getElementById("sidebar-schedule-meeting-trigger");
    const innerBtn = document.getElementById("calendar-add-meeting-btn");
    const modal = document.getElementById("meeting-modal");
    const closeBtn = document.getElementById("meeting-modal-close");
    const cancelBtn = document.getElementById("meeting-modal-cancel");

    const openTriggers = [triggerBtn, innerBtn];
    openTriggers.forEach(btn => {
        if (btn) btn.addEventListener("click", () => openScheduleMeetingModal());
    });

    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    cancelBtn.addEventListener("click", () => modal.classList.remove("active"));

    const form = document.getElementById("meeting-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const leadId = document.getElementById("meeting-lead-select").value;
        const date = document.getElementById("meeting-date").value;
        const time = document.getElementById("meeting-time").value;
        const title = document.getElementById("meeting-title").value;
        const description = document.getElementById("meeting-description").value;

        const newMeeting = {
            id: "meet-" + Date.now(),
            leadId, date, time, title, description
        };

        state.meetings.push(newMeeting);

        const lead = state.leads.find(l => l.id === leadId);
        if (lead && (lead.status === "New Lead" || lead.status === "Contacted")) {
            lead.status = "Meeting Scheduled";
            lead.priorityScore = calculateAIScore(lead);
            addNotification(`Automated update: ${lead.collegeName} status set to Meeting Scheduled.`);
        }

        state.tasks.unshift({
            id: "task-" + Date.now(),
            leadId: leadId,
            title: `Log outcomes: ${title}`,
            description: `Review meeting outcomes.`,
            dueDate: date,
            priority: "High",
            status: "Pending",
            owner: state.currentUser.name
        });

        state.automationLogs.unshift({
            message: `Meeting Booked: ${title}`,
            detail: `Associated with ${lead ? lead.collegeName : 'General'}.`,
            time: new Date().toLocaleString()
        });

        saveState();
        modal.classList.remove("active");

        if (state.currentView === "calendar-view") {
            renderCalendar();
        } else if (state.currentView === "dashboard-view") {
            refreshDashboard();
        }
    });
}

function openScheduleMeetingModal() {
    const modal = document.getElementById("meeting-modal");
    const select = document.getElementById("meeting-lead-select");
    const form = document.getElementById("meeting-form");

    form.reset();

    select.innerHTML = "";
    state.leads.forEach(l => {
        const opt = document.createElement("option");
        opt.value = l.id;
        opt.textContent = `${l.collegeName} (${l.contactPerson})`;
        select.appendChild(opt);
    });

    const dateStr = state.selectedDate.toISOString().split('T')[0];
    document.getElementById("meeting-date").value = dateStr;

    modal.classList.add("active");
}

// --- CONTROLLER: LEAD INTELLIGENCE PORTAL ---
function renderIntelligencePortal() {
    const list = document.getElementById("intelligence-selector-list");
    const detailCard = document.getElementById("intelligence-detail-card");

    list.innerHTML = "";

    if (state.leads.length === 0) {
        list.innerHTML = `<div class="empty-state"><p>No leads registered</p></div>`;
        detailCard.innerHTML = `<div class="empty-state"><p>Select a lead to visualize AI Intelligence diagnostics.</p></div>`;
        return;
    }

    state.leads.forEach((lead, idx) => {
        const item = document.createElement("div");
        item.className = `lead-select-item ${state.intelligenceSelectedId === lead.id || (!state.intelligenceSelectedId && idx === 0) ? 'active' : ''}`;

        if (!state.intelligenceSelectedId && idx === 0) {
            state.intelligenceSelectedId = lead.id;
        }

        let scoreClass = "score-low";
        if (lead.priorityScore > 80) scoreClass = "score-high";
        else if (lead.priorityScore >= 50) scoreClass = "score-medium";

        item.innerHTML = `
            <div>
                <div class="lead-select-item-title">${lead.collegeName}</div>
                <div class="lead-select-item-sub">${lead.contactPerson} | ${lead.location}</div>
            </div>
            <span class="score-indicator ${scoreClass}" style="width:24px;height:24px;font-size:10px;">${lead.priorityScore}</span>
        `;

        item.addEventListener("click", () => {
            state.intelligenceSelectedId = lead.id;
            renderIntelligencePortal();
        });

        list.appendChild(item);
    });

    const selectedLead = state.leads.find(l => l.id === state.intelligenceSelectedId);
    if (selectedLead) {
        const dashOffset = 226 - (226 * selectedLead.priorityScore) / 100;

        const placementStatus = selectedLead.strength > 10000 ? "High Priority Expansion" : "Mid-Tier College";
        const budgetRating = selectedLead.type === "Private University" ? "High Budget Capability" : "Restricted / Grant Based";
        const interestIndex = selectedLead.interest === "AI & ML Lab Integration" ? "Strategic Core Value" : "Standard Training Service";

        detailCard.innerHTML = `
            <div class="intelligence-header-block">
                <div>
                    <h3 style="font-size:20px;color:var(--text-primary);">${selectedLead.collegeName}</h3>
                    <p style="font-size:13px;color:var(--text-secondary);"><i class="fa-solid fa-location-dot"></i> ${selectedLead.location} | Sector: <strong>${selectedLead.type}</strong></p>
                </div>
                <button class="btn btn-primary btn-sm" onclick="triggerEmailDraft('${selectedLead.id}')">
                    <i class="fa-solid fa-wand-magic-sparkles"></i> AI Outreach Draft
                </button>
            </div>
            
            <div class="intel-radar-grid">
                <div class="intel-subcard">
                    <h4>Outreach Parameters</h4>
                    <div class="intel-metric-row"><span>Student Strength</span><span>${selectedLead.strength.toLocaleString()}</span></div>
                    <div class="intel-metric-row"><span>Lead Source</span><span>${selectedLead.source}</span></div>
                    <div class="intel-metric-row"><span>Program Interest</span><span>${selectedLead.interest}</span></div>
                    <div class="intel-metric-row"><span>Assigned Rep</span><span>${selectedLead.assignedTo}</span></div>
                </div>

                <div class="intel-subcard">
                    <h4>Predictive AI Intelligence</h4>
                    <div class="intel-metric-row"><span>Scale Category</span><span>${placementStatus}</span></div>
                    <div class="intel-metric-row"><span>MoU Budget Range</span><span>${budgetRating}</span></div>
                    <div class="intel-metric-row"><span>MoU Value Index</span><span>${interestIndex}</span></div>
                    <div class="intel-metric-row"><span>Status Stage</span><span>${selectedLead.status}</span></div>
                </div>
            </div>

            <div style="display:flex; gap: 24px; align-items:center; margin-bottom: 24px;">
                <div class="ai-score-radial" style="width: 100px; height: 100px; flex-shrink:0;">
                    <svg class="radial-svg" style="width:100px;height:100px;">
                        <circle class="radial-bg" cx="50" cy="50" r="40" style="stroke-width:10;" />
                        <circle class="radial-progress" cx="50" cy="50" r="40" style="stroke-width:10;stroke-dashoffset:${dashOffset};" />
                    </svg>
                    <div class="radial-text">
                        <span class="radial-score" style="font-size:22px;">${selectedLead.priorityScore}</span>
                        <span class="radial-lbl" style="font-size:8px;">Priority</span>
                    </div>
                </div>
                <div style="flex-grow:1;">
                    <h4 style="font-size:14px;color:var(--text-primary);margin-bottom:6px;">Priority Rationale</h4>
                    <p style="font-size:12px;color:var(--text-secondary);line-height:1.5;">
                        AI prioritizes <strong>${selectedLead.collegeName}</strong> at <strong>${selectedLead.priorityScore}/100</strong>. This score reflects an institutional size of ${selectedLead.strength.toLocaleString()} students, and their alignment with our premium <strong>${selectedLead.interest}</strong> course offerings.
                    </p>
                </div>
            </div>

            <div class="ai-summary-box" style="margin-bottom:16px;">
                <h5>CRM Notes History</h5>
                <p>${selectedLead.notes || 'No notes logged.'}</p>
            </div>

            <div class="ai-next-action">
                <i class="fa-solid fa-robot" style="font-size:20px;"></i>
                <div>
                    <strong>AI Recommendation & Suggested Next Action:</strong>
                    <div style="margin-top:2px;">${generateNextAction(selectedLead)}</div>
                </div>
            </div>
        `;
    }
}

// --- CONTROLLER: AI OUTREACH ASSISTANT ---
function populateOutreachDropdowns() {
    const select = document.getElementById("outreach-lead-select");
    select.innerHTML = "";

    state.leads.forEach(lead => {
        const opt = document.createElement("option");
        opt.value = lead.id;
        opt.textContent = `${lead.collegeName} (${lead.contactPerson})`;
        select.appendChild(opt);
    });

    if (state.outreachSelectedLeadId) {
        select.value = state.outreachSelectedLeadId;
        state.outreachSelectedLeadId = null;
    }
}

function initOutreachAssistant() {
    const generateBtn = document.getElementById("generate-outreach-btn");
    const resultBox = document.getElementById("outreach-result-box");
    const copyBtn = document.getElementById("copy-outreach-btn");

    generateBtn.addEventListener("click", () => {
        const leadId = document.getElementById("outreach-lead-select").value;
        const tone = document.querySelector('input[name="tone"]:checked').value;
        const customInstructions = document.getElementById("outreach-custom-guidelines").value;

        const lead = state.leads.find(l => l.id === leadId);
        if (!lead) {
            resultBox.innerHTML = `<div class="empty-state"><p>Please select a valid lead.</p></div>`;
            return;
        }

        resultBox.innerHTML = `<div class="empty-state"><i class="fa-solid fa-spinner fa-spin"></i><p>AI Engine compiling outreach pitch...</p></div>`;

        setTimeout(() => {
            const emailText = generatePersonalizedEmail(lead, tone, customInstructions);
            resultBox.textContent = emailText;

            state.automationLogs.unshift({
                message: `Outreach Drafted: ${lead.collegeName}`,
                detail: `AI drafted personalized message using '${tone}' style.`,
                time: new Date().toLocaleString()
            });
            saveState();
        }, 800);
    });

    copyBtn.addEventListener("click", () => {
        const text = resultBox.textContent;
        if (text && !text.includes("Select a lead and click")) {
            navigator.clipboard.writeText(text).then(() => {
                const origHTML = copyBtn.innerHTML;
                copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
                copyBtn.style.backgroundColor = "var(--primary-light)";
                copyBtn.style.color = "var(--primary-dark)";
                setTimeout(() => {
                    copyBtn.innerHTML = origHTML;
                    copyBtn.style.backgroundColor = "";
                    copyBtn.style.color = "";
                }, 2000);
            });
        }
    });
}

// --- CONTROLLER: LEAD IMPORT WIZARD ---
function initImportWizard() {
    const pasteArea = document.getElementById("csv-paste-area");
    const loadTemplateBtn = document.getElementById("load-csv-template-btn");
    const processBtn = document.getElementById("process-csv-btn");
    const previewPanel = document.getElementById("import-preview-results");

    loadTemplateBtn.addEventListener("click", () => {
        pasteArea.value = `College Name,Location,Contact Person,Email,Phone,Institution Type,Student Strength,Program Interest,Lead Source,Lead Status
LNM IIT,Jaipur RJ,Dr. S. Gupta,sgupta@lnmiit.ac.in,9876543001,Private University,3200,AI & ML Lab Integration,Academic Conference,New Lead
Techno Main,Kolkata WB,Prof. B. Roy,broy@techno.edu,9876543002,Autonomous College,6800,Technical Bootcamps,Direct Outreach,Contacted
RV Engineering,Bengaluru KA,Dr. M. Swamy,mswamy@rvce.edu,9876543003,Affiliated Engineering College,8500,Technical Bootcamps,Referral,Meeting Scheduled`;
    });

    processBtn.addEventListener("click", () => {
        const text = pasteArea.value.trim();
        if (!text) {
            previewPanel.innerHTML = `<div class="empty-state"><p>Please paste raw Excel or CSV rows before processing.</p></div>`;
            return;
        }

        const lines = text.split("\n");
        if (lines.length < 2) {
            previewPanel.innerHTML = `<div class="empty-state"><p>Data must contain headers on line 1, followed by rows.</p></div>`;
            return;
        }

        const headers = lines[0].split(/[,\t]/).map(h => h.trim().replace(/^["']|["']$/g, ''));
        const importedLeads = [];

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;

            const cols = line.split(/[,\t]/).map(c => c.trim().replace(/^["']|["']$/g, ''));

            const obj = {};
            headers.forEach((header, index) => {
                obj[header] = cols[index] || "";
            });

            const newLead = {
                id: "lead-imported-" + i + "-" + Date.now(),
                collegeName: obj["College Name"] || obj["collegeName"] || obj["Institution"] || "Unnamed College",
                location: obj["Location"] || obj["location"] || "N/A",
                contactPerson: obj["Contact Person"] || obj["contactPerson"] || obj["Contact"] || "N/A",
                email: obj["Email"] || obj["email"] || "N/A",
                phone: obj["Phone"] || obj["phone"] || "",
                type: obj["Institution Type"] || obj["type"] || "Private University",
                strength: parseInt(obj["Student Strength"] || obj["strength"]) || 1000,
                interest: obj["Program Interest"] || obj["interest"] || "Technical Bootcamps",
                source: obj["Lead Source"] || obj["source"] || "Direct Outreach",
                status: obj["Lead Status"] || obj["status"] || "New Lead",
                assignedTo: state.currentUser.name
            };

            newLead.priorityScore = calculateAIScore(newLead);
            newLead.notes = `${newLead.collegeName} imported via CSV Lead Wizard.`;

            importedLeads.push(newLead);
        }

        previewPanel.innerHTML = "";
        const wrapper = document.createElement("div");
        wrapper.className = "preview-grid-mini";

        importedLeads.forEach(lead => {
            const div = document.createElement("div");
            div.className = "preview-row-item success";
            div.innerHTML = `
                <div class="preview-row-title">${lead.collegeName}</div>
                <div style="color:var(--text-secondary);font-size:11px;">
                    ${lead.location} | Contact: ${lead.contactPerson} | AI Score: <strong>${lead.priorityScore}</strong>
                </div>
            `;
            wrapper.appendChild(div);
        });

        const commitBtn = document.createElement("button");
        commitBtn.className = "btn btn-primary w-full";
        commitBtn.style.marginTop = "16px";
        commitBtn.innerHTML = `<i class="fa-solid fa-check-double"></i> Confirm & Import ${importedLeads.length} Leads`;

        commitBtn.addEventListener("click", () => {
            state.leads.push(...importedLeads);

            state.automationLogs.unshift({
                message: `Bulk Leads Imported`,
                detail: `Successfully processed and registered ${importedLeads.length} leads.`,
                time: new Date().toLocaleString()
            });

            addNotification(`Bulk imported ${importedLeads.length} leads via CSV.`);
            saveState();

            triggerSidebarNavigation("all-leads-view");
        });

        previewPanel.appendChild(wrapper);
        previewPanel.appendChild(commitBtn);
    });

    document.getElementById("import-csv-trigger-leads-view").addEventListener("click", () => {
        triggerSidebarNavigation("import-leads-view");
    });
}

// --- CONTROLLER: REPORTS & ANALYTICS ---
function renderReports() {
    const tbody = document.querySelector("#reports-performance-table tbody");
    tbody.innerHTML = "";

    state.leads.forEach(lead => {
        const tr = document.createElement("tr");

        const activeTasks = state.tasks.filter(t => t.leadId === lead.id && t.status !== "Completed").length;

        let scoreClass = "score-low";
        if (lead.priorityScore > 80) scoreClass = "score-high";
        else if (lead.priorityScore >= 50) scoreClass = "score-medium";

        let progressVal = 10;
        if (lead.status === "Contacted") progressVal = 25;
        else if (lead.status === "Meeting Scheduled") progressVal = 50;
        else if (lead.status === "Proposal Sent") progressVal = 70;
        else if (lead.status === "Negotiation") progressVal = 85;
        else if (lead.status === "Closed") progressVal = 100;

        tr.innerHTML = `
            <td>
                <div class="institution-cell">
                    <span class="institution-name">${lead.collegeName}</span>
                    <span class="institution-sub">${lead.location} | Rep: ${lead.assignedTo}</span>
                </div>
            </td>
            <td><span class="institution-name" style="font-size:12px;">${lead.interest}</span></td>
            <td><span class="score-indicator ${scoreClass}">${lead.priorityScore}</span></td>
            <td><strong style="color:var(--text-primary);">${activeTasks}</strong> active items</td>
            <td>
                <div style="display:flex;align-items:center;gap:10px;">
                    <div style="flex-grow:1;height:6px;background-color:var(--border-color);border-radius:3px;overflow:hidden;width:100px;">
                        <div style="width:${progressVal}%;height:100%;background-color:var(--primary);border-radius:3px;"></div>
                    </div>
                    <span style="font-size:11px;font-weight:600;color:var(--text-secondary);">${progressVal}%</span>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });

    document.getElementById("download-report-btn").addEventListener("click", () => {
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Institution Name,Location,Contact Person,Email,Type,Student Strength,Program Interest,Priority Score,Status\n";

        state.leads.forEach(l => {
            const row = `"${l.collegeName}","${l.location}","${l.contactPerson}","${l.email}","${l.type}",${l.strength},"${l.interest}",${l.priorityScore},"${l.status}"`;
            csvContent += row + "\n";
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "academic_leads_report.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// --- CONTROLLER: ABOUT TABS ---
function initAboutTabs() {
    const tabBtns = document.querySelectorAll(".about-tab-btn");
    const tabPanes = document.querySelectorAll(".about-tab-pane");
    console.log("initAboutTabs found buttons:", tabBtns.length, "panes:", tabPanes.length);

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const tabId = btn.getAttribute("data-tab");
            console.log("Tab clicked:", tabId);

            tabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            tabPanes.forEach(pane => {
                if (pane.id === `about-tab-${tabId}`) {
                    pane.classList.add("active");
                } else {
                    pane.classList.remove("active");
                }
            });
        });
    });
}

// --- CONTROLLER: ABOUT DEMO CALCULATOR ---
function initAboutDemoCalculator() {
    const slider = document.getElementById("demo-strength-slider");
    const strengthVal = document.getElementById("demo-strength-val");
    const select = document.getElementById("demo-interest-select");
    const scoreDisplay = document.getElementById("demo-calculated-score");

    if (!slider || !strengthVal || !select || !scoreDisplay) return;

    function updateScore() {
        const strength = parseInt(slider.value);
        strengthVal.textContent = strength.toLocaleString();

        let score = 30; // base score
        if (strength > 35000) score += 35;
        else if (strength > 20000) score += 28;
        else if (strength > 10000) score += 20;
        else if (strength > 5000) score += 12;
        else score += 5;

        const interest = select.value;
        if (interest === "AI & ML Lab Integration") score += 20;
        else if (interest === "Technical Bootcamps") score += 18;
        else if (interest === "Industry Placement Drives") score += 12;
        else score += 8;

        scoreDisplay.textContent = Math.min(score, 98);
        
        const scoreWrapper = scoreDisplay.parentElement;
        if (scoreWrapper) {
            if (score >= 80) {
                scoreWrapper.style.borderColor = "var(--primary)";
                scoreWrapper.style.color = "var(--primary)";
            } else if (score >= 50) {
                scoreWrapper.style.borderColor = "#f59e0b";
                scoreWrapper.style.color = "#f59e0b";
            } else {
                scoreWrapper.style.borderColor = "#ef4444";
                scoreWrapper.style.color = "#ef4444";
            }
        }
    }

    slider.addEventListener("input", updateScore);
    select.addEventListener("change", updateScore);
    updateScore();
}

// --- APP INITIALIZER ---
document.addEventListener("DOMContentLoaded", () => {
    initAuth();
    initProfileEditor();
    initViewRouter();
    initNotifications();
    initLeadsFilters();
    initLeadForm();
    initTasksTabEvents();
    initCalendarEvents();
    initOutreachAssistant();
    initImportWizard();
    initAboutTabs();
    initAboutDemoCalculator();

    // Default startup UI Sync
    syncUserProfileUI();

    if (state.isLoggedIn) {
        refreshDashboard();
    }
});
