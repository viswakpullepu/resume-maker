// Helper: update simple text field -> preview
function bindTextInput(inputId, previewId, placeholder) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  if (!input || !preview) return;

  input.addEventListener("input", () => {
    preview.textContent = input.value.trim() || placeholder;
  });
}

// Simple one-line bindings
bindTextInput("nameInput", "previewName", "Your Name");
bindTextInput("titleInput", "previewTitle", "Your Title");
bindTextInput("emailInput", "previewEmail", "you@example.com");
bindTextInput("phoneInput", "previewPhone", "+91-1234567890");
bindTextInput("summaryInput", "previewSummary", "Write a short summary about your skills and goals.");
bindTextInput("eduSchoolInput", "previewEduSchool", "College / School");
bindTextInput("eduDegreeInput", "previewEduDegree", "Degree / Class");
bindTextInput("eduYearInput", "previewEduYear", "Year");

// Skills: textarea -> <li> list
const skillsInput = document.getElementById("skillsInput");
const previewSkills = document.getElementById("previewSkills");

if (skillsInput && previewSkills) {
  skillsInput.addEventListener("input", () => {
    const lines = skillsInput.value
      .split("\n")
      .map(line => line.trim())
      .filter(line => line.length > 0);

    previewSkills.innerHTML = "";

    if (lines.length === 0) {
      const li = document.createElement("li");
      li.textContent = "Skill 1";
      previewSkills.appendChild(li);
      return;
    }

    lines.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      previewSkills.appendChild(li);
    });
  });
}

// Experience / projects: textarea -> <li> list
const expInput = document.getElementById("expInput");
const previewExp = document.getElementById("previewExp");

if (expInput && previewExp) {
  expInput.addEventListener("input", () => {
    const lines = expInput.value
      .split("\n")
      .map(line => line.trim())
      .filter(line => line.length > 0);

    previewExp.innerHTML = "";

    if (lines.length === 0) {
      const li = document.createElement("li");
      li.textContent = "Example project or experience bullet.";
      previewExp.appendChild(li);
      return;
    }

    lines.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      previewExp.appendChild(li);
    });
  });
}

// Print / save as PDF
const printBtn = document.getElementById("printBtn");
if (printBtn) {
  printBtn.addEventListener("click", () => {
    window.print();
  });
}
