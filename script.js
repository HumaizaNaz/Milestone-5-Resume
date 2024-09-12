var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("address");
    var cnicElement = document.getElementById("cnic");
    var nationalityElement = document.getElementById("nationality");
    var genderElement = document.getElementById("gender");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var templateSelect = document.getElementById("template");
    if (profilePictureInput &&
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
        templateSelect) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var cnic = cnicElement.value;
        var nationality = nationalityElement.value;
        var gender = genderElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var template = templateSelect.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        var resumeOutput = "\n      <h2>Resume</h2>\n      ".concat(profilePictureURL
            ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">")
            : "", "\n      <p><strong>Name :</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n      <p><strong>Email :</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n      <p><strong>Phone Number :</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n      <p><strong>Address :</strong> <span id=\"edit-address\" class=\"editable\">").concat(address, "</span></p>\n      <p><strong>CNIC :</strong> <span id=\"edit-cnic\" class=\"editable\">").concat(cnic, "</span></p>\n      <p><strong>Nationality :</strong> <span id=\"edit-nationality\" class=\"editable\">").concat(nationality, "</span></p>\n      <p><strong>Gender :</strong> <span id=\"edit-gender\" class=\"editable\">").concat(gender, "</span></p>\n      \n      <h3 class=\"heading-education\">Education :</h3>\n      <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n      <h3 class=\"heading-experience\">Experience :</h3>\n      <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n      <h3 class=\"heading-skills\">Skills :</h3>\n      <p id=\"edit-skill\" class=\"editable\">").concat(skills, "</p>\n    ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            // Clear any existing content to avoid duplication
            resumeOutputElement.innerHTML = "";
            // Remove any existing theme classes
            resumeOutputElement.classList.remove("elegantRose", "softLavender", "vibrantPlum", "coolMint", "sunsetOrange", "classicBlue");
            resumeOutputElement.classList.add("line-height"); // Add line-height class
            // Insert the resume content
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden");
            // Create container for buttons
            var buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);
            // Add Download as PDF button
            if (!document.getElementById("downloadButton")) {
                var downloadButton = document.createElement("button");
                downloadButton.id = "downloadButton";
                downloadButton.textContent = "Download as PDF";
                downloadButton.addEventListener("click", function () {
                    window.print();
                });
                buttonsContainer.appendChild(downloadButton);
            }
            // Add Shareable Link button
            if (!document.getElementById("shareLinkButton")) {
                var shareLinkButton = document.createElement("button");
                shareLinkButton.id = "shareLinkButton";
                shareLinkButton.textContent = "Copy Shareable Link";
                shareLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                    var shareableLink, err_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                shareableLink = "https://yourdomain.com/resumes/".concat(encodeURIComponent(name_1.replace(/\s+/g, "_")), "_cv.html");
                                return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                            case 1:
                                _a.sent();
                                alert("Shareable link copied to clipboard!");
                                return [3 /*break*/, 3];
                            case 2:
                                err_1 = _a.sent();
                                console.error("Failed to copy link:", err_1);
                                alert("Failed to copy link to clipboard. Please try again.");
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                buttonsContainer.appendChild(shareLinkButton);
            }
            // Add the selected theme class AFTER the content is inserted
            resumeOutputElement.classList.add(template);
            // Dynamically change heading colors, hr line, profile picture, and line-height based on the selected theme
            updateHeadingColors(template);
            makeEditable(); // Make content editable
        }
    }
    else {
        console.error("One or more elements are missing.");
    }
});
// Function to update heading colors, hr line, profile picture box shadow, and line-height dynamically
function updateHeadingColors(template) {
    var _a, _b, _c, _d, _e, _f;
    var educationHeading = document.querySelector(".heading-education");
    var experienceHeading = document.querySelector(".heading-experience");
    var skillsHeading = document.querySelector(".heading-skills");
    var profilePicture = document.querySelector(".profilePicture");
    if (educationHeading && experienceHeading && skillsHeading && profilePicture) {
        // Example of how you can change colors based on the selected template
        switch (template) {
            case "elegantRose":
                educationHeading.style.color = "#d15eea";
                experienceHeading.style.color = "#d15eea";
                skillsHeading.style.color = "#d15eea";
                profilePicture.style.borderColor = "#d15eea"; // Update border color
                profilePicture.style.boxShadow = "2px 3px 15px rgba(209, 94, 234, 0.565)"; // Update box shadow color
                (_a = document
                    .querySelector(".line-height")) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "line-height: 1.8;");
                break;
            case "softLavender":
                educationHeading.style.color = "#a899ff";
                experienceHeading.style.color = "#a899ff";
                skillsHeading.style.color = "#a899ff";
                profilePicture.style.borderColor = "#a899ff";
                profilePicture.style.boxShadow =
                    "2px 3px 15px rgba(168, 153, 255, 0.565)";
                (_b = document
                    .querySelector(".line-height")) === null || _b === void 0 ? void 0 : _b.setAttribute("style", "line-height: 1.8;");
                break;
            case "vibrantPlum":
                educationHeading.style.color = "#6a1b9a";
                experienceHeading.style.color = "#6a1b9a";
                skillsHeading.style.color = "#6a1b9a";
                profilePicture.style.borderColor = "#6a1b9a";
                profilePicture.style.boxShadow =
                    "2px 3px 15px rgba(106, 27, 154, 0.565)";
                (_c = document
                    .querySelector(".line-height")) === null || _c === void 0 ? void 0 : _c.setAttribute("style", "line-height: 1.8;");
                break;
            case "coolMint":
                educationHeading.style.color = "#3eb489";
                experienceHeading.style.color = "#3eb489";
                skillsHeading.style.color = "#3eb489";
                profilePicture.style.borderColor = "#3eb489";
                profilePicture.style.boxShadow =
                    "2px 3px 15px rgba(62, 180, 137, 0.565)";
                (_d = document
                    .querySelector(".line-height")) === null || _d === void 0 ? void 0 : _d.setAttribute("style", "line-height: 1.8;");
                break;
            case "sunsetOrange":
                educationHeading.style.color = "#ff5722";
                experienceHeading.style.color = "#ff5722";
                skillsHeading.style.color = "#ff5722";
                profilePicture.style.borderColor = "#ff5722";
                profilePicture.style.boxShadow =
                    "2px 3px 15px rgba(255, 87, 34, 0.565)";
                (_e = document
                    .querySelector(".line-height")) === null || _e === void 0 ? void 0 : _e.setAttribute("style", "line-height: 1.8;");
                break;
            case "classicBlue":
                educationHeading.style.color = "#0d47a1";
                experienceHeading.style.color = "#0d47a1";
                skillsHeading.style.color = "#0d47a1";
                profilePicture.style.borderColor = "#0d47a1";
                profilePicture.style.boxShadow =
                    "2px 3px 15px rgba(13, 71, 161, 0.565)";
                (_f = document
                    .querySelector(".line-height")) === null || _f === void 0 ? void 0 : _f.setAttribute("style", "line-height: 1.8;");
                break;
        }
    }
}
// Function to make content editable
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.setAttribute("contenteditable", "true");
    });
}
