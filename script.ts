document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;

    const addressElement = document.getElementById(
      "address"
    ) as HTMLInputElement;
    const cnicElement = document.getElementById("cnic") as HTMLInputElement;
    const nationalityElement = document.getElementById(
      "nationality"
    ) as HTMLInputElement;
    const genderElement = document.getElementById("gender") as HTMLInputElement;

    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;
    const templateSelect = document.getElementById(
      "template"
    ) as HTMLSelectElement;

    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      addressElement &&
      cnicElement &&
      nationalityElement &&
      genderElement &&
      educationElement &&
      experienceElement &&
      skillsElement &&
      templateSelect
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const address = addressElement.value;
      const cnic = cnicElement.value;
      const nationality = nationalityElement.value;
      const gender = genderElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;
      const template = templateSelect.value;

      const profilePictureFile = profilePictureInput.files?.[0];
      const profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";

      const resumeOutput = `
      <h2>Resume</h2>
      ${
        profilePictureURL
          ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`
          : ""
      }
      <p><strong>Name :</strong> <span id="edit-name" class="editable">${name}</span></p>
      <p><strong>Email :</strong> <span id="edit-email" class="editable">${email}</span></p>
      <p><strong>Phone Number :</strong> <span id="edit-phone" class="editable">${phone}</span></p>
      <p><strong>Address :</strong> <span id="edit-address" class="editable">${address}</span></p>
      <p><strong>CNIC :</strong> <span id="edit-cnic" class="editable">${cnic}</span></p>
      <p><strong>Nationality :</strong> <span id="edit-nationality" class="editable">${nationality}</span></p>
      <p><strong>Gender :</strong> <span id="edit-gender" class="editable">${gender}</span></p>
      
      <h3 class="heading-education">Education :</h3>
      <p id="edit-education" class="editable">${education}</p>
      <h3 class="heading-experience">Experience :</h3>
      <p id="edit-experience" class="editable">${experience}</p>
      <h3 class="heading-skills">Skills :</h3>
      <p id="edit-skill" class="editable">${skills}</p>
    `;

      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        // Clear any existing content to avoid duplication
        resumeOutputElement.innerHTML = "";

        // Remove any existing theme classes
        resumeOutputElement.classList.remove(
          "elegantRose",
          "softLavender",
          "vibrantPlum",
          "coolMint",
          "sunsetOrange",
          "classicBlue"
        );
        resumeOutputElement.classList.add("line-height"); // Add line-height class

        // Insert the resume content
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.classList.remove("hidden");

        // Create container for buttons
        const buttonsContainer = document.createElement("div");
        buttonsContainer.id = "buttonsContainer";
        resumeOutputElement.appendChild(buttonsContainer);

        // Add Download as PDF button
        if (!document.getElementById("downloadButton")) {
          const downloadButton = document.createElement("button");
          downloadButton.id = "downloadButton";
          downloadButton.textContent = "Download as PDF";
          downloadButton.addEventListener("click", () => {
            window.print();
          });
          buttonsContainer.appendChild(downloadButton);
        }

        // Add Shareable Link button
        if (!document.getElementById("shareLinkButton")) {
          const shareLinkButton = document.createElement("button");
          shareLinkButton.id = "shareLinkButton";
          shareLinkButton.textContent = "Copy Shareable Link";
          shareLinkButton.addEventListener("click", async () => {
            try {
              const shareableLink = `https://yourdomain.com/resumes/${encodeURIComponent(
                name.replace(/\s+/g, "_")
              )}_cv.html`;
              await navigator.clipboard.writeText(shareableLink);
              alert("Shareable link copied to clipboard!");
            } catch (err) {
              console.error("Failed to copy link:", err);
              alert("Failed to copy link to clipboard. Please try again.");
            }
          });
          buttonsContainer.appendChild(shareLinkButton);
        }

        // Add the selected theme class AFTER the content is inserted
        resumeOutputElement.classList.add(template);

        // Dynamically change heading colors, hr line, profile picture, and line-height based on the selected theme
        updateHeadingColors(template);

        makeEditable(); // Make content editable
      }
    } else {
      console.error("One or more elements are missing.");
    }
  });

// Function to update heading colors, hr line, profile picture box shadow, and line-height dynamically
function updateHeadingColors(template: string) {
  const educationHeading = document.querySelector(
    ".heading-education"
  ) as HTMLElement;
  const experienceHeading = document.querySelector(
    ".heading-experience"
  ) as HTMLElement;
  const skillsHeading = document.querySelector(
    ".heading-skills"
  ) as HTMLElement;
  const profilePicture = document.querySelector(
    ".profilePicture"
  ) as HTMLElement;

  if (educationHeading && experienceHeading && skillsHeading && profilePicture) {
    // Example of how you can change colors based on the selected template
    switch (template) {
      case "elegantRose":
        educationHeading.style.color = "#d15eea";
        experienceHeading.style.color = "#d15eea";
        skillsHeading.style.color = "#d15eea";
        profilePicture.style.borderColor = "#d15eea"; // Update border color
        profilePicture.style.boxShadow = "2px 3px 15px rgba(209, 94, 234, 0.565)"; // Update box shadow color
        document
          .querySelector(".line-height")
          ?.setAttribute("style", "line-height: 1.8;");
        break;
      case "softLavender":
        educationHeading.style.color = "#a899ff";
        experienceHeading.style.color = "#a899ff";
        skillsHeading.style.color = "#a899ff";
        profilePicture.style.borderColor = "#a899ff";
        profilePicture.style.boxShadow =
          "2px 3px 15px rgba(168, 153, 255, 0.565)";
        document
          .querySelector(".line-height")
          ?.setAttribute("style", "line-height: 1.8;");
        break;
      case "vibrantPlum":
        educationHeading.style.color = "#6a1b9a";
        experienceHeading.style.color = "#6a1b9a";
        skillsHeading.style.color = "#6a1b9a";
        profilePicture.style.borderColor = "#6a1b9a";
        profilePicture.style.boxShadow =
          "2px 3px 15px rgba(106, 27, 154, 0.565)";
        document
          .querySelector(".line-height")
          ?.setAttribute("style", "line-height: 1.8;");
        break;
      case "coolMint":
        educationHeading.style.color = "#3eb489";
        experienceHeading.style.color = "#3eb489";
        skillsHeading.style.color = "#3eb489";
        profilePicture.style.borderColor = "#3eb489";
        profilePicture.style.boxShadow =
          "2px 3px 15px rgba(62, 180, 137, 0.565)";
        document
          .querySelector(".line-height")
          ?.setAttribute("style", "line-height: 1.8;");
        break;
      case "sunsetOrange":
        educationHeading.style.color = "#ff5722";
        experienceHeading.style.color = "#ff5722";
        skillsHeading.style.color = "#ff5722";
        profilePicture.style.borderColor = "#ff5722";
        profilePicture.style.boxShadow =
          "2px 3px 15px rgba(255, 87, 34, 0.565)";
        document
          .querySelector(".line-height")
          ?.setAttribute("style", "line-height: 1.8;");
        break;
      case "classicBlue":
        educationHeading.style.color = "#0d47a1";
        experienceHeading.style.color = "#0d47a1";
        skillsHeading.style.color = "#0d47a1";
        profilePicture.style.borderColor = "#0d47a1";
        profilePicture.style.boxShadow =
          "2px 3px 15px rgba(13, 71, 161, 0.565)";
        document
          .querySelector(".line-height")
          ?.setAttribute("style", "line-height: 1.8;");
        break;
    }
  }
}

// Function to make content editable
function makeEditable() {
  const editableElements = document.querySelectorAll(".editable");
  editableElements.forEach((element) => {
    element.setAttribute("contenteditable", "true");
  });
}

