document.addEventListener("DOMContentLoaded", () => {
    const teamMembers = document.querySelectorAll(".team-member");

    teamMembers.forEach(member => {
        member.addEventListener("mouseenter", () => {
            member.style.boxShadow = "0px 0px 15px rgba(255, 255, 255, 0.8)";
        });

        member.addEventListener("mouseleave", () => {
            member.style.boxShadow = "none";
        });
    });
});
